import { React, useEffect, useState } from "react";



const AddNewCase = () => {

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
                            <li class="active">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#firm-collapse" aria-expanded="false">
                                    Case Management<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse show" id="firm-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="my-cases.html" class="link-dark rounded">My Cases</a></li>
                                        <li class="active"><a href="add-case.html" class="link-dark rounded">Add new case</a></li>
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
                            <li class="">
                                <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#case-collapse" aria-expanded="false">
                                    Financial Management<i class="fa fa-caret-down"></i>
                                </button>
                                <div class="collapse" id="case-collapse">
                                    <ul class="btn-toggle-nav">
                                        <li class=""><a href="view-invoice.html" class="link-dark rounded">View Invoices</a></li>
                                        <li><a href="add-invoice.html" class="link-dark rounded">Add new Invoice</a></li>
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
                                    HR / Payroll<i class="fa fa-caret-down"></i>
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
                                <a href="settings.html"><button class="btn btn-toggle align-items-center rounded ">
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
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Add new Case</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="my-cases.html"><button class="btn " type="button">Back</button></a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="admin-white-box mt-4">
                        <div class="row mt-4">
                            <div class="col-lg-12">
                                <div class="common-wizard">
                                    <ul class="nav nav-pills mb-4" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-cc-case" type="button" role="tab" aria-controls="pills-cc-case" aria-selected="true">
                                                <span>1</span> <br />
                                                Clients & Contact
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link " id="pills-case-tab" data-bs-toggle="pill" data-bs-target="#pills-case" type="button" role="tab" aria-controls="pills-case" aria-selected="false">
                                                <span>2</span> <br />
                                                Case
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-billing-tab" data-bs-toggle="pill" data-bs-target="#pills-billing" type="button" role="tab" aria-controls="pills-billing" aria-selected="false">
                                                <span>3</span> <br />
                                                Billing
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="pills-staff-tab" data-bs-toggle="pill" data-bs-target="#pills-staff" type="button" role="tab" aria-controls="pills-staff" aria-selected="false">
                                                <span>4</span> <br />
                                                Staff
                                            </button>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active " id="pills-cc-case" role="tabpanel" aria-labelledby="pills-cc-case-tab">
                                            <div class="wizard-internal-content pt-4">
                                                <h5>Start Creating your case by adding a new or existing contact</h5>
                                                <p>All cases need atleast one Client to bill</p>

                                                <div class="choice-flex">
                                                    <div class="me-4">
                                                        <button class="btn black-fill" type="button">Add new case</button>
                                                    </div>
                                                    <div>
                                                        <h6>Or</h6>
                                                    </div>
                                                    <div class="ms-4">
                                                        <div class="filter-select-box">
                                                            <select class="form-select">
                                                                <option selected="">Search for an existing contact or company </option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade " id="pills-case" role="tabpanel" aria-labelledby="pills-case-tab">
                                            <div class="wizard-internal-content">
                                                <div class="row mt-4">
                                                    <div class="col-lg-12">
                                                        <div class="basic-info-wrp">
                                                            <div class="admin-white-box p-0">
                                                                <div class="form-feilds-container">
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Case Name</h3>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" placeholder="Case name" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Case number</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <input type="text" class="form-control" placeholder="Case number" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4">
                                                                                <p>A unique identifier number for this case</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Practice area</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4">
                                                                                <a href="javascript:;">Add new practice area</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Case Stage</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4">
                                                                                <p>Manage case stage in <a href="javascript:;">settings</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Court</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Select</option>
                                                                                        <option value="1">Session Court</option>
                                                                                        <option value="2">High Court</option>
                                                                                        <option value="3">Supreem Court</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Date opened</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <input type="date" class="form-control" placeholder="DD - MM - YYYY" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Office</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Primary</option>
                                                                                        <option value="1">Secondary</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Description</h3>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <textarea name="" class="form-control" id="" cols="30" rows="3" placeholder="Add Description"></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Statute of limitation</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <input type="date" class="form-control" placeholder="DD - MM - YYYY" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Conflict check</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="filter-switch-box">
                                                                                    <div class="form-check form-switch">
                                                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Conflict check notes</h3>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <textarea name="" class="form-control" id="" cols="30" rows="3" placeholder="Add Notes"></textarea>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                            </div>
                                                                            <div class="col-lg-3">
                                                                                <button class="btn btn-grey-common" type="submit">Continue to Billing</button>
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
                                        <div class="tab-pane fade" id="pills-billing" role="tabpanel" aria-labelledby="pills-billing-tab">

                                            <div class="wizard-internal-content">
                                                <div class="row mt-4">
                                                    <div class="col-lg-12">
                                                        <div class="basic-info-wrp">
                                                            <div class="admin-white-box p-0">
                                                                <div class="form-feilds-container">
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Billing contact</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-4">
                                                                                <p>Choosing a billing contact allows you to batch bill this case</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Billing method</h3>
                                                                            </div>
                                                                            <div class="col-lg-2">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Lumpsum</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                            </div>
                                                                            <div class="col-lg-3">
                                                                                <button class="btn btn-grey-common" type="submit">Continue to Staff</button>
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
                                        <div class="tab-pane fade" id="pills-staff" role="tabpanel" aria-labelledby="pills-staff-tab">

                                            <div class="wizard-internal-content">
                                                <div class="row mt-4">
                                                    <div class="col-lg-12">
                                                        <div class="basic-info-wrp">
                                                            <div class="admin-white-box p-0">
                                                                <div class="form-feilds-container">
                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Lead Attorney</h3>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                                <p>Choosing a billing contact allows you to batch bill this case</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>

                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3">
                                                                                <h3>Originating Attorney</h3>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <select class="form-select">
                                                                                        <option selected="">Select</option>
                                                                                        <option value="1">One</option>
                                                                                        <option value="2">Two</option>
                                                                                        <option value="3">Three</option>
                                                                                    </select>
                                                                                </div>
                                                                                <p>Choosing a billing contact allows you to batch bill this case</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="row mt-5 ps-4">
                                                                        <div class="col-lg-12">
                                                                            <h4 class="wizard-tt-title">Who from your firm should have access to this case</h4>
                                                                            <div class="common-table-wrapper mt-0">
                                                                                <div class="table-responsive">
                                                                                    <table class="table">
                                                                                        <thead>
                                                                                            <tr>
                                                                                                <th>&nbsp;</th>
                                                                                                <th>First name </th>
                                                                                                <th>Last name </th>
                                                                                                <th>User title </th>
                                                                                                <th>Bill rate </th>
                                                                                                <th>&nbsp;</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td>
                                                                                                    <div class="table-checkbox">
                                                                                                        <input type="checkbox" class="form-check-input" />
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <h5>Vaibhav</h5>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <h5>Jagtap</h5>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <h6>Attorney</h6>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <div class="select-flex">
                                                                                                        <div class="form-group">
                                                                                                            <select class="form-select">
                                                                                                                <option selected="">Select</option>
                                                                                                                <option value="1">Default rate</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                        <p>$8.99</p>
                                                                                                    </div>
                                                                                                </td>

                                                                                                <td>
                                                                                                    <div class="action-btn-group">
                                                                                                        <button class="btn" type="button"> <img class="info-icon-table" src="/assets/img/info-icon.png" alt="" /> </button>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>

                                                                                            <tr>
                                                                                                <td>
                                                                                                    <div class="table-checkbox">
                                                                                                        <input type="checkbox" class="form-check-input" />
                                                                                                    </div>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <h5>Vaibhav</h5>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <h5>Jagtap</h5>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <h6>Attorney</h6>
                                                                                                </td>
                                                                                                <td>
                                                                                                    <div class="select-flex">
                                                                                                        <div class="form-group">
                                                                                                            <select class="form-select">
                                                                                                                <option selected="">Select</option>
                                                                                                                <option value="1">Default rate</option>
                                                                                                            </select>
                                                                                                        </div>
                                                                                                        <p>$8.99</p>
                                                                                                    </div>
                                                                                                </td>

                                                                                                <td>
                                                                                                    <div class="action-btn-group">
                                                                                                        <button class="btn" type="button"> <img class="info-icon-table" src="/assets/img/info-icon.png" alt="" /> </button>
                                                                                                    </div>
                                                                                                </td>
                                                                                            </tr>





                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div class="form-fields-row">
                                                                        <div class="row">
                                                                            <div class="col-lg-3 m-auto">
                                                                                <button class="btn btn-grey-common" type="submit">Save & Finish</button>
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

export default AddNewCase;
