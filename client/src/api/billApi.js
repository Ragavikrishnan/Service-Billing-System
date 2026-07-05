const BASE_URL = "http://localhost:5000/api/bills";

export const createBill = async (billData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(billData),
  });

  return await response.json();
};

export const getBill = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return await response.json();
};