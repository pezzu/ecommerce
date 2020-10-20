const express = require("express");

const products = require("../features/products/products.routes");
const rates = require("../features/currency/currency.routes");

function routes() {
  const router = express.Router();

  router.use("/v1/products", products.routes());
  router.use("/v1/exchangerates", rates.routes());

  return router;
}

module.exports = { routes };
