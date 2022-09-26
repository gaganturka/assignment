import { React, useEffect, useState } from "react";



const Statement = () => {

    return (
        <>
            <section className="admin-wrapper">
                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Statement</h3>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="admin-white-box mt-3">
                        <div className="statement-wrp">
                            <h3>Account statements - Aman Aggarwal</h3>
                        </div>
                        <div className="invoice-statement-box">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="inv-stat-text-row">
                                        <p>Invoice Total</p>
                                        <p>$0.00</p>
                                    </div>

                                    <div className="inv-stat-text-row">
                                        <p>Invoice Total Overdue</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="inv-stat-text-row justify-content-center">
                                        <p> <i className="fa fa-plus"></i> Trust Replenishment Amount <span>$100</span> </p>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="inv-stat-text-row">
                                        <p>Balance due</p>
                                        <p>$0.00</p>
                                    </div>

                                    <div className="inv-stat-text-row">
                                        <p>Due Today</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="invoice-statement-box">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                    <div className="d-flex">
                                        <div className="form-check me-4">
                                            <input type="checkbox" className="form-check-input" />
                                            <label htmlFor="">Include Total Overdue</label>
                                        </div>
                                        <div className="form-check me-4">
                                            <input type="checkbox" className="form-check-input" />
                                            <label htmlFor="">Include Closed Cases</label>
                                        </div>
                                        <div className="form-check me-4">
                                            <input type="checkbox" className="form-check-input" />
                                            <label htmlFor="">Include Balance forward Invoices</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statement-wrp mt-4">
                            <h3>Trust</h3>
                        </div>
                        <div className="common-table-wrapper mt-0">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Allocation</th>
                                            <th>Current Balance</th>
                                            <th>Minumum Trust Balance </th>
                                            <th className="text-end">Requested Fund balance</th>
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
