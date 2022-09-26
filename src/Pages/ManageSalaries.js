import { React, useEffect, useState } from "react";



const ManageSalaries = () => {

    return (
        <>
            <section className="admin-wrapper">


                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Manage Salaries</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <a href="add-invoice.html"><button className="btn black-fill" type="button">Add New
                                            Invoice</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-3">
                                <div className="filter-input-box">
                                    <input type="text" className="form-control" placeholder="Search Employee" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-overview-wrp">
                        <div className="io-head">
                            <h3>Salaries overview</h3>
                        </div>
                        <div className="invoice-ov-content">
                            <ul>
                                <li>
                                    <div className="io-dot black">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>$380.00</h6>
                                        <p>Salaries to distribute</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot grey">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>$380.00</h6>
                                        <p>Salaries distributed</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot yellow">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>$380.00</h6>
                                        <p>Partial</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot red">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>$380.00</h6>
                                        <p>Pending</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="io-dot green">
                                        <span></span>
                                    </div>
                                    <div className="">
                                        <h6>$380.00</h6>
                                        <p>Paid</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="admin-white-box mt-4">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common-table-wrapper mt-0">
                                    <div className="table-responsive">
                                        <table className="table">
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
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
