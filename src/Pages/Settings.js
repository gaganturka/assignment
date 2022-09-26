import { React, useEffect, useState } from "react";



const Settings = () => {

    return (
        <>
            <section className="admin-wrapper">


                <div className="admin-content-wrapper">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="admin-white-box pt-5">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="user-personal-details">
                                            <div className="update-pp-wrp ">
                                                <div className="upt-pp-img">
                                                    <img src="/assets/img/mathew-wade.png" className="img img-fluid" alt="" />
                                                </div>
                                                <div className="update-pp-content">
                                                    <div className="d-flex justify-content-between w-100">
                                                        <div>
                                                            <p>Seraphic Accountant</p>
                                                            <small><em>Admin</em></small>
                                                        </div>
                                                        <div>
                                                            <button className="btn black-fill" type="button">Edit</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="update-per-details-wrp mb-4">
                                                <form action="">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="">
                                                                <label htmlFor="">First name</label>
                                                                <input type="text" className="form-control" placeholder="" value="Marsh" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="">
                                                                <label htmlFor="">Last name</label>
                                                                <input type="text" className="form-control" placeholder="" value="Josheph" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="">
                                                                <label htmlFor="">Phone Number</label>
                                                                <input type="email" className="form-control" placeholder="" value="98980-77879" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="">
                                                                <label htmlFor="">Email ID</label>
                                                                <input type="email" className="form-control" placeholder="" value="MarshJoph12@gmail.com" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="">
                                                                <label htmlFor="">Date of Birth</label>
                                                                <div className="input-date">
                                                                    <input type="date" className="form-control" placeholder="" value="" />
                                                                    <img src="/assets/img/cal-icon.png" className="img img-fluid" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="">
                                                                <label htmlFor="">Password</label>
                                                                <input type="password" className="form-control" placeholder="" value="1234567890" />
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
