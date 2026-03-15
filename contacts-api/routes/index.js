const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
    // swagger.tags=["Hello World"]
    res.send("Hello World")
});
router.get("/", (req, res) => { res.send("Hello World"); });

module.exports = router;