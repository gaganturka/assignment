import { React, useEffect, useState } from "react";



const Statement = () => {

    return (
        <>
            <section class="admin-wrapper">
                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Statement</h3>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div class="admin-white-box mt-3">
                        <div class="statement-wrp">
                            <h3>Account statements - Aman Aggarwal</h3>
                        </div>
                        <div class="invoice-statement-box">
                            <div class="row align-items-center">
                                <div class="col-lg-4">
                                    <div class="inv-stat-text-row">
                                        <p>Invoice Total</p>
                                        <p>$0.00</p>
                                    </div>

                                    <div class="inv-stat-text-row">
                                        <p>Invoice Total Overdue</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="inv-stat-text-row justify-content-center">
                                        <p> <i class="fa fa-plus"></i> Trust Replenishment Amount <span>$100</span> </p>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="inv-stat-text-row">
                                        <p>Balance due</p>
                                        <p>$0.00</p>
                                    </div>

                                    <div class="inv-stat-text-row">
                                        <p>Due Today</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="invoice-statement-box">
                            <div class="row align-items-center">
                                <div class="col-lg-12">
                                    <div class="d-flex">
                                        <div class="form-check me-4">
                                            <input type="checkbox" class="form-check-input" />
                                            <label for="">Include Total Overdue</label>
                                        </div>
                                        <div class="form-check me-4">
                                            <input type="checkbox" class="form-check-input" />
                                            <label for="">Include Closed Cases</label>
                                        </div>
                                        <div class="form-check me-4">
                                            <input type="checkbox" class="form-check-input" />
                                            <label for="">Include Balance forward Invoices</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="statement-wrp mt-4">
                            <h3>Trust</h3>
                        </div>
                        <div class="common-table-wrapper mt-0">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Allocation</th>
                                            <th>Current Balance</th>
                                            <th>Minumum Trust Balance </th>
                                            <th class="text-end">Requested Fund balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <h5>Hafadi </h5>
                                            </td>
                                            <td>
                                                <h5>$0.00</h5>
                                            </td>
                                            <td>
                                                <h5>$0.00</h5>
                                            </td>
                                            <td>
                                                <h6>$0.00</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Vaibhav Jagtap </h5>
                                            </td>
                                            <td>
                                                <h5>$0.00</h5>
                                            </td>
                                            <td>
                                                <h5>$0.00</h5>
                                            </td>
                                            <td>
                                                <h6>$0.00</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h5>Total </h5>
                                            </td>
                                            <td>
                                                <h5>$0.00</h5>
                                            </td>
                                            <td>
                                                <h5>$0.00</h5>
                                            </td>
                                            <td>
                                                <h6>$0.00</h6>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>


            </section>
        </>
    );
};

export default Statement;
