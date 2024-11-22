import { Router } from "express";

import PersonController from "../controller/PersonController.js";

const PersonRouter = Router();

PersonRouter.post("/", PersonController.create);
PersonRouter.get("/", PersonController.getAllPeople);
PersonRouter.delete("/:id", PersonController.deleteById);

export default PersonRouter;