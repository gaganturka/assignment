import { React, useEffect, useState } from "react";



const AddEvent = () => {

    return (
        <>
            <section className="admin-wrapper">


                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Add Event</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <a href="time-exp.html"><button className="btn " type="button">Back</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="basic-info-wrp">
                                <div className="admin-white-box p-0">
                                    <div className="basic-info-header">
                                        <h5>Add time entry</h5>
                                    </div>
                                    <div className="form-feilds-container">
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Case or Lead</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <select className="form-select">
                                                            <option selected="">Select Case</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-check form-switch mt-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">This case is not linked to this case</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <a href={undefined}>Add new location</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Event Name</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <select className="form-select">
                                                            <option selected="">Event Name</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Start</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="filter-input-box ">
                                                        <input type="date" className="form-control" placeholder="DD-MM-YYYY" />
                                                    </div>

                                                </div>

                                                <div className="col-lg-2">
                                                    <div className="filter-input-box">
                                                        <input type="time" className="form-control" placeholder="" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-2">
                                                    <div className="form-check form-switch mt-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">All day</label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-check form-switch mt-2">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">This Event Repeats</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>End</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="filter-input-box ">
                                                        <input type="date" className="form-control" placeholder="DD-MM-YYYY" />
                                                    </div>

                                                </div>

                                                <div className="col-lg-2">
                                                    <div className="filter-input-box">
                                                        <input type="time" className="form-control" placeholder="" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Location</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <select className="form-select">
                                                            <option selected="">Select location</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Description</h3>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <textarea name="" className="form-control" id="" cols="30" rows="3" placeholder="Add description"></textarea>
                                                        <small>Description will appear on invoice</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Reminder</h3>
                                                </div>
                                                <div className="col-lg-6">
                                                    <p>You can only edit reminder that you created. Reminder that assigned to you by another firm user will need to be
                                                        Edited by the creator</p>
                                                    <a href={undefined}>Add Reminder</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-fields-row mb-5">
                                        <div className="row">
                                            <div className="col-lg-3">
                                            </div>
                                            <div className="col-lg-3">
                                                <button className="btn btn-grey-common" type="submit">Save event</button>
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
