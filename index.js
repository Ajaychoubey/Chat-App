const express = require('express')
    socket = require('socket.io'),
    port = 4000,
// Create App
    app = express(),
    server = app.listen(port, function(){
        console.log(`Listening at ${port}`);
    });
app.use(express.static('public'));

// Initialize socket
const io = socket(server);
io.on('connection',function(socket){
    console.log(`${socket.id} has connected`);
    socket.on('chat',(chat) => io.sockets.emit('chat',chat))
})