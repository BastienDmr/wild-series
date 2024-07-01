const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  add,
  read,
  edit,
  destroy,
} = require("../../../controllers/programActions");

const validateProgram = require("../../../services/programValidator");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific category by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", validateProgram, add);

// Route to edit an existing category
router.put("/:id", validateProgram, edit);

// Route to edit an existing category
router.delete("/:id", destroy);

module.exports = router;
