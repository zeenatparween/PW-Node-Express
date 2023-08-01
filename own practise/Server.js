import app from "./app.js"

const PORT = process.env.PORT  || 5002;
app.get("/", (req,res) => {
    res.send("Hello! I am Connected")
})
const loded = async() =>{
    try {
       app.listen(PORT, ()=> {
        console.log(`${PORT} connected`);
       }) 
    } catch (error) {
        console.log(error)
    }
}
loded();