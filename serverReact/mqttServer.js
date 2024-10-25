// mqttServer.js
const mqtt = require('mqtt');
const express = require('express');
const request = require('request');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(cors());

// Conecta ao Mosquitto usando o protocolo MQTT/TCP
const client = mqtt.connect('mqtt://test.mosquitto.org');

// Variável para armazenar a última mensagem recebida
let lastMessage = '';

client.on('connect', () => {
  console.log('Conectado ao Mosquitto via MQTT/TCP');
  
  // Assinatura de um tópico
  client.subscribe('signalLang/topic/sending', (err) => {
    if (!err) {
      console.log('Inscrito no tópico');
    }
  });
});

// Armazena a mensagem recebida
client.on('message', (topic, message) => {
  console.log(`Mensagem recebida no tópico ${topic}:`, message.toString());
  lastMessage = message.toString();
});

// API para enviar a última mensagem ao cliente React
app.get('/mqtt-message', (req, res) => {
  res.json({ message: lastMessage });
});

// Inicializa o servidor HTTP
const server = http.createServer(app);
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Servidor HTTP rodando na porta ${PORT}`);
});
