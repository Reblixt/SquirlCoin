import express from "express";
import { singleEndpoint } from "../config/settings.mjs";
import { listChain } from "../controllers/fetch-controller.mjs";

const router = express.Router();

router.route("/").get(listChain);
router.route(singleEndpoint.fetchOne).get();

export default router;
