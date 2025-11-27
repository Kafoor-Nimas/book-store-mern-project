const mongoose = require("mongoose");
const express = require("express");
const Order = require("../orders/order.model");
const Book = require("../books/book.model");
const router = express.Router();

// DEBUG ENDPOINT - Check orders
router.get("/debug-orders", async (req, res) => {
  try {
    const orders = await Order.find().limit(10);
    const orderDetails = orders.map((order) => ({
      id: order._id,
      totalPrice: order.totalPrice,
      typeOfTotalPrice: typeof order.totalPrice,
      asNumber: Number(order.totalPrice),
    }));

    res.json({
      totalOrders: orders.length,
      orderDetails,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Main admin stats endpoint
router.get("/", async (req, res) => {
  try {
    console.log("=== Admin Stats Request ===");

    // 1. Total number of orders
    const totalOrders = await Order.countDocuments();
    console.log("Total Orders:", totalOrders);

    // 2. Total sales - Try different approaches
    const totalSalesResult = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$totalPrice" },
        },
      },
    ]);

    console.log(
      "Aggregation Result:",
      JSON.stringify(totalSalesResult, null, 2)
    );

    // Alternative calculation - manual sum to verify
    const allOrders = await Order.find({}, "totalPrice");
    const manualTotal = allOrders.reduce((sum, order) => {
      const price = Number(order.totalPrice) || 0;
      console.log(
        `Order ${order._id}: ${order.totalPrice} (${typeof order.totalPrice})`
      );
      return sum + price;
    }, 0);

    console.log("Manual Calculation Total:", manualTotal);

    // 3. Trending books statistics
    const trendingBooksCount = await Book.aggregate([
      { $match: { trending: true } },
      { $count: "trendingBooksCount" },
    ]);

    const trendingBooks =
      trendingBooksCount.length > 0
        ? trendingBooksCount[0].trendingBooksCount
        : 0;

    // 4. Total number of books
    const totalBooks = await Book.countDocuments();

    // 5. Monthly sales
    const monthlySales = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
          totalSales: { $sum: "$totalPrice" },
          totalOrders: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    console.log("Monthly Sales:", JSON.stringify(monthlySales, null, 2));

    // Use manual calculation since aggregation is not working correctly
    const totalSales = manualTotal || totalSalesResult[0]?.totalSales || 0;

    const response = {
      totalOrders,
      totalSales: Number(totalSales.toFixed(2)),
      trendingBooks,
      totalBooks,
      monthlySales,
    };

    console.log("Final Response:", JSON.stringify(response, null, 2));
    console.log("=== End Admin Stats ===\n");

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    res.status(500).json({ message: "Failed to fetch admin stats" });
  }
});

module.exports = router;
