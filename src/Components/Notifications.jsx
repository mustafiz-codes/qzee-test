import ReactDOM from "react-dom";
import { Fragment, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import HomeFillIcon from "../Assets/icons/home-fill.svg";
import Qzee from "../Assets/icons/QZee-icon.svg";
import Calender from "../Assets/icons/Business-calendar-check-fill.svg";
import LifeBuoy from "../Assets/icons/MapsLifebuoy-fill.svg";
import ThumbDown from "../Assets/icons/thumb-down-fill.svg";
import ThumbUp from "../Assets/icons/thumb-up-fill.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";

function Info() {
  const [notificationType, setNotificationType] = useState(true);
  const [notificationFocus, setNotificationFocus] = useState(true);

  function handleNotificationType(value) {
    setNotificationType(value);
    setNotificationFocus(value);
  }

  return (
    <div className="border rounded-lg">
      <div className="mb-4 border-b-2 w-full flex justify-around">
        <button
          className={
            notificationFocus
              ? "inline-block p-4 w-1/2 rounded-t-lg border-b-2 border-yellow-400 text-black"
              : "inline-block p-4 w-1/2 rounded-t-lg border-b-2 border-white text-red"
          }
          onClick={() => handleNotificationType(true)}
        >
          Alerts
          <span className="ml-4 primary-bg w-[20px] h-[20px] p-2 rounded-full">
            23
          </span>
        </button>
        <button
          className={
            !notificationFocus
              ? "inline-block p-4 w-1/2 rounded-t-lg border-b-2 border-yellow-400 text-black"
              : "inline-block p-4 w-1/2 rounded-t-lg border-b-2 border-white text-red"
          }
          onClick={() => handleNotificationType(false)}
        >
          Message
          <span className="ml-4 primary-bg w-[20px] h-[20px] p-2 rounded-full">
            23
          </span>
        </button>
      </div>
      <div id="myTabContent" className="h-[350px] overflow-auto">
        {notificationType ? (
          <div>
            <div className="p-4 gray-bg m-2 rounded-lg">
              <div className="header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 primary-bg text-center rounded-full flex items-center mr-2">
                    <img className="w-4 m-auto" src={Qzee} alt="" />
                  </div>
                  <p className="text-sm">Cardiff Dough&Co</p>
                </div>
              </div>
              <div className="body">
                <p className="my-2">
                  Having entered The Blue Cup Coffee Shop, you’ll walk into a
                  world of fragrant coffee, healthy snacks and fabulous decor.{" "}
                </p>
              </div>
            </div>
            <div className="p-4 gray-bg m-2 rounded-lg">
              <div className="header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 primary-bg text-center rounded-full flex items-center mr-2">
                    <img className="w-4 m-auto" src={Qzee} alt="" />
                  </div>
                  <p className="text-sm">Cardiff Dough&Co</p>
                </div>
              </div>
              <div className="body">
                <p className="my-2">
                  Having entered The Blue Cup Coffee Shop, you’ll walk into a
                  world of fragrant coffee, healthy snacks and fabulous decor.{" "}
                </p>
              </div>
            </div>
            <div className="p-4 gray-bg m-2 rounded-lg">
              <div className="header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 primary-bg text-center rounded-full flex items-center mr-2">
                    <img className="w-4 m-auto" src={Qzee} alt="" />
                  </div>
                  <p className="text-sm">Cardiff Dough&Co</p>
                </div>
              </div>
              <div className="body">
                <p className="my-2">
                  Having entered The Blue Cup Coffee Shop, you’ll walk into a
                  world of fragrant coffee, healthy snacks and fabulous decor.{" "}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="p-4 gray-bg m-2 rounded-lg">
              <div className="header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 primary-bg text-center rounded-full flex items-center mr-2">
                    <img className="w-4 m-auto" src={Qzee} alt="" />
                  </div>
                  <p className="text-sm">Cardiff Dough&Co</p>
                </div>
                <p className="text-xs">54 min ago</p>
              </div>
              <div className="body">
                <p className="my-2">
                  Having entered The Blue Cup Coffee Shop, you’ll walk into a
                  world of fragrant coffee, healthy snacks and fabulous decor.{" "}
                </p>
              </div>
              <div className="footer flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex mr-4">
                    <img className="w-4 m-auto mr-1" src={ThumbDown} alt="" />{" "}
                    232
                  </div>
                  <div className="flex mr-4">
                    <img className="w-4 m-auto mr-1" src={ThumbUp} alt="" /> 232
                  </div>
                </div>
                <div className="my-2">
                  <FontAwesomeIcon className="ml-4" icon={faXmark} />
                  <FontAwesomeIcon className="ml-4" icon={faCheck} />
                </div>
              </div>
            </div>
            <div className="p-4 gray-bg m-2 rounded-lg">
              <div className="header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 primary-bg text-center rounded-full flex items-center mr-2">
                    <img className="w-4 m-auto" src={Qzee} alt="" />
                  </div>
                  <p className="text-sm">Cardiff Dough&Co</p>
                </div>
                <p className="text-xs">54 min ago</p>
              </div>
              <div className="body">
                <p className="my-2">
                  Having entered The Blue Cup Coffee Shop, you’ll walk into a
                  world of fragrant coffee, healthy snacks and fabulous decor.{" "}
                </p>
              </div>
              <div className="footer flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex mr-4">
                    <img className="w-4 m-auto mr-1" src={ThumbDown} alt="" />{" "}
                    232
                  </div>
                  <div className="flex mr-4">
                    <img className="w-4 m-auto mr-1" src={ThumbUp} alt="" /> 232
                  </div>
                </div>
                <div className="my-2">
                  <FontAwesomeIcon className="ml-4" icon={faXmark} />
                  <FontAwesomeIcon className="ml-4" icon={faCheck} />
                </div>
              </div>
            </div>
            <div className="p-4 gray-bg m-2 rounded-lg">
              <div className="header flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 primary-bg text-center rounded-full flex items-center mr-2">
                    <img className="w-4 m-auto" src={Qzee} alt="" />
                  </div>
                  <p className="text-sm">Cardiff Dough&Co</p>
                </div>
                <p className="text-xs">54 min ago</p>
              </div>
              <div className="body">
                <p className="my-2">
                  Having entered The Blue Cup Coffee Shop, you’ll walk into a
                  world of fragrant coffee, healthy snacks and fabulous decor.{" "}
                </p>
              </div>
              <div className="footer flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex mr-4">
                    <img className="w-4 m-auto mr-1" src={ThumbDown} alt="" />{" "}
                    232
                  </div>
                  <div className="flex mr-4">
                    <img className="w-4 m-auto mr-1" src={ThumbUp} alt="" /> 232
                  </div>
                </div>
                <div className="my-2">
                  <FontAwesomeIcon className="ml-4" icon={faXmark} />
                  <FontAwesomeIcon className="ml-4" icon={faCheck} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Info;
