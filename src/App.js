import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import Logo from "./Assets/brand-logo/logo.svg";
import SideNav from "./Components/Sidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
            <div class="h-96 bg-amber-400 p-10">
              <h1 class="text-4xl">Top Content</h1>
            </div>
            <div class="h-96 bg-white p-10">
              <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-green-400 p-10">
              <h1 class="text-4xl">Middle Content</h1>
            </div>
            <div class="h-96 bg-indigo-400 p-10">
              <h1 class="text-4xl">Last Content</h1>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
