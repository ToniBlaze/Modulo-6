const express = require("express");
const router = express.Router();

// Models
const postModel = require("../models/Posts");

// Ritorna tutti i commenti di un relativo Post
router.get("/posts/:id/comments", async (req, res, next) => {
  try {
    const post = await postModel.findById(req.params.id);
    const comments = post.comment;

    res.status(200).json(comments);
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

// Ritorna un specifico commento del relativo Post
router.get("/posts/:id/comments/:commentId", async (req, res, next) => {
  try {
    const post = await postModel.findById(req.params.id);
    const comments = post.comment.filter(
      (comment) => comment._id.toString() === req.params.commentId
    );

    res.status(200).json(comments);
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

// Aggiungi commento a specifico Post
router.post("/posts/:id", async (req, res, next) => {
  try {
    const post = await postModel.findById(req.params.id);

    // Creare un nuovo oggetto commento con i dati della richiesta
    const newComment = {
      author: req.body.author,
      content: req.body.content,
    };

    // Aggiungere il nuovo commento all'array "comment"
    post.comment.push(newComment);
    const updatedPost = await post.save();

    res.status(201).json(updatedPost);
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

router.put("/posts/:id/comments/:commentId", async (req, res, next) => {
  try {
    const post = await postModel.findById(req.params.id);
    const comment = post.comment.find(
      (comment) => comment._id.toString() === req.params.commentId
    );

    // Aggiorna il commento con i nuovi dati ricevuti nella richiesta
    comment.author = req.body.author;
    comment.content = req.body.content;

    const updatedPost = await post.save();

    res.status(200).json(updatedPost);
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

router.delete("/posts/:id/comments/:commentId", async (req, res, next) => {
  try {
    const post = await postModel.findById(req.params.id);

    post.comment = post.comment.filter(
      (comment) => comment._id.toString() !== req.params.commentId
    );

    const updatedPost = await post.save();

    res.status(200).json(updatedPost);
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

module.exports = router;
