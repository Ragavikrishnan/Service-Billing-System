import { useEffect, useState } from "react";
import { getDashboardStats } from "../api/billApi";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    todayRevenue: 0,
    todayBills: 0,
    totalCustomers: 0,
  });
  useEffect(() => {
  const fetchStats = async () => {
    const data = await getDashboardStats();

    if (data.success) {
      setStats(data.stats);
    }
  };

  fetchStats();
}, []);

  return (
      <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-7xl mx-auto">

       <h1 className="text-4xl font-bold mb-8">
  JR Safety & Security System
</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-gray-500">Today's Revenue</h2>
    <p className="text-3xl font-bold mt-3">
      ₹{stats.todayRevenue}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-gray-500">Today's Bills</h2>
    <p className="text-3xl font-bold mt-3">
      {stats.todayBills}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-6">
    <h2 className="text-gray-500">Customers</h2>
    <p className="text-3xl font-bold mt-3">
      {stats.totalCustomers}
    </p>
  </div>

  <div className="bg-white rounded-xl shadow-md p-6 mb-10">
    <h2 className="text-gray-500">Total Revenue</h2>
    <p className="text-3xl font-bold mt-3">
      ₹{stats.totalRevenue}
    </p>
  </div>

</div>

      </div>

    </div>
     </>
  );
 
}

export default Dashboard;