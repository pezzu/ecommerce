const products = require("./data.json");

function getProducts() {
  return products.slice(0, 12);
}

module.exports = { getProducts };
