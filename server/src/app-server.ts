import express, { Request, Response } from "express"
// import * as path from "path"
import CharacterCount from "./services/charCount.js"
import Average from "./services/avgLength.js"
import WordCount from "./services/wordCount.js"
import MostCommon from "./services/mostCommon"

import Main from "./main"

const PORT = 1000
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/express-server", (req: Request, res: Response) :void =>{
    res.send( { express: 'Express server connected to react' })
  })

app.post("/manipulation", (req, res) => {
    
    let stringAnalysis = Main(req.body.str)
    res.send(stringAnalysis)
})

app.post("/textAnalysis", (req: Request, res: Response): void => {
    console.log(req.body)
    // let stringAnalysis = Main((req.body.userInput))
    // res.send(stringAnalysis)
})

// app.get("/character/:words", (req, res) => {
//     res.send(JSON.stringify(CharacterCount(req.params.words)))
// })

// app.get("/average/:words", (req, res) => {
//     res.send(JSON.stringify(Average(req.params.words)))
// })

// app.get("/wordcount/:words", (req, res) => {
//     res.send(JSON.stringify(WordCount(req.params.words)))
// })

// app.get("/common/:words", (req, res) => {
//     res.send(JSON.stringify(MostCommon(req.params.words)))
// })

app.set("title", "String Manipulation")
app.set("view engine", "pug")
app.set("views", "./out/views")



app.listen(PORT,() => {
    console.log(`Server is Listening at http://localhost:${PORT}`)
})