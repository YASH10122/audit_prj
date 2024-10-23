const express = require("express");
const app = express();

const mongoose = require("mongoose");
const doeenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth");

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true, // This allows cookies to be sent
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "withcredentials"], // Add 'withcredentials'
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  preflightContinue: true,
};

app.options("*", cors(corsOptions)); // This handles preflight requests
app.use(cors(corsOptions)); 
app.use(express.json());
// app.use(express.static("public"));

app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URL,{
    dbName: "register_table",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server running on port sucessfully ${process.env.PORT }`);
    });
  })
  .catch((err) => {
    console.log(err);
  });