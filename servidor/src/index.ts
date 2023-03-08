import * as express from "express";
import * as dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const PORT = process.env.PORT || 3000;

//cria o servidor e coloca na variável express
const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.use("/", routes)

