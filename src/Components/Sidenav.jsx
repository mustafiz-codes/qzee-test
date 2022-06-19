import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import BrandLogo from "../Assets/brand-logo/logo.svg";
import HomeFillIcon from "../Assets/icons/home-fill.svg";
import Qzee from "../Assets/icons/QZee-icon.svg";
import Calender from "../Assets/icons/Business-calendar-check-fill.svg";
import Restaurant from "../Assets/icons/Maps-restaurant-2-fill.svg";
import Settigns from "../Assets/icons/Settings.svg";
import Users from "../Assets/icons/Users-group-fill.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Sidenav() {
  return (
    <aside class="">
      <div className="flex justify-center h-20">
        <img className="w-24" src={BrandLogo} alt="logo" />
      </div>
      <nav className="">
        <li className="list-none bg-black">
          <Link to="/" className="flex justify-between px-4 py-2">
            <div className="flex">
              <img className="w-4" src={HomeFillIcon} alt="home icon" />
              <p className="text-white mx-2 primary-color">Overview</p>
            </div>
            <div>
              <FontAwesomeIcon className="primary-color" icon={faAngleRight} />
            </div>
          </Link>
        </li>

        <li className="list-none hover:bg-black">
          <Link to="/" className="flex justify-between px-4 py-2">
            <div className="flex">
              <img className="w-4" src={Restaurant} alt="home icon" />
              <p className="text-white mx-2">Tables</p>
            </div>
            <div>
              <FontAwesomeIcon className="primary-color" icon={faAngleRight} />
            </div>
          </Link>
        </li>

        <li className="list-none hover:bg-black">
          <Link to="/" className="flex justify-between px-4 py-2">
            <div className="flex">
              <img className="w-4" src={Calender} alt="home icon" />
              <p className="text-white mx-2">Booking</p>
            </div>
            <div>
              <FontAwesomeIcon className="primary-color" icon={faAngleRight} />
            </div>
          </Link>
        </li>

        <li className="list-none hover:bg-black">
          <Link to="/" className="flex justify-between px-4 py-2">
            <div className="flex">
              <img className="w-4" src={Qzee} alt="home icon" />
              <p className="text-white mx-2">Qzee</p>
            </div>
            <div>
              <FontAwesomeIcon className="primary-color" icon={faAngleRight} />
            </div>
          </Link>
        </li>

        <li className="list-none hover:bg-black">
          <Link to="/" className="flex justify-between px-4 py-2">
            <div className="flex">
              <img className="w-4" src={Users} alt="home icon" />
              <p className="text-white mx-2">Staff</p>
            </div>
            <div>
              <FontAwesomeIcon className="primary-color" icon={faAngleRight} />
            </div>
          </Link>
        </li>

        <li className="list-none hover:bg-black">
          <Link to="/" className="flex justify-between px-4 py-2">
            <div className="flex">
              <img className="w-4" src={Settigns} alt="home icon" />
              <p className="text-white mx-2">Settings</p>
            </div>
            <div>
              <FontAwesomeIcon className="primary-color" icon={faAngleRight} />
            </div>
          </Link>
        </li>
      </nav>
    </aside>
  );
}

export default Sidenav;
