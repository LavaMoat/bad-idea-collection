const express = require("express")
const expressBackdoor = require("./index.js")

const app = express();

app.use(expressBackdoor())

app.get("/", (req, res)=>{
  res.send("Hello Chrome User!")
})

app.listen(8080)
console.log('listening on 8080')