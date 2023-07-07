const express = require ('express')
const path = require ('path')
const app = express()
const port = 3000

app.use (express.static('public'))

app.get('/', (req, res) =>{
    //res.send('ola Mundo')
    res.sendFile(path.resolve('public/princiapl.html'))
})

app.get ('/eventos-pendentes', (req,res) =>{
    res.sendFile(path.resolve('public/event-pedentes.html'))
})

app.get ('/eventos-encerrados', (req,res) =>{
    res.sendFile(path.resolve('public/event-encerrado.html'))
})

app.get ('/certificado-emitido', (req,res) =>{
    res.sendFile(path.resolve('public/cert-emitidos.html'))
})

app.listen (port, ()=> {
     console.log (`App rodando na porta: ${port}`)
})


