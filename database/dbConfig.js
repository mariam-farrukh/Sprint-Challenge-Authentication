const knex = require("knex");

const knexConfig = require("../knexfile.js");

const envrionment = process.env.DB_ENV || "development";

module.exports = knex(knexConfig[envrionment]);