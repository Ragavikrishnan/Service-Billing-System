function CustomerSection({ customer }) {
  return (
    <div className="mt-8 border rounded-lg p-5">

      <h3 className="text-lg font-semibold mb-4">
        Customer Details
      </h3>

      <div className="grid md:grid-cols-2 gap-5">

        <div>

          <p className="text-gray-500">
            Customer Name
          </p>

          <p className="font-semibold">
            {customer.name}
          </p>

        </div>

        <div>

          <p className="text-gray-500">
            Phone Number
          </p>

          <p className="font-semibold">
            {customer.phone}
          </p>

        </div>

        <div className="md:col-span-2">

          <p className="text-gray-500">
            Address
          </p>

          <p className="font-semibold">
            {customer.address}
          </p>

        </div>

      </div>

    </div>
  );
}

export default CustomerSection;