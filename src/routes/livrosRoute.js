import { Router } from "express";
import Livro from "../database/Livro.js";

const livrosRouters = Router();

livrosRouters.get("/livros", async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.json(livros);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

livrosRouters.get("/livros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const livro = await Livro.findByPk(id);

    if (livro) {
      res.json(livro);
    } else {
      res.status(404).json({
        mensagem: "Livro não encontrado.",
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

livrosRouters.post("/livros", async (req, res) => {
  try {
    const dados = req.body;
    const salvo = await Livro.create(dados);
    res.json(salvo);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

livrosRouters.put("/livros/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const dados = req.body;
    const livro = await Livro.findByPk(id);

    if(livro) {
        await livro.update(dados);
        res.json(livro);
    } else{
      res.status(404).json ({
        mensagem: "Livro não encontrado."
      });
    }

  }
  catch(erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde."
    });
  }
});

livrosRouters.delete("/livros/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const livro = await Livro.findByPk(id);
        if(livro) {
            await livro.destroy();
            res.json({
              mensagem:"Livro removida."
            });
        } else{
          res.status(404).json({
            mensagem: "Livro não encontrado."
          });
        }
    }
    catch(erro){
      res.status(500).json({
        mensagem: "Erro interno no servidor. Tente mais tarde."
      });
    }
});

export default livrosRouters;
