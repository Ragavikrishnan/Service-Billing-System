import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBill } from "../api/billApi";

function BillPreview() {
  const { id } = useParams();

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

  if (!bill) return <h2>Loading...</h2>;

  return (
    <pre>
      {JSON.stringify(bill, null, 2)}
    </pre>
  );
}

export default BillPreview;