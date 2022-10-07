import { React, useEffect, useState } from "react";



const ViewRequestedFunds = () => {

    return (
        <>
            <section className="admin-wrapper">

                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Requested Funds</h3>
                                        <ul className="archive-ul">
                                            <li className="active"><a href={undefined}>All</a></li>
                                            <li><a href={undefined}>Unsent</a></li>
                                            <li><a href={undefined}>Sent</a></li>
                                            <li><a href={undefined}>Paid</a></li>
                                            <li><a href={undefined}>Partial</a></li>
                                            <li><a href={undefined}>Overdue</a></li>
                                            <li><a href={undefined}>Forwarded</a></li>
                                            <li><a href={undefined}>Draft</a></li>
                                            <li><a href={undefined}>Batches</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <a href="add-req-fund.html"><button className="btn black-fill" type="button">Add New
                                            fund</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-3">
                                <div className="filter-input-box">
                                    <input type="text" className="form-control" placeholder="Search Funds" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="admin-white-box mt-4">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="common-table-wrapper mt-0">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>&nbsp;</th>
                                                    <th>Number</th>
                                                    <th>Contact</th>
                                                    <th>Account</th>
                                                    <th>Allocted to</th>
                                                    <th>Amount</th>
                                                    <th>Paid</th>
                                                    <th>Amount due</th>
                                                    <th>Deu</th>
                                                    <th>Deu sent</th>
                                                    <th>Viewed</th>
                                                    <th> &nbsp; </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <button className="btn view-btn-tb">View</button>
                                                    </td>
                                                    <td>
                                                        <h5>0010100</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Trust account</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Vaibhav Jagtap</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$700</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$1000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>—-</h6>
                                                    </td>
                                                    <td>
                                                        <h6>22 Sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>24 sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Never</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button className="btn view-btn-tb">View</button>
                                                    </td>
                                                    <td>
                                                        <h5>0010100</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Trust account</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Vaibhav Jagtap</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$700</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$1000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>—-</h6>
                                                    </td>
                                                    <td>
                                                        <h6>22 Sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>24 sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Never</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button className="btn view-btn-tb">View</button>
                                                    </td>
                                                    <td>
                                                        <h5>0010100</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Trust account</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Vaibhav Jagtap</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$700</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$1000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>—-</h6>
                                                    </td>
                                                    <td>
                                                        <h6>22 Sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>24 sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Never</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button className="btn view-btn-tb">View</button>
                                                    </td>
                                                    <td>
                                                        <h5>0010100</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Trust account</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Vaibhav Jagtap</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$700</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$1000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>—-</h6>
                                                    </td>
                                                    <td>
                                                        <h6>22 Sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>24 sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Never</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button className="btn view-btn-tb">View</button>
                                                    </td>
                                                    <td>
                                                        <h5>0010100</h5>
                                                    </td>
                                                    <td>
                                                        <h5>Vaibhav Jagtap</h5>
                                                    </td>
                                                    <td>
                                                        <h6>Trust account</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Vaibhav Jagtap</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$700</h6>
                                                    </td>
                                                    <td>
                                                        <h6>$1000</h6>
                                                    </td>
                                                    <td>
                                                        <h6>—-</h6>
                                                    </td>
                                                    <td>
                                                        <h6>22 Sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>24 sept 2021</h6>
                                                    </td>
                                                    <td>
                                                        <h6>Never</h6>
                                                    </td>
                                                    <td>
                                                        <div className="action-btn-group">
                                                            <button className="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button className="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>





                                            </tbody>
                                        </table>
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

export default ViewRequestedFunds;
