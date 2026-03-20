

const validateOrder = (req, res, next) => {
  const { customerName, email, phone, eventType, cakeFlavor, deliveryDate, price } = req.body;

  if (!customerName || !email || !phone || !eventType || !cakeFlavor || !deliveryDate || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  next();
};

const validateProduct = (req, res, next) => {
    const { name, category, price, available } = req.body
    
    if (!name || !category || !price || !available)
        return res.status(400).json({ message: "Missing required products fields" });

    next();
}

module.exports = { validateOrder, validateProduct };