import { React, useEffect, useState } from "react";



const AddEmployee = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Add Employee</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <div class="basic-info-wrp">
                                <div class="admin-white-box p-0">
                                    <div class="basic-info-header">
                                        <h5>Add new Employee</h5>
                                    </div>

                                    <div class="form-feilds-container">
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Name</h3>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="First name" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Last name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>DOB</h3>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <input type="date" class="form-control" placeholder="DD -MM -YYYY" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Address</h3>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Address 1" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Address 2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Country</h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <select class="form-select">
                                                            <option selected="">Select Country</option>
                                                            <option value="1">USA</option>
                                                            <option value="2">India</option>
                                                            <option value="3">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>State , city </h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Zip code" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="State" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="City" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="basic-info-header">
                                        <h5>Employee Role</h5>
                                    </div>

                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Employee role</h3>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="form-group">
                                                    <select class="form-select">
                                                        <option selected="">Select Country</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">India</option>
                                                        <option value="3">Canada</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-lg-2">
                                                <a href="javascript:;">Add new Role</a>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-fields-row mb-5">
                                        <div class="row">
                                            <div class="col-lg-3">
                                            </div>
                                            <div class="col-lg-3">
                                                <button class="btn btn-grey-common" type="submit">Add Employee</button>
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

export default AddEmployee;
