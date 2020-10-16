const express = require("express");
const service = require("./currency.service");

function routes() {
  const router = express.Router();

  router.use("/", getRates);

  return router;
}

module.exports = { routes };

function getRates(req, res) {
  service.getRates().then((rates) => res.json(rates));
}
