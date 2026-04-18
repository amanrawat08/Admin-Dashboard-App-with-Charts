import { Link, useLocation } from "react-router-dom";   
import type { Location } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdInventory,
  MdPeople,
  MdReceipt,
} from "react-icons/md";
import type { IconType } from "react-icons/lib";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside>
      <h2>Admin</h2>

      <div>
        <h3>Dashboard</h3>
        <ul>

            <Li url="/admin/dashboard" text="Dashboard" location ={location} Icon={MdDashboardCustomize}/>
            <Li url="/admin/products" text="Products" location ={location} Icon={MdInventory}/>
            <Li url="/admin/transactions" text="Transactions" location ={location} Icon={MdReceipt}/>
            <Li url="/admin/customers" text="Customers" location ={location} Icon={MdPeople}/>
           
        </ul>
      </div>
    </aside>
  );
};

interface LiProps {
    url:string;
    text:string;
    location:Location;
    Icon:IconType;

}

const Li  = ({url, text, location, Icon}:LiProps)=>{
    return  <li
            style={{
              backgroundColor:
                location.pathname == url
                  ? "rgba(0,115,255,.1)"
                  : "transparent",
            }}
          >
            <Link to={url}>
              {" "}
              <Icon /> {text}
            </Link>
          </li>
}



export default AdminSidebar;
