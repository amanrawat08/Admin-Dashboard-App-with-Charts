import AdminSidebar from "../components/AdminSidebar";
import { FaSearch, FaBell } from "react-icons/fa";
import user from "../assets/user.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import data from "../assets/data.json"
import BarChart from "../components/Charts";
import {BiMaleFemale} from "react-icons/bi"
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
            amount={true}
            color="green"
          />
          <WidgetData
            heading="Total Sales"
            percent={-10}
            value={500}
            amount={false}
            color="blue"
          />
          <WidgetData
            heading="Total Customers"
            percent={15}
            value={300}
            amount={true}
            color="yellow"
          />
          <WidgetData
            heading="Total Orders"
            percent={-5}
            value={150}
            amount={false}
            color="drakeRed"
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue and Transactions</h2>
            {/**Graphs */}
            <BarChart data_1={[100,230,120,23,4]} data_2={[80,91,2,34,129]} title_1="Marks" title_2="Anything"
              bg_color_1="lightgreen" bg_color_2="lightblue" 
            />
          </div>

          <div className="dashboard-categoies">
            <h2>Inventaries</h2>
            {
              data.categories.map((d)=>{
                return <Categories color={`hsl(${d.value * 20}, ${100}%, 50%)`} heading={d.heading} value={d.value} />
              })
            }
          </div>
        </section>


        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <BiMaleFemale />
          </div>
        </section>



      </main>
    </div>
  );
};

interface widgetDataProps {
  heading: string;
  percent: number;
  value: number;
  amount?: boolean;
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
        <h3>{amount ? `$${value}` : value}</h3>
        {percent > 0 ? (
          <span style={{ color: "green" }}>
            {" "}
            <HiTrendingUp /> +{percent}%
          </span>
        ) : (
          <span style={{ color: "red" }}>
            {" "}
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>

      <div
        className="widget-circle"
        style={{
          background: `conic-gradient(${color} ${percent * 3.6}deg, #e0e0e0 0deg)`,
        }}
      >
        <span style={{color}}>{percent}%</span>
      </div>
    </article>
  );
};

interface categoriesItemProps {
  color: string;
  heading: string;
  value: number;
}

let Categories = ({ color, heading, value }: categoriesItemProps) => {
  return (
    <div className="categories-item">
      <h5>{heading}</h5>
      <div className="progress-bar">
        <div
          style={{
            width: `${value}%`,
            backgroundColor: color, 
          }}
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default Dashboard;
