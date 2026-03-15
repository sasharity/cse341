const express = require("express");
const router = express.Router();


router.get("/", (req, res) => { res.send("Hello Worl"); });

module.exports = router;