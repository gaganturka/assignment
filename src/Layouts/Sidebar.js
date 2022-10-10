import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Sidebar = (props) => {
  const history = useNavigate();
  const location = useLocation();

  const [toggleButton, setToggleButton] = useState(false);
  const [active, setActive] = useState(false);

  const [sideBarVisible, setSideBarVisible] = useState(false);

  const { authState, authDispatch } = useContext(AuthContext);

  useEffect(() => {}, [active]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "REMOVE_USER" });
    history("/");
  };

  const toggleActiveClass = (event) => {
    let target = event.target;
    let mainLi = target.parentNode;
    console.log(target);
    let collapseMenu = mainLi.querySelector(".collapse");
    if (mainLi.classList.contains("active")) {
      mainLi.classList.remove("active");
      collapseMenu.classList.remove("show");
    } else {
      mainLi.classList.add("active");
      collapseMenu.classList.add("show");
    }
  };

  const activeClass = (routesToMatch, activeClass = "active") => {
    if (routesToMatch.includes(location.pathname)) {
      return activeClass;
    }
    return "";
  };

  return (
    <>
      <div className="mobile-nav-toggle">
        <div className="admin-mb-logo">
          <img
            src="./assets/img/main-logo.png"
            className="img img-fluid"
            alt=""
          />
        </div>
        <div className="admin-sidebar-toggle-icon">
          <a href={undefined}>
            <button className="btn" type="button">
              <img
                src="./assets/img/logout-icon.png"
                onClick={handleLogout}
                alt=""
              />
            </button>
          </a>
          <button
            onClick={() => {
              setSideBarVisible(!sideBarVisible);
            }}
            className="btn astc-icon"
            type="button"
          >
            <img src="./assets/img/navbar-toggle-icon.png" alt="" />
          </button>
        </div>
      </div>
      <div className={`sidebar-wrapper ${sideBarVisible ? "show" : ""}`}>
        <div className="sidebar-main-logo">
          <img src="/assets/img/main-logo.png" alt="" />
        </div>
        <div className="flex-shrink-0 ">
          <ul className="list-unstyled ps-0">
            <li className={`${activeClass(["/clients", "/companies"])}`}>
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#user-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                User Management
                <i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  ["/clients", "/companies"],
                  "show"
                )}`}
                id="user-collapse"
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/clients"])}`}>
                    <Link to="/clients" className="link-dark rounded">
                      Clients
                    </Link>
                  </li>
                  <li className={`${activeClass(["/companies"])}`}>
                    <Link to="/companies" className="link-dark rounded">
                      Companies
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${activeClass(["/cases", "/cases/create"])}`}>
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#firm-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                Case Management<i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  ["/cases", "/cases/create"],
                  "show"
                )}`}
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/cases"])}`}>
                    <Link to="/cases" className="link-dark rounded">
                      My Cases
                    </Link>
                  </li>
                  <li className={`${activeClass(["/cases/create"])}`}>
                    <Link to="/cases/create" className="link-dark rounded">
                      Add New Case
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${activeClass(["/time-expenses"])}`}>
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#manexpert-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                Activity Management<i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  ["/time-expenses"],
                  "show"
                )}`}
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/time-expenses"])}`}>
                    <Link to="/time-expenses" className="link-dark rounded">
                      Time & Expenses entry
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`${activeClass([
                "/viewInvoices",
                "/addInvoice",
                "/viewRequestedFunds",
                "/addRequestFund",
                "/statement",
              ])}`}
            >
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#case-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                Financial Management<i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  [
                    "/viewInvoices",
                    "/addInvoice",
                    "/view-requested-funds",
                    "/add-request-fund",
                    "/statement",
                  ],
                  "show"
                )}`}
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/viewInvoices"])}`}>
                    <Link to="/viewInvoices" className="link-dark rounded">
                      View Invoices
                    </Link>
                  </li>
                  <li className={`${activeClass(["/addInvoice"])}`}>
                    <Link to="/addInvoice" className="link-dark rounded">
                      Add new Invoice
                    </Link>
                  </li>
                  <li className={`${activeClass(["/view-requested-funds"])}`}>
                    <Link
                      to="/view-requested-funds"
                      className="link-dark rounded"
                    >
                      View Requested Funds
                    </Link>
                  </li>
                  <li className={`${activeClass(["/add-request-fund"])}`}>
                    <Link to="/add-request-fund" className="link-dark rounded">
                      Add new Request fund
                    </Link>
                  </li>
                  <li className={`${activeClass(["/statement"])}`}>
                    <Link to="/statement" className="link-dark rounded">
                      Statement
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${activeClass(["/events", "/addEvent"])}`}>
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#activity-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                Calendaring<i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  ["/events", "/add-event"],
                  "show"
                )}`}
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/events"])}`}>
                    <Link to="/events" className="link-dark rounded">
                      Events
                    </Link>
                  </li>
                  <li className={`${activeClass(["/add-event"])}`}>
                    <Link to="/add-event" className="link-dark rounded">
                      Add Event
                    </Link>
                  </li>
                  {/* <li className={`${activeClass(["/manageLocation"])}`}>
                    <Link to="/manageLocation" className="link-dark rounded">
                      Manage Location
                    </Link>
                  </li> */}
                  {/* <li className={`${activeClass(["/addLocation"])}`}>
                    <Link to="/addLocation" className="link-dark rounded">
                      Add Location
                    </Link>
                  </li> */}
                </ul>
              </div>
            </li>
            <li
              className={`${activeClass([
                "/manageEmployee",
                "/addEmployee",
                "/manageRole",
                "/addRole",
                "/manageSalaries",
              ])}`}
            >
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#financial-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                HR / Payroll<i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  [
                    "/manage-employee",
                    "/add-employee",
                    "/manage-role",
                    "/add-role",
                    "/manageSalaries",
                  ],
                  "show"
                )}`}
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/manage-employee"])}`}>
                    <Link to="/manage-employee" className="link-dark rounded">
                      Manage Employee
                    </Link>
                  </li>
                  <li className={`${activeClass(["/add-employee"])}`}>
                    <Link to="/add-employee" className="link-dark rounded">
                      Add Employee
                    </Link>
                  </li>
                  <li className={`${activeClass(["/manage-role"])}`}>
                    <Link to="/manage-role" className="link-dark rounded">
                      Manage Role
                    </Link>
                  </li>
                  <li className={`${activeClass(["/add-role"])}`}>
                    <Link to="/add-role" className="link-dark rounded">
                      Add Role
                    </Link>
                  </li>
                  <li className={`${activeClass(["/manageSalaries"])}`}>
                    <Link to="/manageSalaries" className="link-dark rounded">
                      Manage Salaries
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`${activeClass([
                "/activity-types",
                "/contact-groups",
                "/case-stages",
                "/practice-areas",
              ])}`}
            >
              <button
                className="btn btn-toggle align-items-center rounded"
                data-bs-toggle="collapse"
                data-bs-target="#user-collapse"
                aria-expanded="false"
                onClick={(event) => {
                  toggleActiveClass(event);
                }}
              >
                Additional Options
                <i className="fa fa-caret-down"></i>
              </button>
              <div
                className={`collapse ${activeClass(
                  [
                    "/activity-types",
                    "/contact-groups",
                    "/case-stages",
                    "/practice-areas",
                    "/manage-location",
                    "/manage-bank-account"
                  ],
                  "show"
                )}`}
                id="user-collapse"
              >
                <ul className="btn-toggle-nav">
                  <li className={`${activeClass(["/activity-types"])}`}>
                    <Link to="/activity-types" className="link-dark rounded">
                      Activity Types
                    </Link>
                  </li>
                  <li className={`${activeClass(["/case-stages"])}`}>
                    <Link to="/case-stages" className="link-dark rounded">
                      Case Stages
                    </Link>
                  </li>
                  <li className={`${activeClass(["/contact-groups"])}`}>
                    <Link to="/contact-groups" className="link-dark rounded">
                      Contact Groups
                    </Link>
                  </li>
                  <li className={`${activeClass(["/practice-areas"])}`}>
                    <Link to="/practice-areas" className="link-dark rounded">
                      Practice Areas
                    </Link>
                  </li>
                  <li className={`${activeClass(["/manage-location"])}`}>
                    <Link to="/manage-location" className="link-dark rounded">
                      Manage Location
                    </Link>
                  </li>
                  <li className={`${activeClass(["/manage-bank-account"])}`}>
                    <Link to="/manage-bank-account" className="link-dark rounded">
                      Bank Account
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className={`${activeClass(["/manageSubscriptions"])}`}>
              <Link to="/manageSubscriptions">
                <button className="btn btn-toggle align-items-center rounded">
                  Manage Subscription
                </button>
              </Link>
            </li>
            <li className={`${activeClass(["/settings"])}`}>
              <Link to="/settings">
                <button className="btn btn-toggle align-items-center rounded ">
                  Settings
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="logut-sidebar-wrp">
          <a href={undefined} onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
