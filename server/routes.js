const express = require("express");

const products = require("./products/products.routes");
const rates = require("../src/features/currency/currency.routes");

function routes() {
  const router = express.Router();

  router.use("/products", products.routes());
  router.use("/exchangerates", rates.routes());

  return router;
}

module.exports = { routes };
