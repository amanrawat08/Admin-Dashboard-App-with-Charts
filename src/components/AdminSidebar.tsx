import { Link, useLocation } from "react-router-dom";   
import type { Location } from "react-router-dom";
import { FaChartPie, FaChartBar, FaChartLine, FaStopwatch, FaTicketAlt} from "react-icons/fa";
import { RiCopperCoinFill } from "react-icons/ri";

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
      <h2>Logo</h2>
      <Dashboard location={location}/>
      <Charts location={location}/>
      <AppsComp location={location}/>
    </aside>
  );
};


let Dashboard = ({location}:{location:Location}) => {
    return <div>
        <h3>Dashboard</h3>
        <ul>

            <Li url="/admin/dashboard" text="Dashboard" location ={location} Icon={MdDashboardCustomize}/>
            <Li url="/admin/products" text="Products" location ={location} Icon={MdInventory}/>
            <Li url="/admin/transactions" text="Transactions" location ={location} Icon={MdReceipt}/>
            <Li url="/admin/customers" text="Customers" location ={location} Icon={MdPeople}/>
           
        </ul>
      </div>
    
}

let Charts = ({location}:{location:Location}) => {
    return <div>
        <h3>Charts</h3>
        <ul>
            <Li url="/admin/charts/pie" text="Pie" location ={location} Icon={FaChartPie}/>
            <Li url="/admin/charts/bar" text="Bar" location ={location} Icon={FaChartBar}/>
            <Li url="/admin/charts/line" text="Line" location ={location} Icon={FaChartLine}/>
        </ul>
      </div>
}
let AppsComp = ({location}:{location:Location}) => {
    return <div>
        <h3>Apps</h3>
        <ul>
            <Li url="/admin/apps/stopwatch" text="Stopwatch" location ={location} Icon={FaStopwatch}/>
            <Li url="/admin/apps/coupen" text="Coupen" location ={location} Icon={FaTicketAlt }/>
            <Li url="/admin/apps/toss" text="Toss" location ={location} Icon={RiCopperCoinFill }/>
        </ul>
      </div>
}








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
