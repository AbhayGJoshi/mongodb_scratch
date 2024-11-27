// console.log("Hello");
//video ur - https://www.youtube.com/watch?v=WJNSNFJOaWU
const express = require("express");
const cors = require("cors");
const server = express();
const PORT = 8080;
const bodyParser = require("body-Parser");

// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/demotest");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  console.log("DB Connected Successfully");
}

const userSchema = new mongoose.Schema({
  UserName: String, //Username and UserEmail corresponds to fieds of database-colection-documents
  UserEmail: String,
});

const User = mongoose.model("User", userSchema);

server.use(bodyParser.json());
server.use(cors());

server.listen(PORT, () => {
  console.log(`Server is running on port = ${PORT}`);
});

server.post("/user", async (req, res) => {
  // res.send(`port is ${PORT}`);
  let user = new User(); //user can be seen as an object of Collections or Row in a table
  user.UserName = req.body.name;
  user.UserEmail = req.body.email;
  const doc = await user.save();
  // console.log(req.body);
  console.log(doc);
  // res.json(req.body);
  res.json(doc);
});

server.get("/user", async (req, res) => {
  // res.send(`port is ${PORT}`);
  const docs = await User.find({});
  res.send(docs);
});

//in browser type http://localhost:8080/user and the o/p is there!!!
