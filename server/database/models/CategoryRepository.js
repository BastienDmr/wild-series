const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "category" });
  }

  // The C of CRUD - Create operation

  async create(category) {
    // Execute the SQL INSERT query to add a new category to the "category" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name) values (?)`,
      [category.name]
    );

    // Return the ID of the newly inserted category
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific category by its ID
    const [rows] = await this.database.query(
      `select category.*, JSON_ARRAYAGG(
          JSON_OBJECT(
            "id", program.id,
            "title", program.title
          )
        ) as programs from ${this.table}
        left join program on program.category_id = category.id
        where category.id = ?
        group by category.id`,
      [id]
    );

    // Return the first row of the result, which represents the category
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = CategoryRepository;
