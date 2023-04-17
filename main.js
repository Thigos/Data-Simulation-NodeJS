/* ISC Copyright
Copyright 2023 MariseMiranda
*/

const express = require('express');

const DELAY = 1000; //ms
const SERVIDOR_PORTA = 3000; //127.0.0.1:3000/sensores/

// Limites
const limits = {
    Dht11Umidade: {
        min: 50,
        max: 100, 
    },

    Dht11Temperatura: {
        min: 15,
        max: 25, 
    },

    Luminosidade: {
        min: 600,
        max: 700, 
    },

    Lm35Temperatura: {
        min: 25,
        max: 35, 
    },

    Chave: {
        min: 0,
        max: 1,
    },
}

const app = express(); // ABRE O SERVIDOR
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});
app.listen(SERVIDOR_PORTA, () => {
    console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
});

const gen_random = (sensor_limits)=>{
    const {min, max} = sensor_limits;
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
    valoresDht11Umidade.push(gen_random(limits['Dht11Umidade']));
    valoresDht11Temperatura.push(gen_random(limits['Dht11Temperatura']));
    valoresLuminosidade.push(gen_random(limits['Luminosidade']));
    valoresLm35Temperatura.push(gen_random(limits['Lm35Temperatura']));
    valoresChave.push(gen_random(limits['Chave']));

    servidor(
        valoresDht11Umidade, 
        valoresDht11Temperatura, 
        valoresLuminosidade, 
        valoresLm35Temperatura, 
        valoresChave
    );
}, DELAY);
