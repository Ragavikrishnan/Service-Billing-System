function InvoiceSummary({ bill }) {
  return (
    <div className="flex justify-end mt-8">

      <div className="w-96">

        <div className="flex justify-between py-2">

          <span>Product Total</span>

          <strong>
            {bill.productTotal}
          </strong>

        </div>

        <div className="flex justify-between py-2">

          <span>Service Charge</span>

          <strong>
            {bill.serviceCharge}
          </strong>

        </div>

        <hr />

        <div className="flex justify-between py-4 text-2xl font-bold text-blue-700">

          <span>Grand Total</span>

          <span>
            {bill.grandTotal}
          </span>

        </div>

      </div>

    </div>
  );
}

export default InvoiceSummary;