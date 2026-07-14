const BASE_URL = import.meta.env.VITE_API_URL;

export const createBill = async (billData) => {
  const response = await fetch(`${BASE_URL}/bills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(billData),
  });

  return await response.json();
};

export const getBill = async (id) => {
  const response = await fetch(`${BASE_URL}/bills/${id}`);

  return await response.json();
};

export const getAllBills = async () => {
  const response = await fetch(`${BASE_URL}/bills`);

  return await response.json();
};

export const deleteBill = async (id) => {
  const response = await fetch(`${BASE_URL}/bills/${id}`, {
    method: "DELETE",
  });

  return await response.json();
};

export const getDashboardStats = async () => {
  const response = await fetch(`${BASE_URL}/dashboard`);

  return await response.json();
};