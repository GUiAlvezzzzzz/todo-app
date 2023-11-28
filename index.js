const express = require("express")
const exphbs = require("express-handlebars")

app.get = express()
app.engine("handlebars", exphbs.engine())
app.set('view engine', 'handlebars')

const app = express()

app.get("/",(requisicao,resposta) => {
    resposta.send("Olá,Mundo!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

 