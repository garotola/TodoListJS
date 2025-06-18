const express = require('express');
const routes = express.Router();

const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");

// Rotas para as anotações
routes.get("/annotations", AnnotationController.read);
routes.post("/annotations", AnnotationController.create);
routes.delete("/annotations/:id", AnnotationController.delete);

// Rotas para prioridades
routes.get("/priorities", PriorityController.read);

module.exports = routes;