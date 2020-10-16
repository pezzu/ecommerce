const axios = require("axios");

const getRates = () => {
  return axios
    .get("https://api.exchangeratesapi.io/latest?base=USD")
    .then(({ data }) => data.rates);
};

module.exports = { getRates };
