import { TailSpin } from "react-loader-spinner";
import { React, useEffect, useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { CustomSelect } from "../Componenets/CustomSelect";
import FieldError from "../Componenets/FieldError";
import * as commonActions from "../Services/Actions/CommonActions";
import { ToastContainer, toast } from "react-toastify";
import employeeActions from "../Services/Actions/EmployeeActions";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const AddEmployee = () => {
  const navigate = useNavigate();

  //State VAriables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [area, setArea] = useState("");
  const [value, setValue] = useState("");
  const [modelFields, setModelFields] = useState({
    firstName: "",
    lastName: "",
  });
  const [cities, setCities] = useState([]);
  const [rolesOptions, setRolesOptions] = useState([]);
  const [employeeTypeOptions, setEmployeeTypeOptions] = useState([]);
  const [selectRoles, setSelectedRoles] = useState();
  const [selectEmployee, setSelectedEmployeeTypes] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [errors, setErrors] = useState({});
  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [employeeRoles, setEmployeeRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  const schema = {
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    ratePerHour: Joi.string().required(),
    dateOfBirth: Joi.string().required(),
    streetNo: Joi.string().required(),
    area: Joi.string().required(),
    country: Joi.string().required(),
    state: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.string().required(),
    firmEmployeeRoleId: Joi.string().hex().length(24).required(),
    firmEmployeeTypeId: Joi.string().hex().length(24).required(),
  };

  useEffect(() => {
    loadCountries();
    getEmployeeRoles();
    getEmployeeTypes();
  }, []);

  const getEmployeeRoles = () => {
    roleActions
      .getRolesOptions()
      .then((res) => {
        setRolesOptions(res);
      })
      .catch((err) => {
        toast("Failed to load");
      });
  };

  const getEmployeeTypes = () => {
    roleActions
      .getEmployeeTypes()
      .then((res) => {
        setEmployeeTypeOptions(res);
      })
      .catch((err) => {
        toast("Failed to load");
      });
  };

  const handleRoleChange = (event) => {
    setSelectedRoles(event);
    updateModelFieldValue("firmEmployeeRoleId", event);
  };

  const handleTypeChange = (event) => {
    setSelectedEmployeeTypes(event);
    updateModelFieldValue("firmEmployeeTypeId", event);
  };

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

  //   const updateModelFieldValue = (name, value) => {
  //     switch (name) {
  //         case 'clients':
  //             if (value.length <= 0) {
  //                 value = undefined;
  //             }
  //             break;
  //         case 'employees':
  //             if (Object.keys(value).length <= 0) {
  //                 value = undefined;
  //             }
  //             break;
  //     }
  //     if (value === undefined) {
  //         if (modelFields.hasOwnProperty(name)) {
  //             delete modelFields[name];
  //         }
  //     } else {
  //         modelFields[name] = value;
  //     }
  // }

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
      delete modelFields.countryCode;
      delete modelFields.stateCode;
      employeeActions
        .create(modelFields)
        .then((res) => {
          toast("Employee has been saved");
          hideLoading();
          navigate("/manage-employee");
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
                    <h3>Add Employee</h3>
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
                    <h5>Add new Employee</h5>
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
                              placeholder="First name"
                              name="firstName"
                              value={modelFields.firstName || ""}
                              onChange={handleChange}
                            />
                            <FieldError error={errors.firstName} />
                          </div>
                        </div>

                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last name"
                              name="lastName"
                              value={modelFields.lastName || ""}
                              onChange={handleChange}
                            />
                            <FieldError error={errors.lastName} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Email</h3>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter email"
                              name="email"
                              value={modelFields.email || ""}
                              onChange={handleChange}
                            />
                            <FieldError error={errors.email} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Rate Per Hour</h3>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Rate Per Hour"
                              name="ratePerHour"
                              value={modelFields.ratePerHour || ""}
                              onChange={handleChange}
                            />
                            <FieldError error={errors.ratePerHour} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Birth Date</h3>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="date"
                              className="form-control"
                              id="dateOfBirth"
                              name="dateOfBirth"
                              value={
                                formatToInputTypeDate(
                                  modelFields.dateOfBirth
                                ) || ""
                              }
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
                          <h3>Address</h3>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="streetNo"
                              name="streetNo"
                              value={modelFields.streetNo || ""}
                              onChange={handleChange}
                              placeholder="Street No, Block No."
                            />
                            <FieldError error={errors.streetNo} />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="area"
                              name="area"
                              value={modelFields.area || ""}
                              onChange={handleChange}
                              placeholder="Area"
                            />
                            <FieldError error={errors.area} />
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

                        {/* <div className="col-lg-2">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Zip code"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="State"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                        </div> */}
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
                            <FieldError error={errors.zipcode} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="basic-info-header">
                    <h5>Employee Role</h5>
                  </div>

                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-3">
                        <h3>Employee role</h3>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <CustomSelect
                            isMulti={false}
                            placeholder="Select Role"
                            isClearable={true}
                            onChange={handleRoleChange}
                            value={selectRoles}
                            options={rolesOptions}
                          />
                          <FieldError error={errors.firmEmployeeRoleId} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="basic-info-header">
                    <h5>Employee Type</h5>
                  </div>

                  <div className="form-fields-row">
                    <div className="row">
                      <div className="col-lg-3">
                        <h3>Employee type</h3>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <CustomSelect
                            isMulti={false}
                            placeholder="Select Type"
                            isClearable={true}
                            onChange={handleTypeChange}
                            value={selectEmployee}
                            options={employeeTypeOptions}
                          />
                          <FieldError error={errors.firmEmployeeTypeId} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-fields-row mb-5">
                    <div className="row">
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3">
                        <button
                          className="btn btn-grey-common"
                          type="submit"
                          onClick={submit}
                        >
                          Add Employee
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

export default AddEmployee;
