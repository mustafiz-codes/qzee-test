import TableView from "../Components/tableView/index";
import Info from "../Components/info/index";

export default function Tables() {
  return (
    <div>
      <div className="container-fluid mx-auto px-8 my-8">
        <h2 className="font-bold text-xl mb-8 text-center">
          This is table Page
        </h2>
        <TableView />
        <div className="my-4">
          <Info />
        </div>
      </div>
    </div>
  );
}
