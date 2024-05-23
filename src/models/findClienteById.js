const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = {
  async execute(id) {
    try {
      const cliente = await prisma.clientes.findUnique({
        where: { id },
      });

      if (cliente) {
        return JSON.stringify(cliente, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        );
      } else {
        throw new Error("Cliente não encontrado");
      }
    } catch (error) {
      error.path = "src/models/findClienteById.js";
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  },
};
