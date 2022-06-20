import { Fragment } from "react";
import HomeFillIcon from "../../Assets/icons/home-fill.svg";
import LifeBuoy from "../../Assets/icons/MapsLifebuoy-fill.svg";
import Notification from "../../Assets/icons/MediaNotification-3-fill.svg";
import Profile from "../../Assets/icons/ProfileIcon.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Index() {
  return (
    <nav className="border-b-2 px-8">
      <div className="h-16 flex items-center justify-between">
        <div className="navigation">
          <div className="flex">
            <img src={HomeFillIcon} alt="" />{" "}
            <span className="px-2 gray-color"> / </span>
          </div>
        </div>
        <div className="flex items-center mx-3">
          <div className="search">
            <form>
              <label class="block">
                <input
                  type="text"
                  placeholder="Cardiff Dough&Co"
                  class="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-3xl text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "
                />
              </label>
            </form>
          </div>
          <img className="mx-3" src={LifeBuoy} alt="" />
          <img className="mx-3" src={Notification} alt="" />
          <Menu as="div" className="relative inline-block text-left ">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-lg shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 flex items-center">
                <img className="mr-2" src={Profile} alt="profile" />
                <FontAwesomeIcon className="gray-color" icon={faAngleDown} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full text-left px-4 py-2 text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </nav>
  );
}

export default Index;
