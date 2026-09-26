import { Router } from "express";
import { getSummaryReport, getPadelReport } from "../controllers/report.controller";

const router = Router();

router.get("/summary", getSummaryReport);
router.get("/padel", getPadelReport);

export default router;
