import {React, useEffect, useState} from "react";
import {Link} from "react-router-dom";


export const TimeAndExpensesEntries = () => {

    return (
        <>
            <section className="admin-wrapper">


                <div className="admin-content-wrapper">


                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Time & Expense Management</h3>
                                        <ul className="archive-ul">
                                            <li className="active"><a href={undefined}>Open</a></li>
                                            <li><a href={undefined}>Invoiced</a></li>
                                            <li><a href={undefined}>All Entries</a></li>
                                            <li><a href={undefined}>Imported</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <Link to={`/time-expenses/times/create/`}>
                                            <button
                                                className="btn black-fill"
                                                type="button">
                                                Add Time
                                            </button>
                                        </Link>
                                        <Link to={`/time-expenses/expenses/create/`}>
                                            <button
                                                className="btn black-fill"
                                                type="button">
                                                Add Expense
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-filter-navbar bg-grey">
                        <div className="row align-items-center">
                            <div className="col-lg">
                                <div className="filter-select-box">
                                    <select className="form-select">
                                        <option selected="">Filter Time entry by case</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-input-box">
                                    <input type="text" className="form-control" placeholder="Search by team"/>
                                    <img src="/assets/img/search-icon.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-input-box d-flex align-items-center">
                                    <label className="me-2" htmlFor="">Date range</label>
                                    <input type="date" className="form-control" placeholder="DD -MM -YYYY"/>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="filter-input-box d-flex align-items-center">
                                    <label className="me-2" htmlFor="">To</label>
                                    <input type="date" className="form-control" placeholder="DD -MM -YYYY"/>
                                </div>
                            </div>

                            <div className="col-lg">
                                <div className="filter-buttons-wrp">
                                    <ul>
                                        <li className="">
                                            <button className="btn" type="button">Apply Filter</button>
                                        </li>
                                        <li className="">
                                            <button className="btn" type="button">Clear Filter</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12">

                            <div className="admin-white-box">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="common-table-wrapper mt-0">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th>Case</th>
                                                        <th>Number</th>

                                                        <th>Firm member</th>

                                                        <th>Next task</th>
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
                                                            <h6>Prepare docs for Meeting <br/>
                                                                <span className="red-badge">Due</span> 03 Aug Task Is
                                                                Overdue
                                                            </h6>
                                                            <a href={undefined}>View all task</a>
                                                        </td>
                                                        <td>
                                                            <h6 className="word-break">Created Today, 1 : 24 Pm
                                                                by <small> My case system</small></h6>
                                                            <h6 className="word-break">Sent the engagement
                                                                letter and Preparing for
                                                                the Discovery Perp Meeting
                                                                and the Pleading now in
                                                                Advance of the pending
                                                                deadline</h6>
                                                        </td>
                                                        <td>
                                                            <h6>Today by <br/>
                                                                <small> My case System</small></h6>
                                                        </td>

                                                        <td>
                                                            <div className="action-btn-group">
                                                                <a href="add-time-entry.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Time
                                                                    </button>
                                                                </a>
                                                                <a href="add-expenses.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Expense
                                                                    </button>
                                                                </a>
                                                                <button className="btn black-fill" type="button"><img
                                                                    src="/assets/img/eye-icon-black.png" alt=""/>
                                                                </button>
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
                                                            <h6>Prepare docs for Meeting <br/>
                                                                <span className="red-badge">Due</span> 03 Aug Task Is
                                                                Overdue
                                                            </h6>
                                                            <a href={undefined}>View all task</a>
                                                        </td>
                                                        <td>
                                                            <h6 className="word-break">Created Today, 1 : 24 Pm
                                                                by <small> My case system</small></h6>
                                                            <h6 className="word-break">Sent the engagement
                                                                letter and Preparing for
                                                                the Discovery Perp Meeting
                                                                and the Pleading now in
                                                                Advance of the pending
                                                                deadline</h6>
                                                        </td>
                                                        <td>
                                                            <h6>Today by <br/>
                                                                <small> My case System</small></h6>
                                                        </td>

                                                        <td>
                                                            <div className="action-btn-group">
                                                                <a href="add-time-entry.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Time
                                                                    </button>
                                                                </a>
                                                                <a href="add-expenses.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Expense
                                                                    </button>
                                                                </a>
                                                                <button className="btn black-fill" type="button"><img
                                                                    src="/assets/img/eye-icon-black.png" alt=""/>
                                                                </button>
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
                                                            <h6>Prepare docs for Meeting <br/>
                                                                <span className="red-badge">Due</span> 03 Aug Task Is
                                                                Overdue
                                                            </h6>
                                                            <a href={undefined}>View all task</a>
                                                        </td>
                                                        <td>
                                                            <h6 className="word-break">Created Today, 1 : 24 Pm
                                                                by <small> My case system</small></h6>
                                                            <h6 className="word-break">Sent the engagement
                                                                letter and Preparing for
                                                                the Discovery Perp Meeting
                                                                and the Pleading now in
                                                                Advance of the pending
                                                                deadline</h6>
                                                        </td>
                                                        <td>
                                                            <h6>Today by <br/>
                                                                <small> My case System</small></h6>
                                                        </td>

                                                        <td>
                                                            <div className="action-btn-group">
                                                                <a href="add-time-entry.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Time
                                                                    </button>
                                                                </a>
                                                                <a href="add-expenses.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Expense
                                                                    </button>
                                                                </a>
                                                                <button className="btn black-fill" type="button"><img
                                                                    src="/assets/img/eye-icon-black.png" alt=""/>
                                                                </button>
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
                                                            <h6>Prepare docs for Meeting <br/>
                                                                <span className="red-badge">Due</span> 03 Aug Task Is
                                                                Overdue
                                                            </h6>
                                                            <a href={undefined}>View all task</a>
                                                        </td>
                                                        <td>
                                                            <h6 className="word-break">Created Today, 1 : 24 Pm
                                                                by <small> My case system</small></h6>
                                                            <h6 className="word-break">Sent the engagement
                                                                letter and Preparing for
                                                                the Discovery Perp Meeting
                                                                and the Pleading now in
                                                                Advance of the pending
                                                                deadline</h6>
                                                        </td>
                                                        <td>
                                                            <h6>Today by <br/>
                                                                <small> My case System</small></h6>
                                                        </td>

                                                        <td>
                                                            <div className="action-btn-group">
                                                                <a href="add-time-entry.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Time
                                                                    </button>
                                                                </a>
                                                                <a href="add-expenses.html">
                                                                    <button className="btn black-fill" type="button">Add
                                                                        Expense
                                                                    </button>
                                                                </a>
                                                                <button className="btn black-fill" type="button"><img
                                                                    src="/assets/img/eye-icon-black.png" alt=""/>
                                                                </button>
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
