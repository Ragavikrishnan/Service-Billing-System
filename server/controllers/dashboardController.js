import Bill from "../models/billModel.js";
import Customer from "../models/customerModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Today's date (00:00:00)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Total Revenue
    const totalRevenue = await Bill.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$grandTotal" },
        },
      },
    ]);

    // Today's Revenue
    const todayRevenue = await Bill.aggregate([
      {
        $match: {
          createdAt: { $gte: today },
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$grandTotal" },
        },
      },
    ]);

    // Today's Bills
    const todayBills = await Bill.countDocuments({
      createdAt: { $gte: today },
    });

    // Total Customers
    const totalCustomers = await Customer.countDocuments();

    res.status(200).json({
      success: true,
      stats: {
        totalRevenue: totalRevenue[0]?.total || 0,
        todayRevenue: todayRevenue[0]?.total || 0,
        todayBills,
        totalCustomers,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};