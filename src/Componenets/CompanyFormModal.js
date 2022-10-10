import {useEffect, useState} from "react";
import {
    closeModal,
    handleRequestError,
    hideLoading,
    showLoading,
    validateJOIFormField,
    validateJOIProperty
} from "../Utils/Helpers";

import * as Joi from 'joi-browser';

import * as companyActions from '../Services/Actions/CompanyActions';

import FieldError from "./FieldError";
import {toast} from "react-toastify";
import * as commonActions from "../Services/Actions/CommonActions";
import Creatable from "react-select/creatable";

export const CompanyFormModal = (props) => {

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [modelFields, setModelFields] = useState({
        name: "",
        email: "",
        website: "",
        mobileNo: "",
        landLineNo: "",
        faxNumber: "",
        address1: "",
        address2: "",
        notes: "",
        country: "",
        countryCode: "",
        state: "",
        stateCode: "",
        city: ""
    });

    const [errors, setErrors] = useState({});

    const schema = {
        name: Joi.string().min(3).required(),
    };

    const updateModelFieldValue = (name, value) => {
        modelFields[name] = value;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        let errorData = {...errors};
        const errorMessage = validateJOIProperty(schema, event);
        if (errorMessage) {
            errorData[name] = errorMessage;
        } else {
            delete errorData[name];
        }
        updateModelFieldValue(name, value);
        setErrors(errorData);
    };

    const clearModelFields = () => {
        setModelFields({});
    };

    const submit = (event) => {
        event.preventDefault();
        let errors = validateJOIFormField(modelFields, schema);
        if (errors == null) {
            showLoading();
            let request = null;
            if (modelFields._id === undefined) {
                request = companyActions.create(modelFields);
            } else {
                request = companyActions.update(modelFields._id, modelFields);
            }
            request.then((res) => {
                toast('Company has been saved');
                hideLoading();
                clearModelFields();
                closeThisModal(true);
            }).catch((error) => {
                handleRequestError(error);
                hideLoading();
            });
        } else {
            setErrors(errors);
            hideLoading();
        }
    };

    const closeThisModal = (thingsChanged = false) => {
        closeModal("companyFormModal");
        props.onClose(thingsChanged);
    }

    useEffect(() => {
        if (props.formModel) {
            setModelFields(props.formModel);
        }
    })

    useEffect(() => {
        setSelectedCountry(null);
        setSelectedState(null);
        setSelectedCity(null);
        if (modelFields.country) {
            let matchedCountry = null;
            for (let country of countries) {
                if (country.label === modelFields.country) {
                    matchedCountry = country;
                }
            }
            if (matchedCountry == null) {
                matchedCountry = {label: modelFields.country, value: modelFields.country};
            } else {
                updateModelFieldValue('countryCode', matchedCountry.value);
                loadStates();
            }
            setSelectedCountry(matchedCountry);
        }
        if (modelFields.state) {
            let matchedState = null;
            for (let state of states) {
                if (state.label === modelFields.state) {
                    matchedState = state;
                }
            }
            if (matchedState == null) {
                matchedState = {label: modelFields.state, value: modelFields.state};
            } else {
                updateModelFieldValue('stateCode', matchedState.value);
                loadCities();
            }
            setSelectedState(matchedState);
        }
        if (modelFields.city) {
            let matchedCity = null;
            for (let city of cities) {
                if (city.label === modelFields.city) {
                    matchedCity = city;
                }
            }
            if (matchedCity == null) {
                matchedCity = {label: modelFields.city, value: modelFields.city};
            }
            setSelectedCity(matchedCity);
        }
    }, [modelFields])

    useEffect(() => {
        loadCountries();
    }, [])

    const loadCountries = () => {
        commonActions.countries().then((res) => {
            let countriesData = [];
            for (let country of res) {
                countriesData.push({
                    value: country.isoCode,
                    label: country.name
                });
            }
            setCountries(countriesData);
            countriesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadStates = () => {
        commonActions.states(modelFields.countryCode).then((res) => {
            let statesData = [];
            for (let state of res) {
                statesData.push({
                    value: state.isoCode,
                    label: state.name
                });
            }
            setStates(statesData);
            statesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCities = () => {
        commonActions.cities(modelFields.countryCode, modelFields.stateCode).then((res) => {
            let citiesData = [];
            for (let city of res) {
                citiesData.push({
                    value: city.name,
                    label: city.name
                });
            }
            setCities(citiesData);
            citiesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const handleCountryChange = async (event) => {
        updateModelFieldValue('countryCode', event.value);
        updateModelFieldValue('country', event.label);
        setSelectedCountry(event);
        if (event.__isNew__ == undefined) {
            loadStates();
        }
    }

    const handleStateChange = async (event) => {
        updateModelFieldValue('stateCode', event.value);
        updateModelFieldValue('state', event.label);
        setSelectedState(event);
        if (event.__isNew__ == undefined) {
            loadCities();
        }
    }

    const handleCityChange = async (event) => {
        setSelectedCity(event);
        updateModelFieldValue('city', event.label);
    }

    return (
        <>
            <div className="modal fade" id="companyFormModal" tabIndex="-1"
                 aria-labelledby="companyFormModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"
                                id="companyFormModalLabel">{modelFields._id ? 'Update Company' : 'Add New Company'}</h5>
                            <button onClick={(e) => closeThisModal()} type="button" className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="formFields">

                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="name">Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                value={modelFields.name || ""}
                                                name="name"
                                                onChange={handleChange}
                                                placeholder="Company Name"
                                            />
                                            <FieldError error={errors.name}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="email"
                                                value={modelFields.email || ""}
                                                name="email"
                                                onChange={handleChange}
                                                placeholder="info@company.com"
                                            />
                                            <FieldError error={errors.email}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="formFieldWrapper">
                                    <label htmlFor="website">Website</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="website"
                                        name="website"
                                        value={modelFields.website || ""}
                                        onChange={handleChange}
                                        placeholder="https://www.company.com"
                                    />
                                    <FieldError error={errors.website}/>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="mobileNo">Mobile No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="mobileNo"
                                                value={modelFields.mobileNo || ""}
                                                name="mobileNo"
                                                onChange={handleChange}
                                                placeholder="Mobile No."
                                            />
                                            <FieldError error={errors.mobileNo}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="landlineNo">Landline No.</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="landLineNo"
                                                name="landLineNo"
                                                value={modelFields.landLineNo || ""}
                                                onChange={handleChange}
                                                placeholder="Company Landline No."
                                            />
                                            <FieldError error={errors.landLineNo}/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="faxNumber">Fax No.</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="faxNumber"
                                                name="faxNumber"
                                                value={modelFields.faxNumber || ""}
                                                onChange={handleChange}
                                                placeholder="Fax No."
                                            />
                                            <FieldError error={errors.faxNumber}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="formFieldWrapper">
                                    <label htmlFor="address1">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address1"
                                        name="address1"
                                        value={modelFields.address1 || ""}
                                        onChange={handleChange}
                                        placeholder="Street No, Block No."
                                    />
                                    <FieldError error={errors.address1}/>
                                </div>

                                <div className="formFieldWrapper">
                                    <label htmlFor="address2">Address 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address2"
                                        name="address2"
                                        value={modelFields.address2 || ""}
                                        onChange={handleChange}
                                        placeholder="Area"
                                    />
                                    <FieldError error={errors.address2}/>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="country">Country</label>
                                            <div className="react-select">
                                                <Creatable onChange={handleCountryChange}
                                                           value={selectedCountry}
                                                           options={countries}/>
                                            </div>
                                            <FieldError error={errors.country}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="state">State</label>
                                            <div className="react-select">
                                                <Creatable onChange={handleStateChange}
                                                           value={selectedState}
                                                           options={states}/>
                                            </div>
                                            <FieldError error={errors.state}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="city">City</label>
                                            <div className="react-select">
                                                <Creatable onChange={handleCityChange}
                                                           value={selectedCity}
                                                           options={cities}/>
                                            </div>
                                            <FieldError error={errors.city}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="formFieldWrapper">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="zipcode"
                                                name="zipcode"
                                                value={modelFields.zipcode || ""}
                                                onChange={handleChange}
                                                placeholder="Zipcode"
                                            />
                                            <FieldError error={errors.zipCode}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="formFieldWrapper">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea name="notes" id="notes" placeholder="Private Notes" cols="30"
                                              className="form-control"
                                              onChange={handleChange}
                                              value={modelFields.notes || ""}
                                              rows="5"/>
                                    <FieldError error={errors.notes}/>
                                </div>

                                <div className="formSubmitWrapper">
                                    <button type="button" className="btn btn-grey-common w-100"
                                            onClick={submit}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};
