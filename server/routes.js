const express = require("express");

const products = require("./products/products.routes");

function routes() {
  const router = express.Router();

  router.use("/products", products.routes());

  return router;
}

module.exports = { routes };
