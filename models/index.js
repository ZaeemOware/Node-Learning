const Sequelize = require("sequelize");

console.log(process.env.SQL_USER);

const sequelize = new Sequelize(
  "learning",
  process.env.SQL_USER,
  process.env.SQL_PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
