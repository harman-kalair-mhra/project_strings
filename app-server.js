const express = require("express")

const PORT = 1000
const app = express()

app.get("/hello", (req, res) => {
    res.send("Hello World")
})



app.listen(PORT,() => {
    console.log(`Server is Listening on port: ${PORT}`)
})