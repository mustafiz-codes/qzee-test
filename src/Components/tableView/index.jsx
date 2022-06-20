import Settings from "../../Assets/icons/Settings.svg";
import SingleTable from "./singletTableView";

function Index() {
  return (
    <div className="border rounded-lg ">
      <div className="border-b-2 py-4 px-4 p-0 flex items-center justify-between">
        <h4 className="title-2">Table Overview (45)</h4>
        <div className="flex">
          <ul className="mr-8">
            <li className="flex items-center list-text">
              <div className="w-[10px] h-[10px] bg-gray-300 rounded-3xl mr-2 "></div>{" "}
              Unconfirmed
            </li>
          </ul>
          <ul className="mr-8">
            <li className="flex items-center list-text">
              <div className="w-[10px] h-[10px] bg-green-300 rounded-3xl mr-2 "></div>{" "}
              Active (under set time)
            </li>
          </ul>
          <ul className="mr-8">
            <li className="flex items-center list-text">
              <div className="w-[10px] h-[10px] bg-yellow-400 rounded-3xl mr-2 "></div>{" "}
              Active (over set time)
            </li>
          </ul>
          <ul className="mr-8">
            <li className="flex items-center list-text">
              <div className="w-[10px] h-[10px] bg-red-400 rounded-3xl mr-2 "></div>{" "}
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
      <div className="px-4 mt-4  h-[410px] overflow-auto">
        <div className="grid grid-cols-6 gap-4 ">
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="1"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="2"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="3"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="4"
            members="5"
          />
          <SingleTable
            class="red-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="5"
            members="5"
          />
          <SingleTable
            class="gray-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="6"
            members="5"
          />
          <SingleTable
            class="gray-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="7"
            members="5"
          />
          <SingleTable
            class="gray-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="8"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="9"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="10"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="11"
            members="5"
          />
          <SingleTable
            class="primary-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="12"
            members="5"
          />
          <SingleTable
            class="primary-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="13"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="14"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="15"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="16"
            members="5"
          />
          <SingleTable
            class="red-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="17"
            members="5"
          />
          <SingleTable
            class="gray-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="18"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="19"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="20"
            members="5"
          />
          <SingleTable
            class="gray-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="21"
            members="5"
          />
          <SingleTable
            class="green-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="22"
            members="5"
          />
          <SingleTable
            class="primary-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="23"
            members="5"
          />
          <SingleTable
            class="primary-bg h-[100px] rounded-lg p-4 w-100"
            tableNumber="24"
            members="5"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
