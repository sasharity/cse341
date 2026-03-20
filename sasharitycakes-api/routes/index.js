
const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
    res.send("Sasharity Cakes API");
});

module.exports = router;