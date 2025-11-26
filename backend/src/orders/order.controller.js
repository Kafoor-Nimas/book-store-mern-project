const craeteAOrder = async () => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    resizeBy.status(200).json(saveOrder);
  } catch (error) {
    console.error("Error creating order", error);
    resizeBy.status(500).json({ message: "failed to create order" });
  }
};

module.exports = {
  craeteAOrder,
};
