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

// Export it to import it somewhere else

module.exports = { browse };
