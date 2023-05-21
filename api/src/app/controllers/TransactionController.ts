import transactionsRepository from "../repositories/TransactionsRepository";
import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import salesTxtToJson from "../../utils/salesTxtToJson";
import productsRepository from "../repositories/ProductsRepository";
import sellersRepository from "../repositories/SellersRepository";

const transactionTypes = [
  "PRODUCER_SALE",
  "AFFILIATE_SALE",
  "COMMISSION_PAID",
  "COMMISSION_RECEIVED",
];

class TransactionController {
  async index(request: Request, response: Response) {
    const transactions = await transactionsRepository.findAll();

    response.json(transactions);
  }

  async store(request: Request, response: Response) {
    const salesTxt = request.files.sales as UploadedFile;

    if (!salesTxt)
      return response.status(400).json({ error: "Sales file not provided" });

    const sales = salesTxtToJson(salesTxt.tempFilePath);

    for (let sale of sales) {
      try {
        let productExists = await productsRepository.findByName(sale.product);
        let product = productExists;
        if (!productExists) {
          product = await productsRepository.create(sale.product);
        }

        let sellerExists = await sellersRepository.findByName(sale.seller);
        let seller = sellerExists;
        if (!sellerExists) {
          seller = await sellersRepository.create(sale.seller);
        }

        await transactionsRepository.create({
          productId: product.id,
          sellerId: seller.id,
          amount: sale.amount,
          date: new Date(sale.date),
          type: transactionTypes[sale.type - 1],
        });
      } catch (error) {
        console.log(error);
      }
    }

    return response.status(201).json({ message: "Success" });
  }
}

export default new TransactionController();
