import Customer from "../models/customerModel.js";

export const getCustomerByPhone = async (req, res) => {
  try {
    const { phone } = req.params;

    const customer = await Customer.findOne({
      phone,
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    res.status(200).json({
      success: true,
      customer,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const searchCustomers = async (req, res) => {
  try {
    const { phone } = req.query;

    if (!phone || phone.length < 3) {
      return res.status(200).json({
        success: true,
        customers: [],
      });
    }

    const customers = await Customer.find({
      phone: {
        $regex: "^" + phone,
      },
    })
      .limit(10)
      .select("name phone address");

    res.status(200).json({
      success: true,
      customers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};