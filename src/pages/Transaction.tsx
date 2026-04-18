import AdminSidebar from "../components/AdminSidebar";

const Transaction = () => {
  return (
    <div className="adminContainer">
      {/* --- admin sidebar --- */}
      <AdminSidebar />
      {/* --- admin main content --- */}
      <main>
        <h1>Transaction</h1>
      </main>
    </div>
  );
};

export default Transaction;
