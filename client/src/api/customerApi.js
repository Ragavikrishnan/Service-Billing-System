const BASE_URL = import.meta.env.VITE_API_URL;

export const searchCustomers = async (phone) => {
  try {
    const response = await fetch(
      `${BASE_URL}/customers/search?phone=${phone}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch customers");
    }

    const data = await response.json();

    return data.customers;
  } catch (error) {
    console.error(error);
    return [];
  }
};