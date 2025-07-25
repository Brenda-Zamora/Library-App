import Cart from "../models/cart.model.js";

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "items.book"
  );
  res.json(cart);
};

export const addToCart = async (req, res) => {
  const { bookId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      items: [{ book: bookId, quantity }],
    });
  } else {
    const existingItem = cart.items.find((item) => item.book.equals(bookId));
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ book: bookId, quantity });
    }
    await cart.save();
  }

  res.json(cart);
};

export const removeFromCart = async (req, res) => {
  const { bookId } = req.params;
  const cart = await Cart.findOneAndUpdate(
    { user: req.user._id },
    { $pull: { items: { book: bookId } } },
    { new: true }
  );
  res.json(cart);
};

export const clearCart = async (req, res) => {
  await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
  res.json({ message: "Carrito vaciado" });
};

export const updateCartItem = async (req, res) => {
  const { bookId } = req.params;
  const { quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    return res.status(404).json({ message: "Carrito no encontrado" });
  }

  const item = cart.items.find((item) => item.book.equals(bookId));
  if (!item) {
    return res
      .status(404)
      .json({ message: "Item no encontrado en el carrito" });
  }

  item.quantity = quantity;
  await cart.save();

  res.json(cart);
};

export const getCartItemCount = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  const itemCount = cart
    ? cart.items.reduce((count, item) => count + item.quantity, 0)
    : 0;
  res.json({ itemCount });
};

export const getCartTotal = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate(
    "items.book"
  );
  if (!cart) {
    return res.status(404).json({ message: "Carrito no encontrado" });
  }

  const total = cart.items.reduce((sum, item) => {
    return sum + item.book.price * item.quantity;
  }, 0);

  res.json({ total });
};
