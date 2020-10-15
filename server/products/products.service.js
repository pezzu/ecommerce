const products = require("./data.json");

function getProducts() {
  return products;
}

module.exports = { getProducts };
