import MoreIcon from "../../Assets/icons/MoreIcon.svg";
import Person from "../../Assets/person.svg";
import Settings from "../../Assets/icons/Settings.svg";
import Timer from "../../Assets/icons/time-fill-primary.svg";
import MapsRoad from "../../Assets/icons/Maps-road-map-fill.svg";
import StaffInfo from "./staffInfo";

function Index() {
  return (
    <div className="">
      <div className="mb-4 p-0 flex items-center justify-between">
        <h2 className="font-medium text-xl title-1">Staff on shift (8)</h2>

        <button className="border py-2 px-4 primary-bg flex items-center rounded-3xl border-yellow-300">
          <img className="mr-2" src={Settings} alt="" />
          Employee settings
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Alex"
          role="Waiter"
          time="2:13:14"
          area="Wales"
        />

        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Tom"
          role="Manager"
          time="2:13:14"
          area="London"
        />
        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Stan"
          role="Waiter"
          time="2:13:14"
          area="Liverpool"
        />
        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Blop"
          role="Waiter"
          time="2:13:14"
          area="London"
        />
        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Alex"
          role="Waiter"
          time="2:13:14"
          area="London"
        />
        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Alex"
          role="Waiter"
          time="2:13:14"
          area="London"
        />
        <StaffInfo
          className="green-bg rounded-lg p-4 w-100"
          name="Alex"
          role="Waiter"
          time="2:13:14"
          area="London"
        />
        <StaffInfo
          className="gray-bg rounded-lg p-4 w-100"
          name="Alex"
          role="Waiter"
          time="2:13:14"
          area="London"
        />
      </div>
    </div>
  );
}

export default Index;
