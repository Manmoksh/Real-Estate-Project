import express from "express";
import { getLeasePayments, getLeases } from "../controllers/leaseControllers";
import { authMiddleware } from "../middleware/authMiddle";

const router = express.Router();

router.get("/", authMiddleware(["manager", "tenant"]), getLeases);
router.get(
  "/:id/payments",
  authMiddleware(["manager", "tenant"]),
  getLeasePayments
);
export default router;
