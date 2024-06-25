// Some data to make the trick

// Declare the action

const tables = require("../../database/tables");

const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

// Export it to import it somewhere else

module.exports = { browse };
