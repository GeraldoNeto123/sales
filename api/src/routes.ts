import { Router } from "express";
import TransactionController from "./app/controllers/TransactionController";
import fileUpload from "express-fileupload";
import filesPayloadExists from "./middlewares/filesPayloadExists";

const router = Router();

router.post(
  "/transactions",
  fileUpload({ createParentPath: true, useTempFiles: true }),
  filesPayloadExists,
  TransactionController.store
);

export default router;
