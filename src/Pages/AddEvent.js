import { TailSpin } from "react-loader-spinner";
import { React, useEffect, useState } from "react";
import * as caseActions from "../Services/Actions/CaseActions";
import employeeActions from "../Services/Actions/EmployeeActions";
import * as locationActions from "../Services/Actions/LocationActions";
import * as eventActions from "../Services/Actions/EventActions";
import { Link, resolvePath, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {LocationFormModal} from "../Componenets/LocationFormModal";

import Select from "react-select";
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
import { FirmLocationFormModal } from "../Componenets/LocationFormModal";
import { array } from "joi";

const AddEvent = () => {
  //State VAriables
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [disable, setDisable] = useState(false);
  const [firmEmployees, setFirmEmployees] = useState([]);
  const [selectedFirmEmployees, setSelectedFirmEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modelFields, setModelFields] = useState({
    eventName: "",
    startTime: "00:00",
    endTime: "00:00",
    repeatType: "",
    repeatDuration: 1,
    days: [],
    repeatEndedOn: null
  });
  const [errors, setErrors] = useState({});
  const [model, setModel] = useState(null);
  const [locations, setLocations] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedStartTime, setSelectedStartTime] = useState("00:00");
  const [allDayDisable, setAllDayDisable] = useState(false);
  const [eventRepeatDisable, setEventRepeatDisable] = useState(false);
  const [noEndDateDisable, setNoEndDateDisable] = useState(false);
  const [selectEventRepeat, setSelectEventRepeat] = useState(null);
  const [days, setDays] = useState([]);
  const [openModel, setOpenModel] = useState(false);

  const eventRepeatOptions = [
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Yearly", value: "Yearly" },
  ];

  console.log("MODEL FIELDS = ", modelFields);

  const history = useNavigate();

  useEffect(() => {
    getAllCases();
    getAllFirmEmployees();
    getLocations();
  }, []);

  useEffect(() => {
    if (allDayDisable) {
      updateModelFieldValue("startTime", modelFields.startTime);
      updateModelFieldValue("endTime", modelFields.endTime);
    }
  }, [allDayDisable]);

  useEffect(() => {
    updateModelFieldValue("isRepeated", eventRepeatDisable);
  }, [eventRepeatDisable]);

  useEffect(() => {
    modelFields.days = days;
  }, [days])

  useEffect(() => {
    if(disable) {
        if(modelFields.caseId) {
            delete modelFields.caseId;
        }
    }
  }, [disable])

  const schema = {
    eventName: Joi.string().min(3).required(),
  };

  const getAllCases = () => {
    caseActions
      .get()
      .then((res) => {
        let casesData = [];
        for (let casee of res.docs) {
          casesData.push({
            label: casee.caseName,
            value: casee._id,
          });
        }
        setCases(casesData);
        casesData = null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllFirmEmployees = () => {
    employeeActions
      .get()
      .then((res) => {
        let employeeData = [];
        for (let employee of res.list) {
          employeeData.push({
            label: employee.userId.firstName + " " + employee.userId.lastName,
            value: employee._id,
          });
        }
        setFirmEmployees(employeeData);
        employeeData = null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLocations = () => {
    locationActions
      .get()
      .then((res) => {
        let locationData = [];
        for (let location of res) {
          locationData.push({
            label: location.name,
            value: location._id,
          });
        }
        setLocations(locationData);
        locationData = null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCaseDisable = (event) => {
    setDisable(!disable);
  };

  const handleAllDayDisable = (event) => {
    setAllDayDisable(!allDayDisable);
  };

  const handleEventRepeatDisable = (event) => {
    setEventRepeatDisable(!eventRepeatDisable);
  };

  const handleNoEndDate = (event) => {
    setNoEndDateDisable(!noEndDateDisable);
    updateModelFieldValue('repeatEndedOn', null);
  }


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

  const handleCaseChange = (event) => {
    setSelectedCase(event);
    updateModelFieldValue("caseId", event.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event);
    updateModelFieldValue("location", event.value);
  };

  const handleEmployeesChange = (event) => {
    setSelectedFirmEmployees(event);
    let employeesData = [];
    for (let employee of event) {
      employeesData.push(employee.value);
    }
    updateModelFieldValue("firmEmployees", employeesData);
    employeesData = null;
  };

  const handleRepeatChange = (event) => {
    setSelectEventRepeat(event);
    updateModelFieldValue("repeatType", event.label);
  };


  const handleRepeatDaysChange = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setDays([...days, event.target.value]);
    } else {
      if (days.includes(event.target.value)) {
        let i = 0;
        while (i < days.length) {
          if (days[i] === event.target.value) {
            days.splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  };

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    eventActions.create(modelFields)
        .then((res) => {
            console.log(res);
            toast("Event Added!");
                setLoading(false);
            history("/events");
        })
        .catch((err) => {
            console.log(err);
        })
  }

  const openFormModal = async () => {
    // setOpenModel(true);
    openModal("locationFormModal");

}

  const handleNew = () => {
    setModel({});
    openFormModal();
}

const formModelClosed = () => {
    setOpenModel(false);
}

  //   const getModels = async (pageNumber = 1) => {
  //     showLoading();
  //     contactGroupActions.get({
  //         search: searchedTerm,
  //         page: pageNumber
  //     }).then(res => {
  //         setPaginationData(res);
  //         hideLoading();
  //     }).catch(err => {
  //         toast('Failed to load');
  //         hideLoading();
  //     });
  // };

  //   const formModelClosed = (thingsChanged) => {
  //     if (thingsChanged) {
  //         getModels();
  //     }
  // }

  return (
    <>
        <ToastContainer />
      {loading ? (
        <div className="custm-loader">
          <TailSpin color="#000" height={200} width={200} />
        </div>
      ) : null}
      {/* {
        openModel ?  <LocationFormModal formModel={model} onClose={formModelClosed}/> : ""
      } */}

<LocationFormModal formModel={model} /> 
       

      {/* <FirmLocationFormModal formModel={model} onClose={formModelClosed}/> */}
      <section className="admin-wrapper">
        <div className="admin-content-wrapper">
          <div className="admin-title-header mt-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="">
                  <div className="admin-title-flex">
                    <h3>Add Event</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="admin-short-nav-buttons">
                  <div className="table-btn-group">
                    <a href="time-exp.html">
                      <button className="btn " type="button">
                        Back
                      </button>
                    </a>
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
                    <h5>Add Event</h5>
                  </div>
                  <div className="form-feilds-container">
                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Case or Lead</h3>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <Select
                              value={selectedCase}
                              options={cases}
                              onChange={handleCaseChange}
                              isDisabled={disable}
                            />
                          </div>
                          <div className="form-check form-switch mt-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              onChange={handleCaseDisable}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              This case is not linked to this case
                            </label>
                          </div>
                          {disable ? (
                            <div className="form-group">
                              <Select
                                value={selectedFirmEmployees}
                                options={firmEmployees}
                                onChange={handleEmployeesChange}
                                isMulti={true}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Event Name</h3>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Enter event name"
                              name="eventName"
                              value={modelFields.eventName || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Start</h3>
                        </div>
                        <div className="col-lg-2">
                          <div className="filter-input-box ">
                            <input
                              type="date"
                              name="startDate"
                              className="form-control"
                              placeholder="DD-MM-YYYY"
                              value={
                                formatToInputTypeDate(modelFields.startDate) ||
                                ""
                              }
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-2">
                          <div className="filter-input-box">
                            <input
                              type="time"
                              name="startTime"
                              className="form-control"
                              placeholder=""
                              value={modelFields.startTime || ""}
                              onChange={handleChange}
                              disabled={allDayDisable}
                            />
                          </div>
                        </div>

                        <div className="col-lg-2">
                          <div className="form-check form-switch mt-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              onChange={handleAllDayDisable}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              All day
                            </label>
                          </div>
                        </div>

                        <div className="col-lg-2">
                          <div className="form-check form-switch mt-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                              //   isDisabled={allDayDisable}
                              onChange={handleEventRepeatDisable}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              This Event Repeats
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>End</h3>
                        </div>
                        <div className="col-lg-2">
                          <div className="filter-input-box ">
                            <input
                              type="date"
                              name="endDate"
                              className="form-control"
                              placeholder="DD-MM-YYYY"
                              value={
                                formatToInputTypeDate(modelFields.endDate) || ""
                              }
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-lg-2">
                          <div className="filter-input-box">
                            <input
                              type="time"
                              name="endTime"
                              className="form-control"
                              placeholder=""
                              value={modelFields.endTime || ""}
                              onChange={handleChange}
                              disabled={allDayDisable}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {eventRepeatDisable ? (
                      <div>
                        <div className="form-fields-row">
                          <div className="row">
                            <div className="col-lg-3">
                              <h3></h3>
                            </div>
                            <div className="col-lg-4">
                              <div className="form-group">
                                <Select
                                  value={selectEventRepeat}
                                  placeholder={"Select Repeat"}
                                  options={eventRepeatOptions}
                                  onChange={handleRepeatChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {modelFields.repeatType === "Daily" && eventRepeatDisable ? (
                      <div className="form-fields-row">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-2">
                            <p>Repeat Every</p>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group">
                              {/* <input type="number" value={1}/> */}
                              <input
                                type="number"
                                name="repeatDuration"
                                value={modelFields.repeatDuration || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <p>day(s)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {modelFields.repeatType === "Weekly" && eventRepeatDisable ? (
                      <div>
                        <div className="form-fields-row">
                          <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-2">
                              <p>Repeat Every</p>
                            </div>
                            <div className="col-lg-2">
                              <div className="form-group">
                                {/* <input type="number" value={1}/> */}
                                <input
                                  type="number"
                                  name="repeatDuration"
                                  value={modelFields.repeatDuration || ""}
                                  onChange={handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <p>weeks(s)</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* checkbutton for weekly */}

                        <div className="form-fields-row">
                          <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-2">
                              <div className="form-group">
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Monday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Monday</label>
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Tuesday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Tuesday</label>
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Wednesday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Wednesday</label>
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Thursday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Thursday</label>
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Friday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Friday</label>
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Saturday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Saturday</label>
                                <input
                                  type="checkbox"
                                  name="check-1"
                                  value="Sunday"
                                  id="check-1"
                                  onChange={handleRepeatDaysChange}
                                />
                                <label htmlFor="check-1">Sunday</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {modelFields.repeatType === "Monthly" && eventRepeatDisable ? (
                      <div className="form-fields-row">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-2">
                            <p>Repeat Every</p>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group">
                              {/* <input type="number" value={1}/> */}
                              <input
                                type="number"
                                name="repeatDuration"
                                value={modelFields.repeatDuration || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <p>months(s)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {modelFields.repeatType === "Yearly" && eventRepeatDisable ? (
                      <div className="form-fields-row">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-2">
                            <p>Repeat Every</p>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group">
                              {/* <input type="number" value={1}/> */}
                              <input
                                type="number"
                                name="repeatDuration"
                                value={modelFields.repeatDuration || ""}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <p>yearly(s)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

{eventRepeatDisable ? (
                      <div className="form-fields-row">
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-2">
                            <p>Ends on</p>
                          </div>
                          <div className="col-lg-2">
                            <div className="form-group">
                              {/* <input type="number" value={1}/> */}
                              {/* <input
                                type="number"
                                name="repeatDuration"
                                value={modelFields.repeatDuration || ""}
                                onChange={handleChange}
                              /> */}
                              <input
                              type="date"
                              name="repeatEndedOn"
                              className="form-control"
                              placeholder=""
                              value={modelFields.repeatEndedOn || ""}
                              onChange={handleChange}
                              disabled={noEndDateDisable}
                            />
                            {/* <input
                              type="time"
                              name="endTime"
                              className="form-control"
                              placeholder=""
                              value={modelFields.endTime || ""}
                              onChange={handleChange}
                              disabled={allDayDisable}
                            /> */}
                            </div>
                            <div className="form-group">
                            <input
                                  type="checkbox"
                                  name="check-1"
                                  value=""
                                  id="check-1"
                                  onChange={handleNoEndDate}
                                />
                                <label htmlFor="check-1">No end date</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Location</h3>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <Select
                              value={selectedLocation}
                              options={locations}
                              onChange={handleLocationChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-2">
                          {/* <Link to="/addLocation">
                            Add new location
                          </Link> */}
                          <button
                                            onClick={handleNew}
                                            className="btn black-fill"
                                            type="button">
                                            Add New Location
                                        </button>
                        </div>
                      </div>
                    </div>

                    <div className="form-fields-row">
                      <div className="row">
                        <div className="col-lg-3">
                          <h3>Description</h3>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <textarea
                              name="description"
                              className="form-control"
                              id=""
                              cols="30"
                              rows="3"
                              placeholder="Add description"
                              value={modelFields.description || ""}
                              onChange={handleChange}
                            ></textarea>
                            <small>Description will appear on invoice</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Reminder</h3>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>You can only edit reminder that you created. Reminder that assigned to you by another firm user will need to be
                                                        Edited by the creator</p>
                                                    <a href={undefined}>Add Reminder</a>
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
                  <div className="form-fields-row mb-5">
                    <div className="row">
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3">
                        <button className="btn btn-grey-common" type="submit" onClick={submit}>
                          Save event
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

export default AddEvent;
