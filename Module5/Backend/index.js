const express = require("express")
const testRouter = require("./routes/mytestRoutes")

const app = express()

const server2 = express()

const port = 3000

const port2 = 3001

app.use("/", express.static("public"))

app.use("/", testRouter)

app.listen(port, () => console.log("Server has started and is listening on port" + port))

server2.listen(port2, () => console.log("Server 2 has started and is listening on port" + port2))