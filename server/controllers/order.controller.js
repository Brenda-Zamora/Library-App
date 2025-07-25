import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  const { books } = req.body;
  try {
    const order = await Order.create({ user: req.user._id, books });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Error creating order" });
  }
};

export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    "books.book"
  );
  res.json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    user: req.user._id,
  }).populate("books.book");
  if (!order) return res.status(404).json({ error: "Orden not found" });
  res.json(order);
};

//
export const deleteOrder = async (req, res) => {
  const order = await Order.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json({ message: "Order deleted successfully" });
};

// This function retrieves all orders, just for admin purposes
export const getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user books.book");
  res.json(orders);
};

// Cancel an order
export const cancelOrder = async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    user: req.user._id,
  });
  if (!order) return res.status(404).json({ error: "Order not found" });
  if (order.status === "Cancelled") {
    return res.status(400).json({ error: "Order already cancelled" });
  }
  order.status = "Cancelled";
  await order.save();
  res.json({ message: "Order cancelled successfully" });
};
