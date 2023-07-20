const path = require('path')
const express = require('express');
const app = express();
 
const staticPath = path.join(__dirname, "../public"); 

app.use(express.static(staticPath));


app.get('/about', (req, res) => {
    res.send('hello')
});

app.listen(4000, ()=> {
    console.log('listening the port at 4000')
})