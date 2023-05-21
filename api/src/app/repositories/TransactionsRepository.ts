import db from "../../database/index";

interface Create {
  productId: string;
  sellerId: string;
  amount: string;
  date: Date;
  type: string;
}

class TransactionsRepository {
  async findAll() {
    const rows = await db.query(`
        SELECT transactions.*, sellers.name AS seller_name, products.name AS product_name
        FROM transactions
        LEFT JOIN sellers ON sellers.id = transactions.seller_id
        LEFT JOIN products ON products.id = transactions.product_id
        ORDER BY transactions.date DESC
    `);

    return rows;
  }

  async create({ productId, sellerId, amount, date, type }: Create) {
    const [row] = await db.query(
      `
        INSERT INTO transactions(product_id, seller_id, amount, date, type)
        VALUES($1, $2, $3, $4, $5)
        RETURNING *
    `,
      [productId, sellerId, amount, date, type]
    );

    return row;
  }
}

export default new TransactionsRepository();
