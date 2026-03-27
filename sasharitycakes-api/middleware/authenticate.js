const isAuthenticated = (req, res, next) => {
    console.log("USER:", req.user); 
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: "You do not have access" });
};

module.exports = isAuthenticated;