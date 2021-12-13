const express = require('express');
const routes = require('./routes');


const porta = 3000; //substituir por .env

const app = express();

app.use(routes);


app.listen(porta, () => {
    console.log(`Servidor iniciado com sucesso na porta ${porta}`);
});