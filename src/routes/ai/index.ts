import express from "express";
import aiController from "../../controllers/aiController";

const router = express.Router();

router.get("/", aiController);

export default router;
