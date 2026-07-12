import express from "express";
import {
  createBill,
  getBillById,
  getAllBills,
} from "../controllers/billController.js";
const router = express.Router();

router.post("/", createBill);
router.get("/", getAllBills);

router.get("/:id", getBillById);

export default router;