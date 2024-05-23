const logger = require("../../custom/logger");
const findClienteById = require("../../models/findClienteById");

module.exports = {
  async handle(req, res) {
    const { id } = req.params;

    try {
      const cliente = await findClienteById.execute(id);

      logger.info("Cliente encontrado com sucesso");
      res.status(200).json(JSON.parse(cliente));
    } catch (error) {
      if (!error.path) {
        error.path = "src/controllers/client/findClienteByIdController.js";
      }
      logger.error(`Erro: ${error.message} - Path: ${error.path}`);
      res.status(404).json({ error: error.message });
    }
  },
};
