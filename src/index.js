const express = require('express')
const morgan = require('morgan')
const app = express()

//Consegue lidar com requisições em formato JSON
app.use(express.json());

//Consegue ligar com requisições url encoded
app.use(express.urlencoded({extended: true}))

//Mostra o resultado das requisições
app.use(morgan('dev'));

app.use(require('./routes'));
app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001")
})