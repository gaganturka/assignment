import { React, useEffect, useState } from "react";



const AddClient = () => {

    return (
        <>
            <section class="admin-wrapper">
                <div class="admin-content-wrapper">

                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Add Client</h3>
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
                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <div class="basic-info-wrp">
                                <div class="admin-white-box p-0">

                                    <div class="form-fields-row mt-3">
                                        <div class="row align-items-center">
                                            <div class="col-lg-3">
                                                <h3>Contact Type</h3>
                                            </div>

                                            <div class="col-lg-3">
                                                <div class="form-group">
                                                    <select class="form-select">
                                                        <option selected="">Select Contact Type</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="basic-info-header">
                                        <h5>Basic Information</h5>
                                    </div>

                                    <div class="form-feilds-container">
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Cleint Name</h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="First name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Middle name" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Last name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Email ID</h3>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" placeholder="Email id" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Contact group</h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <select class="form-select">
                                                            <option selected="">Client Group</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <a href="javascript:;">Add new contact group</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Enable client portal</h3>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label class="form-check-label" for="flexSwitchCheckDefault">It is a long established fact that a reader will be distracted by the
                                                            readable content of a page when looking at its layout</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Contact details</h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Mobile number" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Alternate Mobile number" />
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Landline number" />
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
                                        <h5>Add more Information</h5>
                                    </div>

                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Birth date</h3>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="form-group">
                                                    <input type="date" class="form-control" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Company</h3>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Company" />
                                                </div>
                                            </div>
                                            <div class="col-lg-2">
                                                <a href="javascript:;">Add new company</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Job Title</h3>
                                            </div>
                                            <div class="col-lg-4">
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
                                                <h3>Driving License </h3>
                                            </div>
                                            <div class="col-lg-2">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Zip code" />
                                                </div>
                                            </div>
                                            <div class="col-lg-2">
                                                <div class="form-group">
                                                    <select class="form-select">
                                                        <option selected="">State</option>
                                                        <option value="1">Punjab</option>
                                                        <option value="2">UP</option>
                                                        <option value="3">Bihar</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Website</h3>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Website" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Fax number</h3>
                                            </div>
                                            <div class="col-lg-4">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Fax number" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <h3>Additional notes</h3>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <textarea name="" class="form-control" id="" cols="30" rows="3" placeholder="Add notes"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-fields-row mb-5">
                                        <div class="row">
                                            <div class="col-lg-3">
                                            </div>
                                            <div class="col-lg-3">
                                                <button class="btn btn-grey-common" type="submit">Add Cleint</button>
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

export default AddClient;
