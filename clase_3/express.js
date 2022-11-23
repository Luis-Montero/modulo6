//requerimos express y lo ejecutamos 
const express = require('express')
const app = express()

//utilizamos el metodo get para que nos envie
//lo que declaramos.
app.get('/', (request, response) => {
    response.send('<h1>Hola Mundo con Express</h1>')
})

// Declaramos el puerto donde escuchra el localhost
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})