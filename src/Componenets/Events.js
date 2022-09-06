import { React, useEffect, useState } from "react";



const Events = () => {

    return (
        <>
            <section class="admin-wrapper">
               

                <div class="admin-content-wrapper">
                    <div class="admin-title-header mt-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="">
                                    <div class="admin-title-flex">
                                        <h3>Events</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="admin-short-nav-buttons">
                                    <div class="table-btn-group">
                                        <a href="add-event.html"><button class="btn black-fill " type="button">Add Event</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="admin-white-box mt-4 text-center">
                        <div class="event-img">
                            <img src="/assets/img/event.png" class="img img-fluid" alt=""/>
                        </div>
                    </div>



                </div>

            </section>
        </>
    );
};

export default Events;
