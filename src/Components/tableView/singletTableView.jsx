import Users from "../../Assets/icons/Users-group-fill.svg";
import Settings from "../../Assets/icons/Settings.svg";

function TableView(props) {
  return (
    <div className={props.class}>
      <h4 className="text-base title">{props.tableNumber}</h4>
      <div className="flex mt-6">
        <img className="w-6 pr-2" src={Users} alt="users" />
        <p className="text-xs">{props.members}</p>
      </div>
    </div>
  );
}

export default TableView;
