import React from 'react';
import {Cases} from "../Pages/Cases";
import {Case} from "../Pages/Case";
import {TimeEntry} from "../Pages/TimeEntry";
import {Invoices} from "../Pages/Invoices";
import {Invoice} from "../Pages/Invoice";
import { Router, Route } from 'react-router';
import ViewRequestedFunds from "../Pages/ViewRequestedFunds";
import AddRequestFund from "../Pages/AddRequestFund";
import Statement from "../Pages/Statement";
import Events from "../Pages/Events";   
import AddEvent from "../Pages/AddEvent";
import ManageEmployee from "../Pages/ManageEmployee";
import ManageBankAccount from "../Pages/ManageBankAccount";
import AddEmployee from "../Pages/AddEmployee";
import ManageRole from "../Pages/ManageRole";
import AddRole from "../Pages/AddRole";
import ManageSalaries from "../Pages/ManageSalaries";
import ManageSubscriptions from "../Pages/ManageSubscriptions";
import { CaseStages } from '../Pages/CaseStages';
import { EditEmployee } from '../Pages/EditEmployee'
import Settings from "../Pages/Settings";
import PageNotFound from "../Pages/PageNotFound";
import { Routes } from "react-router-dom";
import { PracticeAreas } from "../Pages/PracticeAreas";
import { Companies } from "../Pages/Companies";
import { Client } from "../Pages/Client";
import { Clients } from "../Pages/Clients";
import { ManageLocation } from "../Pages/ManageLocation"
import { ContactGroups } from "../Pages/ContactGroups";
import { CaseDetails } from "../Pages/CaseDetails";
import { TimeAndExpensesEntries } from "../Pages/TimeAndExpensesEntries";
import { ActivityTypes } from "../Pages/ActivityTypes";
import AddLocation from '../Pages/AddLocation';

import {InvoiceDetails} from "../Pages/InvoiceDetails";

import { ExpensesEntries } from '../Pages/expenseEntery'


const afterLoginRoutes = (
    <Routes>
        <Route
            exact
            path="/"
            key="clients"
            element={<Clients />}
        />

        <Route
            exact
            path="/addLocation"
            key="AddLocation"
            element={<AddLocation/>}
        />

        <Route
            exact
            path="/manage-location"
            key="manage-location"
            element={<ManageLocation/>}
        />

        <Route
            exact
            path="/clients"
            key="clients"
            element={<Clients/>}
        />

        <Route
            exact
            path="/clients/new"
            key="newClient"
            element={<Client />}
        />

        <Route
            exact
            path="/clients/:modelId/edit"
            key="editClient"
            element={<Client />}
        />

        <Route
            exact
            path="/companies"
            key="companies"
            element={<Companies />}
        />

        <Route
            exact
            path="/cases"
            key="cases"
            element={<Cases />}
        />

        <Route
            exact
            path="/cases/create"
            key="newCase"
            element={<Case />}
        />

        <Route
            exact
            path="/cases/:modelId/edit"
            key="editCase"
            element={<Case />}
        />

        <Route
            exact
            path="/cases/:modelId/case-details"
            key="caseDetails"
            element={<CaseDetails />}
        />

        <Route
            exact
            path="/time-expenses"
            key="time-expenses"
            element={<TimeAndExpensesEntries />}
        />

        <Route
            exact
            path="/time-expenses/expenses/create"
            key="expenses"
            element={<ExpensesEntries />}
        />

        <Route
            exact
            path="/time-expenses/:modelId/edit"
            key="createTimeEntry"
            element={<TimeEntry />}
        />

        <Route
            exact
            path="/time-expenses/:modelId/editexpense"
            key="updateExpenseEntry"
            element={<ExpensesEntries />}
        />

        <Route
            exact
            path="/time-expenses/times/create"
            key="createTimeEntry"
            element={<TimeEntry/>}
        />

        <Route
            exact
            path="/invoices"
            key="invoices"
            element={<Invoices/>}
        />

        <Route
            exact
            path="/invoices/new"
            key="newInvoice"
            element={<Invoice/>}
        />

        <Route
            exact
            path="/invoices/:modelId/edit"
            key="editInvoice"
            element={<Invoice/>}
        />

        <Route
            exact
            path="/invoices/:modelId/view"
            key="viewInvoice"
            element={<InvoiceDetails/>}
        />

        <Route
            exact
            path="/view-requested-funds"
            key="view-requested-funds"
            element={<ViewRequestedFunds/>}
        />
        <Route
            exact
            path="/add-request-fund"
            key="add-request-fund"
            element={<AddRequestFund/>}
        />
          <Route
            exact
            path="edit-request-fund/:requestFundId"
            key="/edit-request-fund"
            element={<AddRequestFund/>}

        />
        <Route
            exact
            path="/statement"
            key="statement"
            element={<Statement />}
        />

        <Route exact path="/events" key="events" element={<Events />} />

        <Route
            exact
            path="/add-event"
            key="add-event"
            element={<AddEvent/>}
        />
        <Route
            exact
            path="/manage-employee"
            key="manage-employee"
            element={<ManageEmployee/>}
        />
        <Route
            exact
            path="/manage-bank-account"
            key="manage-bank-account"
            element={<ManageBankAccount/>}
        />
        <Route
            exact
            path="/add-employee"
            key="add-employee"
            element={<AddEmployee/>}
        />
        <Route
            exact
            path="/edit-employee/:employeeId"
            key="edit-employee"
            element={<EditEmployee/>}
        />
        <Route
            exact
            path="/manage-role"
            key="manage-role"
            element={<ManageRole/>}
        />
        <Route exact path="/add-role" key="add-role" element={<AddRole/>}/>
        <Route exact path="/edit-role/:roleId" key="edit-role" element={<AddRole/>}/>

        <Route
            exact
            path="/manageSalaries"
            key="manageSalaries"
            element={<ManageSalaries />}
        />
        <Route
            exact
            path="/manageSubscriptions"
            key="manageSubscriptions"
            element={<ManageSubscriptions />}
        />
        <Route
            exact
            path="/settings"
            key="settings"
            element={<Settings />}
        />
        <Route
            exact
            path="/contact-groups"
            key="contact-groups"
            element={<ContactGroups />}
        />
        <Route
            exact
            path="/case-stages"
            key="case-stages"
            element={<CaseStages />}
        />
        <Route
            exact
            path="/activity-types"
            key="activityTypes"
            element={<ActivityTypes />}
        />
        <Route
            exact
            path="/practice-areas"
            key="practice-areas"
            element={<PracticeAreas />}
        />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
);

export default afterLoginRoutes;
