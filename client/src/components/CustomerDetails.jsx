import { useEffect, useState } from "react";
import { searchCustomers } from "../api/customerApi";

function CustomerDetails({ customer, setCustomer }) {
  const [searchResults, setSearchResults] = useState([]);

  const today = new Date().toLocaleDateString("en-GB");

  // Handles Name & Address
  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles Phone Number
  const handlePhoneChange = (e) => {
    const value = e.target.value;

    setCustomer((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // Auto-fill selected customer
  const selectCustomer = (customerData) => {
    setCustomer({
      name: customerData.name,
      phone: customerData.phone,
      address: customerData.address,
    });

    setSearchResults([]);
  };

  // Search customers while typing phone number
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (customer.phone.length < 3) {
        setSearchResults([]);
        return;
      }

      const customers = await searchCustomers(customer.phone);

      setSearchResults(customers);
    }, 300);

    return () => clearTimeout(timer);
  }, [customer.phone]);

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-xl font-semibold mb-6">
        Customer Details
      </h2>
{/* Phone Number */}

      <div className="mb-4 relative">
        <label className="block mb-2 font-medium">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handlePhoneChange}
          placeholder="Enter phone number"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {searchResults.length > 0 && (
          <div className="absolute left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">

            {searchResults.map((item) => (
              <div
                key={item._id}
                onClick={() => selectCustomer(item)}
                className="px-4 py-3 border-b last:border-none cursor-pointer hover:bg-blue-50"
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.phone}
                </p>
              </div>
            ))}

          </div>
        )}
      </div>
      {/* Customer Name */}

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Customer Name
        </label>

        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Enter customer name"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      

      {/* Address */}

      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Address
        </label>

        <textarea
          rows="3"
          name="address"
          value={customer.address}
          onChange={handleChange}
          placeholder="Enter address"
          className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-between border-t pt-4">
        <div>
          <span className="font-semibold">
            Bill No :
          </span>{" "}
          SB00001
        </div>

        <div>
          <span className="font-semibold">
            Date :
          </span>{" "}
          {today}
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;