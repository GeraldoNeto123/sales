import { Router } from "express";
import TransactionController from "./app/controllers/TransactionController";
import fileUpload from "express-fileupload";
import filesPayloadExists from "./middlewares/filesPayloadExists";

const router = Router();

router.get("/transactions", TransactionController.index);
router.post(
  "/transactions",
  fileUpload({ createParentPath: true, useTempFiles: true }),
  filesPayloadExists,
  TransactionController.store
);

export default router;
