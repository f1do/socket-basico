var socket = io();
socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('desconectado del servidor');
});

// Enviar Info
socket.emit('enviarMensaje', {
    usuario: 'Fer',
    menasje: 'Hey!, hello world'
}, (resp) => {
    console.log('Se disparó el callback', resp);
});

// Escuchar info
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
});