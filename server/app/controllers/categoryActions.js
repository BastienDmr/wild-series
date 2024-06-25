// Some data to make the trick

// Declare the action

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all categories from the database
    const categories = await tables.category.readAll();

    // Respond with the categories in JSON format
    res.status(200).json(categories);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// ADD

const add = async (req, res, next) => {
  // Extract the category data from the request body
  const category = req.body;

  try {
    // Insert the category into the database
    const insertId = await tables.category.create(category);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted category
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export it to import it somewhere else

module.exports = { browse, add };
