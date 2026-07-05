import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          JR Safety & Security Systems
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Service Billing System
        </p>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => navigate("/new-bill")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            + Create New Bill
          </button>

          <button
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Customer History
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;