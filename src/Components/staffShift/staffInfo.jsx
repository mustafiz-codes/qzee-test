import MoreIcon from "../../Assets/icons/MoreIcon.svg";
import Person from "../../Assets/person.svg";
import Timer from "../../Assets/icons/time-fill-primary.svg";
import MapsRoad from "../../Assets/icons/Maps-road-map-fill.svg";

function StaffInfo(props) {
  return (
    <div className="">
      <div className={props.className}>
        <div className="flex justify-between items-start">
          <img className="w-12 pr-2" src={Person} alt="users" />
          <div className="flex items-center">
            <img className="w-6 mr-2" src={Timer} alt="" />
            <p className="text-base">{props.time}</p>
          </div>
          <img className="w-6" src={MoreIcon} alt="" />
        </div>
        <div className="my-4">
          <h2 className="font-bold text-lg">{props.name}</h2>
          <p className="text-sm">{props.role}</p>
        </div>
        <div className="flex">
          <img className="mr-1" src={MapsRoad} alt="" />
          <p>{props.area}</p>
        </div>
      </div>
    </div>
  );
}

export default StaffInfo;
