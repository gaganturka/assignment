import { React, useEffect, useState } from "react";



const AddRole = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Add Role</h3>
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
                                        <h5>Add new Role</h5>
                                    </div>

                                    <div class="form-feilds-container">
                                        <div class="form-fields-row">
                                            <div class="row">

                                                <div class="col-lg-3">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" placeholder="Role name" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="role-access-box">
                                        <h4>Role Access</h4>

                                        <div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                <label class="form-check-label" for="inlineCheckbox1">Read </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                <label class="form-check-label" for="inlineCheckbox2">Write</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                                <label class="form-check-label" for="inlineCheckbox3">Delete</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
                                                <label class="form-check-label" for="inlineCheckbox4">Permit</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-fields-row mb-5">
                                        <div class="row">

                                            <div class="col-lg-3">
                                                <button class="btn btn-grey-common" type="submit">Add Role</button>
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

export default AddRole;
