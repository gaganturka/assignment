import React, {useEffect, useMemo, useState} from "react";

import {
    concatStrings,
    extractNameValue,
    formatAmount,
    formatToInputDate,
    getObjectValue,
    handleRequestError,
    hideLoading,
    showLoading, validateJOIFormField,
    validateJOIProperty
} from "../Utils/Helpers";

import {toast} from "react-toastify";

import * as commonActions from "../Services/Actions/CommonActions";
import * as contactActions from "../Services/Actions/ContactActions";
import * as caseActions from "../Services/Actions/CaseActions";
import * as activityTypesActions from "../Services/Actions/ActivityTypesActions";
import * as invoiceActions from "../Services/Actions/InvoiceActions";

import {Link, useNavigate, useParams} from "react-router-dom";
import * as Joi from "joi-browser";

import FieldError from "../Componenets/FieldError";

import {CustomSelect} from "../Componenets/CustomSelect";

export const Invoice = (props) => {
    const navigate = useNavigate();

    const {modelId} = useParams();

    const [activityTypes, setActivityTypes] = useState([]);

    const [adjustmentTypes, setAdjustmentTypes] = useState([
        {label: 'Discount', value: 'discount'},
        {label: 'Interest', value: 'interest'},
        {label: 'Tax', value: 'tax'},
        {label: 'Addition', value: 'addition'},
    ]);

    const [appliedTo, setAppliedTo] = useState([
        {label: 'Flat Fee', value: 'flatFee'},
        {label: 'Time Entries', value: 'interest'},
        {label: 'Expenses', value: 'tax'},
        {label: 'Unpaid Invoice Forwarded', value: 'unpaidInvoiceForwarded'},
        {label: 'Sub Total', value: 'subTotal'},
    ]);

    const [priceTypes, setPriceTypes] = useState([
        {label: '% - Percentage', value: 'percentage'},
        {label: 'Flat Amount', value: 'flat'},
    ]);

    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);

    const [selectedCaseModel, setSelectedCaseModel] = useState(null);

    const [cases, setCases] = useState([]);
    const [selectedCase, setSelectedCase] = useState(null);

    const [statues, setStatuses] = useState([]);
    const [selectedStatus, setSelectStatus] = useState(null);

    const [paymentTerms, setPaymentTerms] = useState([]);
    const [selectedPaymentTerm, setSelectedPaymentTerm] = useState(null);

    const [invoiceItems, setInvoiceItems] = useState([]);

    const [modelFields, setModelFields] = useState({});
    const [invoiceSummary, setInvoiceSummary] = useState({});

    const [errors, setErrors] = useState({});

    const schema = {
        firmContactId: Joi.string().required().label("Client"),
        firmCaseId: Joi.string().required().label("Case"),
        receiptAddress: Joi.string().required().label("Address"),
        invoiceNumber: Joi.string().required().label("Invoice Number"),
        invoiceDate: Joi.string().required().label("Invoice Date"),
        dueDate: Joi.string().required().label("Due Date"),
        paymentTerm: Joi.string().required().label("Payment Term"),
        status: Joi.string().required(),
    };

    const updateModelFieldValue = (name, value) => {
        modelFields[name] = value;
        setModelFields({...modelFields});
    }

    const updateInvoiceSummaryFieldValue = (name, value) => {
        invoiceSummary[name] = value;
        setInvoiceSummary({...invoiceSummary});
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
        let errors = validateJOIFormField(modelFields, schema);
        if (errors == null) {
            let modelFieldsTemp = modelFields;
            modelFieldsTemp.invoiceItems = invoiceItems;
            modelFieldsTemp.invoiceSummary = invoiceSummary;
            showLoading();
            let request = null;
            if (modelId === undefined) {
                request = invoiceActions.create(modelFieldsTemp);
            } else {
                request = invoiceActions.update(modelId, modelFieldsTemp);
            }
            request.then((res) => {
                toast('Invoice has been saved');
                hideLoading();
                navigate('/invoices');
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
        setSelectedClient(null);
        setSelectedCase(null);
        setSelectedPaymentTerm(null);
        setSelectStatus(null);
        if (modelFields._id != null) {
            setSelectedClient(modelFields?.firmContactId);
            setSelectedCase(modelFields?.firmCaseId);
            setSelectedPaymentTerm(modelFields?.paymentTerm);
            setSelectStatus(modelFields?.status);
        }
    }

    const loadNextInvoiceNumber = () => {
        invoiceActions.nextInvoiceNumber().then((res) => {
            if (getObjectValue(modelFields.invoiceNumber) === null) {
                res = res.toString();
                updateModelFieldValue('invoiceNumber', res);
            }
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    useEffect(() => {
        selectDefaultValues();
    }, [
        modelFields
    ]);

    useEffect(() => {
        loadFirmClients();
        loadInvoicesPaymentTerms();
        loadInvoicesStatuses();
        loadActivityTypes();
    }, []);

    useEffect(() => {
        if (modelId !== undefined) {
            showLoading();
            invoiceActions.view(modelId).then(res => {
                hideLoading();
                res.invoiceDate = formatToInputDate(res.invoiceDate);
                res.dueDate = formatToInputDate(res.dueDate);
                loadFirmCases();
                setModelFields(res);

                let invoiceItemsData = [];
                let invoiceItemsTemp = res?.invoiceItems;
                for (let invoiceItemTemp of invoiceItemsTemp) {
                    if (getObjectValue(invoiceItemTemp?.date) !== null) {
                        invoiceItemTemp.date = formatToInputDate(invoiceItemTemp?.date);
                    }
                    invoiceItemsData.push(invoiceItemTemp);
                }
                setInvoiceItems(invoiceItemsData);

            }).catch(err => {
                toast('Failed to load');
                hideLoading();
                navigate('/invoices');
            });
        } else {
            loadNextInvoiceNumber();
            if (getObjectValue(modelFields.invoiceDate) === null) {
                updateModelFieldValue('invoiceDate', formatToInputDate());
            }
        }
    }, [modelId]);

    const loadActivityTypes = () => {
        activityTypesActions.getAll().then((res) => {
            let activitiesData = [];
            for (let activityModel of res.docs) {
                activitiesData.push({
                    value: activityModel.name,
                    label: activityModel.name
                });
            }
            setActivityTypes(activitiesData);
            activitiesData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadFirmClients = () => {
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

    const loadFirmCases = () => {
        if (modelFields.firmContactId != null) {
            showLoading();
            contactActions.getCasesByContact(modelFields.firmContactId).then((res) => {
                hideLoading();
                let casesData = [];
                for (let caseModel of res.cases) {
                    casesData.push({
                        value: caseModel._id,
                        label: caseModel.caseName
                    });
                }
                setCases(casesData);
                casesData = null;
                let contactAddress = concatStrings(
                    ', ',
                    res.contact.address1,
                    res.contact.address2,
                    res.contact.city,
                    res.contact.state,
                    res.contact.country
                )
                if (modelId == null && getObjectValue(contactAddress?.receiptAddress) == null) {
                    updateModelFieldValue('receiptAddress', contactAddress);
                }
            }).catch((error) => {
                hideLoading();
                handleRequestError(error);
            });
        } else {
            setCases([]);
        }
    }

    const loadInvoicesPaymentTerms = () => {
        commonActions.invoicePaymentTerms().then((res) => {
            let paymentTermsData = [];
            for (let termKey in res) {
                paymentTermsData.push({
                    value: termKey,
                    label: res[termKey]
                });
            }
            setPaymentTerms(paymentTermsData);
            paymentTermsData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadInvoicesStatuses = () => {
        commonActions.invoiceStatuses().then((res) => {
            let statusData = [];
            for (let statusKey in res) {
                statusData.push({
                    value: statusKey,
                    label: res[statusKey]
                });
            }
            setStatuses(statusData);
            statusData = null;
        }).catch((error) => {
            handleRequestError(error);
        });
    }

    const loadInvoiceAbleItems = () => {
        if (modelFields.firmCaseId != null) {
            showLoading();
            caseActions.invoiceAbleItems(modelFields.firmCaseId).then((res) => {
                hideLoading();
                let invoiceAbleItems = res.invoiceAbleItems;
                setSelectedCaseModel(res.case);
                if (invoiceAbleItems) {
                    if (invoiceAbleItems.length > 0) {
                        for (let invoiceAbleItem of invoiceAbleItems) {
                            addInvoiceItem(invoiceAbleItem.itemType, invoiceAbleItem);
                        }
                    }
                }
            }).catch((error) => {
                hideLoading();
                handleRequestError(error);
            });
        } else {
            setCases([]);
        }
    }

    const handleClientChange = async (event) => {
        setSelectedClient(event);
        updateModelFieldValue('firmContactId', event);
        loadFirmCases();
    }

    const handleCaseChange = async (event) => {
        setSelectedCase(event);
        setSelectedCaseModel(null);
        updateModelFieldValue('firmCaseId', event);
        loadInvoiceAbleItems();
    }

    const handleStatusChange = async (event) => {
        setSelectStatus(event);
        updateModelFieldValue('status', event);
    }

    const handlePaymentTermChange = async (event) => {
        setSelectedPaymentTerm(event);
        updateModelFieldValue('paymentTerm', event);
        var date = new Date();
        switch (event) {
            case 'dueDate':
                date.setDate(date.getDate() - 1);
                break;
            case 'net15':
                date.setDate(date.getDate() + 15);
                break;
            case 'net30':
                date.setDate(date.getDate() + 30);
                break;
            case 'net60':
                date.setDate(date.getDate() + 60);
                break;
        }
        date = formatToInputDate(date);
        updateModelFieldValue('dueDate', date);
    }

    const addInvoiceItem = (itemType, dataObj = null) => {
        if (dataObj == null) {
            dataObj = {
                referenceId: null,
                itemType,
                date: new Date(),
                item: '',
                appliedTo: '',
                amountType: '',
                notes: '',
                basis: '',
                percentage: '',
                total: '',
                nonBillAble: ''
            };
        }
        dataObj.date = formatToInputDate(dataObj.date);
        setInvoiceItems(invoiceItems => [...invoiceItems, dataObj]);
    }

    const removeInvoiceItem = (obj, removeAbleKey) => {
        setInvoiceItems(invoiceItems =>
            invoiceItems.filter((obj, i) => {
                return i !== removeAbleKey;
            })
        );
    }

    const updateInvoiceItemValue = (event, updateAbleObj, updateAbleKey) => {
        const {name, value} = extractNameValue(event.target);
        handleInvoiceItemChange(value, name, updateAbleObj, updateAbleKey);
    };

    const handleInvoiceItemChange = (value, name, updateAbleObj, updateAbleKey) => {
        updateAbleObj[name] = value;
        setInvoiceItems(invoiceItems =>
            invoiceItems.map((originalObj, i) => {
                return i === updateAbleKey ? updateAbleObj : originalObj
            }),
        );
    }

    const calculateInvoiceValues = () => {
        let subTotal = 0;
        let flatFeeTotal = 0;
        let timeEntriesTotal = 0;
        let expensesTotal = 0;
        let balanceForwardedTotal = 0;
        let additions = 0;
        let interests = 0;
        let taxes = 0;
        let discounts = 0;

        for (let invoiceItem of invoiceItems) {
            if (invoiceItem.itemType === 'adjustments') {
                if (invoiceItem.amountType === 'percentage') {
                    invoiceItem.total = 0;
                    if (invoiceItem.basis > 0 && invoiceItem.percentage > 0) {
                        invoiceItem.total = ((invoiceItem.basis * invoiceItem.percentage) / 100);
                    }
                } else if (invoiceItem.amountType === 'flat') {
                    invoiceItem.basis = '-';
                    invoiceItem.percentage = '-';
                }
            }
        }

        setInvoiceItems(invoiceItems);

        for (let invoiceItem of invoiceItems) {
            let invoiceTotal = invoiceItem.total;
            invoiceTotal = invoiceTotal * 1;
            let nonBillAbleVal = getObjectValue(invoiceItem.nonBillAble);
            if (nonBillAbleVal === null) {
                if (invoiceItem.itemType === 'adjustments') {
                    switch (invoiceItem.item) {
                        case "discount":
                            discounts = discounts + invoiceTotal;
                            break;
                        case "interest":
                            interests = interests + invoiceTotal;
                            break;
                        case "tax":
                            taxes = taxes + invoiceTotal;
                            break;
                        case "addition":
                            additions = additions + invoiceTotal;
                            break;
                    }
                } else {
                    subTotal = subTotal + invoiceTotal;
                    switch (invoiceItem.itemType) {
                        case "flatFee":
                            flatFeeTotal = flatFeeTotal + invoiceTotal;
                            break;
                        case "timeEntries":
                            timeEntriesTotal = timeEntriesTotal + invoiceTotal;
                            break;
                        case "expenses":
                            expensesTotal = expensesTotal + invoiceTotal;
                            break;
                    }
                }
            }
        }

        let grandTotal = ((subTotal + (additions + interests + taxes)) - discounts);

        updateInvoiceSummaryFieldValue('flatFeeTotal', flatFeeTotal);
        updateInvoiceSummaryFieldValue('timeEntriesTotal', timeEntriesTotal);
        updateInvoiceSummaryFieldValue('expensesTotal', expensesTotal);
        updateInvoiceSummaryFieldValue('subTotal', subTotal);

        updateInvoiceSummaryFieldValue('balanceForwardedTotal', balanceForwardedTotal);
        updateInvoiceSummaryFieldValue('additions', additions);
        updateInvoiceSummaryFieldValue('interests', interests);
        updateInvoiceSummaryFieldValue('taxes', taxes);
        updateInvoiceSummaryFieldValue('discounts', discounts);

        updateInvoiceSummaryFieldValue('total', grandTotal);
    }

    useEffect(() => {
        calculateInvoiceValues();
    }, [
        invoiceItems
    ]);


    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>{modelId ? 'Update Invoice' : 'Create New Invoice'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/invoices/`}>
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

                                    <div className="form-feilds-container pt-4">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-fields-row">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <h3>Client</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="filter-select-box">
                                                                <div className="form-group">
                                                                    <div className="react-select">
                                                                        <CustomSelect
                                                                            placeholder="Select Client"
                                                                            isClearable={true}
                                                                            onChange={handleClientChange}
                                                                            value={selectedClient}
                                                                            options={clients}
                                                                        />
                                                                    </div>
                                                                    <FieldError error={errors.firmContactId}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Case</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="filter-select-box">
                                                                <div className="form-group">
                                                                    <div className="react-select">
                                                                        <CustomSelect
                                                                            placeholder="Select Case"
                                                                            isClearable={true}
                                                                            onChange={handleCaseChange}
                                                                            value={selectedCase}
                                                                            options={cases}
                                                                        />
                                                                    </div>
                                                                    <FieldError error={errors.firmCaseId}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Address</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="form-group">
                                                                <textarea
                                                                    rows={5}
                                                                    className="form-control"
                                                                    id="receiptAddress"
                                                                    name="receiptAddress"
                                                                    onChange={handleChange}
                                                                    placeholder="Enter Address"
                                                                    value={modelFields.receiptAddress || ""}
                                                                />
                                                                <FieldError error={errors.receiptAddress}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-fields-row">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <h3>Invoice</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="invoiceNumber"
                                                                    value={modelFields.invoiceNumber || ""}
                                                                    name="invoiceNumber"
                                                                    onChange={handleChange}
                                                                    placeholder="Invoice No."
                                                                />
                                                                <FieldError error={errors.invoiceNumber}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Invoice Date</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="form-group">
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    id="invoiceDate"
                                                                    value={modelFields.invoiceDate || ""}
                                                                    name="invoiceDate"
                                                                    onChange={handleChange}
                                                                    placeholder="Invoice Date"
                                                                />
                                                                <FieldError error={errors.invoiceDate}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Payment Terms</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="filter-select-box">
                                                                <div className="form-group">
                                                                    <div className="react-select">
                                                                        <CustomSelect
                                                                            placeholder="Select Payment Term"
                                                                            isClearable={true}
                                                                            onChange={handlePaymentTermChange}
                                                                            value={selectedPaymentTerm}
                                                                            options={paymentTerms}
                                                                        />
                                                                    </div>
                                                                    <FieldError error={errors.paymentTerm}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Due Date</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="form-group">
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    id="dueDate"
                                                                    value={modelFields.dueDate || ""}
                                                                    name="dueDate"
                                                                    onChange={handleChange}
                                                                    placeholder="Due Date"
                                                                />
                                                                <FieldError error={errors.dueDate}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Automated Reminders</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="filter-switch-box">
                                                                <div className="form-check form-switch">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="automatedReminders"
                                                                        checked={!!modelFields.automatedReminders}
                                                                        name="automatedReminders"
                                                                        value="1"
                                                                        onChange={handleChange}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-4">
                                                        <div className="col-lg-3">
                                                            <h3>Status</h3>
                                                        </div>
                                                        <div className="col-lg-7">
                                                            <div className="filter-select-box">
                                                                <div className="form-group">
                                                                    <div className="react-select">
                                                                        <CustomSelect
                                                                            placeholder="Select Status"
                                                                            isClearable={true}
                                                                            onChange={handleStatusChange}
                                                                            value={selectedStatus}
                                                                            options={statues}
                                                                        />
                                                                    </div>
                                                                    <FieldError error={errors.status}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="invoice-user-details-wrp">

                                        {
                                            selectedCaseModel != null ?
                                                <div className="invoice-ud-head">
                                                    <h3>{selectedCaseModel?.caseName}</h3>
                                                </div> : ''
                                        }

                                        <div className="invoice-ud-table">
                                            <div className="table-head">
                                                <div>
                                                    <h3>Flat fees</h3>
                                                </div>
                                            </div>
                                            <div className="common-table-wrapper mt-0">
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                        <tr>
                                                            <th className="removeInvoiceItem">&nbsp;</th>
                                                            <th>Date</th>
                                                            <th>Item</th>
                                                            <th>Notes</th>
                                                            <th className="amountTColumn">Amount</th>
                                                            <th className="smallTColumn"><small>Non Billable</small>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            invoiceItems.length > 0 ?
                                                                invoiceItems.map((flatFeeItem, i) => {
                                                                    return (
                                                                        (flatFeeItem.itemType === 'flatFee') ?
                                                                            <tr className={flatFeeItem.nonBillAble && flatFeeItem.nonBillAble == '1' ? 'non-billable' : ''}
                                                                                data-key={i} key={i}>
                                                                                <td className="removeInvoiceItem">
                                                                                    <a href="undefined"
                                                                                       onClick={() => removeInvoiceItem(flatFeeItem, i)}>
                                                                                        <i className="fa fa-remove"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="date"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, flatFeeItem, i)}
                                                                                           value={flatFeeItem.date || ""}
                                                                                           name="date"
                                                                                           className="form-control"
                                                                                           placeholder="Select Date"/>
                                                                                </td>
                                                                                <td className="havePad">{flatFeeItem.item}</td>
                                                                                <td>
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, flatFeeItem, i)}
                                                                                           value={flatFeeItem.notes || ""}
                                                                                           name="notes"
                                                                                           className="form-control"
                                                                                           placeholder="Enter Notes"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, flatFeeItem, i)}
                                                                                           value={flatFeeItem.total || ""}
                                                                                           name="total"
                                                                                           className="form-control"
                                                                                           placeholder="Enter Amount"/>
                                                                                </td>
                                                                                <td className="smallTColumn">
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox"
                                                                                               onChange={(e) => updateInvoiceItemValue(e, flatFeeItem, i)}
                                                                                               value="1"
                                                                                               checked={!!flatFeeItem.nonBillAble}
                                                                                               name="nonBillAble"
                                                                                               className="form-check-input"/>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            : ''
                                                                    )
                                                                })
                                                                :
                                                                <tr className="table-border-top">
                                                                    <td colSpan="6"
                                                                        className="notFoundTColumn havePad">No Flat
                                                                        Fee Lines Found
                                                                    </td>
                                                                </tr>
                                                        }
                                                        <tr className="table-border-top">
                                                            <td colSpan="6" className="havePad">
                                                                <a onClick={(e) => addInvoiceItem('flatFee')}
                                                                   className="add-ff-link"
                                                                   href="undefined">
                                                                    <i className="fa fa-plus"></i>Add Flat Fee Line</a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="invoice-ud-table">
                                            <div className="table-head">
                                                <div>
                                                    <h3>Time Entries</h3>
                                                </div>
                                            </div>
                                            <div className="common-table-wrapper mt-0">
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                        <tr>
                                                            <th className="removeInvoiceItem">&nbsp;</th>
                                                            <th>Date</th>
                                                            <th>Activity</th>
                                                            <th>Notes</th>
                                                            <th className="amountTColumn">Rate</th>
                                                            <th className="amountTColumn">Hour</th>
                                                            <th className="amountTColumn">Line Total</th>
                                                            <th className="smallTColumn"><small>Non Billable</small>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            invoiceItems.length > 0 ?
                                                                invoiceItems.map((timeEntryItem, i) => {
                                                                    return (
                                                                        (timeEntryItem.itemType === 'timeEntries') ?
                                                                            <tr className={timeEntryItem.nonBillAble && timeEntryItem.nonBillAble == '1' ? 'non-billable' : ''}
                                                                                data-key={i} key={i}>
                                                                                <td className="removeInvoiceItem">
                                                                                    <a href="undefined"
                                                                                       onClick={() => removeInvoiceItem(timeEntryItem, i)}>
                                                                                        <i className="fa fa-remove"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="date"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, timeEntryItem, i)}
                                                                                           value={timeEntryItem.date || ""}
                                                                                           name="date"
                                                                                           className="form-control"
                                                                                           placeholder="Select Date"/>
                                                                                </td>
                                                                                <td>
                                                                                    <CustomSelect
                                                                                        onChange={(e) => handleInvoiceItemChange(e, 'item', timeEntryItem, i)}
                                                                                        placeholder="Select Activity"
                                                                                        value={timeEntryItem.item}
                                                                                        isClearable={true}
                                                                                        options={activityTypes}/>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, timeEntryItem, i)}
                                                                                           value={timeEntryItem.notes || ""}
                                                                                           name="notes"
                                                                                           className="form-control"
                                                                                           placeholder="Notes"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, timeEntryItem, i)}
                                                                                           value={timeEntryItem.rate || ""}
                                                                                           name="rate"
                                                                                           className="form-control"
                                                                                           placeholder="Rate"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, timeEntryItem, i)}
                                                                                           value={timeEntryItem.duration || ""}
                                                                                           name="duration"
                                                                                           className="form-control"
                                                                                           placeholder="Duration"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, timeEntryItem, i)}
                                                                                           value={timeEntryItem.total || ""}
                                                                                           name="total"
                                                                                           className="form-control"
                                                                                           placeholder="Total"/>
                                                                                </td>
                                                                                <td className="smallTColumn">
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox"
                                                                                               onChange={(e) => updateInvoiceItemValue(e, timeEntryItem, i)}
                                                                                               value="1"
                                                                                               checked={!!timeEntryItem.nonBillAble}
                                                                                               name="nonBillAble"
                                                                                               className="form-check-input"/>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            : ''
                                                                    )
                                                                })
                                                                :
                                                                <tr className="table-border-top">
                                                                    <td colSpan="8"
                                                                        className="notFoundTColumn havePad">No Time
                                                                        Entries Found
                                                                    </td>
                                                                </tr>
                                                        }
                                                        <tr className="table-border-top">
                                                            <td colSpan="8" className="havePad">
                                                                <a onClick={(e) => addInvoiceItem('timeEntries')}
                                                                   className="add-ff-link"
                                                                   href="undefined">
                                                                    <i className="fa fa-plus"></i>Add Time Entry
                                                                    Line</a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="invoice-ud-table">
                                            <div className="table-head">
                                                <div>
                                                    <h3>Expense</h3>
                                                </div>
                                            </div>
                                            <div className="common-table-wrapper mt-0">
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                        <tr>
                                                            <th className="removeInvoiceItem">&nbsp;</th>
                                                            <th>Date</th>
                                                            <th>Expense</th>
                                                            <th>Notes</th>
                                                            <th className="amountTColumn">Cost</th>
                                                            <th className="amountTColumn">Quantity</th>
                                                            <th className="amountTColumn">Line Total</th>
                                                            <th className="smallTColumn"><small>Non Billable</small>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            invoiceItems.length > 0 ?
                                                                invoiceItems.map((expenseItem, i) => {
                                                                    return (
                                                                        (expenseItem.itemType === 'expenses') ?
                                                                            <tr className={expenseItem.nonBillAble && expenseItem.nonBillAble == '1' ? 'non-billable' : ''}
                                                                                data-key={i} key={i}>
                                                                                <td className="removeInvoiceItem">
                                                                                    <a href="undefined"
                                                                                       onClick={() => removeInvoiceItem(expenseItem, i)}>
                                                                                        <i className="fa fa-remove"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="date"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, expenseItem, i)}
                                                                                           value={expenseItem.date || ""}
                                                                                           name="date"
                                                                                           className="form-control"
                                                                                           placeholder="Select Date"/>
                                                                                </td>
                                                                                <td>
                                                                                    <CustomSelect
                                                                                        onChange={(e) => handleInvoiceItemChange(e, 'item', expenseItem, i)}
                                                                                        placeholder="Select Activity"
                                                                                        value={expenseItem.item}
                                                                                        isClearable={true}
                                                                                        options={activityTypes}/>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, expenseItem, i)}
                                                                                           value={expenseItem.notes || ""}
                                                                                           name="notes"
                                                                                           className="form-control"
                                                                                           placeholder="Notes"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, expenseItem, i)}
                                                                                           value={expenseItem.rate || ""}
                                                                                           name="rate"
                                                                                           className="form-control"
                                                                                           placeholder="Cost"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, expenseItem, i)}
                                                                                           value={expenseItem.quantity || ""}
                                                                                           name="quantity"
                                                                                           className="form-control"
                                                                                           placeholder="Quantity"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, expenseItem, i)}
                                                                                           value={expenseItem.total || ""}
                                                                                           name="total"
                                                                                           className="form-control"
                                                                                           placeholder="Total"/>
                                                                                </td>
                                                                                <td className="smallTColumn">
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox"
                                                                                               onChange={(e) => updateInvoiceItemValue(e, expenseItem, i)}
                                                                                               value="1"
                                                                                               checked={!!expenseItem.nonBillAble}
                                                                                               name="nonBillAble"
                                                                                               className="form-check-input"/>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            : ''
                                                                    )
                                                                })
                                                                :
                                                                <tr className="table-border-top">
                                                                    <td colSpan="8"
                                                                        className="notFoundTColumn havePad">No
                                                                        Expenses Found
                                                                    </td>
                                                                </tr>
                                                        }
                                                        <tr className="table-border-top">
                                                            <td colSpan="8" className="havePad">
                                                                <a onClick={(e) => addInvoiceItem('expenses')}
                                                                   className="add-ff-link"
                                                                   href="undefined">
                                                                    <i className="fa fa-plus"></i>Add Expense</a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="invoice-ud-table">
                                            <div className="table-head">
                                                <div>
                                                    <h3>Adjustments</h3>
                                                </div>
                                            </div>
                                            <div className="common-table-wrapper mt-0">
                                                <div className="table-responsive">
                                                    <table className="table mb-0">
                                                        <thead>
                                                        <tr>
                                                            <th className="removeInvoiceItem">&nbsp;</th>
                                                            <th>Item</th>
                                                            <th>Applied To</th>
                                                            <th>Type</th>
                                                            <th>Notes</th>
                                                            <th className="amountTColumn">Basis</th>
                                                            <th className="amountTColumn">Percentage</th>
                                                            <th className="amountTColumn">Amount</th>
                                                            <th className="smallTColumn"><small>&nbsp;</small>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {
                                                            invoiceItems.length > 0 ?
                                                                invoiceItems.map((adjustmentItem, i) => {
                                                                    return (
                                                                        (adjustmentItem.itemType === 'adjustments') ?
                                                                            <tr className={adjustmentItem.nonBillAble && adjustmentItem.nonBillAble == '1' ? 'non-billable' : ''}
                                                                                data-key={i} key={i}>
                                                                                <td className="removeInvoiceItem">
                                                                                    <a href="undefined"
                                                                                       onClick={() => removeInvoiceItem(adjustmentItem, i)}>
                                                                                        <i className="fa fa-remove"></i>
                                                                                    </a>
                                                                                </td>
                                                                                <td>
                                                                                    <CustomSelect
                                                                                        onChange={(e) => handleInvoiceItemChange(e, 'item', adjustmentItem, i)}
                                                                                        placeholder="Item"
                                                                                        value={adjustmentItem.item}
                                                                                        isClearable={true}
                                                                                        options={adjustmentTypes}/>
                                                                                </td>
                                                                                <td>
                                                                                    <CustomSelect
                                                                                        onChange={(e) => handleInvoiceItemChange(e, 'appliedTo', adjustmentItem, i)}
                                                                                        placeholder="Applied to"
                                                                                        value={adjustmentItem.appliedTo}
                                                                                        isClearable={true}
                                                                                        options={appliedTo}/>
                                                                                </td>
                                                                                <td>
                                                                                    <CustomSelect
                                                                                        onChange={(e) => handleInvoiceItemChange(e, 'amountType', adjustmentItem, i)}
                                                                                        placeholder="Amount Type"
                                                                                        value={adjustmentItem.amountType}
                                                                                        isClearable={true}
                                                                                        options={priceTypes}/>
                                                                                </td>
                                                                                <td>
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, adjustmentItem, i)}
                                                                                           value={adjustmentItem.notes || ""}
                                                                                           name="notes"
                                                                                           className="form-control"
                                                                                           placeholder="Notes"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, adjustmentItem, i)}
                                                                                           value={adjustmentItem.basis || ""}
                                                                                           name="basis"
                                                                                           disabled={adjustmentItem.amountType === 'flat'}
                                                                                           className="form-control"
                                                                                           placeholder="-"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, adjustmentItem, i)}
                                                                                           value={adjustmentItem.percentage || ""}
                                                                                           name="percentage"
                                                                                           disabled={adjustmentItem.amountType === 'flat'}
                                                                                           className="form-control"
                                                                                           placeholder="-"/>
                                                                                </td>
                                                                                <td className="amountTColumn">
                                                                                    <input type="text"
                                                                                           onChange={(e) => updateInvoiceItemValue(e, adjustmentItem, i)}
                                                                                           value={adjustmentItem.total || ""}
                                                                                           name="total"
                                                                                           disabled={adjustmentItem.amountType === 'percentage'}
                                                                                           className="form-control"
                                                                                           placeholder="Total"/>
                                                                                </td>
                                                                                <td className="smallTColumn">
                                                                                    <div className="form-check">
                                                                                        <input type="checkbox"
                                                                                               onChange={(e) => updateInvoiceItemValue(e, adjustmentItem, i)}
                                                                                               value="1"
                                                                                               checked={!!adjustmentItem.nonBillAble}
                                                                                               name="nonBillAble"
                                                                                               className="form-check-input"/>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            : ''
                                                                    )
                                                                })
                                                                :
                                                                <tr className="table-border-top">
                                                                    <td colSpan="9"
                                                                        className="notFoundTColumn havePad">No
                                                                        Adjustments Found
                                                                    </td>
                                                                </tr>
                                                        }
                                                        <tr className="table-border-top">
                                                            <td colSpan="9" className="havePad">
                                                                <a onClick={(e) => addInvoiceItem('adjustments')}
                                                                   className="add-ff-link" href="undefined">
                                                                    <i className="fa fa-plus"></i>Add Adjustment</a>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="invoice-total-wrp">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h3>Invoice totals</h3>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="invoice-total-stats">
                                                        <div className="inv-stat-row">
                                                            <p>Flat Fee Sub-Total</p>
                                                            <p>{formatAmount(invoiceSummary?.flatFeeTotal, '-')}</p>
                                                        </div>
                                                        <div className="inv-stat-row">
                                                            <p>Time Entry Sub-Total</p>
                                                            <p>{formatAmount(invoiceSummary?.timeEntriesTotal, '-')}</p>
                                                        </div>
                                                        <div className="inv-stat-row">
                                                            <p>Expense Sub-Total</p>
                                                            <p>{formatAmount(invoiceSummary?.expensesTotal, '-')}</p>
                                                        </div>
                                                        <div className="inv-stat-row">
                                                            <h5>Sub - Total</h5>
                                                            <h5>{formatAmount(invoiceSummary?.subTotal, '-')}</h5>
                                                        </div>

                                                        <div className="inv-stat-row border-top">&nbsp;</div>

                                                        {
                                                            (invoiceSummary?.balanceForwardedTotal > 0) ?
                                                                <div className="inv-stat-row">
                                                                    <p>Balance Forward</p>
                                                                    <p>{formatAmount(invoiceSummary?.balanceForwardedTotal, '-')}</p>
                                                                </div>
                                                                : ''
                                                        }

                                                        {
                                                            (invoiceSummary?.additions > 0) ?
                                                                <div className="inv-stat-row">
                                                                    <p>Additions</p>
                                                                    <p>{formatAmount(invoiceSummary?.additions, '-')}</p>
                                                                </div>
                                                                : ''
                                                        }

                                                        {
                                                            (invoiceSummary?.interests > 0) ?
                                                                <div className="inv-stat-row">
                                                                    <p>Interests</p>
                                                                    <p>{formatAmount(invoiceSummary?.interests, '-')}</p>
                                                                </div>
                                                                : ''
                                                        }

                                                        {
                                                            (invoiceSummary?.taxes > 0) ?
                                                                <div className="inv-stat-row">
                                                                    <p>Taxes</p>
                                                                    <p>{formatAmount(invoiceSummary?.taxes, '-')}</p>
                                                                </div>
                                                                : ''
                                                        }

                                                        {
                                                            (invoiceSummary?.discounts > 0) ?
                                                                <div className="inv-stat-row">
                                                                    <p>Discounts</p>
                                                                    <p>{formatAmount(invoiceSummary?.discounts, '-')}</p>
                                                                </div>
                                                                : ''
                                                        }

                                                        <div className="inv-stat-row">
                                                            <h5>Total</h5>
                                                            <h5>{formatAmount(invoiceSummary?.total, '-')}</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="invoice-total-wrp">
                                                    <p>Terms and Conditions</p>
                                                    <div className="form-group">
                                                                <textarea
                                                                    rows={5}
                                                                    className="form-control"
                                                                    id="terms"
                                                                    name="terms"
                                                                    onChange={handleChange}
                                                                    placeholder="Enter Terms and Conditions"
                                                                    value={modelFields.terms || ""}
                                                                />
                                                        <FieldError error={errors.terms}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="invoice-total-wrp">
                                                    <p>Notes ( will shared with Client )</p>
                                                    <div className="form-group">
                                                                <textarea
                                                                    rows={5}
                                                                    className="form-control"
                                                                    id="notes"
                                                                    name="notes"
                                                                    onChange={handleChange}
                                                                    placeholder="Enter Notes"
                                                                    value={modelFields.notes || ""}
                                                                />
                                                        <FieldError error={errors.notes}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="cancel-submit-btn-group">
                                                    <Link to="/invoices" className="btn black-fill"
                                                          type="button">Cancel</Link>
                                                    <button onClick={submit} className="btn black-fill ms-2"
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

                </div>
            </section>
        </>

    )

}
