import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores (req, res) {
    try {
      const listarAutores = await autor.find({});

      return res.status(200).json(listarAutores);
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha ao listar autores`});
    }
  
  };

  static async listarAutoresPorId (req, res) {
    try {
      const id = req.params.id;

      const autoresEncontrado = await autor.findById(id);

      return res.status(200).json(autoresEncontrado);
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha na requisição`});
    }
  
  };

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);  

      return res.status(201).json({message: "Criado com sucesso!", autor: novoAutor});
    } catch (error) {

     console.log("Error", error);
     
     return res.status(500).json({message: `${error.message} - falha ao cadastrar autor`});
    }
  };

  static async atualizarAutor (req, res) {
    try {
      const id = req.params.id;

      await autor.findByIdAndUpdate(id, req.body);

      return res.status(200).json({ message: "autor atualizado com sucesso"});
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha na atualização`});
    }
  
  };
  
  static async deletarAutor (req, res) {
    try {
      const id = req.params.id;

      await autor.findByIdAndDelete(id, req.body);

      return res.status(200).json({ message: "autor deletado com sucesso."});
    } catch (error) {

      console.log("Error", error);
     
      return res.status(500).json({message: `${error.message} - falha na exclusão`});
    }
  
  };
};

export default AutorController;