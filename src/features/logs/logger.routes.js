const express = require("express");
const logger = require("./logger.service");

function addLog(req, res) {
  const { timestamp, action, log } = {
    timestamp: Date.now(),
    ...req.body,
  };
  res.json(logger.addLog({ timestamp, action, log }));
}

function getLogs(req, res) {
  res.json(logger.getLogs());
}

function deleteLogs(req, res) {
  res.json(logger.deleteLogs());
}

function routes() {
  const router = express.Router();

  router.get("/", getLogs);
  router.post("/", addLog);
  router.delete("/", deleteLogs);

  return router;
}

module.exports = { routes };
