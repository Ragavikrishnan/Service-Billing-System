function ServiceCharge({
  productTotal,
  serviceCharge,
  setServiceCharge,
  grandTotal,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">

      <h2 className="text-xl font-semibold mb-5">
        Bill Summary
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">
          <span className="font-medium">
            Product Total
          </span>

          <span className="font-semibold">
            ₹{productTotal}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-medium">
            Service Charge
          </span>

          <input
            type="number"
            min="0"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(e.target.value)}
            placeholder="0"
            className="w-32 border rounded-lg px-3 py-2 text-right"
          />
        </div>

        <hr />

        <div className="flex justify-between items-center text-xl font-bold">
          <span>Grand Total</span>

          <span>
            ₹{grandTotal}
          </span>
        </div>

      </div>

    </div>
  );
}

export default ServiceCharge;