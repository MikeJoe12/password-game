const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.on('command', (cmd) => {
        io.emit('command', cmd);
    });
});

const PORT = 3002;
http.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});