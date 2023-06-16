const mongoose = require("mongoose");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const express = require("express");
const cors = require("cors");
const multer = require('multer');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const debug = require("./middlewares/debug")
app.use(debug.logUrl);



// Models
const userModel = require("./models/Users")
const postModel= require("./models/Posts")

// EndPoints Users
const endPointsUsers = require("./endpoints/Users_EndPoints")
app.use(endPointsUsers);

// EndPoints Posts
const endPointsPosts = require("./endpoints/Posts_EndPoints")
app.use(endPointsPosts);

// EndPoints Comments
const endPointsComments = require("./endpoints/Comments_EndPoints")
app.use(endPointsComments);

// Middleware ErrorHandler
app.use(debug.errorHandler);

mongoose
    .connect('mongodb+srv://alessiotoninello:2Y3595DtzKIPhDEH@firstdb.xzwjsk8.mongodb.net/D4')
    .then(response => {
        console.log("DB Connected...");
        app.listen(3000, async () => console.log("Server listening on port " + 3000))
    }).catch(err => console.log(err))