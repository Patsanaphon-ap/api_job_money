import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE,'postgres', '', {
  host: "localhost",
  port: 5431,
  dialect: "postgres",
  // schema: "postgres",
  operatorsAliases: undefined,
  dialectOptions: {
    useUTC: false
  },
  timezone: "+07:00",
  logging: false,
});

export default sequelize;