import { React, useEffect, useState } from "react";



const ViewRequestedFunds = () => {

    return (
        <>
            <section class="admin-wrapper">

                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-9">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Requested Funds</h3>
                                        <ul class="archive-ul">
                                            <li class="active"><a href="javascript:;">All</a></li>
                                            <li><a href="javascript:;">Unsent</a></li>
                                            <li><a href="javascript:;">Sent</a></li>
                                            <li><a href="javascript:;">Paid</a></li>
                                            <li><a href="javascript:;">Partial</a></li>
                                            <li><a href="javascript:;">Overdue</a></li>
                                            <li><a href="javascript:;">Forwarded</a></li>
                                            <li><a href="javascript:;">Draft</a></li>
                                            <li><a href="javascript:;">Batches</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="add-req-fund.html"><button class="btn black-fill" type="button">Add New
                                            fund</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-3">
                                <div class="filter-input-box">
                                    <input type="text" class="form-control" placeholder="Search Funds" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="admin-white-box mt-4">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="common-table-wrapper mt-0">
                                    <div class="table-responsive">
                                        <table class="table">
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
                                                        <button class="btn view-btn-tb">View</button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="btn view-btn-tb">View</button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="btn view-btn-tb">View</button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="btn view-btn-tb">View</button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <button class="btn view-btn-tb">View</button>
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
                                                        <div class="action-btn-group">
                                                            <button class="btn" type="button"><img src="/assets/img/edit-pencil-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/notification-icon.png" alt="" /></button>
                                                            <button class="btn" type="button"><img src="/assets/img/delete-icon.png" alt="" /></button>
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
