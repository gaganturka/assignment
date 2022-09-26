import { React, useEffect, useState } from "react";



const MyCases = () => {

    return (
        <>
            <section class="admin-wrapper">
                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Case Management</h3>
                                        <ul class="archive-ul">
                                            <li class="active"><a href="javascript:;">Open</a></li>
                                            <li><a href="javascript:;">Close</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="add-case.html"><button class="btn black-fill" type="button">Add New Case</button></a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="admin-filter-navbar bg-grey">
                        <div class="row">
                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Practice Area</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Lead Attorney</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Case Stage</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-switch-box">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" for="flexSwitchCheckDefault">Show only my cases</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-buttons-wrp">
                                    <ul>
                                        <li class=""> <button class="btn" type="button">Apply Filter</button> </li>
                                        <li class=""> <button class="btn" type="button">Clear Filter</button> </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-input-box">
                                    <input type="text" class="form-control" placeholder="Search Client" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-12">

                            <div class="admin-white-box">

                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="common-table-wrapper mt-0">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Case</th>
                                                            <th>Number</th>
                                                            <th>Case stage</th>
                                                            <th>Firm member</th>
                                                            <th>Next Event</th>
                                                            <th>Next task </th>
                                                            <th>Status Update</th>
                                                            <th>Added</th>
                                                            <th>Court</th>
                                                            <th>&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h6>Health legal case</h6>
                                                            </td>
                                                            <td>
                                                                <h6>7979-78600</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Initial Start <img src="/assets/img/edit-pencil-icon.png" class="img img-fluid"
                                                                    alt="" /></h6>
                                                            </td>
                                                            <td>
                                                                <h6>Vaibhav Jagtap </h6>
                                                                <p>( Lead Attorney )</p>
                                                            </td>
                                                            <td>
                                                                <h6>Google meet <br />
                                                                    10th Aug 2021
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Prepare docs for Meeting <br />
                                                                    <span class="red-badge">Due</span> 03 Aug Task Is Overdue
                                                                </h6>
                                                                <a href="javascript:;">View all task</a>
                                                            </td>
                                                            <td>
                                                                <h6 class="word-break">Created Today, 1 : 24 Pm
                                                                    by <small> My case system</small></h6>
                                                                <h6 class="word-break">Sent the engagement
                                                                    letter and Preparing for
                                                                    the Discovery Perp Meeting
                                                                    and the Pleading now in
                                                                    Advance of the pending
                                                                    deadline</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Today by <br />
                                                                    <small> My case System</small>
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>The Supreme Court</h6> <br />
                                                                <h6>The Appellate Court</h6> <br />
                                                                <h6>The Preliminary Court</h6>
                                                            </td>
                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="case-details.html"><button class="btn" type="button"><img
                                                                        src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png"
                                                                        alt="" /> </button>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <h6>Health legal case</h6>
                                                            </td>
                                                            <td>
                                                                <h6>7979-78600</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Initial Start <img src="/assets/img/edit-pencil-icon.png" class="img img-fluid"
                                                                    alt="" /></h6>
                                                            </td>
                                                            <td>
                                                                <h6>Vaibhav Jagtap </h6>
                                                                <p>( Lead Attorney )</p>
                                                            </td>
                                                            <td>
                                                                <h6>Google meet <br />
                                                                    10th Aug 2021
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Prepare docs for Meeting <br />
                                                                    <span class="red-badge">Due</span> 03 Aug Task Is Overdue
                                                                </h6>
                                                                <a href="javascript:;">View all task</a>
                                                            </td>
                                                            <td>
                                                                <h6 class="word-break">Created Today, 1 : 24 Pm
                                                                    by <small> My case system</small></h6>
                                                                <h6 class="word-break">Sent the engagement
                                                                    letter and Preparing for
                                                                    the Discovery Perp Meeting
                                                                    and the Pleading now in
                                                                    Advance of the pending
                                                                    deadline</h6>
                                                            </td>
                                                            <td>
                                                                <h6>Today by <br />
                                                                    <small> My case System</small>
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>The Supreme Court</h6> <br />
                                                                <h6>The Appellate Court</h6> <br />
                                                                <h6>The Preliminary Court</h6>
                                                            </td>
                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="case-details.html"> <button class="btn" type="button"><img
                                                                        src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png"
                                                                        alt="" /> </button>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyCases;
