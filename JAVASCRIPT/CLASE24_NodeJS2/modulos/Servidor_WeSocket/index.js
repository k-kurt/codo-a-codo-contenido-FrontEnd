const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('Client connected');
  socket.on('message', message => {
    console.log(`Received: ${message}`);
    socket.send(`Echo: ${message}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running at ws://localhost:8080/');

/* Es un programa que maneja conexiones WebSocket, permitiendo la comunicación bidireccional en tiempo real entre un cliente y un servidor. A diferencia de HTTP, que es un protocolo sin estado y de solicitud-respuesta, WebSocket mantiene una conexión abierta persistente que permite la transferencia de datos en ambas direcciones sin la sobrecarga de las solicitudes HTTP repetidas. */