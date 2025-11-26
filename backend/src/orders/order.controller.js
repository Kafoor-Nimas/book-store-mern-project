const Order = require("./order.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "failed to create order" });
  }
};

module.exports = {
  createOrder,
};
