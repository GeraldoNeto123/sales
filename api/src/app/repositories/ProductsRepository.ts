import db from "../../database/index";

class ProductsRepository {
  async findByName(name: string) {
    const [row] = await db.query("SELECT * FROM products WHERE name = $1", [
      name,
    ]);

    return row;
  }

  async create(name: string) {
    const [row] = await db.query(
      `
        INSERT INTO products(name)
        VALUES($1)
        RETURNING *
    `,
      [name]
    );

    return row;
  }
}

export default new ProductsRepository();
