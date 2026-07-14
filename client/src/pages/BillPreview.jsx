import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pdf } from "@react-pdf/renderer";

import { getBill } from "../api/billApi";
import InvoicePDF from "../pdf/InvoicePDF";
import Navbar from "../components/Navbar";

import InvoiceHeader from "../components/InvoiceHeader";
import CustomerSection from "../components/CustomerSection";
import ProductTable from "../components/ProductTable";
import InvoiceSummary from "../components/InvoiceSummary";
import InvoiceFooter from "../components/InvoiceFooter";
import InvoiceActions from "../components/InvoiceActions";

function BillPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const invoiceRef = useRef();

  const [bill, setBill] = useState(null);

  useEffect(() => {
    const fetchBill = async () => {
      const data = await getBill(id);

      if (data.success) {
        setBill(data.bill);
      }
    };

    fetchBill();
  }, [id]);

  const downloadInvoice = async () => {
  try {
    const blob = await pdf(
      <InvoicePDF bill={bill} />
    ).toBlob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = `${bill.billNumber}.pdf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

  } catch (error) {
    console.error(error);
    alert("Failed to download invoice.");
  }
};
const shareInvoice = async () => {
  try {
    const blob = await pdf(
      <InvoicePDF bill={bill} />
    ).toBlob();

    const file = new File(
      [blob],
      `${bill.billNumber}.pdf`,
      {
        type: "application/pdf",
      }
    );

    if (
      navigator.canShare &&
      navigator.canShare({ files: [file] })
    ) {
      await navigator.share({
        title: `Invoice ${bill.billNumber}`,
        text: `Invoice for ${bill.customer.name}`,
        files: [file],
      });
    } else {
      alert("File sharing is not supported on this device.");
    }
  } catch (error) {
    console.error(error);
    alert("Unable to share invoice.");
  }
};

  if (!bill) {
    return (
      
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading Bill...
      </div>
    );
  }

  return (
      <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 py-8 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="no-print">

          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">

            <button
              onClick={() => navigate("/new-bill")}
              className="px-5 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-800"
            >
              ← Back to New Bill
            </button>

            <h1 className="text-3xl font-bold">
              Invoice Preview
            </h1>

            <InvoiceActions
              shareInvoice={shareInvoice}
               downloadInvoice={downloadInvoice}
            />

          </div>

        </div>

        <div
          ref={invoiceRef}
          className="invoice-container bg-white rounded-xl shadow-xl p-8"
        >

          <InvoiceHeader bill={bill} />

          <CustomerSection customer={bill.customer} />

          <ProductTable products={bill.products} />

          <InvoiceSummary bill={bill} />

          <InvoiceFooter />

        </div>

      </div>

    </div>
    </>
  );
}

export default BillPreview;