import "dotenv/config";
import express from "express";
import livrosRouters from "./routes/livrosRoute.js";
import authenticate from "./database/connection.js";
import verificarAdm from "./middleware/adminMiddleware.js";

authenticate();

const servidor = express();

servidor.use(express.json());

servidor.use(livrosRouters);

servidor.get("/admin", verificarAdm, (req, res) => {
    res.json({
        mensagem: "Acesso administrativo."
    });
}
);

servidor.listen(3000, () => {
  console.log("Sevidor em execução na porta 3000.");
});
