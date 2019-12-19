const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const serveStatic = require("serve-static");
const handlebars = require("express-handlebars");
const path = require("path");
//Consegue lidar com requisições em formato JSON
app.use(express.json());

//Consegue ligar com requisições url encoded
app.use(express.urlencoded({ extended: true }));

//Mostra o resultado das requisições
app.use(morgan("dev"));

//Database setup
mongoose.connect('mongodb://localhost:27017/upload', {useNewUrlParser: true,useUnifiedTopology: true })

//Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




app.use(serveStatic(path.join(__dirname, "public")));

app.get("/upload", (req, res)=>{
  res.render("upload/form")
})

app.use(require("./routes"));
app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});
