import { React, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";

const Events = () => {
  const events = [
    { title: "All Day Event", start: getDate("YEAR-MONTH-01") },
    {
      title: "Long Eventt",
      start: getDate("YEAR-MONTH-07"),
      end: getDate("YEAR-MONTH-10"),
      location: "Seraphic",
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
    },
    {
      groupId: "999",
      title: "Repeating Event",
      start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
    },
    {
      title: "Conference",
      start: "YEAR-MONTH-17",
      end: getDate("YEAR-MONTH-19"),
    },
    {
      title: "Meeting",
      start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
      end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
    },
    { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
    { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
    { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
    { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
    { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
  ];

  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();

    if (month.length === 1) {
      month = "0" + month;
    }

    return dayString.replace("YEAR", year).replace("MONTH", month);
  }

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  return (
    <>
      <section className="admin-wrapper">
        <div className="admin-content-wrapper">
          <div className="admin-title-header mt-0">
            {/* <div className="row">
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
                        </div> */}
          </div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            eventContent={renderEventContent}
            events={events}
          />
          {/* <div className="admin-white-box mt-4 text-center">
                        <div className="event-img">
                            <img src="/assets/img/event.png" className="img img-fluid" alt=""/>
                        </div>
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default Events;
