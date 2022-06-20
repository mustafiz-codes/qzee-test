import ReactDOM from "react-dom";
import { Fragment } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import HomeFillIcon from "../Assets/icons/home-fill.svg";
import Qzee from "../Assets/icons/QZee-icon.svg";
import Calender from "../Assets/icons/Business-calendar-check-fill.svg";
import LifeBuoy from "../Assets/icons/MapsLifebuoy-fill.svg";
import Users from "../Assets/icons/Users-group-fill.svg";
import Settings from "../Assets/icons/Settings.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Info() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="primary-bg rounded-lg p-6">
          <img src={Qzee} alt="qzee" />
          <h2 className="my-2">Members in the queue</h2>
          <p className="font-bold">30</p>
        </div>
        <div className="primary-bg rounded-lg p-6">
          <img src={Calender} alt="Calender" />
          <h2 className="my-2">Bookings today</h2>
          <p className="font-bold">30</p>
        </div>
      </div>
      <div className="my-6 theme-bg rounded-lg p-6 h-[150px]">
        <img src={Users} alt="" />
        <p className="gray-color my-4">Business hours</p>
        <h2 className="font-bold text-white">8:00 - 22:00</h2>
      </div>
      <div className="my-6 theme-bg rounded-lg p-6 h-[150px]">
        <img src={Users} alt="" />
        <p className="gray-color my-4">Staff wellness</p>
        <h2 className="font-bold text-white">4.7</h2>
      </div>
    </div>
  );
}

export default Info;
