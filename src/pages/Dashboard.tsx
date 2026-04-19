import AdminSidebar from "../components/AdminSidebar";
import { FaSearch, FaBell } from "react-icons/fa";
import user from "../assets/user.png";
import {HiTrendingUp, HiTrendingDown} from "react-icons/hi"
const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* --- admin sidebar --- */}
      <AdminSidebar />
      {/* --- admin main content --- */}
      <main className="dashboard">
        <div className="bar">
          <FaSearch />
          <input type="text" placeholder="Search..." />
          <FaBell />
          <img src={user} alt="user profile" />
        </div>

        <section className="widgetcontainer">
          <WidgetData
            heading="Total Revenue"
            percent={20}
            value={1000}
            amount={2000}
            color="green"
          />
          <WidgetData
            heading="Total Sales"
            percent={-10}
            value={500}
            amount={0}
            color="red"
          />
          <WidgetData
            heading="Total Customers"
            percent={15}
            value={300}
            amount={0}
            color="green"
          />
          <WidgetData
            heading="Total Orders"
            percent={-5}
            value={150} 
            amount={0}
            color="red"
          />

        </section>
      </main>
    </div>
  );
};

interface widgetDataProps {
  heading: string;
  percent: number;
  value: number;
  amount: number;
  color: string;
}

let WidgetData = ({
  heading,
  percent,
  value,
  amount,
  color,
}: widgetDataProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo"> 
        <p>{heading}</p>
        <h3>
          {amount ? `$${amount}` : `$${value}`}
        </h3>
        {percent > 0 ? (
          <span style={{ color: "green" }}> <HiTrendingUp /> +{percent}%</span>
        ) : (
          <span style={{ color: "red" }}> <HiTrendingDown /> {percent}%</span>
        )} 
      </div>

        <div className="widget-circle">
          <span color={color}>
            {percent}%
          </span>
        </div>

    </article>
  );
};

export default Dashboard;
