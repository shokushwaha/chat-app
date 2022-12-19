
const express = require("express")
const { Server } = require("socket.io");
var http = require('http');
const cors = require("cors")
const app = express()
app.use(cors())

var server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => { res.send("Server is up and running...."); res.end() })

io.on("connection", (socket) => {
    console.log(socket.id)

    socket.on("joinRoom", room => {
        socket.join(room)
    })

    socket.on("newMessage", ({ newMessage, room }) => {
        io.in(room).emit("getLatestMessage", newMessage)
    })

});

const port = 5000

server.listen(port, console.log(`App started at port ${port}`)) 
