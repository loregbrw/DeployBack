import express from "express";
import cors from "cors";
import PersonRouter from "./routers/person.js";

import "reflect-metadata";
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/person", PersonRouter);

export default app;