import express from "express"
import CharacterCount from "./services/charCount.js"
import Average from "./services/avgLength.js"
import WordCount from "./services/wordCount.js"
import MostCommon from "./services/mostCommon"

const PORT = 1000
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/character/:words", (req, res) => {
    res.send(JSON.stringify(CharacterCount(req.params.words)))
})

app.get("/average/:words", (req, res) => {
    res.send(JSON.stringify(Average(req.params.words)))
})

app.get("/wordcount/:words", (req, res) => {
    res.send(JSON.stringify(WordCount(req.params.words)))
})

app.get("/common/:words", (req, res) => {
    res.send(JSON.stringify(MostCommon(req.params.words)))
})



app.listen(PORT,() => {
    console.log(`Server is Listening at http://localhost:${PORT}`)
})