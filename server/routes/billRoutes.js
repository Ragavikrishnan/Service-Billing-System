import express from "express";
import {
  createBill,
  getBillById,
} from "../controllers/billController.js";
const router = express.Router();

router.post("/", createBill);

router.get("/:id", getBillById);

export default router;