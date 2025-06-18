const express = require('express');
const routes = express.Router();

const AnnotationController = require("./controllers/AnnotationController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require('./controllers/ContentController');

// Rotas para as anotações
routes.get("/annotations", AnnotationController.read);
routes.post("/annotations", AnnotationController.create);
routes.delete("/annotations/:id", AnnotationController.delete);

// Rotas para prioridades
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

// Rotas para notas
routes.post("/content/:id", ContentController.update);

module.exports = routes;