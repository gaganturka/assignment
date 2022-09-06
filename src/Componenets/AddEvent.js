import { React, useEffect, useState } from "react";



const AddEvent = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Add Event</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="time-exp.html"><button class="btn " type="button">Back</button></a>
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
                                        <h5>Add time entry</h5>
                                    </div>
                                    <div class="form-feilds-container">
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Case or Lead</h3>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <select class="form-select">
                                                            <option selected="">Select Case</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-check form-switch mt-2">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label class="form-check-label" for="flexSwitchCheckDefault">This case is not linked to this case</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <a href="javascript:;">Add new location</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Event Name</h3>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <select class="form-select">
                                                            <option selected="">Event Name</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Start</h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="filter-input-box ">
                                                        <input type="date" class="form-control" placeholder="DD-MM-YYYY" />
                                                    </div>

                                                </div>

                                                <div class="col-lg-2">
                                                    <div class="filter-input-box">
                                                        <input type="time" class="form-control" placeholder="" />
                                                    </div>
                                                </div>

                                                <div class="col-lg-2">
                                                    <div class="form-check form-switch mt-2">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label class="form-check-label" for="flexSwitchCheckDefault">All day</label>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="form-check form-switch mt-2">
                                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label class="form-check-label" for="flexSwitchCheckDefault">This Event Repeats</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>End</h3>
                                                </div>
                                                <div class="col-lg-2">
                                                    <div class="filter-input-box ">
                                                        <input type="date" class="form-control" placeholder="DD-MM-YYYY" />
                                                    </div>

                                                </div>

                                                <div class="col-lg-2">
                                                    <div class="filter-input-box">
                                                        <input type="time" class="form-control" placeholder="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Location</h3>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="form-group">
                                                        <select class="form-select">
                                                            <option selected="">Select location</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Description</h3>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group">
                                                        <textarea name="" class="form-control" id="" cols="30" rows="3" placeholder="Add description"></textarea>
                                                        <small>Description will appear on invoice</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-fields-row">
                                            <div class="row">
                                                <div class="col-lg-3">
                                                    <h3>Reminder</h3>
                                                </div>
                                                <div class="col-lg-6">
                                                    <p>You can only edit reminder that you created. Reminder that assigned to you by another firm user will need to be
                                                        Edited by the creator</p>
                                                    <a href="javascript:;">Add Reminder</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-fields-row mb-5">
                                        <div class="row">
                                            <div class="col-lg-3">
                                            </div>
                                            <div class="col-lg-3">
                                                <button class="btn btn-grey-common" type="submit">Save event</button>
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

export default AddEvent;
