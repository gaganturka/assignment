import {React, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

import * as contactActions from "../Services/Actions/ContactActions";
import * as practiceAreasActions from "../Services/Actions/PracticeAreasActions";
import * as caseStagesActions from "../Services/Actions/CaseStagesActions";
import * as employeeActions from "../Services/Actions/EmployeeActions";
import * as commonActions from "../Services/Actions/CommonActions";
import * as caseActions from "../Services/Actions/CaseActions";

import {toast} from "react-toastify";
import {
    concatStrings, extractNameValue, formatAmount, formatDate, formatToInputTypeDate,
    handleRequestError, hideLoading, printWithDefault,
    showLoading,
    validateJOIFormField,
    validateJOIProperty
} from "../Utils/Helpers";
import Select from "react-select";
import * as Joi from "joi-browser";
import FieldError from "../Componenets/FieldError";
import {CustomSelect} from "../Componenets/CustomSelect";
import ReactPaginate from "react-paginate";

export const CaseDetails = (props) => {
    const navigate = useNavigate();
    const {modelId} = useParams();

    const [clients, setClients] = useState([]);
    const [selectedClients, setSelectedClients] = useState([]);
    const [billingClients, setBillingClients] = useState([]);

    const [selectedBillingClient, setSelectedBillingClient] = useState(null);

    const [caseBillingMethods, setCaseBillingMethods] = useState([]);
    const [selectedCaseBillingMethod, setSelectedCaseBillingMethod] = useState(null);

    const [employees, setEmployees] = useState([]);
    const [employeesDocs, setEmployeesDocs] = useState([]);

    const [leadAttorney, setLeadAttorney] = useState(null);
    const [originatingAttorney, setOriginatingAttorney] = useState(null);

    const [caseEmployees, setCaseEmployees] = useState({});

    const [practiceAreas, setPracticeAreas] = useState([]);
    const [selectedPracticeArea, setSelectedPracticeArea] = useState(null);

    const [caseStages, setCaseStages] = useState([]);
    const [selectedCaseStage, setSelectedCaseStage] = useState(null);

    const [officeTypes, setOfficeTypes] = useState([]);
    const [selectedOfficeType, setSelectedOfficeType] = useState(null);

    const [courtTypes, setCourtTypes] = useState([]);
    const [selectedCourtType, setSelectedCourtType] = useState(null);

    const [step, setStep] = useState(1);

    const [modelFields, setModelFields] = useState({
        caseName: ""
    });

    const [errors, setErrors] = useState({});

    const schema = {
        employees: Joi.required(),
        clients: Joi.required(),
        caseName: Joi.string().min(3).required(),
    };

    const caseDetailsScheme = {
        caseName: Joi.string().min(3).required(),
    };

    const updateModelFieldValue = (name, value) => {
        switch (name) {
            case 'clients':
                if (value.length <= 0) {
                    value = undefined;
                }
                break;
            case 'employees':
                if (Object.keys(value).length <= 0) {
                    value = undefined;
                }
                break;
        }
        if (value === undefined) {
            if (modelFields.hasOwnProperty(name)) {
                delete modelFields[name];
            }
        } else {
            modelFields[name] = value;
        }
        console.log(modelFields);
    }

    const handleChange = (event) => {
        const {name, value} = extractNameValue(event.target);
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
                request = caseActions.create(modelFields);
            } else {
                request = caseActions.update(modelId, modelFields);
            }
            request.then((res) => {
                toast('Case has been saved');
                hideLoading();
                navigate('/cases');
            }).catch((error) => {
                handleRequestError(error);
                hideLoading();
            });
        } else {
            for (let error in errors) {
                toast(errors[error]);
            }
            setErrors(errors);
            hideLoading();
        }
    };

    const loadClients = () => {
        contactActions.getAll().then((res) => {
            let contactsData = [];
            for (let contact of res.docs) {
                contactsData.push({
                    value: contact._id,
                    label: concatStrings(' ', contact.firstName, contact.middleName, contact.lastName)
                });
            }
            setClients(contactsData);
            contactsData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadPracticeAreas = () => {
        practiceAreasActions.getAll().then((res) => {
            let practiceAreasData = [];
            for (let practiceArea of res.docs) {
                practiceAreasData.push({
                    value: practiceArea._id,
                    label: practiceArea.name
                });
            }
            setPracticeAreas(practiceAreasData);
            practiceAreasData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCaseStages = () => {
        caseStagesActions.getAll().then((res) => {
            let caseStagesData = [];
            for (let caseStage of res.list) {
                caseStagesData.push({
                    value: caseStage._id,
                    label: caseStage.name
                });
            }
            setCaseStages(caseStagesData);
            caseStagesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadEmployees = () => {
        employeeActions.getAll({
            with: ['firmEmployeeTypeId', 'firmEmployeeRoleId', 'userId']
        }).then((res) => {
            let employeesData = [];
            for (let employee of res.docs) {
                employeesData.push({
                    value: employee._id,
                    label: employee._id
                });
            }
            setEmployees(employeesData);
            setEmployeesDocs(res.docs);
            employeesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCourtTypes = () => {
        commonActions.courtTypes().then((res) => {
            let courtTypesData = [];
            for (let courtType of res) {
                courtTypesData.push({
                    value: courtType,
                    label: courtType
                });
            }
            setCourtTypes(courtTypesData);
            courtTypesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadOfficeTypes = () => {
        commonActions.officeTypes().then((res) => {
            let officeTypesData = [];
            for (let officeType of res) {
                officeTypesData.push({
                    value: officeType,
                    label: officeType
                });
            }
            setOfficeTypes(officeTypesData);
            officeTypesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadCaseBillingMethods = () => {
        commonActions.caseBillingMethods().then((res) => {
            let caseBillingMethodsData = [];
            for (let caseBillingMethod in res) {
                caseBillingMethodsData.push({
                    value: caseBillingMethod,
                    label: res[caseBillingMethod]
                });
            }
            setCaseBillingMethods(caseBillingMethodsData);
            caseBillingMethodsData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const handleClientChange = async (event) => {
        setSelectedClients(event);
        updateModelFieldValue('clients', event);
    }

    const handlePracticeAreaChange = async (event) => {
        setSelectedPracticeArea(event);
        updateModelFieldValue('firmPracticeAreaId', event);
    }

    const handleCaseStageChange = async (event) => {
        setSelectedCaseStage(event);
        updateModelFieldValue('firmCaseStageId', event);
    }

    const handleCourtTypeChange = async (event) => {
        setSelectedCourtType(event);
        updateModelFieldValue('court', event);
    }

    const handleOfficeTypeChange = async (event) => {
        setSelectedOfficeType(event);
        updateModelFieldValue('office', event);
    }

    const handleBillingClientChange = async (event) => {
        setSelectedBillingClient(event);
        updateModelFieldValue('billingContactId', event);
    }

    const handleCaseBillingMethodChange = async (event) => {
        setSelectedCaseBillingMethod(event);
        updateModelFieldValue('caseBillingMethod', event);
    }

    const handleLeadAttorneyChange = async (event) => {
        setLeadAttorney(event);
        updateModelFieldValue('leadAttorneyId', event);
    }

    const handleOriginatingAttorneyChange = async (event) => {
        setOriginatingAttorney(event);
        updateModelFieldValue('originatingAttorneyId', event);
    }

    useEffect(() => {
        loadClients();
        loadPracticeAreas();
        loadCaseStages();
        loadEmployees();
        loadCourtTypes();
        loadOfficeTypes();
        loadCaseBillingMethods();
    }, []);

    useEffect(() => {
        if (modelId !== undefined) {
            showLoading();
            caseActions.view(modelId, {
                with: [],
                extra: ['employees', 'clients']
            }).then(res => {
                hideLoading();

                //setModelFields(res);
                for (let modelFieldKey in res) {
                    let modelFieldValue = res[modelFieldKey];
                    updateModelFieldValue(modelFieldKey, modelFieldValue);
                }

                setSelectedBillingClient(res.billingContactId);
                setOriginatingAttorney(res.originatingAttorneyId);
                setLeadAttorney(res.leadAttorneyId);
                setSelectedCaseStage(res.firmCaseStageId);
                setSelectedPracticeArea(res.firmPracticeAreaId);
                setSelectedCourtType(res.court);
                setSelectedOfficeType(res.office);
                setSelectedCaseBillingMethod(res.caseBillingMethod);

                let contactsData = [];
                for (let firmCaseContact of res.firmCaseContactIds) {
                    let contact = firmCaseContact.firmContactId;
                    contactsData.push(contact._id);
                }
                setSelectedClients(contactsData);
                updateModelFieldValue('clients', contactsData);

                let employeesData = {};
                for (let firmCaseEmployee of res.firmCaseEmployeeIds) {
                    let defaultRate = firmCaseEmployee.firmEmployeeId.ratePerHour;
                    let mode = 'default';
                    if (defaultRate != firmCaseEmployee.ratePerHour) {
                        mode = 'case';
                    }
                    employeesData[firmCaseEmployee.firmEmployeeId._id] = {
                        ratePerHour: firmCaseEmployee.ratePerHour,
                        customRatePerHour: firmCaseEmployee.ratePerHour,
                        defaultRatePerHour: defaultRate,
                        mode: mode,
                    };
                }
                setCaseEmployees(employeesData);
                updateModelFieldValue('employees', employeesData);

            }).catch(err => {
                toast('Failed to load');
                hideLoading();
                navigate('/cases');
            });
        }
    }, [modelId]);

    useEffect(() => {
        for (let employeesDoc of employeesDocs) {
            updateCustomRateInput(employeesDoc);
        }
    }, [caseEmployees, employeesDocs]);

    useEffect(() => {
        if (clients.length > 0 && selectedClients.length > 0) {
            let billingClients = clients.filter((c) => selectedClients.includes(c.value));
            setBillingClients(billingClients);
        }
    }, [selectedClients, clients]);

    const proceedToCaseDetails = () => {
        if (selectedClients.length > 0) {
            setStep(2);
        } else {
            toast('Select at-least one client to continue');
        }
    }

    const continueToBilling = () => {
        let errors = validateJOIFormField(modelFields, caseDetailsScheme);
        if (errors == null) {
            setStep(3);
        } else {
            setErrors(errors);
            hideLoading();
        }
    }

    const continueToStaff = () => {
        setStep(4);
    }

    const handleSwitchBillRate = (event, model) => {
        const {name, value} = extractNameValue(event.target);
        let modelId = model._id;
        let caseEmployeesData = caseEmployees;
        if (caseEmployeesData.hasOwnProperty(modelId)) {
            caseEmployeesData[model._id].mode = value;
            if (value === 'default') {
                caseEmployeesData[model._id].ratePerHour = model.ratePerHour;
            } else {
                caseEmployeesData[model._id].ratePerHour = caseEmployeesData[model._id].customRatePerHour;
            }
        } else {
            toast('Select this employee first to continue');
        }
        setCaseEmployees(caseEmployeesData);
        updateModelFieldValue('employees', caseEmployees);
        updateCustomRateInput(model);
    }

    const handleRateChange = (event, model) => {
        const {name, value} = extractNameValue(event.target);
        let modelId = model._id;
        let caseEmployeesData = caseEmployees;
        if (caseEmployeesData.hasOwnProperty(modelId)) {
            caseEmployeesData[model._id].ratePerHour = value;
            caseEmployeesData[model._id].customRatePerHour = value;
        }
        setCaseEmployees(caseEmployeesData);
        updateModelFieldValue('employees', caseEmployees);
    }

    const handleCaseEmployeeChange = (event, model) => {
        const {name, value} = extractNameValue(event.target);
        let modelId = model._id;
        let caseEmployeesData = caseEmployees;
        if (value !== '') {
            caseEmployeesData[modelId] = {
                ratePerHour: model.ratePerHour,
                customRatePerHour: model.ratePerHour,
                defaultRatePerHour: model.ratePerHour,
                mode: 'default',
            };
        } else {
            if (caseEmployeesData.hasOwnProperty(modelId)) {
                delete caseEmployeesData[modelId];
            }
        }
        setCaseEmployees(caseEmployeesData);
        updateModelFieldValue('employees', caseEmployees);
    }

    const updateCustomRateInput = (model) => {
        let modelId = model._id;
        let rateSwitchElementId = "rateSwitchElement" + modelId;
        let rateSwitchElement = document.getElementById(rateSwitchElementId);
        if (rateSwitchElement != null) {
            let mode = 'default';
            let ratePerHour = 0;
            if (caseEmployees.hasOwnProperty(modelId)) {
                mode = caseEmployees[modelId].mode;
                ratePerHour = caseEmployees[modelId].ratePerHour;
                let checkBox = rateSwitchElement.querySelector(".form-check-input");
                if (checkBox != null) {
                    if (!checkBox.checked) {
                        checkBox.click();
                    }
                }
            }
            rateSwitchElement.querySelector(".modeSwitch").value = mode;
            rateSwitchElement.querySelector(".employeeRate").value = ratePerHour;
            rateSwitchElement.querySelector(".rateSwitch").setAttribute("data-mode", mode);
        }
    }

    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>{modelFields?.caseName}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/cases`}>
                                            <button
                                                className="btn"
                                                type="button">
                                                Go Back
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="admin-white-box">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="common-table-wrapper no-last-right mt-0">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Case</th>
                                                        <th>Number</th>
                                                        <th>Case Stage</th>
                                                        <th>Firm Member</th>
                                                        <th>Next Event</th>
                                                        <th>Next Task</th>
                                                        <th>Status Update</th>
                                                        <th>Court</th>
                                                        <th>Updated On</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td><h5>{modelFields?.caseName}</h5></td>
                                                        <td>{printWithDefault(modelFields?.caseNumber)}</td>
                                                        <td>
                                                            {printWithDefault(modelFields?.firmCaseStageId?.name)}
                                                            <img src="./img/edit-pencil-icon.png"
                                                                 className="img img-fluid" alt=""/>
                                                        </td>
                                                        <td>
                                                            <h6>{modelFields?.leadAttorneyId?.firmEmployeeTypeId}</h6>
                                                            <p>( Lead Attorney )</p>
                                                        </td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>-</td>
                                                        <td>{printWithDefault(modelFields?.court)}</td>
                                                        <td>{formatDate(modelFields.createdAt)}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="white-box">

                        <div className="case-detail-border-box">
                            <h4>Time entry</h4>
                            <div className="common-table-wrapper mt-0 ">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Activity</th>
                                            <th>Duration</th>
                                            <th>Description</th>
                                            <th>Rate</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                            <th>User</th>
                                            <th>Case</th>
                                            <th> &nbsp; </th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        <tr>

                                            <td>
                                                <h5>29 Aug 2021</h5>
                                            </td>
                                            <td>
                                                <h5>Doc prepration</h5>
                                            </td>
                                            <td>
                                                <h6>0.5</h6>
                                            </td>

                                            <td>
                                                <h6>Doc Pleading</h6>
                                            </td>
                                            <td>
                                                <h6>$250/h </h6>
                                            </td>
                                            <td>
                                                <h6>$700</h6>
                                            </td>
                                            <td>
                                                <h6>Open</h6>
                                            </td>
                                            <td>
                                                <h6>Vaibhav Jagtap</h6>
                                            </td>
                                            <td>
                                                <h6>John den matter </h6>
                                            </td>
                                            <td>
                                                <div className="action-btn-group">
                                                    <a href="javascript:;">
                                                        <button className="btn" type="button"><img
                                                            src="./img/edit-pencil-icon.png" alt=""/></button>
                                                    </a>
                                                    <a href="javascript:;">
                                                        <button className="btn" type="button"><img
                                                            src="./img/delete-icon.png"
                                                            alt=""/></button>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

