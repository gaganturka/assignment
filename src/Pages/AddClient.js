import {React, useEffect, useState} from "react";
import AddContactGroupModal from "../Componenets/AddContactGroupModal";

import {openModal} from "../Utils/Helpers";
import CompanyFormModalOld from "../Componenets/CompanyFormModal";

const AddClient = () => {

    const openNewContactGroupModal = async () => {
        openModal("addContactGroupModal");
    }

    const openNewCompanyModal = async () => {
        openModal("companyFormModal");
    }

    const refreshContactGroups = async () => {
        console.log("refresh contact groups");
    }

    const refreshCompanies = async () => {
        console.log("refresh companies");
    }

    return (
        <>
            <AddContactGroupModal onClose={refreshContactGroups}/>
            <CompanyFormModalOld onClose={refreshCompanies}/>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Add Client</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <a href="my-cases.html">
                                            <button className="btn " type="button">Back</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="basic-info-wrp">
                                <div className="admin-white-box p-0">

                                    <div className="form-fields-row mt-3">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <h3>Contact Type</h3>
                                            </div>

                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <select className="form-select">
                                                        <option selected="">Select Contact Type</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="basic-info-header">
                                        <h5>Basic Information</h5>
                                    </div>

                                    <div className="form-feilds-container">
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Cleint Name</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="First name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Middle name"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Last name"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Email ID</h3>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control"
                                                               placeholder="Email id"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Contact group</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <select className="form-select">
                                                            <option selected="">Client Group</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <a onClick={openNewContactGroupModal} href={undefined}>Add New
                                                        Contact Group</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Enable client portal</h3>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox"
                                                               id="flexSwitchCheckDefault"/>
                                                        <label className="form-check-label"
                                                               htmlFor="flexSwitchCheckDefault">It is a long established
                                                            fact that a reader will be distracted by the
                                                            readable content of a page when looking at its
                                                            layout</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Contact details</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Mobile number"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Alternate Mobile number"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Landline number"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Address</h3>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Address 1"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Address 2"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>Country</h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <select className="form-select">
                                                            <option selected="">Select Country</option>
                                                            <option value="1">USA</option>
                                                            <option value="2">India</option>
                                                            <option value="3">Canada</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-fields-row">
                                            <div className="row">
                                                <div className="col-lg-3">
                                                    <h3>State , city </h3>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="Zip code"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                               placeholder="State"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="City"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="basic-info-header">
                                        <h5>Add more Information</h5>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Birth date</h3>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Company</h3>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Company"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <a onClick={openNewCompanyModal} href={undefined}>Add New Company</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Job Title</h3>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <select className="form-select">
                                                        <option selected="">Select Country</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">India</option>
                                                        <option value="3">Canada</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Driving License </h3>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Zip code"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="form-group">
                                                    <select className="form-select">
                                                        <option selected="">State</option>
                                                        <option value="1">Punjab</option>
                                                        <option value="2">UP</option>
                                                        <option value="3">Bihar</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Website</h3>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Website"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Fax number</h3>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control"
                                                           placeholder="Fax number"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <h3>Additional notes</h3>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <textarea name="" className="form-control" id="" cols="30" rows="3"
                                                              placeholder="Add notes"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-fields-row mb-5">
                                        <div className="row">
                                            <div className="col-lg-3">
                                            </div>
                                            <div className="col-lg-3">
                                                <button className="btn btn-grey-common" type="submit">Add Cleint
                                                </button>
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
