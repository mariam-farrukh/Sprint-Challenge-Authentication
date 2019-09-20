const db = require("../database/dbConfig.js");

module.exports = {
  add,
  getUsers,
  find
};

function add(user) {
  return db("users").insert(user);
}

function getUsers() {
  return db("users");
}

function find(filter) {
  return db("users").where(filter);
}