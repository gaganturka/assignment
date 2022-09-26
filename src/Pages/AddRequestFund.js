import { React, useEffect, useState } from "react";



const AddRequestFund = () => {

    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Request Funds</h3>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="admin-white-box p-0 mt-4">
                        <div className="basic-info-header">
                            <h5>Request new funds</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-feilds-container">
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h3>Contact / Lead</h3>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <select className="form-select">
                                                        <option selected="">Please Select</option>
                                                        <option value="1">Vaibhav Jagtap</option>
                                                        <option value="2">Vaibhav Jagtap</option>
                                                        <option value="3">Vaibhav Jagtap</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h3>Amount</h3>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="$" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h3>Due date</h3>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <input type="date" className="form-control" placeholder="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h3>Deposit into</h3>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <select className="form-select">
                                                        <option selected="">Select a bank account</option>
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
                                            <div className="col-lg-4">
                                                <h3>Allocate funds</h3>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <select className="form-select">
                                                        <option selected="">Select fund Allocation</option>
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
                                            <div className="col-lg-4">
                                                <h3>Email message</h3>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="form-group">
                                                    <textarea name="" className="form-control" id="" cols="30" rows="3" placeholder="Type your message here"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-fields-row">
                                        <div className="row">
                                            <div className="col-lg-4">
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="cancel-submit-btn-group pt-0">
                                                    <button className="btn btn-grey-common me-3" type="submit">Send</button>
                                                    <button className="btn btn-grey-common" type="button">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="preview-email-head">
                                    <h4>Preview Email</h4>
                                    <h6>Client will receive a request email</h6>
                                    <a href={undefined}>What will my client see ?</a>
                                </div>

                                <div className="email-sample-demo">
                                    <h2>Payment Request</h2>
                                    <h5>Please deposit funds into your account</h5>

                                    <div className="pt-4">
                                        <h4>Payment Request</h4>
                                        <h1>$ 3400.00</h1>
                                        <h4>Due date 09 Aug 2021</h4>
                                    </div>

                                    <div className="pt-4">
                                        <button className="btn" type="button">Pay</button>
                                    </div>
                                    <p>Thanks, <br />
                                        Your Name
                                    </p>
                                    <h3 className="sample-text">Sample</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddRequestFund;
