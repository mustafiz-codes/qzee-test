import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNav from "./Components/sideNav/index";
import TopBar from "./Components/topBar/index";
import Home from "./routes/home";
import Table from "./routes/tables";
import User from "./routes/users";

import "./Style/app.css";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="flex">
            <div className="w-48 fixed left-0 top-0 h-screen theme-bg ">
              <SideNav />
            </div>

            <main className="flex-1 ml-48">
              <TopBar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="tables" element={<Table />} />
                <Route path="user" element={<User />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
