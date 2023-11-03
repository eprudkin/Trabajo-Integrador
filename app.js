const express = require('express');
const app = express();

app.use(express.static('public_html'));

app.get('/home', (req, res) => {

    //consultar la DB
    /* Le mandamos toda la data que recabamo de la lógica
     y lo inyectamos de forma dinámica */
     res.sendFile(__dirname + '/public/index.html')
    })//pide la ruta dinámica

    
app.get('/ping', (req, res) => res.send('pong'));

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));