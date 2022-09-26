import { React, useEffect, useState } from "react";



const ManageEmployee = () => {

    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Employee managment</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <a href="add-employee.html"><button className="btn black-fill" type="button">Add
                                            Employee</button></a>
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


                    <div className="admin-white-box mt-4">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common-table-wrapper mt-0">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>

                                                    <th>Name</th>
                                                    <th>Role</th>
                                                    <th>Contact number</th>
                                                    <th>Email Id</th>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <h6>99880-89890</h6>
                                                    </td>
                                                    <td>
                                                        <h6>vbvb@gmail.com</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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

export default ManageEmployee;
