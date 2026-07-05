const BASE_URL = "http://localhost:5000/api/customers";

export const searchCustomers = async (phone) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search?phone=${phone}`
    );

    const data = await response.json();

    return data.customers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

