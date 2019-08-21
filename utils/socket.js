let socketIO = require('socket.io');
let getApiAndEmit = require('../utils/weather');

module.exports = {
    liveTime(server) {
        let io = socketIO(server);
        io.on('connection', socket => {
            console.log('New client connected');
            setInterval(() => {
                getApiAndEmit(socket);
            }, 1000);
            socket.on('disconnect', () => {
                console.log('Client disconnected.');
            });
        });
    },

    liveChat(server) {
        let io = socketIO(server);
        io.on('connection', socket => {
            socket.on('messages', (data) => {
                socket.broadcast.emit('messages', data);
                data.user = `${data.user}我`;
                socket.emit('messages', data);
            });
        });
    },
};