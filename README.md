# Data-Simulation-NodeJS
Envios de Dados, simulando um Arduino, para um servidor NodeJS

### Instalação
```cmd
cd Data-Simulation-NodeJS
npm install
```

### Start Server
```cmd
npm start
```

Pode ser Acessado em Qualquer Dispositivo usando Request
### Exemplo em JS:
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
