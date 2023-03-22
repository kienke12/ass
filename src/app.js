import express from "express";
import mongoose from "mongoose";
import productRouter from "./router/product"

const app = express();

app.use(express.json())

app.use("/api",productRouter)

mongoose.connect("mongodb://localhost:27017/ass_we305")

export const viteNodeApp = app