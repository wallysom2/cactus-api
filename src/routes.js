const { Router } = require("express");

const findManyClientesController = require("./controllers/client/findManyClientes");
const findClienteByIdController = require("./controllers/client/findClienteByIdController");

const routes = Router();

routes.get("/findManyCliente", findManyClientesController.handle);
routes.get("/cliente/:id", findClienteByIdController.handle);

module.exports = routes;

