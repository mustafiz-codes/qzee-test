import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Table from "./routes/Tables";
import User from "./routes/Tables";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="tables" element={<Table />} />
      <Route path="user" element={<User />} />
    </Routes>
  </BrowserRouter>
);
