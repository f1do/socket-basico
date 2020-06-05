const { io } = require('../server');

io.on('connection', (client) => {
    console.log('a user connected');

    client.emit('enviarMensaje', {
        usaurio: 'Administrador',
        mensaje: 'Bienvenido al chat'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // Envío a todos los escuchas. "broadcast"
        client.broadcast.on('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TDODO SALIÓ BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TDODO SALIÓ MAL!!!!!!!!'
        //     });
        // }
    });
});