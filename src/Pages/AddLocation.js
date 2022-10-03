import { TailSpin } from "react-loader-spinner";
import { React, useEffect, useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { CustomSelect } from "../Componenets/CustomSelect";
import FieldError from "../Componenets/FieldError";
import * as commonActions from "../Services/Actions/CommonActions";
import { ToastContainer, toast } from "react-toastify";
import employeeActions from "../Services/Actions/EmployeeActions"
import {Link, useNavigate, useParams} from "react-router-dom";
import {
  closeModal,
  formatDate,
  handleRequestError,
  formatToInputTypeDate,
  hideLoading,
  openModal,
  showLoading,
  validateJOIFormField,
  validateJOIProperty,
} from "../Utils/Helpers";
import * as Joi from "joi-browser";
import Creatable from "react-select/creatable";
import * as roleActions from "../Services/Actions/RoleActions";
import * as locationActions from "../Services/Actions/LocationActions";


const AddLocation = () => {
    const navigate = useNavigate()

  //State VAriables
  const [value, setValue] = useState("");
  const [modelFields, setModelFields] = useState({
    address1: "",
    address2: ""
  });
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(null);

  console.log('Model = ', modelFields);

  const schema = {
    name: Joi.string().min(3).required(),
    address1: Joi.string().min(3).required(),
    address2: Joi.string().min(3).required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
  };

  useEffect(() => {
    loadCountries();
  }, []);

  const updateModelFieldValue = (name, value) => {
    modelFields[name] = value;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateJOIProperty(schema, event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    updateModelFieldValue(name, value);
    setErrors(errorData);
  };

  const loadCountries = () => {
    commonActions
      .countries()
      .then((res) => {
        let countriesData = [];
        for (let country of res) {
          countriesData.push({
            value: country.isoCode,
            label: country.name,
          });
        }
        setCountries(countriesData);
        countriesData = null;
      })
      .catch((error) => {
        handleRequestError(error);
      });
  };

  const loadStates = () => {
    commonActions
      .states(modelFields.countryCode)
      .then((res) => {
        let statesData = [];
        for (let state of res) {
          statesData.push({
            value: state.isoCode,
            label: state.name,
          });
        }
        setStates(statesData);
        statesData = null;
      })
      .catch((error) => {
        handleRequestError(error);
      });
  };

  const loadCities = () => {
    commonActions
      .cities(modelFields.countryCode, modelFields.stateCode)
      .then((res) => {
        console.log('CITY RESPONSE == ', res)
        let citiesData = [];
        for (let city of res) {
          citiesData.push({
            value: city.name,
            label: city.name,
          });
        }
        setCities(citiesData);
        citiesData = null;
      })
      .catch((error) => {
        handleRequestError(error);
      });
  };



  const handleCountryChange = async (event) => {
    console.log('EVENTT == ', event);
    updateModelFieldValue("countryCode", event.value);
    updateModelFieldValue("country", event.label);
    setSelectedCountry(event);
    if (event.__isNew__ == undefined) {
      loadStates();
    }
  };

  const handleStateChange = async (event) => {
    console.log('STATE EVENTT == ', event);
    updateModelFieldValue("stateCode", event.value);
    updateModelFieldValue("state", event.label);
    setSelectedState(event);
    if (event.__isNew__ == undefined) {
      loadCities();
    }
  };

  const handleCityChange = async (event) => {
    console.log('CITY EVENTT == ', event);

    setSelectedCity(event);
    updateModelFieldValue("city", event.label);
  };

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };



  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    let errors = validateJOIFormField(modelFields, schema);
        if (errors == null) {
            console.log('MODAL fIELDS = ', modelFields)
            let updatedModelFields = {
                name: modelFields.name,
                address1: modelFields.address1,
                address2: modelFields.address2,
                city: modelFields.city,
                country: modelFields.country,
                state: modelFields.state,
                zipcode: modelFields.zipcode
            }
            // showLoading();
            locationActions.create(updatedModelFields)
                .then((res) => {
                    toast('Location has been saved');
                    hideLoading();
                    navigate('/manageEmployee');
                })
                .catch((error) => {
                    handleRequestError(error);
                    hideLoading();
                })
        }else {
            for (let error in errors) {
                toast(errors[error]);
            }
            setErrors(errors);
            hideLoading();
        }
        setLoading(false);
  }

  return (
    <>
    <ToastContainer />
      {loading ? (
        <div className="custm-loader">
          <TailSpin color="#000" height={200} width={200} />
        </div>
      ) : null}
      <section className="admin-wrapper">
        <div className="admin-content-wrapper">
          <div className="admin-title-header mt-0">
            <div className="row">
              <div className="col-lg-9">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Add Location</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="basic-info-wrp">
                <div className="admin-white-box p-0">
                  <div className="basic-info-header">
                    <h5>Add new Location</h5>
                  </div>

                  <div className="form-feilds-container">
                  <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Name</h3>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={modelFields.name || ""}
                              onChange={handleChange}
                              placeholder="Name"
                            />
                            <FieldError error={errors.streetNo} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Address 1</h3>
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
                              placeholder="Address1"
                            />
                            <FieldError error={errors.streetNo} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Address 2</h3>
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
                              placeholder="Address2"
                            />
                            <FieldError error={errors.streetNo} />
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
                              <Creatable
                                onChange={handleCountryChange}
                                placeholder="Select Country"
                                value={selectedCountry}
                                options={countries}
                              />
                            </div>
                            <FieldError error={errors.country} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>State , city </h3>
                        </div>

                        <div className="col-lg-2">
                          <div className="form-group">
                            <div className="react-select">
                              <Creatable
                                onChange={handleStateChange}
                                placeholder="Select State"
                                value={selectedState}
                                options={states}
                              />
                            </div>
                            <FieldError error={errors.state} />
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="form-group">
                            <div className="react-select">
                              <Creatable
                                onChange={handleCityChange}
                                placeholder="Select City"
                                value={selectedCity}
                                options={cities}
                              />
                            </div>
                            <FieldError error={errors.city} />
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
                            <FieldError error={errors.zipCode} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-fields-row mb-5">
                    <div className="row">
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3">
                        <button className="btn btn-grey-common" type="submit" onClick={submit}>
                          Add Location
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
  );
};

export default AddLocation;
