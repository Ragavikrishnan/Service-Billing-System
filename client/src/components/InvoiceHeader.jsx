import COMPANY from "../config/company";

function InvoiceHeader({ bill }) {
  return (
    <div className="border-b pb-6">

      <h1 className="text-3xl font-bold text-center">
        {COMPANY.name}
      </h1>

      <p className="text-center text-gray-600 mt-2">
        {COMPANY.tagline}
      </p>

      <p className="text-center text-gray-600">
        {COMPANY.address}
      </p>

      <p className="text-center text-gray-600">
        {COMPANY.phone}
      </p>

      <div className="flex justify-between mt-8">

        <div>

          <h2 className="text-2xl font-bold">
            SERVICE BILL
          </h2>

        </div>

        <div className="text-right">

          <p>

            <strong>Bill No :</strong>

            {bill.billNumber}

          </p>

          <p>

            <strong>Date :</strong>

            {new Date(
              bill.createdAt
            ).toLocaleDateString("en-GB")}

          </p>

        </div>

      </div>

    </div>
  );
}

export default InvoiceHeader;