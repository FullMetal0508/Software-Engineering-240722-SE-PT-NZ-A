const express = require("express")

const server1 = express()

const server2 = express()

const port = 3000

const port2 = 3001

server1.get("/", (req, res) => res.send ("Welcomes to my backend lol"))

server2.use("/", express.static("public"))

server1.get("/Contact", (req,res) => res.send ("Please contact 111-1111-111"))

server1.get("/About", (req,res) => res.send ("This is a backend application developed for demonstration purposes"))

server1.listen(port, () => console.log("Server has started and is listening on port" + port))

server2.listen(port2, () => console.log("Server 2 has started and is listening on port" + port2))