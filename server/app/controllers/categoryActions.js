// Some data to make the trick

// Declare the action

const tables = require("../../database/tables");

const browse = async (req, res) => {
  const categoryFromDB = await tables.category.readAll();

  res.json(categoryFromDB);
};

// Export it to import it somewhere else

module.exports = { browse };
