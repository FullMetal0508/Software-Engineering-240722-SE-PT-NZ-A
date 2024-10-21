const express = require("express")
const testRouter = express.Router()

testRouter.get("/", (req, res) => res.send ("Welcome to Server 2!!"))

testRouter.get("/Contact", (req,res) => res.send ("Please contact 111-1111-111"))

testRouter.get("/About", (req,res) => res.send ("This is a backend application developed for demonstration purposes"))

module.export = testRouter

