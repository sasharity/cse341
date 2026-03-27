const express = require("express");
const router = express.Router();
const passport = require("../passport");

// Login with GitHub
router.get(
  "/auth/github", (req, res, next) => {
    /* 
      #swagger.tags = ['Auth']
      #swagger.summary = 'Login with GitHub'
    */
    next();
  },
  passport.authenticate("github", { scope: ["user:email"] })
);

// Callback
router.get("/auth/github/callback", (req, res, next) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.summary = 'GitHub callback'
  */
  next();
}, passport.authenticate("github", {
  failureRedirect: "/api-docs"
}), (req, res) => {
  res.redirect("/api-docs");
});

// Logout
router.get("/logout", (req, res) => {
  /* 
    #swagger.tags = ['Auth']
    #swagger.summary = 'Logout user'
  */
  req.logout(() => {
    res.redirect("/api-docs");
  });
});
module.exports = router;