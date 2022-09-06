import Sidebar from "./Componenets/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/main.css"
import "./styles/bootstrap.min.css"
import "./styles/responsive.css"
import ManageClient from "./Componenets/ManageClient";
import AddClient from "./Componenets/AddClient"
import MyCases from "./Componenets/MyCases";
import AddNewCase from "./Componenets/AddNewCase";
import TimeAndExpensesEntry from "./Componenets/TimeAndExpensesEntry";
import ViewInvoices from "./Componenets/ViewInvoices";
import AddInvoice from "./Componenets/AddInvoice";
import ViewRequestedFunds from "./Componenets/ViewRequestedFunds";
import AddRequestFund from "./Componenets/AddRequestFund";
import Statement from "./Componenets/Statement";
import Events from "./Componenets/Events"
import AddEvent from "./Componenets/AddEvent";
import ManageEmployee from "./Componenets/ManageEmployee";
import AddEmployee from "./Componenets/AddEmployee";
import ManageRole from "./Componenets/ManageRole";
import AddRole from "./Componenets/AddRole";
import ManageSalaries from "./Componenets/ManageSalaries";
import ManageSubscriptions from "./Componenets/ManageSubscriptions";
import Settings from "./Componenets/Settings";

function App() {
  return (
    <>

      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/manageClient" key="manageClient" element={<ManageClient />} />
          <Route exact path="/addClient" key="addClient" element={<AddClient />} />
          <Route exact path="/myCases" key="myCases" element={<MyCases />} />
          <Route exact path="/addNewCase" key="addNewCase" element={<AddNewCase />} />
          <Route exact path="/timeAndExpensesEntry" key="timeAndExpensesEntry" element={<TimeAndExpensesEntry />} />
          <Route exact path="/viewInvoices" key="viewInvoices" element={<ViewInvoices />} />
          <Route exact path="/addInvoice" key="addInvoice" element={<AddInvoice />} />
          <Route exact path="/viewRequestedFunds" key="viewRequestedFunds" element={<ViewRequestedFunds />} />
          <Route exact path="/addRequestFund" key="addRequestFund" element={<AddRequestFund />} />
          <Route exact path="/statement" key="statement" element={<Statement />} />
          <Route exact path="/events" key="events" element={<Events />} />
          <Route exact path="/addEvent" key="addEvent" element={<AddEvent />} />
          <Route exact path="/manageEmployee" key="manageEmployee" element={<ManageEmployee />} />
          <Route exact path="/addEmployee" key="addEmployee" element={<AddEmployee />} />
          <Route exact path="/manageRole" key="manageRole" element={<ManageRole />} />
          <Route exact path="/addRole" key="addRole" element={<AddRole />} />
          <Route exact path="/manageSalaries" key="manageSalaries" element={<ManageSalaries />} />
          <Route exact path="/manageSubscriptions" key="manageSubscriptions" element={<ManageSubscriptions />} />
          <Route exact path="/settings" key="settings" element={<Settings />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
