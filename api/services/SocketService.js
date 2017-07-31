'use strict';

var app = require('http').createServer();
var io = require('socket.io')(app);
app.listen(process.env.PORT || 3000);


// var io = require('socket.io-client');
var socket = io.connect('https://calm-earth-42681.herokuapp.com/',
    {reconnect: true, transports : ['websocket'], path: '/socket.io'});

socket.on('connect', function (socket) {
    console.log('Connected!');
});

io.on('connection', function (socket) {

    console.log('Socket id is : ', socket.id);

    socket.emit('news', 'Welcome to chat!');

    socket.on('send message', function (data) {
        io.sockets.emit('new message', data)
    });

});





module.exports = {


};