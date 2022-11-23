//requerimos HTML
const http = require('http')

//Creamos el servidor
const app = http.createServer((request, response) =>
{
    response.writeHead(200)
    response.end("Hola Mundo")
})

//Creamos el puerto donde esta siendo escuchado 
// y mostrado en el localhost
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
