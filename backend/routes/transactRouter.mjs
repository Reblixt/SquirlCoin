import express from "express";
import { singleEndpoint } from "../config/settings.mjs";
import { createTransaction } from "../controllers/transact-controller.mjs";

const router = express.Router();

router.route(singleEndpoint.transact).post(createTransaction);

export default router;
