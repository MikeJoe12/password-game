const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('command', (cmd) => {
        io.emit('command', cmd);
    });
});

const port = process.env.PORT || 3002;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});