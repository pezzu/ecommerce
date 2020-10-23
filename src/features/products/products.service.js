const products = require("./data.json");

function getProducts() {
  return products.slice(0, 36);
}

module.exports = { getProducts };
