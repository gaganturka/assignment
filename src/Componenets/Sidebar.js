import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";



const Sidebar = (props) => {

    const history = useNavigate();
    const [toggleButton, setToggleButton] = useState(false);

    const [active, setActive] = useState(false);
    const [newClass, setNewClass] = useState("");
    useEffect(() => {
        addClass();
    }, [active]);


    const addClass = async () => {
        if (active) {
            setNewClass("show")
        } else {
            setNewClass("")
        }

    }


    return (
        <>
            <div className="sidebar-toggle">
                <button className="btn sidebar-mb-toggle-btn">
                    <img src="/assets/img/expand-sidebar.png" alt="" /> User Menu
                </button>
            </div>
            <div class="sidebar-wrapper">
                <div class="sidebar-main-logo">
                    <img src="/assets/img/main-logo.png" alt="" />
                </div>
                <div class="flex-shrink-0 ">
                    <ul class="list-unstyled ps-0">
                        <li>
                            <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                data-bs-target="#user-collapse" aria-expanded="false" onClick={() => {
                                    setActive(!active);
                                }}>
                                User Management<i class="fa fa-caret-down"></i>
                            </button>
                            <div class={`collapse ${newClass}`} id="user-collapse">
                                <ul class="btn-toggle-nav">
                                    <li class=""><a href="/manageClient" class="link-dark rounded">Manage Client </a></li>
                                    <li><a href="/addClient" class="link-dark rounded">Add Client</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                data-bs-target="#firm-collapse" aria-expanded="false">
                                Case Management<i class="fa fa-caret-down"></i>
                            </button>
                            <div class="collapse" id="firm-collapse">
                                <ul class="btn-toggle-nav">
                                    <li class=""><a href="/myCases" class="link-dark rounded">My Cases</a></li>
                                    <li><a href="/addNewCase" class="link-dark rounded">Add new case</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="">
                            <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                data-bs-target="#manexpert-collapse" aria-expanded="false">
                                Activity Management<i class="fa fa-caret-down"></i>
                            </button>
                            <div class="collapse" id="manexpert-collapse">
                                <ul class="btn-toggle-nav">
                                    <li class=""><a href="/timeAndExpensesEntry" class="link-dark rounded">Time & Expenses entry</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="">
                            <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                data-bs-target="#case-collapse" aria-expanded="false">
                                Financial Management<i class="fa fa-caret-down"></i>
                            </button>
                            <div class="collapse" id="case-collapse">
                                <ul class="btn-toggle-nav">
                                    <li class=""><a href="/viewInvoices" class="link-dark rounded">View Invoices</a></li>
                                    <li><a href="/addInvoice" class="link-dark rounded">Add new Invoice</a></li>
                                    <li><a href="/viewRequestedFunds" class="link-dark rounded">View Requested Funds</a></li>
                                    <li><a href="/addRequestFund" class="link-dark rounded">Add new Request fund</a></li>
                                    <li><a href="/statement" class="link-dark rounded">Statement</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="">
                            <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                data-bs-target="#activity-collapse" aria-expanded="false">
                                Calendaring<i class="fa fa-caret-down"></i>
                            </button>
                            <div class="collapse" id="activity-collapse">
                                <ul class="btn-toggle-nav">
                                    <li><a href="/events" class="link-dark rounded">Events</a>
                                    </li>
                                    <li><a href="/addEvent" class="link-dark rounded">Add Event</a></li>
                                </ul>
                            </div>

                        </li>
                        <li class="">
                            <button class="btn btn-toggle align-items-center rounded" data-bs-toggle="collapse"
                                data-bs-target="#financial-collapse" aria-expanded="false">
                                HR / Payroll<i class="fa fa-caret-down"></i>
                            </button>
                            <div class="collapse" id="financial-collapse">
                                <ul class="btn-toggle-nav">
                                    <li class=""><a href="/manageEmployee" class="link-dark rounded">Manage Employee</a></li>
                                    <li><a href="/addEmployee" class="link-dark rounded">Add Employee</a></li>
                                    <li><a href="/manageRole" class="link-dark rounded">Manage Role</a></li>
                                    <li><a href="/addRole" class="link-dark rounded">Add Role</a></li>
                                    <li><a href="/manageSalaries" class="link-dark rounded">Manage Salaries</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="">
                            <a href="/manageSubscriptions"><button class="btn btn-toggle align-items-center rounded">
                                Manage Subscription
                            </button></a>
                        </li>
                        <li class="">
                            <a href="/settings"><button class="btn btn-toggle align-items-center rounded ">
                                Settings
                            </button></a>
                        </li>
                    </ul>
                </div>
                <div class="logut-sidebar-wrp">
                    <a href="javascript:;">Logout</a>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
