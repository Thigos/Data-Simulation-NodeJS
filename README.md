# Data-Simulation-NodeJS
Simulação de dados de sensores Arduino com NodeJS

#### Os valores são gerados aleatoriamente dentro de uma faixa de intervalo específica (min, max)

### Instalação
```cmd
cd Data-Simulation-NodeJS
npm install
```

### Start Server
```cmd
npm start
```

### Configurar Intervalos
Os intervalos podem ser configurados na <a href="main.js#L11">L11</a> do ```main.js```, definindo o min e max de cada sensor
```js
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
```

### Uso
Pode ser Acessado em Qualquer Dispositivo usando Requests

### Exemplo de Request em JS:
```js
var http = new XMLHttpRequest();
http.open('GET', 'http://localhost:3000/sensores/' + sensor, false);
http.send(null);
var valores = JSON.parse(http.responseText);
```
### Sensores
* Dht11-Umidade (http://localhost:3000/sensores/dht11/umidade)
* Dht11-Temperatura (http://localhost:3000/sensores/dht11/temperatura)
* Luminosidade (http://localhost:3000/sensores/luminosidade)
* Lm35 (http://localhost:3000/sensores/lm35/temperatura)
* Bloqueio (http://localhost:3000/sensores/chave)
