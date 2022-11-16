import express from "express";
const router = express.Router();

import { getTechData, postTechData, putTechData } from "../controllers/data.js";

router.get("/upd", getTechData);
//router.post("/upd", postTechData);
//router.put("/upd", putTechData);

export default router;
