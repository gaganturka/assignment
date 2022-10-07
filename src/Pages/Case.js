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
    handleRequestError, hideLoading,
    showLoading,
    validateJOIFormField,
    validateJOIProperty
} from "../Utils/Helpers";
import Select from "react-select";
import * as Joi from "joi-browser";
import FieldError from "../Componenets/FieldError";
import {CustomSelect} from "../Componenets/CustomSelect";

export const Case = (props) => {
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
        console.log('EVENT : ', event)
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
                for (let modelFieldKey in res){
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
                                        <h3>{modelId ? 'Update Case' : 'Add New Case'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to="/cases">
                                            <button className="btn " type="button">Back</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-white-box mt-4">
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <div className="common-wizard">
                                    <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setStep(1)}
                                                    className={`nav-link ${step === 1 ? 'active' : ''}`}
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-cc-case" type="button"
                                                    role="tab" aria-controls="pills-cc-case" aria-selected="true">
                                                <span>1</span> <br/>
                                                Clients
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setStep(2)}
                                                    className={`nav-link ${step === 2 ? 'active' : ''}`}
                                                    id="pills-case-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-case" type="button" role="tab"
                                                    aria-controls="pills-case" aria-selected="false">
                                                <span>2</span> <br/>
                                                Case
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setStep(3)}
                                                    className={`nav-link ${step === 3 ? 'active' : ''}`}
                                                    id="pills-billing-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-billing" type="button" role="tab"
                                                    aria-controls="pills-billing" aria-selected="false">
                                                <span>3</span> <br/>
                                                Billing
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button onClick={() => setStep(4)}
                                                    className={`nav-link ${step === 4 ? 'active' : ''}`}
                                                    id="pills-staff-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-staff" type="button" role="tab"
                                                    aria-controls="pills-staff" aria-selected="false">
                                                <span>4</span> <br/>
                                                Staff
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className={`tab-pane fade ${step === 1 ? 'show active' : ''}`}
                                             id="pills-cc-case" role="tabpanel"
                                             aria-labelledby="pills-cc-case-tab">
                                            <div className="wizard-internal-content pt-4 pb-5">
                                                <h5>Start Creating your case by adding a new or existing client</h5>
                                                <p>All cases need atleast one Client to bill</p>

                                                <div className="choice-flex">
                                                    <div className="me-4">
                                                        <Link to="/clients">
                                                            <button className="btn black-fill" type="button">Add New
                                                                Client
                                                            </button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <h6>Or</h6>
                                                    </div>
                                                    <div className="ms-4">
                                                        <div className="filter-select-box">
                                                            <div className="react-select">
                                                                <CustomSelect
                                                                    isMulti={true}
                                                                    placeholder="Search Existing Client"
                                                                    isClearable={true}
                                                                    onChange={handleClientChange}
                                                                    value={selectedClients}
                                                                    options={clients}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-lg-3">
                                                        <button onClick={proceedToCaseDetails}
                                                                className="btn btn-grey-common"
                                                                type="submit">Continue to Case Details
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${step === 2 ? 'show active' : ''}`}
                                             id="pills-case" role="tabpanel"
                                             aria-labelledby="pills-case-tab">
                                            <div className="wizard-internal-content">
                                                <div className="row mt-4">
                                                    <div className="col-lg-12">
                                                        <div className="basic-info-wrp">
                                                            <div className="admin-white-box p-0">
                                                                <div className="form-feilds-container">
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Case Name</h3>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="caseName"
                                                                                        value={modelFields.caseName || ""}
                                                                                        name="caseName"
                                                                                        onChange={handleChange}
                                                                                        placeholder="Case Name"
                                                                                    />
                                                                                    <FieldError
                                                                                        error={errors.caseName}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Case number</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <input
                                                                                        type="text"
                                                                                        className="form-control"
                                                                                        id="caseNumber"
                                                                                        value={modelFields.caseNumber || ""}
                                                                                        name="caseNumber"
                                                                                        onChange={handleChange}
                                                                                        placeholder="Case Number"
                                                                                    />
                                                                                    <FieldError
                                                                                        error={errors.caseNumber}/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <p>A unique identifier number for this
                                                                                    case</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Practice area</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            onChange={handlePracticeAreaChange}
                                                                                            placeholder="Practice Area"
                                                                                            value={selectedPracticeArea}
                                                                                            options={practiceAreas}/>
                                                                                    </div>
                                                                                    <FieldError error={errors.country}/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <a href={undefined}>Add new practice
                                                                                    area</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Case Stage</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            onChange={handleCaseStageChange}
                                                                                            placeholder="Case Stage"
                                                                                            value={selectedCaseStage}
                                                                                            options={caseStages}/>
                                                                                    </div>
                                                                                    <FieldError error={errors.country}/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <p>Manage case stage in <a
                                                                                    href={undefined}>settings</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Court</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            placeholder="Court Type"
                                                                                            isClearable={true}
                                                                                            onChange={handleCourtTypeChange}
                                                                                            value={selectedCourtType}
                                                                                            options={courtTypes}
                                                                                        />
                                                                                    </div>
                                                                                    <FieldError error={errors.court}/>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Date Opened</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <input
                                                                                        type="date"
                                                                                        className="form-control"
                                                                                        id="dateOpened"
                                                                                        name="dateOpened"
                                                                                        value={formatToInputTypeDate(modelFields.dateOpened) || ""}
                                                                                        onChange={handleChange}
                                                                                        placeholder="Date Opened"
                                                                                    />
                                                                                    <FieldError
                                                                                        error={errors.dateOpened}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Office</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            placeholder="Office Type"
                                                                                            isClearable={true}
                                                                                            onChange={handleOfficeTypeChange}
                                                                                            value={selectedOfficeType}
                                                                                            options={officeTypes}
                                                                                        />
                                                                                    </div>
                                                                                    <FieldError error={errors.office}/>
                                                                                </div>
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
                                                                                       <textarea name="description"
                                                                                                 id="description"
                                                                                                 placeholder="Description"
                                                                                                 cols="30"
                                                                                                 className="form-control"
                                                                                                 onChange={handleChange}
                                                                                                 value={modelFields.description || ""}
                                                                                                 rows="5"/>
                                                                                    <FieldError
                                                                                        error={errors.description}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Statute of limitation</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">
                                                                                <div className="form-group">
                                                                                    <input
                                                                                        type="date"
                                                                                        className="form-control"
                                                                                        id="statuteOfLimitation"
                                                                                        name="statuteOfLimitation"
                                                                                        value={formatToInputTypeDate(modelFields.statuteOfLimitation) || ""}
                                                                                        onChange={handleChange}
                                                                                        placeholder="Statute of limitation"
                                                                                    />
                                                                                    <FieldError
                                                                                        error={errors.statuteOfLimitation}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Conflict check</h3>
                                                                            </div>
                                                                            <div className="col-lg-2">

                                                                                <div className="filter-switch-box">
                                                                                    <div
                                                                                        className="form-check form-switch">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="checkbox"
                                                                                            id="conflictCheck"
                                                                                            checked={!!modelFields.conflictCheck}
                                                                                            name="conflictCheck"
                                                                                            value="1"
                                                                                            onChange={handleChange}
                                                                                        />
                                                                                    </div>
                                                                                </div>

                                                                                <FieldError
                                                                                    error={errors.conflictCheck}/>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Conflict check notes</h3>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group">
                                                                                        <textarea
                                                                                            name="conflictCheckNotes"
                                                                                            id="conflictCheckNotes"
                                                                                            placeholder="Conflict Check Notes"
                                                                                            cols="30"
                                                                                            className="form-control"
                                                                                            onChange={handleChange}
                                                                                            value={modelFields.conflictCheckNotes || ""}
                                                                                            rows="5"/>
                                                                                    <FieldError
                                                                                        error={errors.conflictCheckNotes}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                            </div>
                                                                            <div className="col-lg-3">
                                                                                <button onClick={continueToBilling}
                                                                                        className="btn btn-grey-common"
                                                                                        type="button">Continue to
                                                                                    Billing
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${step === 3 ? 'show active' : ''}`}
                                             id="pills-billing" role="tabpanel"
                                             aria-labelledby="pills-billing-tab">

                                            <div className="wizard-internal-content">
                                                <div className="row mt-4">
                                                    <div className="col-lg-12">
                                                        <div className="basic-info-wrp">
                                                            <div className="admin-white-box p-0">
                                                                <div className="form-feilds-container">
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Billing Contact</h3>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <div className="react-select">
                                                                                    <CustomSelect
                                                                                        placeholder="Select"
                                                                                        isClearable={true}
                                                                                        onChange={handleBillingClientChange}
                                                                                        value={selectedBillingClient}
                                                                                        options={billingClients}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Billing method</h3>
                                                                            </div>
                                                                            <div className="col-lg-4">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            onChange={handleCaseBillingMethodChange}
                                                                                            placeholder="Billing Method"
                                                                                            value={selectedCaseBillingMethod}
                                                                                            options={caseBillingMethods}/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {
                                                                        selectedCaseBillingMethod === 'flat' || selectedCaseBillingMethod === 'mixed' ?

                                                                            <div className="form-fields-row">
                                                                                <div className="row">
                                                                                    <div className="col-lg-3">
                                                                                        <h3>Flat Fee Amount</h3>
                                                                                    </div>
                                                                                    <div className="col-lg-4">
                                                                                        <div className="form-group">
                                                                                            <input
                                                                                                type="text"
                                                                                                className="form-control"
                                                                                                id="flatFee"
                                                                                                value={modelFields.flatFee || ""}
                                                                                                name="flatFee"
                                                                                                onChange={handleChange}
                                                                                                placeholder="Enter Amount"
                                                                                            />
                                                                                            <FieldError
                                                                                                error={errors.flatFee}/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            : ""
                                                                    }

                                                                    <div className="form-fields-row mb-5">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                            </div>
                                                                            <div className="col-lg-3">
                                                                                <button onClick={continueToStaff}
                                                                                        className="btn btn-grey-common"
                                                                                        type="submit">Continue to Staff
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={`tab-pane fade ${step === 4 ? 'show active' : ''}`}
                                             id="pills-staff" role="tabpanel"
                                             aria-labelledby="pills-staff-tab">

                                            <div className="wizard-internal-content">
                                                <div className="row mt-4">
                                                    <div className="col-lg-12">
                                                        <div className="basic-info-wrp">
                                                            <div className="admin-white-box p-0">
                                                                <div className="form-feilds-container">
                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Lead Attorney</h3>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            onChange={handleLeadAttorneyChange}
                                                                                            placeholder="Select"
                                                                                            value={leadAttorney}
                                                                                            options={employees}/>
                                                                                    </div>
                                                                                    <FieldError
                                                                                        error={errors.leadAttorneyId}/>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3">
                                                                                <h3>Originating Attorney</h3>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="form-group">
                                                                                    <div className="react-select">
                                                                                        <CustomSelect
                                                                                            onChange={handleOriginatingAttorneyChange}
                                                                                            placeholder="Select"
                                                                                            value={originatingAttorney}
                                                                                            options={employees}/>
                                                                                    </div>
                                                                                    <FieldError
                                                                                        error={errors.originatingAttorneyId}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mt-5 ps-4">
                                                                        <div className="col-lg-12">
                                                                            <h4 className="wizard-tt-title mb-2">Who
                                                                                from
                                                                                your firm should have access to this
                                                                                case</h4>
                                                                            <div className="common-table-wrapper mt-0">
                                                                                <div className="table-responsive">
                                                                                    <table className="table">
                                                                                        <thead>
                                                                                        <tr>
                                                                                            <th>&nbsp;</th>
                                                                                            <th>Name</th>
                                                                                            <th>Type</th>
                                                                                            <th>Role</th>
                                                                                            <th>Bill rate</th>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        {employeesDocs?.map((model, i) => {
                                                                                            return (
                                                                                                <tr id={`rateSwitchElement${model._id}`}
                                                                                                    key={i}>
                                                                                                    <td>
                                                                                                        <div
                                                                                                            className="table-checkbox">
                                                                                                            <input
                                                                                                                type="checkbox"
                                                                                                                onChange={(e) => handleCaseEmployeeChange(e, model)}
                                                                                                                value={model._id}
                                                                                                                className="form-check-input"/>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td><h5>Vaibhav</h5>
                                                                                                    </td>
                                                                                                    <td>{model?.firmEmployeeTypeId?.name}</td>
                                                                                                    <td>{model?.firmEmployeeRoleId?.name}</td>
                                                                                                    <td>
                                                                                                        <div
                                                                                                            className="select-flex">
                                                                                                            <div
                                                                                                                className="form-group">
                                                                                                                <select
                                                                                                                    onChange={(e) => {
                                                                                                                        handleSwitchBillRate(e, model)
                                                                                                                    }}
                                                                                                                    className="form-select modeSwitch">
                                                                                                                    <option
                                                                                                                        value="default">Default
                                                                                                                        Rate
                                                                                                                    </option>
                                                                                                                    <option
                                                                                                                        value="case">Case
                                                                                                                        Rate
                                                                                                                    </option>
                                                                                                                </select>
                                                                                                            </div>

                                                                                                            <div
                                                                                                                className="rateSwitch"
                                                                                                                data-mode="default">
                                                                                                                <div
                                                                                                                    className="case rateSwitchOptions">
                                                                                                                    <div
                                                                                                                        className="test-billing-rate test-case-rate-input input-group">
                                                                                                                        <div
                                                                                                                            className="input-group-prepend">
                                                                                                                    <span
                                                                                                                        className="input-group-text">$</span>
                                                                                                                        </div>
                                                                                                                        <input
                                                                                                                            type="text"
                                                                                                                            onChange={(e) => handleRateChange(e, model)}
                                                                                                                            className="form-control employeeRate"/>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div
                                                                                                                    className="default rateSwitchOptions">
                                                                                                                    <p>{formatAmount(model?.ratePerHour)}</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            );
                                                                                        })}

                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="form-fields-row">
                                                                        <div className="row">
                                                                            <div className="col-lg-3 m-auto">
                                                                                <button className="btn btn-grey-common"
                                                                                        type="button"
                                                                                        onClick={submit}>Save & Finish
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

