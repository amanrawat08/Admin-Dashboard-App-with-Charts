import AdminSidebar from "../components/AdminSidebar"

const Customers = () => {
  return (
    <div className="adminContainer">
      {/* --- admin sidebar --- */}
      <AdminSidebar/>
      {/* --- admin main content --- */}
      <main>
        <h1>Customers</h1>
      </main>
    </div>
  )
}

export default Customers
