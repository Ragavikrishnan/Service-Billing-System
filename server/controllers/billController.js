import Bill from "../models/billModel.js";
import Customer from "../models/customerModel.js";

export const createBill = async (req, res) => {
  try {
    const {
      customer,
      products,
      serviceCharge = 0,
    } = req.body;

    // Validation
    if (!customer) {
      return res.status(400).json({
        success: false,
        message: "Customer details are required",
      });
    }

    if (!products || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product is required",
      });
    }

    // Find existing customer
    let existingCustomer = await Customer.findOne({
      phone: customer.phone,
    });

    // Create customer if not found
    if (!existingCustomer) {
      existingCustomer = await Customer.create({
        name: customer.name,
        phone: customer.phone,
        address: customer.address,
      });
    }

    // Generate Bill Number
    const lastBill = await Bill.findOne().sort({
      createdAt: -1,
    });

    let billNumber = "SB00001";

    if (lastBill) {
      const lastNumber = parseInt(
        lastBill.billNumber.replace("SB", "")
      );

      billNumber =
        "SB" + String(lastNumber + 1).padStart(5, "0");
    }

    // Calculate Amount for Each Product
    const updatedProducts = products.map((item) => ({
      ...item,
      amount: item.price * item.qty,
    }));

    // Calculate Product Total
    const productTotal = updatedProducts.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    // Calculate Grand Total
    const grandTotal =
      productTotal + Number(serviceCharge);

    // Save Bill
    const bill = await Bill.create({
      billNumber,
      customer: existingCustomer._id,
      products: updatedProducts,
      productTotal,
      serviceCharge: Number(serviceCharge),
      grandTotal,
    });

   return res.status(201).json({
  success: true,
  message: "Bill created successfully",
  billId: bill._id,
  billNumber: bill.billNumber,
});

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getBillById = async (req, res) => {
  try {
    const { id } = req.params;

    const bill = await Bill.findById(id).populate("customer");

    if (!bill) {
      return res.status(404).json({
        success: false,
        message: "Bill not found",
      });
    }

    return res.status(200).json({
      success: true,
      bill,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllBills = async (req, res) => {
  try {

    const bills = await Bill.find()
      .populate("customer")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bills,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};