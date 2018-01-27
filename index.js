// index.js
const express = require("express")
const app = express()

app.get("/hello", (req, res) => {
  console.log("hello from the other side!")
  res.send("Hello, " + req.query.name)
})

app.listen(3000)
console.log("server online!")