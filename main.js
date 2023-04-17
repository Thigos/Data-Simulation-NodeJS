/* ISC Copyright
Copyright 2023 MariseMiranda
*/

const express = require('express');

const DELAY = 1000; //ms
const SERVIDOR_PORTA = 3000; //127.0.0.1:3000/sensores/

const app = express(); // ABRE O SERVIDOR
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
app.listen(SERVIDOR_PORTA, () => {
    console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
});

const gen_random = (min, max)=>{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const servidor = (
    valoresDht11Umidade,
    valoresDht11Temperatura,
    valoresLuminosidade,
    valoresLm35Temperatura,
    valoresChave
) => {
    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valoresDht11Umidade);
    });
    app.get('/sensores/dht11/temperatura', (_, response) => {
        return response.json(valoresDht11Temperatura);
    });
    app.get('/sensores/luminosidade', (_, response) => {
        return response.json(valoresLuminosidade);
    });
    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    app.get('/sensores/chave', (_, response) => {
        return response.json(valoresChave);
    });
}

var valoresDht11Umidade = [];
var valoresDht11Temperatura = [];
var valoresLuminosidade = [];
var valoresLm35Temperatura = [];
var valoresChave = [];

setInterval(()=>{
    temperatura_Dht11 = gen_random(15, 25);
    valoresDht11Umidade.push(gen_random(50, 100));
    valoresDht11Temperatura.push(temperatura_Dht11);
    valoresLuminosidade.push(gen_random(600, 700));
    valoresLm35Temperatura.push(temperatura_Dht11 + 5);
    valoresChave.push(gen_random(0, 1));

    servidor(
        valoresDht11Umidade, 
        valoresDht11Temperatura, 
        valoresLuminosidade, 
        valoresLm35Temperatura, 
        valoresChave
    );
}, DELAY);
