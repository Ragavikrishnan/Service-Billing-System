import { FaShareAlt, FaDownload } from "react-icons/fa";

function InvoiceActions({
  shareInvoice,
  downloadInvoice,
}) {
  return (
    <div className="flex gap-3">

      <button
        onClick={downloadInvoice}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
      >
        <FaDownload />
        Download PDF
      </button>

      <button
        onClick={shareInvoice}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg"
      >
        <FaShareAlt />
        Share Invoice
      </button>

    </div>
  );
}

export default InvoiceActions;