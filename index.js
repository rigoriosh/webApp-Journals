const express = require('express');

const port = 8889;


const app = express(); //Creando el servidor de express


//Levantar el servidor

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

// Directorio publico
app.use(express.static('build'))

// Rutas

app.get('/', (req, res) => {
    res.json({
        msg: 'ok'
    })
});