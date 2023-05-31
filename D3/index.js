const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  index: Number,
  guid: String,
  isActive: Boolean,
  balance: String,
  picture: String,
  age: Number,
  eyeColor: String,
  name: { first: String, last: String },
  company: String,
  email: String,
  phone: String,
  address: String,
  about: String,
  registered: String,
  latitude: String,
  longitude: String,

  tags: [String],
  range: [Number],
  friends: [{ id: Number, name: String }],
  greeting: String,
  favoriteFruit: String,
});

const userModel = mongoose.model("esercizio-d3", userSchema);

app.get("/", async (req, res) => {
  const allAuthors = await userModel.find();
  return res.json(allAuthors);
});

app.get("/age/:age", async (req, res) => {
    let age = req.params.age
    const allAuthors = await userModel.find({age: {$gt: age }});
    return res.json(allAuthors);
})

app.get("/age/:age1/:age2", async (req, res) => {
    let age1 = req.params.age1
    let age2 = req.params.age2
    const allAuthors = await userModel.find({$and: [{age: {$gt: age1}}, {age:{$lte: age2}}]});
    return res.json(allAuthors);
})

async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://alessiotoninello:2Y3595DtzKIPhDEH@firstdb.xzwjsk8.mongodb.net/D3"
    );
    app.listen(port, () =>
      console.log("Server attivo sulla porta 3000!!!", "localhost:3000")
    );
  } catch (err) {
    console.error(err);
  }
}

start();
