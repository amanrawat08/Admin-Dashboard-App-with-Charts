import AdminSidebar from "../components/AdminSidebar"

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* --- admin sidebar --- */}
      <AdminSidebar/>
      {/* --- admin main content --- */}
      <main>
        <h1>Dashboard</h1>
      </main>
    </div>
  )
}

export default Dashboard
