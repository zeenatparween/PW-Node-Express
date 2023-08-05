import  express from "express"
const app = express();

app.get("/", (req,res) => {
    res.send("Hello World")
})
app.get("/Instagram", (req, res) => {
    res.send('<h1>You have visited Instagram</h1>')
})

export default app;