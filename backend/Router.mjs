import express from "express";
import blockRouter from "./routes/blockRouter.mjs";
import fetchRouter from "./routes/fetchRouter.mjs";
import transactRouter from "./routes/transactRouter.mjs";
import { singleEndpoint } from "./config/settings.mjs";
const router = express.Router();

router.use(singleEndpoint.block, blockRouter);
router.use(singleEndpoint.fetchAll, fetchRouter);
router.use(singleEndpoint.transactions, transactRouter);

export default router;
