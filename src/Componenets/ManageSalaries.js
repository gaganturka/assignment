import { React, useEffect, useState } from "react";



const ManageSalaries = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Manage Salaries</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="add-invoice.html"><button class="btn black-fill" type="button">Add New
                                            Invoice</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-3">
                                <div class="filter-input-box">
                                    <input type="text" class="form-control" placeholder="Search Employee" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-overview-wrp">
                        <div class="io-head">
                            <h3>Salaries overview</h3>
                        </div>
                        <div class="invoice-ov-content">
                            <ul>
                                <li>
                                    <div class="io-dot black">
                                        <span></span>
                                    </div>
                                    <div class="">
                                        <h6>$380.00</h6>
                                        <p>Salaries to distribute</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="io-dot grey">
                                        <span></span>
                                    </div>
                                    <div class="">
                                        <h6>$380.00</h6>
                                        <p>Salaries distributed</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="io-dot yellow">
                                        <span></span>
                                    </div>
                                    <div class="">
                                        <h6>$380.00</h6>
                                        <p>Partial</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="io-dot red">
                                        <span></span>
                                    </div>
                                    <div class="">
                                        <h6>$380.00</h6>
                                        <p>Pending</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="io-dot green">
                                        <span></span>
                                    </div>
                                    <div class="">
                                        <h6>$380.00</h6>
                                        <p>Paid</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="admin-white-box mt-4">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="common-table-wrapper mt-0">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>Salaried Name</th>
                                                    <th>Role</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                    <th> &nbsp; </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Accountant</h6>
                                                    </td>
                                                    <td>
                                                        <h6>SR 45000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Paid</h6>
                                                    </td>
                                                    <td>
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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


            </section>
        </>
    );
};

export default ManageSalaries;
