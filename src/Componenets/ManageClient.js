import { React, useEffect, useState } from "react";



const ManageClient = () => {

    return (
        <>
            <section class="admin-wrapper">
                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Manage Client</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="add-client.html"><button class="btn black-fill" type="button">Add Client</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="admin-filter-navbar bg-grey">
                        <div class="row align-items-center">
                            <div class="col-lg-1">
                                <h6 class="mb-0">Filters</h6>
                            </div>
                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Contact Type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Contact Group</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-select-box">
                                    <select class="form-select">
                                        <option selected="">Contact Group</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg">
                                <div class="filter-input-box">
                                    <input type="text" class="form-control" placeholder="Search Firm" />
                                    <img src="/assets/img/search-icon.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <div class="admin-white-box">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="common-table-wrapper mt-0">
                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th> &nbsp; </th>
                                                            <th>Client name</th>
                                                            <th>Contact person </th>
                                                            <th>Case </th>
                                                            <th>Contact group </th>
                                                            <th>Added </th>
                                                            <th> &nbsp; </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src="/assets/img/user-img.png" class="img img-fluid" alt="" />
                                                            </td>
                                                            <td>
                                                                <h5>Seraphic infosolution</h5>
                                                            </td>
                                                            <td>
                                                                <h5>Individual</h5>
                                                            </td>
                                                            <td>
                                                                <h6>Case *****
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Legal Constrution </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Sept 14 2021 <br />
                                                                    By Aprzz James</h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/edit-pencil-icon.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/delete-icon.png" alt="" /> </button></a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="/assets/img/user-img.png" class="img img-fluid" alt="" />
                                                            </td>
                                                            <td>
                                                                <h5>Seraphic infosolution</h5>
                                                            </td>
                                                            <td>
                                                                <h5>Individual</h5>
                                                            </td>
                                                            <td>
                                                                <h6>Case *****
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Legal Constrution </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Sept 14 2021 <br />
                                                                    By Aprzz James</h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/edit-pencil-icon.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/delete-icon.png" alt="" /> </button></a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="/assets/img/user-img.png" class="img img-fluid" alt="" />
                                                            </td>
                                                            <td>
                                                                <h5>Seraphic infosolution</h5>
                                                            </td>
                                                            <td>
                                                                <h5>Individual</h5>
                                                            </td>
                                                            <td>
                                                                <h6>Case *****
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Legal Constrution </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Sept 14 2021 <br />
                                                                    By Aprzz James</h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/edit-pencil-icon.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/delete-icon.png" alt="" /> </button></a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="/assets/img/user-img.png" class="img img-fluid" alt="" />
                                                            </td>
                                                            <td>
                                                                <h5>Seraphic infosolution</h5>
                                                            </td>
                                                            <td>
                                                                <h5>Individual</h5>
                                                            </td>
                                                            <td>
                                                                <h6>Case *****
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Legal Constrution </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Sept 14 2021 <br />
                                                                    By Aprzz James</h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/edit-pencil-icon.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/delete-icon.png" alt="" /> </button></a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="/assets/img/user-img.png" class="img img-fluid" alt="" />
                                                            </td>
                                                            <td>
                                                                <h5>Seraphic infosolution</h5>
                                                            </td>
                                                            <td>
                                                                <h5>Individual</h5>
                                                            </td>
                                                            <td>
                                                                <h6>Case *****
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Legal Constrution </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Sept 14 2021 <br />
                                                                    By Aprzz James</h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/edit-pencil-icon.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/delete-icon.png" alt="" /> </button></a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src="/assets/img/user-img.png" class="img img-fluid" alt="" />
                                                            </td>
                                                            <td>
                                                                <h5>Seraphic infosolution</h5>
                                                            </td>
                                                            <td>
                                                                <h5>Individual</h5>
                                                            </td>
                                                            <td>
                                                                <h6>Case *****
                                                                </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Legal Constrution </h6>
                                                            </td>
                                                            <td>
                                                                <h6>Sept 14 2021 <br />
                                                                    By Aprzz James</h6>
                                                            </td>

                                                            <td>
                                                                <div class="action-btn-group">
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/eye-icon-black.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/edit-pencil-icon.png" alt="" /> </button></a>
                                                                    <a href="javascript:;"><button class="btn" type="button"> <img src="/assets/img/delete-icon.png" alt="" /> </button></a>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default ManageClient;
