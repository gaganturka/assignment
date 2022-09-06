import { React, useEffect, useState } from "react";



const ManageEmployee = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Employee managment</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="add-employee.html"><button class="btn black-fill" type="button">Add
                                            Employee</button></a>
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


                    <div class="admin-white-box mt-4">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="common-table-wrapper mt-0">
                                    <div class="table-responsive">
                                        <table class="table">
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/eye-icon-black.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
