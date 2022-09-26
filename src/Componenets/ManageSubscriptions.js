import { React, useEffect, useState } from "react";



const ManageSubscriptions = () => {

    return (
        <>
            <section class="admin-wrapper">


                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Choose Membership plans</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="row mt-4">
                        <div class="col-lg-12">
                            <div class="admin-white-box">

                                <div class="membership-admin-box">
                                    <div class="text-center">
                                        <h1>Choose Membership Plans</h1>
                                        <p>Get Discounts on Bookings + Access to the Recordings
                                        </p>
                                    </div>
                                    <div class="row mt-5">
                                        <div class="col-lg-4">
                                            <div class="membership-plan-box">
                                                <div class="side-indicator"></div>
                                                <h3>Basic</h3>
                                                <h5><img src="/assets/img/clock-green.png" class="img img-fluid" alt="" /> 10h / month</h5>
                                                <h4> <span></span> OMR 8</h4>
                                                <h4><b>5.5 OMR</b></h4>
                                                <h6>Billed Monthly</h6>
                                                <p>As one payment of 5.5 $</p>
                                                <button class="btn" type="button">Buy Basic</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="membership-plan-box active">
                                                <div class="bv-tag">Best Value</div>
                                                <div class="side-indicator"></div>
                                                <h3>Premium</h3>
                                                <h5><img src="/assets/img/clock-yellow.png" class="img img-fluid" alt="" /> 22h / month</h5>
                                                <h4> <span></span> OMR 100</h4>
                                                <h4><b>60 OMR</b></h4>
                                                <h6>Billed Annual</h6>
                                                <p>As one payment of 60 $</p>
                                                <button class="btn" type="button">Buy Premium</button>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="membership-plan-box">
                                                <div class="side-indicator"></div>
                                                <h3>Advance</h3>
                                                <h5><img src="/assets/img/clock-green.png" class="img img-fluid" alt="" /> 22h / month</h5>
                                                <h4> <span></span> OMR 8</h4>
                                                <h4><b>5.5 OMR</b></h4>
                                                <h6>Billed Monthly</h6>
                                                <p>As one payment of 5.5 $</p>
                                                <button class="btn" type="button">Buy Advance</button>
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
