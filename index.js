import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import {
  renderHomeScreen,
  renderLoginScreen,
  renderProfileScreen,
} from "./services/router.js";
import cors from "cors";

const app = express();
const PORT = 4000 || process.env.PORT;
const corsOptions = {
  origin: "*",
  method: ["GET", "POST", "PUT", "DELETE"],
};

const __dirname = fileURLToPath(import.meta.url);
console.log(process.cwd() + "/views");

app.set("views", process.cwd() + "/views");
app.set("view engine", "ejs");
app.use(cors(corsOptions));

app.get("/", renderHomeScreen);
app.get("/login", renderLoginScreen);
app.get("/profile", renderProfileScreen);

app.listen(PORT, () => console.log(`L'application roule sur le port ${PORT}`));
