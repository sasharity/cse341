
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return res.send(`
      <h2>Welcome! You are logged in.</h2>
      <a href="/api-docs">Go to API Docs</a><br>
      <a href="/logout">Logout</a>
    `);
  }

  res.send(`
    <h2>Welcome to Sasharity Cakes API</h2>
    <a href="/auth/github">Login with GitHub</a>
  `);
});


// router.get("/", (req, res) => {
//     res.send("Sasharity Cakes API");
// });

module.exports = router;