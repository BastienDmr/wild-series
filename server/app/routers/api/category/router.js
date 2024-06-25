const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, add } = require("../../../controllers/categoryActions");

// Route to get a list of items
router.get("/", browse);

// Route to add a new item
router.post("/", add);

module.exports = router;
