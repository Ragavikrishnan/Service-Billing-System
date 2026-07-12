function ProductTable({ products }) {
  return (
    <div className="mt-8 overflow-x-auto">

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="border p-3">
              S.No
            </th>

            <th className="border p-3 text-left">
              Product
            </th>

            <th className="border p-3">
              Qty
            </th>

            <th className="border p-3">
              Price
            </th>

            <th className="border p-3">
              Amount
            </th>

          </tr>

        </thead>

        <tbody>

          {products.map((item, index) => (

            <tr key={item._id}>

              <td className="border p-3 text-center">
                {index + 1}
              </td>

              <td className="border p-3">
                {item.name}
              </td>

              <td className="border p-3 text-center">
                {item.qty}
              </td>

              <td className="border p-3 text-center">
                ₹{item.price}
              </td>

              <td className="border p-3 text-center">
                ₹{item.amount}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;