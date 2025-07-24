//Conection to the database MongoDB
import dotenv from "dotenv";
import path from "path";

const envPath = path.resolve("../server/.env");
dotenv.config({ path: envPath });

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YourSecretKey",
  mongoUri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
};
export default config;
