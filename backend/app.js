const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database/connect");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", require("./router/userrouter"));
app.use("/api/notes", require("./router/noterouter"));

app.listen(3000, () => console.log("Server running"));