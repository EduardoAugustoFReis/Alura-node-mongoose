import express from "express";
import AutoresController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutoresController.listarAutores);
routes.get("/autores/:id", AutoresController.listarAutoresPorId);
routes.post("/autores", AutoresController.cadastrarAutor);
routes.put("/autores/:id", AutoresController.atualizarAutor);
routes.delete("/autores/:id", AutoresController.deletarAutor);

export default routes;