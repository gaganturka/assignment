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
import * as bankAccountActions from "../Services/Actions/BankAccountActions";
import FieldError from "./FieldError";
import { toast } from "react-toastify";
import Creatable from "react-select/creatable";
import * as commonActions from "../Services/Actions/CommonActions";

export const BankAccountFormModal = (props) => {
  //State VAriables
  const [value, setValue] = useState("");
  const [modelFields, setModelFields] = useState({
    accountHolder: "",
    accountNumber: "",
    bank: "",
    address: "",
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


  const schema = {
    accountHolder: Joi.string().alphanum().min(2).max(30).required(),
    accountNumber: Joi.string().min(14).max(14).required(),
    bank: Joi.string().required(),
    address: Joi.string().required(),
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
    updateModelFieldValue("countryCode", event.value);
    updateModelFieldValue("country", event.label);
    setSelectedCountry(event);
    if (event.__isNew__ == undefined) {
      loadStates();
    }
  };

  const handleStateChange = async (event) => {
    updateModelFieldValue("stateCode", event.value);
    updateModelFieldValue("state", event.label);
    setSelectedState(event);
    if (event.__isNew__ == undefined) {
      loadCities();
    }
  };

  const handleCityChange = async (event) => {
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
      let result = null;
      delete modelFields.countryCode;
      delete modelFields.stateCode;
      if (modelFields._id === undefined) {
        result = bankAccountActions.create(modelFields);
      } else {
        result = bankAccountActions.update(modelFields._id, modelFields);
      }
      result
        .then((res) => {
          toast("Bank Account has been saved");
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
        });
    } else {
      setErrors(errors);
      hideLoading();
    }
    setLoading(false);
  };

  const clearModelFields = () => {
    setModelFields({});
  };

  const closeThisModal = (thingsChanged = false) => {
    closeModal("bankAccountFormModal");
    setModelFields({});
    setErrors({});
    setSelectedCountry(null);
    setSelectedState(null);
    setSelectedCity(null);
    props.onClose(thingsChanged);
  };

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
        matchedCountry = {
          label: modelFields.country,
          value: modelFields.country,
        };
      } else {
        updateModelFieldValue("countryCode", matchedCountry.value);
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
        matchedState = { label: modelFields.state, value: modelFields.state };
      } else {
        updateModelFieldValue("stateCode", matchedState.value);
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
        matchedCity = { label: modelFields.city, value: modelFields.city };
      }
      setSelectedCity(matchedCity);
    }
  }, [modelFields]);

  useEffect(() => {
    if (props.formModel) {
      setModelFields(props.formModel);
    }
  });

  return (
    <>
      <div
        className="modal fade"
        id="bankAccountFormModal"
        tabIndex="-1"
        aria-labelledby="bankAccountFormModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bankAccountFormModal">
                Add Bank Account
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
              <div className="formFields">
                <div className="row">
                  <div className="6 col-6">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Account Holder</label>
                      <input
                        type="text"
                        className="form-control"
                        id="accountHolder"
                        name="accountHolder"
                        value={modelFields.accountHolder || ""}
                        onChange={handleChange}
                        placeholder="Account Holder"
                      />
                      <FieldError error={errors.accountHolder} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Account Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="accountNumber"
                        name="accountNumber"
                        value={modelFields.accountNumber || ""}
                        onChange={handleChange}
                        placeholder="Account Number"
                      />
                      <FieldError error={errors.accountNumber} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Bank</label>
                      <input
                        type="text"
                        className="form-control"
                        id="bank"
                        name="bank"
                        value={modelFields.bank || ""}
                        onChange={handleChange}
                        placeholder="Bank"
                      />
                      <FieldError error={errors.bank} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="12 col-12">
                    <div className="formFieldWrapper">
                      <label htmlFor="name">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={modelFields.address || ""}
                        onChange={handleChange}
                        placeholder="Address"
                      />
                      <FieldError error={errors.address} />
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
