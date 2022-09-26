import { React, useEffect, useState } from "react";



const AddInvoice = () => {

    return (
        <>
            <section className="admin-wrapper">
                <div className="saidebar-wrapper">
                    <div className="saidebar-main-logo">
                        <img src="/assets/img/main-logo.png" alt="" />
                    </div>
                    <div className="falex-shrink-0 ">
                        <ul className="laist-unstyled ps-0">
                            <li className=""a>
                                <button className="batn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#user-collapse" aria-expanded="false">
                                    User Management<i className="faa fa-caret-down"></i>
                                </button>
                                <div className="caollapse" id="user-collapse">
                                    <ul className="batn-toggle-nav">
                                        <li className=""a><a href="index.html" className="laink-dark rounded">Manage Client </a></li>
                                        <li><a href="add-client.html" className="laink-dark rounded">Add Client</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=""a>
                                <button className="batn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#firm-collapse" aria-expanded="false">
                                    Case Management<i className="faa fa-caret-down"></i>
                                </button>
                                <div className="caollapse" id="firm-collapse">
                                    <ul className="batn-toggle-nav">
                                        <li className=""a><a href="my-cases.html" className="laink-dark rounded">My Cases</a></li>
                                        <li><a href="add-case.html" className="laink-dark rounded">Add new case</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=""a>
                                <button className="batn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#manexpert-collapse" aria-expanded="false">
                                    Activity Management<i className="faa fa-caret-down"></i>
                                </button>
                                <div className="caollapse" id="manexpert-collapse">
                                    <ul className="batn-toggle-nav">
                                        <li className=""a><a href="time-exp.html" className="laink-dark rounded">Time & Expenses entry</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="active">
                                <button className="batn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#case-collapse" aria-expanded="false">
                                    Financial Management<i className="faa fa-caret-down"></i>
                                </button>
                                <div className="caollapse show" id="case-collapse">
                                    <ul className="batn-toggle-nav">
                                        <li className=""a><a href="view-invoice.html" className="laink-dark rounded">View Invoices</a></li>
                                        <li className="active"><a href="add-invoice.html" className="laink-dark rounded">Add new Invoice</a></li>
                                        <li><a href="view-req-fund.html" className="laink-dark rounded">View Requested Funds</a></li>
                                        <li><a href="add-req-fund.html" className="laink-dark rounded">Add new Request fund</a></li>
                                        <li><a href="statement.html" className="laink-dark rounded">Statement</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=""a>
                                <button className="batn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#activity-collapse" aria-expanded="false">
                                    Calendaring<i className="faa fa-caret-down"></i>
                                </button>
                                <div className="caollapse" id="activity-collapse">
                                    <ul className="batn-toggle-nav">
                                        <li><a href="event.html" className="laink-dark rounded">Events</a>
                                        </li>
                                        <li><a href="add-event.html" className="laink-dark rounded">Add Event</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li className=""a>
                                <button className="batn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#financial-collapse" aria-expanded="false">
                                    HR / Payroll <i className="faa fa-caret-down"></i>
                                </button>
                                <div className="caollapse" id="financial-collapse">
                                    <ul className="batn-toggle-nav">
                                        <li className=""a><a href="manage-employe.html" className="laink-dark rounded">Manage Employee</a></li>
                                        <li><a href="add-employee.html" className="laink-dark rounded">Add Employee</a></li>
                                        <li><a href="manage-role.html" className="laink-dark rounded">Manage Role</a></li>
                                        <li><a href="add-role.html" className="laink-dark rounded">Add Role</a></li>
                                        <li><a href="manage-salaries.html" className="laink-dark rounded">Manage Salaries</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=""a>
                                <a href="manage-subscription.html"><button className="batn btn-toggle align-items-center rounded">
                                    Manage Subscription
                                </button></a>
                            </li>
                            <li className=""a>
                                <a href="settings.html"><button className="batn btn-toggle align-items-center rounded">
                                    Settings
                                </button></a>
                            </li>
                        </ul>
                    </div>
                    <div className="laogut-sidebar-wrp">
                        <a href={undefined}>Logout</a>
                    </div>
                </div>


                <div className="admin-content-wrapper">
                    <div className="admin-title-header">
                        <div className="raow">
                            <div className="caol-lg-9">
                                <div className=""a>
                                    <div className="admin-title-flex">
                                        <h3>Create new invoice</h3>
                                        <ul className="archive-ul">
                                            <li className="active"><a href={undefined}>From open balance</a></li>
                                            <li><a href={undefined}>From scratch</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="caol-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="taable-btn-group">
                                        <a href="view-invoice.html"><button className="batn " type="button">Back</button></a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="raow mt-4">
                        <div className="caol-lg-12">
                            <div className="baasic-info-wrp">
                                <div className="admin-white-box p-0">
                                    <div className="faorm-feilds-container pt-4">
                                        <div className="raow">
                                            <div className="caol-lg-6">
                                                <div className="faorm-fields-row">
                                                    <div className="raow">
                                                        <div className="caol-lg-3">
                                                            <h3>Cleint Name</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <div className="failter-input-box">
                                                                <input type="text" className="faorm-control" placeholder="Vaibhav Jagtap" />
                                                                <img src="/assets/img/search-icon.png" alt="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Matter</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <select className="faorm-select">
                                                                <option selected="">John Deo matter</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Address</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <div className="faorm-group">
                                                                <textarea name="" className="faorm-control" id="" cols="30" rows="3" placeholder="Add Notes"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="caol-lg-6">
                                                <div className="faorm-fields-row">
                                                    <div className="raow">
                                                        <div className="caol-lg-3">
                                                            <h3>Invoice</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <div className="failter-input-box">
                                                                <input type="text" className="faorm-control" placeholder="00909" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Invoice Date</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <div className="failter-input-box">
                                                                <input type="date" className="faorm-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Payment terms</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <select className="faorm-select">
                                                                <option selected="">Please Select</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Invoice Date</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <div className="failter-input-box">
                                                                <input type="date" className="faorm-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Automated Reminders</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <div className="failter-switch-box">
                                                                <div className="faorm-check form-switch">
                                                                    <input className="faorm-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                                    <label htmlFor="">Show only my cases</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4">
                                                        <div className="caol-lg-3">
                                                            <h3>Status</h3>
                                                        </div>
                                                        <div className="caol-lg-7">
                                                            <select className="faorm-select">
                                                                <option selected="">Please Select</option>
                                                                <option value="1">Sent</option>
                                                                <option value="2">Unsent</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="raow mt-4 align-items-center ">
                                                        <div className="caol-lg-3">
                                                            <h3>Filter by date range</h3>
                                                        </div>
                                                        <div className="caol-lg-3">
                                                            <div className="failter-input-box">
                                                                <input type="date" className="faorm-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                        <div className="caol-lg-1">
                                                            <p>To</p>
                                                        </div>
                                                        <div className="caol-lg-3">
                                                            <div className="failter-input-box">
                                                                <input type="date" className="faorm-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ianvoice-user-details-wrp">
                                        <div className="ianvoice-ud-head">
                                            <h3>John Doe Matters</h3>
                                        </div>
                                        <div className="ianvoice-ud-table">
                                            <div className="taable-head">
                                                <div>
                                                    <h3>Flat fees</h3>
                                                </div>
                                                <div><a href={undefined}><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div className="caommon-table-wrapper mt-0">
                                                <div className="taable-responsive">
                                                    <table className="taable mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>EE</th>
                                                                <th>Employee</th>
                                                                <th>Item</th>
                                                                <th>Flat fee notes</th>
                                                                <th>Amount</th>
                                                                <th>Non billable</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h5>03 / 08 / 2021</h5>
                                                                </td>
                                                                <td>
                                                                    <select className="faorm-select" aria-label="Default select example">
                                                                        <option selected="">Please Select</option>
                                                                        <option value="1">AA</option>
                                                                        <option value="2">BB</option>
                                                                        <option value="3">CC</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select className="faorm-select" aria-label="Default select example">
                                                                        <option selected="">Please Select</option>
                                                                        <option value="1">Vaibhav Jagtap</option>
                                                                        <option value="2">Vaibhav Jagtap</option>
                                                                        <option value="3">Vaibhav Jagtap</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <h6>Flat free</h6>
                                                                </td>
                                                                <td>
                                                                    &nbsp;
                                                                </td>
                                                                <td>
                                                                    <h6>300.00</h6>
                                                                </td>
                                                                <td className=""a>
                                                                    <div className="faorm-check">
                                                                        <input type="checkbox" className="faorm-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ianvoice-ud-table">
                                            <div className="taable-head">
                                                <div>
                                                    <h3>Flat fees</h3>
                                                </div>
                                                <div><a href={undefined}><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div className="caommon-table-wrapper mt-0">
                                                <div className="taable-responsive">
                                                    <table className="taable mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>EE</th>
                                                                <th>Employee</th>
                                                                <th>Item</th>
                                                                <th>Flat fee notes</th>
                                                                <th>Amount</th>
                                                                <th>Non billable</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h5>03 / 08 / 2021</h5>
                                                                </td>
                                                                <td>
                                                                    <select className="faorm-select" aria-label="Default select example">
                                                                        <option selected="">Please Select</option>
                                                                        <option value="1">AA</option>
                                                                        <option value="2">BB</option>
                                                                        <option value="3">CC</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select className="faorm-select" aria-label="Default select example">
                                                                        <option selected="">Please Select</option>
                                                                        <option value="1">Vaibhav Jagtap</option>
                                                                        <option value="2">Vaibhav Jagtap</option>
                                                                        <option value="3">Vaibhav Jagtap</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <h6>Flat free</h6>
                                                                </td>
                                                                <td>
                                                                    &nbsp;
                                                                </td>
                                                                <td>
                                                                    <h6>300.00</h6>
                                                                </td>
                                                                <td className=""a>
                                                                    <div className="faorm-check">
                                                                        <input type="checkbox" className="faorm-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="taable-border-top">
                                                                <td colspan="7">
                                                                    <a className="add-ff-link" href={undefined}><i className="faa fa-plus"></i>Add Flat fee line</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ianvoice-ud-table">
                                            <div className="taable-head">
                                                <div>
                                                    <h3>Time Entries</h3>
                                                </div>
                                                <div><a href={undefined}><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div className="caommon-table-wrapper mt-0">
                                                <div className="taable-responsive">
                                                    <table className="taable mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>EE</th>
                                                                <th>Employee</th>
                                                                <th>Activity</th>
                                                                <th>Time Entry notes</th>
                                                                <th>Rate</th>
                                                                <th>Hours</th>
                                                                <th>Line total</th>
                                                                <th>Non Billable</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="8">
                                                                    <p className="taext-center">The matter has no unbillable time entries</p>
                                                                </td>
                                                                <td className=""a>
                                                                    <div className="faorm-check">
                                                                        <input type="checkbox" className="faorm-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="taable-border-top">
                                                                <td colspan="2">
                                                                    <a className="add-ff-link" href={undefined}><i className="faa fa-plus"></i>Add Flat fee line</a>
                                                                </td>
                                                                <td colspan="2">
                                                                    <h6>John Doe matter totals</h6>
                                                                </td>
                                                                <td colspan="3">
                                                                    <h6>0.0</h6>
                                                                </td>
                                                                <td className="taext-start" colspan="3">
                                                                    <h6>$ 0.0</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ianvoice-ud-table">
                                            <div className="taable-head">
                                                <div>
                                                    <h3>Expences   </h3>
                                                </div>
                                                <div><a href={undefined}><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div className="caommon-table-wrapper mt-0">
                                                <div className="taable-responsive">
                                                    <table className="taable mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Date</th>
                                                                <th>EE</th>
                                                                <th>Employee</th>
                                                                <th>Activity</th>
                                                                <th>Time Entry notes</th>
                                                                <th>Rate</th>
                                                                <th>Hours</th>
                                                                <th>Line total</th>
                                                                <th>Non Billable</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="8">
                                                                    <p className="taext-center">The matter has no unbillable time entries</p>
                                                                </td>
                                                                <td className=""a>
                                                                    <div className="faorm-check">
                                                                        <input type="checkbox" className="faorm-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr className="taable-border-top">
                                                                <td colspan="2">
                                                                    <a className="add-ff-link" href={undefined}><i className="faa fa-plus"></i>Add Flat fee line</a>
                                                                </td>
                                                                <td colspan="2">
                                                                    <h6>John Doe matter totals</h6>
                                                                </td>
                                                                <td colspan="3">
                                                                    <h6>0.0</h6>
                                                                </td>
                                                                <td className="taext-start" colspan="3">
                                                                    <h6>$ 0.0</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ianvoice-total-wrp">
                                            <div className="raow">
                                                <div className="caol-lg-6">
                                                    <h3>Invoice totals</h3>
                                                </div>
                                                <div className="caol-lg-6">
                                                    <div className="ianvoice-total-stats">
                                                        <div className="ianv-stat-row">
                                                            <p>Flat Fee Sub-Total</p>
                                                            <p>$300.00</p>
                                                        </div>
                                                        <div className="ianv-stat-row">
                                                            <p>Time Entry Sub-Total</p>
                                                            <p>$0.00</p>
                                                        </div>
                                                        <div className="ianv-stat-row">
                                                            <p>Expense Sub-Total</p>
                                                            <p>$0.00</p>
                                                        </div>
                                                        <div className="ianv-stat-row">
                                                            <h5>Sub - Total</h5>
                                                            <h5>$300.00</h5>
                                                        </div>
                                                        <div className="ianv-stat-row border-top">
                                                            <p>Balance Forward</p>
                                                            <p>$0.00</p>
                                                        </div>

                                                        <div className="ianv-stat-row">
                                                            <h5>Total</h5>
                                                            <h5>$300.00</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="raow">
                                            <div className="caol-lg-6">
                                                <div className="ianvoice-total-wrp">
                                                    <h3>Terms and conditions</h3>
                                                </div>
                                            </div>
                                            <div className="caol-lg-6">
                                                <div className="ianvoice-total-wrp">
                                                    <h3>Notes ( will shared with Client )</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="raow">
                                            <div className="caol-lg-12">
                                                <div className="caancel-submit-btn-group">
                                                    <button className="batn btn-grey-common me-3" type="button">Cancel</button>
                                                    <button className="batn btn-grey-common" type="submit">Create invoice</button>
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

export default AddInvoice;
