import { React, useEffect, useState } from "react";



const Settings = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="row">
                        <div class="col-lg-12">

                            <div class="admin-white-box pt-5">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="user-personal-details">
                                            <div class="update-pp-wrp ">
                                                <div class="upt-pp-img">
                                                    <img src="/assets/img/mathew-wade.png" class="img img-fluid" alt="" />
                                                </div>
                                                <div class="update-pp-content">
                                                    <div class="d-flex justify-content-between w-100">
                                                        <div>
                                                            <p>Seraphic Accountant</p>
                                                            <small><em>Admin</em></small>
                                                        </div>
                                                        <div>
                                                            <button class="btn black-fill" type="button">Edit</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="update-per-details-wrp mb-4">
                                                <form action="">
                                                    <div class="row">
                                                        <div class="col-lg-6">
                                                            <div class="">
                                                                <label for="">First name</label>
                                                                <input type="text" class="form-control" placeholder="" value="Marsh" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <div class="">
                                                                <label for="">Last name</label>
                                                                <input type="text" class="form-control" placeholder="" value="Josheph" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="">
                                                                <label for="">Phone Number</label>
                                                                <input type="email" class="form-control" placeholder="" value="98980-77879" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="">
                                                                <label for="">Email ID</label>
                                                                <input type="email" class="form-control" placeholder="" value="MarshJoph12@gmail.com" />
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="">
                                                                <label for="">Date of Birth</label>
                                                                <div class="input-date">
                                                                    <input type="date" class="form-control" placeholder="" value="" />
                                                                    <img src="/assets/img/cal-icon.png" class="img img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12">
                                                            <div class="">
                                                                <label for="">Password</label>
                                                                <input type="password" class="form-control" placeholder="" value="1234567890" />
                                                            </div>
                                                        </div>


                                                    </div>

                                                </form>
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

export default Settings;
