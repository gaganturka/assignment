import { React, useEffect, useState } from "react";



const TimeAndExpensesEntry = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">



                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Time & Expences Management</h3>
                                        <ul class="archive-ul">
                                            <li class="active"><a href="javascript:;">Open</a></li>
                                            <li><a href="javascript:;">Invoiced</a></li>
                                            <li><a href="javascript:;">All Entries</a></li>
                                            <li><a href="javascript:;">Imported</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="admin-filter-navbar bg-grey">
                        <div class="row align-items-center">
                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Filter Time entry by case</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-input-box">
                                    <input type="text" class="form-control" placeholder="Search by team" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-input-box d-flex align-items-center">
                                    <label class="me-2" for="">Date range</label>
                                    <input type="date" class="form-control" placeholder="DD -MM -YYYY" />
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-input-box d-flex align-items-center">
                                    <label class="me-2" for="">To</label>
                                    <input type="date" class="form-control" placeholder="DD -MM -YYYY" />
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

                                                            <th>Firm member</th>

                                                            <th>Next task </th>
                                                            <th>Status Update</th>
                                                            <th>Added</th>

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
                                                                <h6>Vaibhav Jagtap </h6>
                                                                <p>( Lead Attorney )</p>
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
                                                                    <small> My case System</small></h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="add-time-entry.html"> <button class="btn black-fill" type="button">Add Time</button></a>
                                                                    <a href="add-expenses.html"><button class="btn black-fill" type="button">Add Expense</button></a>                                            <button class="btn black-fill" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /> </button>
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
                                                                <h6>Vaibhav Jagtap </h6>
                                                                <p>( Lead Attorney )</p>
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
                                                                    <small> My case System</small></h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="add-time-entry.html"> <button class="btn black-fill" type="button">Add Time</button></a>
                                                                    <a href="add-expenses.html"><button class="btn black-fill" type="button">Add Expense</button></a>                                            <button class="btn black-fill" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /> </button>
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
                                                                <h6>Vaibhav Jagtap </h6>
                                                                <p>( Lead Attorney )</p>
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
                                                                    <small> My case System</small></h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="add-time-entry.html"> <button class="btn black-fill" type="button">Add Time</button></a>
                                                                    <a href="add-expenses.html"><button class="btn black-fill" type="button">Add Expense</button></a>                                            <button class="btn black-fill" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /> </button>
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
                                                                <h6>Vaibhav Jagtap </h6>
                                                                <p>( Lead Attorney )</p>
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
                                                                    <small> My case System</small></h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="add-time-entry.html"> <button class="btn black-fill" type="button">Add Time</button></a>
                                                                    <a href="add-expenses.html"><button class="btn black-fill" type="button">Add Expense</button></a>                                            <button class="btn black-fill" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /> </button>
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

export default TimeAndExpensesEntry;
