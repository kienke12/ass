import express from "express"
import { creat, get, getAll, remove, update } from "../controller/product";

const router = express.Router();

router.post("/product",creat)
router.get("/product",getAll)
router.get("/product/:id",get)
router.put("/product/:id",update)

router.delete("/product/:id",remove)

export default router;