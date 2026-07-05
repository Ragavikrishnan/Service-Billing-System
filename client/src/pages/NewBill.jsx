import { useState } from "react";
import CustomerDetails from "../components/CustomerDetails";
import ProductSelection from "../components/ProductSelection";
import ServiceCharge from "../components/ServiceCharge";
import { createBill } from "../api/billApi";
import { useNavigate } from "react-router-dom";


function NewBill() {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
  name: "",
  phone: "",
  address: "",
});

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [serviceCharge, setServiceCharge] = useState("");

  const productTotal = selectedProducts.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const grandTotal =
    productTotal + (Number(serviceCharge) || 0);

    const handleGenerateBill = async () => {
  try {
    const billData = {
      customer,
      products: selectedProducts,
      serviceCharge,
    };

    const response = await createBill(billData);

    console.log(response);

    if (response.success) {
     navigate(`/bill/${response.billId}`);
    } else {
      alert(response.message);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-6">
          New Service Bill
        </h1>

       <CustomerDetails
    customer={customer}
    setCustomer={setCustomer}
/>

        <ProductSelection
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />

        <ServiceCharge
          productTotal={productTotal}
          serviceCharge={serviceCharge}
          setServiceCharge={setServiceCharge}
          grandTotal={grandTotal}
        />
        <div className="mt-6 flex justify-end">
  <button
    onClick={handleGenerateBill}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
  >
    Generate Bill
  </button>
</div>

      </div>

    </div>
  );
}

export default NewBill;