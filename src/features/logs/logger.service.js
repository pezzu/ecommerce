const logs = [];

function addLog({ timestamp, action, log }) {
  logs.push({
    timestamp,
    action,
    log,
  });
}

function getLogs() {
  return logs;
}

function deleteLogs() {
  logs.splice(0);
}

module.exports = { addLog, getLogs, deleteLogs };
