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
function TableView() {
  return (
    <div className="border rounded-md ">
      <div className="border-b-2 py-4 px-4 p-0 flex items-center justify-between">
        <p>Table Overview (45)</p>
        <div className="flex">
          <ul className="mr-8">
            <li className="flex items-center">
              <div className="w-[10px] h-[10px] bg-gray-300 rounded-3xl mr-2"></div>{" "}
              Unconfirmed
            </li>
          </ul>
          <ul className="mr-8">
            <li className="flex items-center">
              <div className="w-[10px] h-[10px] bg-green-300 rounded-3xl mr-2"></div>{" "}
              Active (under set time)
            </li>
          </ul>
          <ul className="mr-8">
            <li className="flex items-center">
              <div className="w-[10px] h-[10px] bg-yellow-400 rounded-3xl mr-2"></div>{" "}
              Active (over set time)
            </li>
          </ul>
          <ul className="mr-8">
            <li className="flex items-center">
              <div className="w-[10px] h-[10px] bg-red-400 rounded-3xl mr-2"></div>{" "}
              Table Inactive
            </li>
          </ul>
        </div>

        <img
          className="mx-3 border p-2 rounded-full border-yellow-300"
          src={Settings}
          alt=""
        />
      </div>
      <div className="px-4 my-4 h-[410px] overflow-auto">
        <div className="grid grid-cols-6 gap-4 ">
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">1</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">2</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">3</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">4</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">5</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="red-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">6</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">7</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">8</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">9</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>

          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">10</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">11</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">12</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="primary-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">13</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="primary-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">14</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">15</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">16</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">17</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">18</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">19</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="red-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">20</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">21</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">22</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">23</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">24</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">25</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="red-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">26</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="primary-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">27</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">28</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="green-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">29</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
          <div className="gray-bg h-[100px] rounded-md p-4 w-100">
            <h4 className="text-base">30</h4>
            <div className="flex mt-6">
              <img className="w-6 pr-2" src={Users} alt="users" />
              <p className="text-xs">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableView;
