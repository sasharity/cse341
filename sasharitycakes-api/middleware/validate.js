

// const validateOrder = (req, res, next) => {
//   const { customerName, email, phone, eventType, cakeFlavor, deliveryDate, price } = req.body;

//   if (!customerName || !email || !phone || !eventType || !cakeFlavor || !deliveryDate || !price) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   next();
// };

// const validateProduct = (req, res, next) => {
//     const { name, category, price, available } = req.body
    
//     if (!name || !category || !price || !available)
//         return res.status(400).json({ message: "Missing required products fields" });

//     next();
// }

// module.exports = { validateOrder, validateProduct };


const validateOrder = (req, res, next) => {
  const { customerName, email, phone, eventType, cakeFlavor, deliveryDate, price } = req.body;

  // Check required fields
  if (!customerName || !email || !phone || !eventType || !cakeFlavor || !deliveryDate || !price) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }


  // Price must be number
  if (isNaN(price)) {
    return res.status(400).json({ message: "Price must be a number" });
  }

  next();
};


const validateProduct = (req, res, next) => {
  const { name, category, price } = req.body;

  if (!name || !category || !price) {
    return res.status(400).json({ message: "All product fields are required" });
  }

  if (isNaN(price)) {
    return res.status(400).json({ message: "Price must be a number" });
  }

  next();
};

module.exports = { validateOrder, validateProduct };