'use strict';

var app = require('http').createServer();
var io = require('socket.io')(app);
app.listen(process.env.PORT || 80);

io.on('connection', function (socket) {

    console.log('Socket id is : ', socket.id);

    socket.emit('news', 'Welcome to chat!');

    socket.on('send message', function (data) {
        io.sockets.emit('new message', data)
    });

});

module.exports = {


};