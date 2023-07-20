const express = require("express");
const app = express();

app.get("/" , (req, res) => {
    res.send('Hello from the express')
});
app.get("/about", (req,res)=> {
    res.send('Hello from the about page')
})

app.listen(5000, () =>{
    console.log('listing the port at 5000')
})