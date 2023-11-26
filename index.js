const express = require("express");
// const dotenv = require("dotenv");
const app = express();

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://arefin:arefin@cluster0.hkoqlvm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});


console.log("Mongoose DB connect successfully");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello World!"));
const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
