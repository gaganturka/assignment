import React, {useEffect, useMemo, useState} from "react";

import {
    closeModal, formatDate,
    handleRequestError,
    formatToInputTypeDate,
    hideLoading,
    openModal,
    showLoading, validateJOIFormField,
    validateJOIProperty
} from "../Utils/Helpers";

import {toast} from "react-toastify";
import * as commonActions from "../Services/Actions/CommonActions";
import * as contactGroupActions from "../Services/Actions/ContactGroupActions";
import Select from "react-select";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as Joi from "joi-browser";

import * as contactActions from "../Services/Actions/ContactActions";
import * as companyActions from "../Services/Actions/CompanyActions";
import FieldError from "../Componenets/FieldError";
import {ContactGroupFormModal} from "../Componenets/ContactGroupFormModal";
import {CompanyFormModal} from "../Componenets/CompanyFormModal";
import Creatable from "react-select/creatable";

export const Client = (props) => {
    const navigate = useNavigate();

    const {modelId} = useParams();

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [contactTypes, setContactTypes] = useState([]);
    const [contactGroups, setContactGroups] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedContactType, setSelectedContactType] = useState(null);
    const [selectedContactGroup, setSelectedContactGroup] = useState(null);
    const [selectedCompany, setSelectedCompany] = useState(null);

    const [modelFields, setModelFields] = useState({
        contactType: "",
        firstName: "",
        lastName: "",
    });

    const [errors, setErrors] = useState({});

    const schema = {
        contactType: Joi.string().required(),
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
    };

    const updateModelFieldValue = (name, value) => {
        modelFields[name] = value;
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        let errorData = {...errors};
        console.log('ERROR DATA = ', errorData);
        const errorMessage = validateJOIProperty(schema, event);
        console.log('ERROR MESSAGE = ', errorMessage);

        if (errorMessage) {
            errorData[name] = errorMessage;
        } else {
            delete errorData[name];
        }
        updateModelFieldValue(name, value);
        setErrors(errorData);
    };

    const submit = (event) => {
        event.preventDefault();
        let errors = validateJOIFormField(modelFields, schema);
        if (errors == null) {
            showLoading();
            let request = null;
            console.log('MODAL FIELDS = ', modelFields);
            if (modelId === undefined) {
                request = contactActions.create(modelFields);
            } else {
                request = contactActions.update(modelId, modelFields);
            }
            request.then((res) => {
                toast('Client has been saved');
                hideLoading();
                navigate('/clients');
            }).catch((error) => {
                handleRequestError(error);
                hideLoading();
            });
        } else {
            setErrors(errors);
            hideLoading();
        }
    };

    const selectDefaultValues = () => {
        setSelectedCountry(null);
        setSelectedState(null);
        setSelectedCity(null);
        setSelectedContactType(null);
        setSelectedContactGroup(null);
        setSelectedCompany(null);

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
        if (modelFields.contactType) {
            let matchedContactType = null;
            for (let contactType of contactTypes) {
                if (contactType.label === modelFields.contactType) {
                    matchedContactType = contactType;
                }
            }
            if (matchedContactType == null) {
                matchedContactType = {label: modelFields.contactType, value: modelFields.contactType};
            }
            setSelectedContactType(matchedContactType);
        }
        if (modelFields.firmContactGroupId) {
            let matchedContactGroup = null;
            for (let contactGroup of contactGroups) {
                if (contactGroup.value === modelFields.firmContactGroupId) {
                    matchedContactGroup = contactGroup;
                }
            }
            if (matchedContactGroup == null) {
                matchedContactGroup = {label: modelFields.firmContactGroupId, value: modelFields.firmContactGroupId};
            }
            setSelectedContactGroup(matchedContactGroup);
        }
        if (modelFields.firmCompanyId) {
            let matchedCompany = null;
            for (let company of companies) {
                if (company.value === modelFields.firmCompanyId) {
                    matchedCompany = company;
                }
            }
            if (matchedCompany == null) {
                matchedCompany = {label: modelFields.firmCompanyId, value: modelFields.firmCompanyId};
            }
            setSelectedCompany(matchedCompany);
        }
    }

    useEffect(() => {
        selectDefaultValues();
    }, [
        modelFields
    ]);

    useEffect(() => {
        loadCountries();
        loadCompanies();
        loadContactTypes();
        loadContactGroups();
    }, []);

    useEffect(() => {
        if (modelId !== undefined) {
            showLoading();
            contactActions.view(modelId).then(res => {
                hideLoading();
                setModelFields(res);
            }).catch(err => {
                toast('Failed to load');
                hideLoading();
                navigate('/clients');
            });
        }
    }, [modelId]);

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

    const handleContactTypeChange = async (event) => {
        setSelectedContactType(event);
        updateModelFieldValue('contactType', event.label);
    }

    const handleContactGroupChange = async (event) => {
        setSelectedContactGroup(event);
        updateModelFieldValue('firmContactGroupId', event.value);
    }

    const handleCompanyChange = async (event) => {
        setSelectedCompany(event);
        updateModelFieldValue('firmCompanyId', event.value);
    }

    const loadContactTypes = () => {
        commonActions.contactTypes().then((res) => {
            let contactTypesData = [];
            for (let contactType of res) {
                contactTypesData.push({
                    value: contactType,
                    label: contactType
                });
            }
            setContactTypes(contactTypesData);
            contactTypesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadContactGroups = () => {
        contactGroupActions.getAll().then((res) => {
            let contactGroupsData = [];
            for (let contactGroup of res.docs) {
                contactGroupsData.push({
                    value: contactGroup._id,
                    label: contactGroup.name
                });
            }
            setContactGroups(contactGroupsData);
            contactGroupsData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCompanies = () => {
        companyActions.getAll().then((res) => {
            let companiesData = [];
            for (let company of res.docs) {
                companiesData.push({
                    value: company._id,
                    label: company.name
                });
            }
            setCompanies(companiesData);
            companiesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const newContactGroup = () => {
        openModal("contactGroupFormModal");
    }

    const newCompany = () => {
        openModal("companyFormModal");
    }

    const companyModalClosed = (thingsChanged) => {
        if (thingsChanged) {
            loadCompanies();
        }
    }

    const contactGroupFormModalClosed = (thingsChanged) => {
        if (thingsChanged) {
            loadContactGroups();
        }
    }

    return (
        <>
            <ContactGroupFormModal onClose={contactGroupFormModalClosed}/>
            <CompanyFormModal onClose={companyModalClosed}/>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>{modelId ? 'Update Client' : 'Add New Client'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/clients/`}>
                                            <button
                                                className="btn"
                                                type="button">
                                                Back
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="basic-info-wrp formFields">
                                <div className="admin-white-box formFieldsWrapper p-0">

                                    <div className="form-fields-row mt-3">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <h3>Contact Type</h3>
                                            </div>

                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <div className="react-select">
                                                        <Select
                                                            placeholder="Select Contact Type"
                                                            isClearable={true}
                                                            onChange={handleContactTypeChange}
                                                            value={selectedContactType}
                                                            options={contactTypes}
                                                        />
                                                    </div>
                                                    <FieldError error={errors.contactType}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="basic-info-header">
                                        <h5>Basic Information</h5>
                                    </div>

                                    <div className="form-feilds-container">
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Client Name</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="firstName"
                                                            value={modelFields.firstName || ""}
                                                            name="firstName"
                                                            onChange={handleChange}
                                                            placeholder="First Name"
                                                        />
                                                        <FieldError error={errors.firstName}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="middleName"
                                                            value={modelFields.middleName || ""}
                                                            name="middleName"
                                                            onChange={handleChange}
                                                            placeholder="Middle Name"
                                                        />
                                                        <FieldError error={errors.middleName}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="lastName"
                                                            value={modelFields.lastName || ""}
                                                            name="lastName"
                                                            onChange={handleChange}
                                                            placeholder="Last Name"
                                                        />
                                                        <FieldError error={errors.lastName}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Email ID</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="email"
                                                            name="email"
                                                            value={modelFields.email || ""}
                                                            onChange={handleChange}
                                                            placeholder="Email Address"
                                                        />
                                                        <FieldError error={errors.email}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Contact Group</h3>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <Select
                                                                onChange={handleContactGroupChange}
                                                                placeholder="Select Contact Group"
                                                                value={selectedContactGroup}
                                                                options={contactGroups}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <a className="inputSameLink" onClick={newContactGroup} href={undefined}>Add new contact
                                                        group</a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <FieldError error={errors.contactGroup}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Contact details</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
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
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="alternativeMobileNo"
                                                            value={modelFields.alternativeMobileNo || ""}
                                                            name="alternativeMobileNo"
                                                            onChange={handleChange}
                                                            placeholder="Alternative Mobile No."
                                                        />
                                                        <FieldError error={errors.alternativeMobileNo}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
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
                                                <div className="col-lg-2">
                                                    <div className="form-group">
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
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Address</h3>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-group">
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
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-group">
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
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Country</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <Creatable onChange={handleCountryChange}
                                                                       placeholder="Select Country"
                                                                       value={selectedCountry}
                                                                       options={countries}/>
                                                        </div>
                                                        <FieldError error={errors.country}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>State , City </h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <Creatable onChange={handleStateChange}
                                                                       placeholder="Select State"
                                                                       value={selectedState}
                                                                       options={states}/>
                                                        </div>
                                                        <FieldError error={errors.state}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <Creatable onChange={handleCityChange}
                                                                       placeholder="Select City"
                                                                       value={selectedCity}
                                                                       options={cities}/>
                                                        </div>
                                                        <FieldError error={errors.city}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
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
                                        </div>
                                    </div>

                                    <div className="basic-info-header">
                                        <h5>Add more Information</h5>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Birth date</h3>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="dateOfBirth"
                                                        name="dateOfBirth"
                                                        value={formatToInputTypeDate(modelFields.dateOfBirth) || ""}
                                                        onChange={handleChange}
                                                        placeholder="Date of Birth"
                                                    />
                                                    <FieldError error={errors.dateOfBirth} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Company</h3>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <div className="react-select">
                                                        <Select
                                                            onChange={handleCompanyChange}
                                                            value={selectedCompany}
                                                            options={companies}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <a className="inputSameLink" onClick={newCompany} href={undefined}>Add New Company</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Job Title</h3>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="jobTitle"
                                                        name="jobTitle"
                                                        value={modelFields.jobTitle || ""}
                                                        onChange={handleChange}
                                                        placeholder="Job Title"
                                                    />
                                                    <FieldError error={errors.jobTitle}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Additional notes</h3>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <textarea name="notes" id="notes" placeholder="Private Notes"
                                                              cols="30"
                                                              className="form-control"
                                                              onChange={handleChange}
                                                              value={modelFields.notes || ""}
                                                              rows="5"/>
                                                    <FieldError error={errors.notes}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row mb-5">
                                        <div className="row">
                                            <div className="col-lg-3">
                                            </div>
                                            <div className="col-lg-3">
                                                <button onClick={submit} className="btn btn-grey-common"
                                                        type="submit">Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )

}
