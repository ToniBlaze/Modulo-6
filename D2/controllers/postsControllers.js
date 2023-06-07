const mongoose = require("mongoose");

// IMPORTA LO SCHEMA
const { postSchema } = require("./schemas");

// CREA MODELLO PER L'UTILIZZO
const postModel = mongoose.model("blogPosts", postSchema);

//TROVA TUTTI i POST
async function getAllPosts(req, res) {
  const allPosts = await postModel.find();
  return res.json(allPosts);
}

// TROVA POST  CERCANDO PER ID
async function getPostsById(req, res) {
  const id = req.params.id;
  try {
    const post = await postModel.findById(id);
    return res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: "Post non trovato", err });
  }
}

// CREA NUOVO POST
async function createPost(req, res) {
  const obj = req.body;
  const newPost = postModel(obj);
  const feedback = await newPost.save();
  return res.status(200).json(feedback);
}

async function updatePost(req, res) {
  const id = req.params.id;
  const obj = req.body;
  try {
    const editPost = await postModel.findByIdAndUpdate(id, obj);
    return res.status(200).json(editPost);
  } catch (err) {
    res.status(500).json({ error: "Post non trovato", ...err });
  }
}

async function deletePost(req, res) {
  const id = req.params.id;
  try {
    await postModel.findByIdAndDelete(id);
    return res.status(200).json({});
  } catch (err) {
    res.status(500).json({ error: "Utente non trovato", ...err });
  }
}

module.exports = {
  getAllPosts,
  getPostsById,
  createPost,
  deletePost,
  updatePost,
};
