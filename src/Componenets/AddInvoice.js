import { React, useEffect, useState } from "react";



const AddInvoice = () => {

    return (
        <>
            <section class="admin-wrapper">
                <div class="sidebar-wrapper">
                    <div class="sidebar-main-logo">
                        <img src="/assets/img/main-logo.png" alt="" />
                    </div>
                    <div class="flex-shrink-0 ">
                        <ul class="list-unstyled ps-0">
                            <li class="">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#user-collapse" aria-expanded="false">
                                    User Management<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse" id="user-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="index.html" class="link-dark rounded">Manage Client </a></li>
                                        <li><a href="add-client.html" class="link-dark rounded">Add Client</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#firm-collapse" aria-expanded="false">
                                    Case Management<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse" id="firm-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="my-cases.html" class="link-dark rounded">My Cases</a></li>
                                        <li><a href="add-case.html" class="link-dark rounded">Add new case</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#manexpert-collapse" aria-expanded="false">
                                    Activity Management<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse" id="manexpert-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="time-exp.html" class="link-dark rounded">Time & Expenses entry</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="active">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#case-collapse" aria-expanded="false">
                                    Financial Management<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse show" id="case-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="view-invoice.html" class="link-dark rounded">View Invoices</a></li>
                                        <li class="active"><a href="add-invoice.html" class="link-dark rounded">Add new Invoice</a></li>
                                        <li><a href="view-req-fund.html" class="link-dark rounded">View Requested Funds</a></li>
                                        <li><a href="add-req-fund.html" class="link-dark rounded">Add new Request fund</a></li>
                                        <li><a href="statement.html" class="link-dark rounded">Statement</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#activity-collapse" aria-expanded="false">
                                    Calendaring<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse" id="activity-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li><a href="event.html" class="link-dark rounded">Events</a>
                                        </li>
                                        <li><a href="add-event.html" class="link-dark rounded">Add Event</a></li>
                                    </ul>
                                </div>

                            </li>
                            <li class="">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#financial-collapse" aria-expanded="false">
                                    HR / Payroll <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse" id="financial-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="manage-employe.html" class="link-dark rounded">Manage Employee</a></li>
                                        <li><a href="add-employee.html" class="link-dark rounded">Add Employee</a></li>
                                        <li><a href="manage-role.html" class="link-dark rounded">Manage Role</a></li>
                                        <li><a href="add-role.html" class="link-dark rounded">Add Role</a></li>
                                        <li><a href="manage-salaries.html" class="link-dark rounded">Manage Salaries</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="">
                                <a href="manage-subscription.html"><button class="btn btn-toggle align-items-center rounded">
                                    Manage Subscription
                                </button></a>
                            </li>
                            <li class="">
                                <a href="settings.html"><button class="btn btn-toggle align-items-center rounded">
                                    Settings
                                </button></a>
                            </li>
                        </ul>
                    </div>
                    <div class="logut-sidebar-wrp">
                        <a href="javascript:;">Logout</a>
                    </div>
                </div>


                <div class="admin-content-wrapper">
                    <div class="admin-title-header">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Create new invoice</h3>
                                        <ul class="archive-ul">
                                            <li class="active"><a href="javascript:;">From open balance</a></li>
                                            <li><a href="javascript:;">From scratch</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="view-invoice.html"><button class="btn " type="button">Back</button></a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <div class="basic-info-wrp">
                                <div class="admin-white-box p-0">
                                    <div class="form-feilds-container pt-4">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-fields-row">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <h3>Cleint Name</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="filter-input-box">
                                                                <input type="text" class="form-control" placeholder="Vaibhav Jagtap" />
                                                                <img src="/assets/img/search-icon.png" alt="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Matter</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <select class="form-select">
                                                                <option selected="">John Deo matter</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Address</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="form-group">
                                                                <textarea name="" class="form-control" id="" cols="30" rows="3" placeholder="Add Notes"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-fields-row">
                                                    <div class="row">
                                                        <div class="col-lg-3">
                                                            <h3>Invoice</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="filter-input-box">
                                                                <input type="text" class="form-control" placeholder="00909" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Invoice Date</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="filter-input-box">
                                                                <input type="date" class="form-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Payment terms</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <select class="form-select">
                                                                <option selected="">Please Select</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Invoice Date</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="filter-input-box">
                                                                <input type="date" class="form-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Automated Reminders</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <div class="filter-switch-box">
                                                                <div class="form-check form-switch">
                                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                                    <label for="">Show only my cases</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4">
                                                        <div class="col-lg-3">
                                                            <h3>Status</h3>
                                                        </div>
                                                        <div class="col-lg-7">
                                                            <select class="form-select">
                                                                <option selected="">Please Select</option>
                                                                <option value="1">Sent</option>
                                                                <option value="2">Unsent</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-4 align-items-center ">
                                                        <div class="col-lg-3">
                                                            <h3>Filter by date range</h3>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="filter-input-box">
                                                                <input type="date" class="form-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-1">
                                                            <p>To</p>
                                                        </div>
                                                        <div class="col-lg-3">
                                                            <div class="filter-input-box">
                                                                <input type="date" class="form-control" placeholder="" />
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="invoice-user-details-wrp">
                                        <div class="invoice-ud-head">
                                            <h3>John Doe Matters</h3>
                                        </div>
                                        <div class="invoice-ud-table">
                                            <div class="table-head">
                                                <div>
                                                    <h3>Flat fees</h3>
                                                </div>
                                                <div><a href="javascript:;"><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div class="common-table-wrapper mt-0">
                                                <div class="table-responsive">
                                                    <table class="table mb-0">
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
                                                                    <select class="form-select" aria-label="Default select example">
                                                                        <option selected="">Please Select</option>
                                                                        <option value="1">AA</option>
                                                                        <option value="2">BB</option>
                                                                        <option value="3">CC</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-select" aria-label="Default select example">
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
                                                                <td class="">
                                                                    <div class="form-check">
                                                                        <input type="checkbox" class="form-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="invoice-ud-table">
                                            <div class="table-head">
                                                <div>
                                                    <h3>Flat fees</h3>
                                                </div>
                                                <div><a href="javascript:;"><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div class="common-table-wrapper mt-0">
                                                <div class="table-responsive">
                                                    <table class="table mb-0">
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
                                                                    <select class="form-select" aria-label="Default select example">
                                                                        <option selected="">Please Select</option>
                                                                        <option value="1">AA</option>
                                                                        <option value="2">BB</option>
                                                                        <option value="3">CC</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <select class="form-select" aria-label="Default select example">
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
                                                                <td class="">
                                                                    <div class="form-check">
                                                                        <input type="checkbox" class="form-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr class="table-border-top">
                                                                <td colspan="7">
                                                                    <a class="add-ff-link" href="javascript:;"><i class="fa fa-plus"></i>Add Flat fee line</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="invoice-ud-table">
                                            <div class="table-head">
                                                <div>
                                                    <h3>Time Entries</h3>
                                                </div>
                                                <div><a href="javascript:;"><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div class="common-table-wrapper mt-0">
                                                <div class="table-responsive">
                                                    <table class="table mb-0">
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
                                                                    <p class="text-center">The matter has no unbillable time entries</p>
                                                                </td>
                                                                <td class="">
                                                                    <div class="form-check">
                                                                        <input type="checkbox" class="form-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr class="table-border-top">
                                                                <td colspan="2">
                                                                    <a class="add-ff-link" href="javascript:;"><i class="fa fa-plus"></i>Add Flat fee line</a>
                                                                </td>
                                                                <td colspan="2">
                                                                    <h6>John Doe matter totals</h6>
                                                                </td>
                                                                <td colspan="3">
                                                                    <h6>0.0</h6>
                                                                </td>
                                                                <td class="text-start" colspan="3">
                                                                    <h6>$ 0.0</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="invoice-ud-table">
                                            <div class="table-head">
                                                <div>
                                                    <h3>Expences   </h3>
                                                </div>
                                                <div><a href="javascript:;"><img src="/assets/img/delete-icon.png" alt="" /></a></div>
                                            </div>
                                            <div class="common-table-wrapper mt-0">
                                                <div class="table-responsive">
                                                    <table class="table mb-0">
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
                                                                    <p class="text-center">The matter has no unbillable time entries</p>
                                                                </td>
                                                                <td class="">
                                                                    <div class="form-check">
                                                                        <input type="checkbox" class="form-check-input" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr class="table-border-top">
                                                                <td colspan="2">
                                                                    <a class="add-ff-link" href="javascript:;"><i class="fa fa-plus"></i>Add Flat fee line</a>
                                                                </td>
                                                                <td colspan="2">
                                                                    <h6>John Doe matter totals</h6>
                                                                </td>
                                                                <td colspan="3">
                                                                    <h6>0.0</h6>
                                                                </td>
                                                                <td class="text-start" colspan="3">
                                                                    <h6>$ 0.0</h6>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="invoice-total-wrp">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <h3>Invoice totals</h3>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="invoice-total-stats">
                                                        <div class="inv-stat-row">
                                                            <p>Flat Fee Sub-Total</p>
                                                            <p>$300.00</p>
                                                        </div>
                                                        <div class="inv-stat-row">
                                                            <p>Time Entry Sub-Total</p>
                                                            <p>$0.00</p>
                                                        </div>
                                                        <div class="inv-stat-row">
                                                            <p>Expense Sub-Total</p>
                                                            <p>$0.00</p>
                                                        </div>
                                                        <div class="inv-stat-row">
                                                            <h5>Sub - Total</h5>
                                                            <h5>$300.00</h5>
                                                        </div>
                                                        <div class="inv-stat-row border-top">
                                                            <p>Balance Forward</p>
                                                            <p>$0.00</p>
                                                        </div>

                                                        <div class="inv-stat-row">
                                                            <h5>Total</h5>
                                                            <h5>$300.00</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="invoice-total-wrp">
                                                    <h3>Terms and conditions</h3>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="invoice-total-wrp">
                                                    <h3>Notes ( will shared with Client )</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="cancel-submit-btn-group">
                                                    <button class="btn btn-grey-common me-3" type="button">Cancel</button>
                                                    <button class="btn btn-grey-common" type="submit">Create invoice</button>
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
