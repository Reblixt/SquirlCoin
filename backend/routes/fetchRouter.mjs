import express from "express";
import { singleEndpoint } from "../config/settings.mjs";
import { fetchOneBlock, listChain } from "../controllers/fetch-controller.mjs";

const router = express.Router();

router.route("/").get(listChain);
router.route(singleEndpoint.fetchOne).get(fetchOneBlock);

export default router;
