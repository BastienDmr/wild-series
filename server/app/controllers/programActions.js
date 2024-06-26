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

const read = async (req, res, next) => {
  try {
    // Fetch a specific category from the database based on the provided ID
    const program = await tables.program.read(req.params.id);

    // If the program is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the program in JSON format
    if (program == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(program);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  // Extract the category data from the request body and params
  const program = { ...req.body, id: req.params.id };

  try {
    // Update the program in the database
    await tables.program.update(program);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    // Delete the program from the database
    await tables.program.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export it to import it somewhere else

module.exports = { browse, add, read, edit, destroy };
