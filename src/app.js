import express from "express";
import connectionWithDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connectionDatabase = await connectionWithDatabase();

connectionDatabase.on("error", (error) => {
  console.error("Erro de conexão", error);
});

connectionDatabase.once("open", () => {
  console.log("Connection with database successfully!");
})

const app = express();
routes(app);

export default app;