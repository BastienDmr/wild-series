// Some data to make the trick

// Declare the action

const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all programs from the database
    const programs = await tables.program.readAll();

    // Respond with the programs in JSON format
    res.status(200).json(programs);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const add = async (req, res, next) => {
  // Extract the category data from the request body
  const program = req.body;

  try {
    // Insert the category into the database
    const insertId = await tables.program.create(program);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted category
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export it to import it somewhere else

module.exports = { browse, add };
