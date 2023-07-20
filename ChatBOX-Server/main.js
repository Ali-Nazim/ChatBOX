// Stores
let activeUsers = []

// Requiring Libraries
const express = require('express')
const socketIO = require('socket.io')
// const path = require('path')

// Defining constants
const PORT = 5172 || process.env.PORT

// HTTP Server ------------------------------------------------

const app = express()

// Serving static folder
// app.use(express.static(path.join(__dirname, 'public')))

// Listening to HTTP Requests
const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// Defining Routes
app.get('/', (req, res) => {
    res.json(["Hello World!"])

})

// SocketIO ---------------------------------------------------
const socketServer = socketIO(httpServer, {
    cors: {
        origin: ["http://129.146.60.95:5173"]
    }
})

// Listening SocketIO
socketServer.on('connection', socket => {

    socket.on('join', (username) => {
        const user = activeUsers.find((user) => user.username === username)
        if (user) {
            const d = new Date();
            let ms = d.getMilliseconds().toString();
            username = `${username}-${ms.slice(ms.length - 6)}`
        }

        activeUsers.push({ id: socket.id, username })

        socket.broadcast.emit('notification', `${username} joined the room`)
        socketServer.emit('activeUsers', activeUsers.map((user)=>user.username))

        socketServer.to(socket.id).emit('notification', `Welcome ${username}, please be respectful`)
    });

    socket.on('message', (message) => {
        const user = activeUsers.find((user) => user.id === socket.id)
        socket.broadcast.emit('message', { username: user ? user.username : 'Anonymous', content: message })

    });

    socket.on('disconnect', () => {
        const user = activeUsers.find((user) => user.id === socket.id)
        activeUsers = activeUsers.filter((user) => user.id !== socket.id)

        if(user){
            socketServer.emit('activeUsers', activeUsers.filter((user) => user.id !== socket.id).map((user)=>user.username))
            socket.broadcast.emit('notification', `${user.username} left the room`)
        }
    });
})