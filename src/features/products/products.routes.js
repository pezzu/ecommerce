const express = require("express");
const products = require("./products.service");

function routes() {
  const router = express.Router();

  router.use("/", getProducts);

  return router;
}

module.exports = { routes };

async function getProducts(req, res) {
  res.json(products.getProducts());
}
