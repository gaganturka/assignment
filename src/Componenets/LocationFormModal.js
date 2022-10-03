import { useEffect, useState, useMemo } from "react";
import {
  closeModal,
  handleRequestError,
  hideLoading,
  showLoading,
  validateJOIFormField,
  validateJOIProperty,
} from "../Utils/Helpers";

import * as Joi from "joi-browser";
import countryList from "react-select-country-list";
import * as locationActions from "../Services/Actions/LocationActions";


import * as contactGroupActions from "../Services/Actions/ContactGroupActions";

import FieldError from "./FieldError";
import { toast } from "react-toastify";
import Creatable from "react-select/creatable";
import * as commonActions from "../Services/Actions/CommonActions";



export const LocationFormModal = (props) => {
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
          clearModelFields();
                    setSelectedCountry(null);
                    setSelectedState(null);
                    setSelectedCity(null);
                    setErrors({});
                    closeThisModal(true);
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

  const clearModelFields = () => {
    setModelFields({});
  };

//   const submit = (event) => {
//     event.preventDefault();
//     let errors = validateJOIFormField(modelFields, schema);
//     if (errors == null) {
//       showLoading();
//       let request = null;
//       if (modelFields._id === undefined) {
//         request = contactGroupActions.create(modelFields);
//       } else {
//         request = contactGroupActions.update(modelFields._id, modelFields);
//       }
//       request
//         .then((res) => {
//           toast("Contact Group has been saved");
//           hideLoading();
//           clearModelFields();
//           closeThisModal(true);
//         })
//         .catch((error) => {
//           handleRequestError(error);
//           hideLoading();
//         });
//     } else {
//       setErrors(errors);
//       hideLoading();
//     }
//   };

  const closeThisModal = (thingsChanged = false) => {
    closeModal("locationFormModal");
  };

  useEffect(() => {
    if (props.formModel) {
      setModelFields(props.formModel);
    }
  });

  return (
    <>
      <div
        className="modal fade"
        id="locationFormModal"
        tabIndex="-1"
        aria-labelledby="locationFormModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="locationFormModal">
                Add Location
              </h5>
              <button
                onClick={(e) => closeThisModal()}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
                {/* form */}
              <div className="formFields">

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Name</label>
                      <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={modelFields.name || ""}
                              onChange={handleChange}
                              placeholder="Name"
                            />
                            <FieldError error={errors.name} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Address1</label>
                      <input
                              type="text"
                              className="form-control"
                              id="address1"
                              name="address1"
                              value={modelFields.address1 || ""}
                              onChange={handleChange}
                              placeholder="Address1"
                            />
                            <FieldError error={errors.address1} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Address2</label>
                      <input
                              type="text"
                              className="form-control"
                              id="address2"
                              name="address2"
                              value={modelFields.address2 || ""}
                              onChange={handleChange}
                              placeholder="Address2"
                            />
                            <FieldError error={errors.address2} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Country</label>
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

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">State</label>
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
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">City</label>
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
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Zipcode</label>
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

                {/* <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Name</label>
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
                      <FieldError error={errors.name} />
                    </div>
                  </div>
                </div> */}

                <div className="formSubmitWrapper">
                  <button
                    type="button"
                    className="btn btn-grey-common w-100"
                    onClick={submit}
                  >
                    Save
                  </button>
                </div>
                {/* form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
