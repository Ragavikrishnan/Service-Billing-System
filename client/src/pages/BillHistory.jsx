import { useEffect, useState } from "react";
import { getAllBills } from "../api/billApi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function BillHistory() {

  const [bills, setBills] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

    const fetchBills = async () => {

      const data = await getAllBills();

      if (data.success) {
        setBills(data.bills);
      }

    };

    fetchBills();

  }, []);

  return (
      <>
    <Navbar />

    <div className="min-h-screen bg-gray-100 p-5">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Bill History
        </h1>
        <div className="mb-6">
  <input
    type="text"
    placeholder="Search by Bill No, Customer or Phone..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>

        <div className="bg-white rounded-xl shadow-md overflow-x-auto">

  <table className="w-full">

    <thead className="bg-gray-100">

      <tr>

        <th className="px-5 py-3 text-left">
          Bill No
        </th>

        <th className="px-5 py-3 text-left">
          Customer
        </th>

        <th className="px-5 py-3 text-left">
          Phone
        </th>

        <th className="px-5 py-3 text-left">
          Date
        </th>

        <th className="px-5 py-3 text-right">
          Total
        </th>

        <th className="px-5 py-3 text-center">
          Action
        </th>

      </tr>

    </thead>

    <tbody>
{bills
  .filter((bill) => {
    const value = search.toLowerCase();

    return (
      bill.billNumber.toLowerCase().includes(value) ||
      bill.customer.name.toLowerCase().includes(value) ||
      bill.customer.phone.includes(value)
    );
  })
  .map((bill) => (

        <tr
          key={bill._id}
          className="border-t hover:bg-gray-50"
        >

          <td className="px-5 py-4 font-medium">
            {bill.billNumber}
          </td>

          <td className="px-5 py-4">
            {bill.customer.name}
          </td>

          <td className="px-5 py-4">
            {bill.customer.phone}
          </td>

          <td className="px-5 py-4">
            {new Date(bill.createdAt).toLocaleDateString("en-GB")}
          </td>

          <td className="px-5 py-4 text-right font-semibold">
            ₹{bill.grandTotal}
          </td>

          <td className="px-5 py-4 text-center">

           <button
  onClick={() => navigate(`/bill/${bill._id}`)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
>
  View
</button>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>

      </div>

    </div>
    </>

  );

}

export default BillHistory;