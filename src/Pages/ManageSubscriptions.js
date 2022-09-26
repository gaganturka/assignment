import { React, useEffect, useState } from "react";



const ManageSubscriptions = () => {

    return (
        <>
            <section className="admin-wrapper">


                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Choose Membership plans</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-lg-12">
                            <div className="admin-white-box">

                                <div className="membership-admin-box">
                                    <div className="text-center">
                                        <h1>Choose Membership Plans</h1>
                                        <p>Get Discounts on Bookings + Access to the Recordings
                                        </p>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-lg-4">
                                            <div className="membership-plan-box">
                                                <div className="side-indicator"></div>
                                                <h3>Basic</h3>
                                                <h5><img src="/assets/img/clock-green.png" className="img img-fluid" alt="" /> 10h / month</h5>
                                                <h4> <span></span> OMR 8</h4>
                                                <h4><b>5.5 OMR</b></h4>
                                                <h6>Billed Monthly</h6>
                                                <p>As one payment of 5.5 $</p>
                                                <button className="btn" type="button">Buy Basic</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="membership-plan-box active">
                                                <div className="bv-tag">Best Value</div>
                                                <div className="side-indicator"></div>
                                                <h3>Premium</h3>
                                                <h5><img src="/assets/img/clock-yellow.png" className="img img-fluid" alt="" /> 22h / month</h5>
                                                <h4> <span></span> OMR 100</h4>
                                                <h4><b>60 OMR</b></h4>
                                                <h6>Billed Annual</h6>
                                                <p>As one payment of 60 $</p>
                                                <button className="btn" type="button">Buy Premium</button>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="membership-plan-box">
                                                <div className="side-indicator"></div>
                                                <h3>Advance</h3>
                                                <h5><img src="/assets/img/clock-green.png" className="img img-fluid" alt="" /> 22h / month</h5>
                                                <h4> <span></span> OMR 8</h4>
                                                <h4><b>5.5 OMR</b></h4>
                                                <h6>Billed Monthly</h6>
                                                <p>As one payment of 5.5 $</p>
                                                <button className="btn" type="button">Buy Advance</button>
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

export default ManageSubscriptions;
