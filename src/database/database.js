import Sequelize from "sequelize"; 
import { PASSWORD, DB_NAME, DB_USER, DB_HOST } from "../config.js";

export const sequelize = new Sequelize(
  //"projectsdb", // db name,
  DB_NAME, // db name,
  DB_USER, // username
  PASSWORD, // password
  //"mysecretpassword", // password
  {
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT, // Asegúrate de que esté configurado correctamente
  }
);

