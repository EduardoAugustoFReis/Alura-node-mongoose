import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros (req, res) {
    try {
      const listaLivros = await livro.find({});

      return res.status(200).json(listaLivros);
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha ao listar livro`});
    }
  
  };

  static async listarLivroPorId (req, res) {
    try {
      const id = req.params.id;

      const livrosEncontrado = await livro.findById(id);

      return res.status(200).json(livrosEncontrado);
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha na requisição`});
    }
  
  };

  static async cadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);  

      return res.status(201).json({message: "Criado com sucesso!", livro: novoLivro});
    } catch (error) {

     console.log("Error", error);
     
     return res.status(500).json({message: `${error.message} - falha ao cadastrar livro`});
    }
  };

  static async atualizarLivro (req, res) {
    try {
      const id = req.params.id;

      await livro.findByIdAndUpdate(id, req.body);

      return res.status(200).json({ message: "Livro atualizado com sucesso"});
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha na atualização`});
    }
  
  };
  
  static async deletarLivro (req, res) {
    try {
      const id = req.params.id;

      await livro.findByIdAndDelete(id, req.body);

      return res.status(200).json({ message: "Livro deletado com sucesso."});
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha na exclusão`});
    }
  
  };
};

export default LivroController;