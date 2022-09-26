import { React, useEffect, useState } from "react";



const Events = () => {

    return (
        <>
            <section className="admin-wrapper">
               

                <div className="admin-content-wrapper">
                    <div className="admin-title-header mt-0">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="admin-title-flex">
                                        <h3>Events</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="admin-short-nav-buttons">
                                    <div className="table-btn-group">
                                        <a href="add-event.html"><button className="btn black-fill " type="button">Add Event</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="admin-white-box mt-4 text-center">
                        <div className="event-img">
                            <img src="/assets/img/event.png" className="img img-fluid" alt=""/>
                        </div>
                    </div>



                </div>

            </section>
        </>
    );
};

export default Events;
