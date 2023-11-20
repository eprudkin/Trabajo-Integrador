const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/home', (req, res) => {

    //consultar la DB
    /* Le mandamos toda la data que recabamo de la lógica
     y lo inyectamos de forma dinámica */
     res.sendFile(__dirname + '/public/index.html')
    })//pide la ruta dinámica

    
app.get('/ping', (req, res) => res.send('pong'));

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));