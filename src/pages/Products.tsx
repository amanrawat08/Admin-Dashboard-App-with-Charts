import AdminSidebar from "../components/AdminSidebar"

const Products = () => {
  return (
    <div className="adminContainer">
      {/* --- admin sidebar --- */}
      <AdminSidebar/>
      {/* --- admin main content --- */}
      <main>
        <h1>Products</h1>
      </main>
    </div>
  )
}
export default Products
