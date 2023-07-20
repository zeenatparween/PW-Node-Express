const express = require('express');
const app = express();

app.get("/about" , (req, res) => {
    res.write("<h1>Welcome to first line</h1>");
    res.write("<h1>Welcome to second line</h1>");
    res.send();
});
app.get("/temp", (req, res) => {
    res.send([{
        id : 1,
        name: "Vinod",
        roll: 23,
    },
    {
        id : 1,
        name: "Vinod",
        roll: 23,
    },
    {
        id : 1,
        name: "Vinod",
        roll: 23,
    },
]);
 
})
app.get("/contact" , (req , res) => {
    res.json( [{
        id: 2,
        name: "shewan",
    
     },
     {
        id: 2,
        name: "shewan",
        
     }])
})


app.listen(3000, () => {
    console.log("Listening the port at 3000")
})
