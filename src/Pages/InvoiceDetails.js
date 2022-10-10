import React, {useEffect, useMemo, useState} from "react";
import {
    formatAmount,
    formatDate, getObjectValue,
    hideLoading, printCamelCaseText,
    showLoading
} from "../Utils/Helpers";
import {toast} from "react-toastify";
import * as invoiceActions from "../Services/Actions/InvoiceActions";
import {Link, useNavigate, useParams} from "react-router-dom";

export const InvoiceDetails = (props) => {
    const navigate = useNavigate();

    const {modelId} = useParams();

    const [invoiceItems, setInvoiceItems] = useState([]);

    const [modelFields, setModelFields] = useState({});

    const selectDefaultValues = () => {

    }

    useEffect(() => {
        selectDefaultValues();
    }, [
        modelFields
    ]);

    useEffect(() => {
        if (modelId !== undefined) {
            showLoading();
            invoiceActions.view(modelId, {
                populate: ["firmId", "firmCaseId"]
            }).then(res => {
                hideLoading();
                setModelFields(res);
                setInvoiceItems(res.invoiceItems);
            }).catch(err => {
                toast('Failed to load');
                hideLoading();
                navigate('/invoices');
            });
        } else {
            navigate('/invoices');
        }
    }, [modelId]);

    const haveItemType = (itemType) => {
        if (invoiceItems.length > 0) {
            for (let invoiceItem of invoiceItems) {
                if (invoiceItem.itemType === itemType) {
                    return true;
                }
            }
        }
        return false;
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
                                        <h3>Invoice Details</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/invoices/${modelFields?._id}/edit`}>
                                            <button
                                                className="btn black-fill"
                                                type="button">
                                                Edit
                                            </button>
                                        </Link>
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
                        <div className="col-12" id="invoiceWrapper">

                            <div className="cs-containers invoice-cs">
                                <div className="cs-invoice cs-style1">
                                    <div
                                        className={`invoice-badge ${modelFields?.status}`}>{printCamelCaseText(modelFields?.status)}</div>
                                    <div className="cs-invoice_in" id="download_section">
                                        <div className="cs-invoice_head cs-type1 cs-mb25">
                                            <div className="cs-invoice_left">
                                                <br/>
                                                <p className="cs-invoice_number cs-primary_color cs-mb0 cs-f22"><b
                                                    className="cs-primary_color">Invoice:</b> {modelFields?.invoiceNumber}
                                                </p>
                                            </div>
                                            <div className="cs-invoice_right cs-text_right">
                                                <div className="cs-logo cs-mb5"><img
                                                    src="/assets/img/main-logo.png"
                                                    alt="Logo"/></div>
                                            </div>
                                        </div>
                                        <div className="cs-box2_wrap cs-mb30">
                                            <div className="cs-box">
                                                <div className="mb-3 cs-box cs-style2">
                                                    <h5 className="invoiceReceiptName">{modelFields?.firmId?.firmName}</h5>
                                                    <p className="invoiceData"><strong>Reg
                                                        No:</strong> {modelFields?.firmId?.companyRegNo}</p>
                                                </div>
                                                <div className="cs-box cs-style2">
                                                    <h5 className="invoiceReceiptName">{modelFields?.receiptName}</h5>
                                                    <p className="invoiceData">{modelFields?.receiptAddress}</p>
                                                </div>
                                            </div>
                                            <div className="p-0 cs-box cs-style2">
                                                <table className="invoiceHeadTable">
                                                    <tbody>
                                                    <tr className="cs-border_none">
                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Invoice
                                                            Date:
                                                        </td>
                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatDate(modelFields?.invoiceDate)}</td>
                                                    </tr>
                                                    <tr className="cs-border_none">
                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Due
                                                            Date:
                                                        </td>
                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatDate(modelFields?.dueDate)}</td>
                                                    </tr>
                                                    <tr className="cs-border_none">
                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Balance
                                                            Due:
                                                        </td>
                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.payableAmount - modelFields?.paidAmount)}</td>
                                                    </tr>
                                                    {
                                                        modelFields?.firmCaseId != null ?
                                                            <tr className="cs-border_none">
                                                                <td className="cs-width_3 cs-border_top_0  cs-primary_color">Case:</td>
                                                                <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{modelFields?.firmCaseId?.caseName}</td>
                                                            </tr>
                                                            : ''
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>


                                        {
                                            haveItemType('flatFee') ?
                                                <>
                                                    <div className="cs-table cs-style2 cs-mb30">
                                                        <h5 className="tableTitle">Flat Fee</h5>
                                                        <div className="cs-round_border">
                                                            <div className="cs-table_responsive">
                                                                <table>
                                                                    <thead>
                                                                    <tr className="cs-focus_bg">
                                                                        <th className="cs-semi_bold cs-primary_color">Date</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Item</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Notes</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_right">Amount</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                        invoiceItems.map((flatFeeItem, i) => {
                                                                            return (
                                                                                (flatFeeItem.itemType === 'flatFee') ?
                                                                                    <tr className={!flatFeeItem.isNonBillable ? 'non-billable' : ''}
                                                                                        data-key={i} key={i}>
                                                                                        <td className="">{formatDate(flatFeeItem.date)}</td>
                                                                                        <td className="">{flatFeeItem.item}</td>
                                                                                        <td className="">{flatFeeItem.notes}</td>
                                                                                        <td className="cs-text_right">{formatAmount(flatFeeItem.total)}</td>
                                                                                    </tr>
                                                                                    : ''
                                                                            )
                                                                        })
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </> : ''
                                        }


                                        {
                                            haveItemType('timeEntries') ?
                                                <>
                                                    <div className="cs-table cs-style2 cs-mb30">
                                                        <h5 className="tableTitle">Time Entries</h5>
                                                        <div className="cs-round_border">
                                                            <div className="cs-table_responsive">
                                                                <table>
                                                                    <thead>
                                                                    <tr className="cs-focus_bg">
                                                                        <th className="cs-semi_bold cs-primary_color">Date</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Activity</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Notes</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_center">Rate</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_center">Hour</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_right">Total</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                        invoiceItems.map((timeEntryItem, i) => {
                                                                            return (
                                                                                (timeEntryItem.itemType === 'timeEntries') ?
                                                                                    <tr className={!timeEntryItem.isNonBillable ? 'non-billable' : ''}
                                                                                        data-key={i} key={i}>
                                                                                        <td className="">{formatDate(timeEntryItem.date)}</td>
                                                                                        <td className="">{timeEntryItem.item}</td>
                                                                                        <td className="">{timeEntryItem.notes}</td>
                                                                                        <td className="cs-text_center">{formatAmount(timeEntryItem.rate)}</td>
                                                                                        <td className="cs-text_center">{(timeEntryItem.duration)}</td>
                                                                                        <td className="cs-text_right">{formatAmount(timeEntryItem.total)}</td>
                                                                                    </tr>
                                                                                    : ''
                                                                            )
                                                                        })
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </> : ''
                                        }

                                        {
                                            haveItemType('expenses') ?
                                                <>
                                                    <div className="cs-table cs-style2 cs-mb30">
                                                        <h5 className="tableTitle">Expenses</h5>
                                                        <div className="cs-round_border">
                                                            <div className="cs-table_responsive">
                                                                <table>
                                                                    <thead>
                                                                    <tr className="cs-focus_bg">
                                                                        <th className="cs-semi_bold cs-primary_color">Date</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Expense</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Notes</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_center">Cost</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_center">Quantity</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_right">Total</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                        invoiceItems.map((expenseItem, i) => {
                                                                            return (
                                                                                (expenseItem.itemType === 'expenses') ?
                                                                                    <tr className={!expenseItem.isNonBillable ? 'non-billable' : ''}
                                                                                        data-key={i} key={i}>
                                                                                        <td className="">{formatDate(expenseItem.date)}</td>
                                                                                        <td className="">{expenseItem.item}</td>
                                                                                        <td className="">{expenseItem.notes}</td>
                                                                                        <td className="cs-text_center">{formatAmount(expenseItem.rate)}</td>
                                                                                        <td className="cs-text_center">{(expenseItem.quantity)}</td>
                                                                                        <td className="cs-text_right">{formatAmount(expenseItem.total)}</td>
                                                                                    </tr>
                                                                                    : ''
                                                                            )
                                                                        })
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </> : ''
                                        }


                                        {
                                            haveItemType('adjustments') ?
                                                <>
                                                    <div className="cs-table cs-style2 cs-mb30">
                                                        <h5 className="tableTitle">Adjustments</h5>
                                                        <div className="cs-round_border">
                                                            <div className="cs-table_responsive">
                                                                <table>
                                                                    <thead>
                                                                    <tr className="cs-focus_bg">
                                                                        <th className="cs-semi_bold cs-primary_color">Item</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Applied
                                                                            To
                                                                        </th>
                                                                        <th className="cs-semi_bold cs-primary_color">Type</th>
                                                                        <th className="cs-semi_bold cs-primary_color">Notes</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_center">Basis</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_center">Percentage</th>
                                                                        <th className="cs-semi_bold cs-primary_color cs-text_right">Total</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    {
                                                                        invoiceItems.map((adjustmentItem, i) => {
                                                                            return (
                                                                                (adjustmentItem.itemType === 'adjustments') ?
                                                                                    <tr className={!adjustmentItem.isNonBillable ? 'non-billable' : ''}
                                                                                        data-key={i} key={i}>
                                                                                        <td className="">{adjustmentItem.item}</td>
                                                                                        <td className="">{adjustmentItem.appliedTo}</td>
                                                                                        <td className="">{adjustmentItem.amountType}</td>
                                                                                        <td className="">{adjustmentItem.notes}</td>
                                                                                        <td className="cs-text_center">{formatAmount(adjustmentItem.basis)}</td>
                                                                                        <td className="cs-text_center">{(adjustmentItem.percentage)}</td>
                                                                                        <td className="cs-text_right">{formatAmount(adjustmentItem.total)}</td>
                                                                                    </tr>
                                                                                    : ''
                                                                            )
                                                                        })
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </> : ''
                                        }


                                        <div className="cs-table cs-style2 cs-mb30">
                                            <div className="cs-invoice_footer">
                                                {
                                                    (
                                                        getObjectValue(modelFields?.terms) !== null ||
                                                        getObjectValue(modelFields?.notes) !== null
                                                    ) ?
                                                        <div className="cs-left_footer">
                                                            <div className="cs-round_border">
                                                                <table>
                                                                    <tbody>
                                                                    {
                                                                        (getObjectValue(modelFields?.terms) !== null) ?
                                                                            <tr className="cs-border_none">
                                                                                <td>
                                                                                    <h6>Terms and Conditions</h6>
                                                                                    <p>{modelFields?.terms}</p>
                                                                                </td>
                                                                            </tr>
                                                                            : ''
                                                                    }
                                                                    {
                                                                        (getObjectValue(modelFields?.notes) !== null) ?
                                                                            <tr className="cs-border_none">
                                                                                <td>
                                                                                    <h6>Notes</h6>
                                                                                    <p>{modelFields?.notes}</p>
                                                                                </td>
                                                                            </tr> : ''
                                                                    }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        : ''
                                                }
                                                <div className="cs-right_footer">
                                                    <div className="cs-round_border">
                                                        <table className="invoiceSummaryTable">
                                                            <tbody>
                                                            {
                                                                haveItemType('adjustments') ?
                                                                    <>
                                                                        <tr className="cs-border_none">
                                                                            <td className="cs-width_3 cs-border_top_0  cs-primary_color">Flat
                                                                                Fee Total:
                                                                            </td>
                                                                            <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.flatFeeTotal)}</td>
                                                                        </tr>
                                                                    </>
                                                                    : ''
                                                            }
                                                            {
                                                                haveItemType('timeEntries') ?
                                                                    <>
                                                                        <tr className="cs-border_none">
                                                                            <td className="cs-width_3 cs-border_top_0  cs-primary_color">Time
                                                                                Entries Total:
                                                                            </td>
                                                                            <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.timeEntriesTotal)}</td>
                                                                        </tr>
                                                                    </>
                                                                    : ''
                                                            }
                                                            {
                                                                haveItemType('expenses') ?
                                                                    <>
                                                                        <tr className="cs-border_none">
                                                                            <td className="cs-width_3 cs-border_top_0  cs-primary_color">Expenses
                                                                                Total:
                                                                            </td>
                                                                            <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.expensesTotal)}</td>
                                                                        </tr>
                                                                    </>
                                                                    : ''
                                                            }

                                                            <tr className="cs-border_none">
                                                                <td className="cs-width_3 cs-semi_bold cs-border_top_0  cs-primary_color">
                                                                    SubTotal:
                                                                </td>
                                                                <td className="cs-width_3 cs-semi_bold cs-border_top_0 cs-text_right">
                                                                    {formatAmount(modelFields?.subTotal)}
                                                                </td>
                                                            </tr>

                                                            {
                                                                (modelFields?.additions > 0) ?
                                                                    <tr className="cs-border_none">
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Additions:</td>
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.additions)}</td>
                                                                    </tr>
                                                                    : ''
                                                            }

                                                            {
                                                                (modelFields?.taxes > 0) ?
                                                                    <tr className="cs-border_none">
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Taxes:</td>
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.taxes)}</td>
                                                                    </tr>
                                                                    : ''
                                                            }

                                                            {
                                                                (modelFields?.interests > 0) ?
                                                                    <tr className="cs-border_none">
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Interests:</td>
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">{formatAmount(modelFields?.interests)}</td>
                                                                    </tr>
                                                                    : ''
                                                            }

                                                            {
                                                                (modelFields?.discounts > 0) ?
                                                                    <tr className="cs-border_none">
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color">Discounts:</td>
                                                                        <td className="cs-width_3 cs-border_top_0  cs-primary_color cs-text_right">-{formatAmount(modelFields?.discounts)}</td>
                                                                    </tr>
                                                                    : ''
                                                            }

                                                            <tr className="cs-border_none">
                                                                <td className="cs-width_3 cs-border_top_0  cs-primary_color"
                                                                    colSpan="2">&nbsp;</td>
                                                            </tr>

                                                            <tr className="cs-border_none total">
                                                                <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color">Amount:</td>
                                                                <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color cs-text_right">{formatAmount(modelFields?.payableAmount)}</td>
                                                            </tr>

                                                            <tr className="cs-border_none total">
                                                                <td className="cs-width_3 cs-border_top_0  cs-f16 cs-primary_color">Paid
                                                                    Amount:
                                                                </td>
                                                                <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 text-success cs-text_right">{formatAmount(modelFields?.paidAmount)}</td>
                                                            </tr>

                                                            <tr className="cs-border_none total">
                                                                <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color">Due
                                                                    Amount:
                                                                </td>
                                                                <td className="cs-width_3 cs-border_top_0 cs-bold cs-f16 cs-primary_color cs-text_right">{formatAmount(modelFields?.payableAmount - modelFields?.paidAmount)}</td>
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


                        </div>
                    </div>

                </div>
            </section>
        </>

    )

}
