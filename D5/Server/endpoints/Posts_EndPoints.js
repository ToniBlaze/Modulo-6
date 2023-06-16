const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const express = require("express");
const router = express.Router();
const multer = require("multer");

//CLOUDINARY
cloudinary.config({
  cloud_name: "dtfbehvdq",
  api_key: "157679364286161",
  api_secret: "aeISkIxxJZM2LBXsmrMKV4QZ60o",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads/",
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage: storage });

// *** CHIMATA POST + CLOUDINARY-MULTER ***
router.post("/upload", upload.single("uploadFile"), (req, res) => {
  const data = req.file;
  console.log(data);
  res.status(200).json({ ...data });
});

//----------- FINE CLOUDINARY

// Models
const postModel = require("../models/Posts");

router.get("/posts", async (req, res, next) => {
  res.status(200).json(await postModel.find());
});

router.get("/posts/:id", async (req, res, next) => {
  try {
    res.status(200).json(await postModel.findById(req.params.id));
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

router.post("/posts", async (req, res, next) => {
  try {
    res.status(201).json(await new postModel(req.body).save());
  } catch (err) {
    next();
  }
});

router.put("/posts/:id", async (req, res, next) => {
  //const id = req.params.id;
  //const obj = req.body;
  //const user = await userModel.findByIdAndUpdate(id, obj)
  try {
    res
      .status(200)
      .json(await postModel.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

router.delete("/posts/:id", async (req, res, next) => {
  try {
    res.status(200).json(await postModel.findByIdAndDelete(req.params.id));
  } catch (err) {
    //res.status(400).json({error: "User ID not found"}, ...err);
    next();
  }
});

module.exports = router;
