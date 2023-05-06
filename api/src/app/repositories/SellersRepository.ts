import db from "../../database/index";

class SellersRepository {
  async findByName(name: string) {
    const [row] = await db.query("SELECT * FROM sellers WHERE name = $1", [
      name,
    ]);

    return row;
  }

  async create(name: string) {
    const [row] = await db.query(
      `
        INSERT INTO sellers(name)
        VALUES($1)
        RETURNING *
    `,
      [name]
    );

    return row;
  }
}

export default new SellersRepository();
