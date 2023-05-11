const { Days} = require("../../db");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getById = async function (id) {   
  const days = Days.findAll()
  return days
}

module.exports = { getById };
  