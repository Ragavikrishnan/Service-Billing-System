import express from "express";
import {
  getCustomerByPhone,
  searchCustomers,
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/search", searchCustomers);

router.get("/:phone", getCustomerByPhone);

export default router;