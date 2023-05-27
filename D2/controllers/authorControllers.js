const mongoose = require("mongoose");

// IMPORTA LO SCHEMA
const { authorSchema } = require("./schemas");

// CREA MODELLO PER L'UTILIZZO
const authorModel = mongoose.model("authors", authorSchema);

//TROVA TUTTI GLI AUTORI
async function getAllAuthors(req, res) {
  const allAuthors = await authorModel.find();
  return res.json(allAuthors);
}

// TROVA AUTORE CERCANDO PER ID
async function getAuthorsById(req, res) {
  const id = req.params.id;
  try {
    const author = await authorModel.findById(id);
    return res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ error: "Autore non trovato", err });
  }
}

// CREA NUOVO AUTORE
async function createAuthor(req, res) {
  const obj = req.body;
  const newAuthor = authorModel(obj);
  const feedback = await newAuthor.save();
  return res.status(200).json(feedback);
}

async function updateAuthor(req, res) {
  const id = req.params.id;
  const obj = req.body;
  try {
    const editAuthor = await authorModel.findByIdAndUpdate(id, obj);
    return res.status(200).json(editAuthor);
  } catch (err) {
    res.status(500).json({ error: "Autore non trovato", ...err });
  }
}

async function deleteAuthor(req, res) {
  const id = req.params.id;
  try {
    await authorModel.findByIdAndDelete(id);
    return res.status(200).json({});
  } catch (err) {
    res.status(500).json({ error: "Utente non trovato", ...err });
  }
}

module.exports = {
  getAllAuthors,
  getAuthorsById,
  createAuthor,
  deleteAuthor,
  updateAuthor,
};
