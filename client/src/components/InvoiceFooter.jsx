import COMPANY from "../config/company";

function InvoiceFooter() {
  return (
    <div className="mt-20">

      <p className="text-center text-gray-600">

        {COMPANY.footer}

      </p>

      <div className="flex justify-end mt-16">

        <div className="text-center">

          <div className="border-t w-52 mb-2"></div>

          <p>
            Authorized Signature
          </p>

        </div>

      </div>

    </div>
  );
}

export default InvoiceFooter;