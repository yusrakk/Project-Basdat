// /models/Barang.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Barang = sequelize.define(
  "Barang",
  {
    namaBarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hargaBarang: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    warnaBarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ukuranBarang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsiBarang: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "barang",
    timestamps: false,
  }
);

module.exports = Barang;
