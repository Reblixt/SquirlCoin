import express from "express";
import { singleEndpoint } from "../config/settings.mjs";
import { createBlock } from "../controllers/block-controller.mjs";

const router = express.Router();

router.route(singleEndpoint.blockCreate).post(createBlock);

export default router;
