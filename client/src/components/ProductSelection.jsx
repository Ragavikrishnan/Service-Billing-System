import { useMemo, useState } from "react";
import products from "../data/products";

function ProductSelection({
  selectedProducts,
  setSelectedProducts,
}) {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    if (!search.trim()) return [];

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const addProduct = (product) => {
    const exists = selectedProducts.find(
      (item) => item.id === product.id
    );

    if (exists) return;

    setSelectedProducts((prev) => [
      ...prev,
      {
        ...product,
        qty: 1,
      },
    ]);

    setSearch("");
  };

  const updateQty = (id, value) => {
    const qty = Number(value);

    setSelectedProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: qty > 0 ? qty : "",
            }
          : item
      )
    );
  };

  const removeProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-xl font-semibold mb-5">
        Service Parts Changed / Installed
      </h2>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {filteredProducts.length > 0 && (
        <div className="border rounded-lg mt-2 overflow-hidden max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => addProduct(product)}
              className="px-4 py-3 cursor-pointer hover:bg-blue-50 border-b last:border-none"
            >
              {product.name}
            </div>
          ))}
        </div>
      )}

      {selectedProducts.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-3 text-left">Product</th>
                <th className="px-3 py-3 text-center">Qty</th>
                <th className="px-3 py-3 text-right">Price</th>
                <th className="px-3 py-3 text-right">Amount</th>
                <th className="px-3 py-3 text-center">❌</th>
              </tr>
            </thead>

            <tbody>
              {selectedProducts.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-3 py-3 whitespace-nowrap">
                    {item.name}
                  </td>

                  <td className="px-3 py-3 text-center">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, e.target.value)
                      }
                      className="w-16 border rounded text-center py-1"
                    />
                  </td>

                  <td className="px-3 py-3 text-right">
                    ₹{item.price}
                  </td>

                  <td className="px-3 py-3 text-right font-semibold">
                    ₹{item.price * item.qty}
                  </td>

                  <td className="px-3 py-3 text-center">
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductSelection;