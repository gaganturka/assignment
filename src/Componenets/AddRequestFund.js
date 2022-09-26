import { React, useEffect, useState } from "react";



const AddRequestFund = () => {

    return (
        <>
            <section class="admin-wrapper">
                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Request Funds</h3>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="admin-white-box p-0 mt-4">
                        <div class="basic-info-header">
                            <h5>Request new funds</h5>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-feilds-container">
                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <h3>Contact / Lead</h3>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-group">
                                                    <select class="form-select">
                                                        <option selected="">Please Select</option>
                                                        <option value="1">Vaibhav Jagtap</option>
                                                        <option value="2">Vaibhav Jagtap</option>
                                                        <option value="3">Vaibhav Jagtap</option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <h3>Amount</h3>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="$" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <h3>Due date</h3>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-group">
                                                    <input type="date" class="form-control" placeholder="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <h3>Deposit into</h3>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-group">
                                                    <select class="form-select">
                                                        <option selected="">Select a bank account</option>
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
                                            <div class="col-lg-4">
                                                <h3>Allocate funds</h3>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-group">
                                                    <select class="form-select">
                                                        <option selected="">Select fund Allocation</option>
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
                                            <div class="col-lg-4">
                                                <h3>Email message</h3>
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="form-group">
                                                    <textarea name="" class="form-control" id="" cols="30" rows="3" placeholder="Type your message here"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-fields-row">
                                        <div class="row">
                                            <div class="col-lg-4">
                                            </div>
                                            <div class="col-lg-8">
                                                <div class="cancel-submit-btn-group pt-0">
                                                    <button class="btn btn-grey-common me-3" type="submit">Send</button>
                                                    <button class="btn btn-grey-common" type="button">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="preview-email-head">
                                    <h4>Preview Email</h4>
                                    <h6>Client will receive a request email</h6>
                                    <a href="javascript:;">What will my client see ?</a>
                                </div>

                                <div class="email-sample-demo">
                                    <h2>Payment Request</h2>
                                    <h5>Please deposit funds into your account</h5>

                                    <div class="pt-4">
                                        <h4>Payment Request</h4>
                                        <h1>$ 3400.00</h1>
                                        <h4>Due date 09 Aug 2021</h4>
                                    </div>

                                    <div class="pt-4">
                                        <button class="btn" type="button">Pay</button>
                                    </div>
                                    <p>Thanks, <br />
                                        Your Name
                                    </p>
                                    <h3 class="sample-text">Sample</h3>
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
