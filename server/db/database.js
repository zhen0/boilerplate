"use strict";

// The purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).

const chalk = require("chalk");
const Sequelize = require("sequelize");
// const pkg = require("../../package.json");

console.log(chalk.yellow("Opening database connection"));

// create the database instance that can be used in other database files
// const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/boiler`,
  {
    logging: false
    // so we don't see all the SQL queries getting made
  }
);

module.exports = db;
