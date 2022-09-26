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
import * as activityTypesActions from "../Services/Actions/ActivityTypesActions";
import * as caseActions from "../Services/Actions/CaseActions";
import * as timeExpenseActions from "../Services/Actions/TimeExpenseActions";

import Select from "react-select";
import {Link, useNavigate, useParams} from "react-router-dom";
import * as Joi from "joi-browser";

import * as contactActions from "../Services/Actions/ContactActions";
import * as companyActions from "../Services/Actions/CompanyActions";
import FieldError from "../Componenets/FieldError";
import {ContactGroupFormModal} from "../Componenets/ContactGroupFormModal";
import {CompanyFormModal} from "../Componenets/CompanyFormModal";
import Creatable from "react-select/creatable";
import ActivityTypeFormModal from "../Componenets/ActivityTypeFormModal";
import {CustomSelect} from "../Componenets/CustomSelect";

export const TimeEntry = (props) => {
    const navigate = useNavigate();

    const {modelId} = useParams();

    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const [activityTypes, setActivityTypes] = useState([]);
    const [selectedActivityType, setSelectedActivityType] = useState(null);

    const [modelFields, setModelFields] = useState({
        firmCaseId: "",
        firmCaseEmployeeId: "",
        firmActivityTypeId: "",
        isBillable: "",
        description: "",
        date: "",
        rate: "",
        duration: "",
        amount: "",
        rateType: "",
    });

    const [errors, setErrors] = useState({});

    const schema = {
        firmCaseId: Joi.required(),
        firmActivityTypeId: Joi.required(),
        isBillable: Joi.required(),
        description: Joi.required(),
        rate: Joi.required(),
        amount: Joi.required(),
        rateType: Joi.required(),
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

    const submit = (event) => {
        event.preventDefault();
        console.log(modelFields);
        let errors = validateJOIFormField(modelFields, schema);
        if (errors == null) {
            showLoading();
            let request = null;
            if (modelId === undefined) {
                request = contactActions.create(modelFields);
            } else {
                request = contactActions.update(modelId, modelFields);
            }
            request.then((res) => {
                toast('Time Entry has been saved');
                hideLoading();
                navigate('/time-expenses');
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
        setSelectedCase(null);
        setSelectedActivityType(null);
        setSelectedUser(null);
        if (modelFields.firmCaseId) {
            setSelectedCase(modelFields.firmCaseId);
        }
        if (modelFields.firmCaseEmployeeId) {
            setSelectedUser(modelFields.firmCaseEmployeeId);
        }
        if (modelFields.firmActivityTypeId) {
            setSelectedActivityType(modelFields.firmActivityTypeId);
        }
    }

    useEffect(() => {
        selectDefaultValues();
    }, [
        modelFields
    ]);

    useEffect(() => {
        loadCases();
        loadActivityTypes();
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

    const loadCases = () => {
        caseActions.getAll().then((res) => {
            let casesData = [];
            for (let caseModel of res.docs) {
                casesData.push({
                    value: caseModel._id,
                    label: caseModel.caseName
                });
            }
            setCases(casesData);
            casesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCaseEmployees = () => {
        showLoading();
        caseActions.caseEmployees(modelFields.firmCaseId).then((res) => {
            hideLoading();
            let employeesData = [];
            console.log(res);
            for (let employeeModel of res.data) {
                console.log(employeeModel);
                employeesData.push({
                    value: employeeModel._id,
                    label: employeeModel.name
                });
            }
            setUsers(employeesData);
            employeesData = null;
        }).catch((error) => {
            hideLoading();
            handleRequestError(error);
        });
    }

    const loadActivityTypes = () => {
        activityTypesActions.getAll().then((res) => {
            let activitiesData = [];
            for (let activityModel of res.docs) {
                activitiesData.push({
                    value: activityModel._id,
                    label: activityModel.name
                });
            }
            setActivityTypes(activitiesData);
            activitiesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const handleCaseChangeChange = async (event) => {
        updateModelFieldValue('firmCaseId', event);
        setSelectedCase(event);
        if (event.__isNew__ == undefined) {
            loadCaseEmployees();
        }
    }

    const handleCaseEmployeeChange = async (event) => {
        setSelectedUser(event);
        updateModelFieldValue('firmCaseEmployeeId', event);
    }

    const handleActivityTypeChange = async (event) => {
        setSelectedActivityType(event);
        updateModelFieldValue('firmActivityTypeId', event);
    }

    const newActivityType = () => {
        openModal("activityTypeFormModal");
    }

    const activityTypeModalClosed = (thingsChanged) => {
        if (thingsChanged) {
            loadActivityTypes();
        }
    }

    return (
        <>
            <ActivityTypeFormModal onClose={activityTypeModalClosed}/>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>{modelId ? 'Update Time Entry' : 'Add Time Entry'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/time-expenses`}>
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

                                    <div className="form-feilds-container">
                                        <div className="form-fields-row mt-3">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Case</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <CustomSelect onChange={handleCaseChangeChange}
                                                                          placeholder="Select Case"
                                                                          value={selectedCase}
                                                                          isClearable={true}
                                                                          options={cases}/>
                                                        </div>
                                                        <FieldError error={errors.firmCaseId}/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <Link className="inputSameLink" to={`/cases/create`}>Add New
                                                        Case</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>User</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <CustomSelect onChange={handleCaseEmployeeChange}
                                                                          placeholder="Select User"
                                                                          value={selectedUser}
                                                                          isClearable={true}
                                                                          options={users}/>
                                                        </div>
                                                        <FieldError error={errors.firmCaseEmployeeId}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Activity</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <div className="react-select">
                                                            <CustomSelect onChange={handleActivityTypeChange}
                                                                          placeholder="Select Activity Type"
                                                                          value={selectedActivityType}
                                                                          isClearable={true}
                                                                          options={activityTypes}/>
                                                        </div>
                                                        <FieldError error={errors.firmActivityTypeId}/>
                                                    </div>
                                                    <div className="form-check form-switch mt-2">
                                                        <input className="form-check-input" type="checkbox"
                                                               id="flexSwitchCheckDefault"/>
                                                        <label className="form-check-label"
                                                               htmlFor="flexSwitchCheckDefault">This time entry is
                                                            Billable</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <a onClick={newActivityType} className="inputSameLink"
                                                       href="javascript:;">Add New Activity</a>
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
                                                    <textarea name="description" id="description"
                                                              placeholder="Description"
                                                              cols="30"
                                                              className="form-control"
                                                              onChange={handleChange}
                                                              value={modelFields.description || ""}
                                                              rows="5"/>
                                                        <FieldError error={errors.description}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Customer field</h3>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="customer-field-wrapper">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="">Date</label>
                                                                    <input type="date" className="form-control"
                                                                           placeholder=""/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="d-flex">
                                                                    <div className="form-group">
                                                                        <label htmlFor="">Rate</label>
                                                                        <input type="text" className="form-control"
                                                                               placeholder="$"/>
                                                                    </div>
                                                                    <div className="form-group ms-2">
                                                                        <label htmlFor="">/hour</label>
                                                                        <input type="text" className="form-control"
                                                                               placeholder="h"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="form-group">
                                                                    <label htmlFor="">Duration</label>
                                                                    <input type="text" className="form-control"
                                                                           placeholder=""/>
                                                                    <small>0.1 = 6 minute</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
