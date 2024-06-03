// /config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toko_baju", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
