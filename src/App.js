import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import Logo from "./Assets/brand-logo/logo.svg";
import SideNav from "./Components/SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Topbar from "./Components/TopBar";
import StaffShift from "./Components/StaffShift";
import TableView from "./Components/TableView";
import Info from "./Components/Info";
import Notifications from "./Components/Notifications";

function App() {
  return (
    <div className="App">
      {/* <div className="app">
        <h1>Bookkeeper</h1>
        <img src={Logo} />
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/about">Invoices</Link> | <Link to="/about">Expenses</Link>
        </nav>
      </div> */}
      <div className="container-fluid">
        <div class="flex">
          <div className="w-48 fixed left-0 top-0 h-screen theme-bg ">
            <SideNav />
          </div>

          <main class="flex-1 ml-48">
            <Topbar />

            <div className="container-fluid mx-auto px-8 my-8">
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-6 w-100">
                  <TableView />
                </div>
                <div className="col-span-2 w-100">
                  <Info />
                </div>
              </div>
            </div>

            <div className="container-fluid mx-auto px-8 my-8">
              <div className="grid grid-cols-8 gap-4">
                <div className="col-span-6 w-100">
                  <StaffShift />
                </div>
                <div className="col-span-2 w-100">
                  <Notifications />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
