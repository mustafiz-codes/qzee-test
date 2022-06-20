import "../Style/app.css";
import StaffShift from "../Components/staffShift/index";
import TableView from "../Components/tableView/index";
import Info from "../Components/info/index";
import Notifications from "../Components/notifications/index";

function Home() {
  return (
    <div>
      <div className="container-fluid mx-auto px-8 my-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6 w-100">
            <TableView />
          </div>
          <div className="col-span-2 w-100">
            <Info />
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto px-8 my-8">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6 w-100">
            <StaffShift />
          </div>
          <div className="col-span-2 w-100">
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
