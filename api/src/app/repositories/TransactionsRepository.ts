import db from "../../database/index";

interface Create {
  productId: string;
  sellerId: string;
  amount: string;
  date: Date;
  type: string;
}

class CategoriesRepository {
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

export default new CategoriesRepository();
