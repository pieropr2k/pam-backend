import Sequelize from "sequelize"; 
import { PASSWORD, DB_NAME, DB_USER, DB_HOST, DB_PORT } from "../config.js";

export const sequelize = new Sequelize( 
  DB_NAME, // db name,
  DB_USER, // username
  PASSWORD, // password 
  {
    host: DB_HOST,
    dialect: "postgres",
    port: DB_PORT,
  }
);

