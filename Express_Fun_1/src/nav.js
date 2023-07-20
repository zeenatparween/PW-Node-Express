const express = require('express');
const app = express();
app.get("/", (req, res) => {
    res.send('Welcome to my home page');
});
app.get('/about', (req, res) => {
    res.send('Welcome to my about page');
});
app.get("/contact", (req, res) => {
    res.status(200).send('Welcome to my contact page');
});
app.get("/temp", (req, res) => {
    res.send('Welcome to my temp page');
})

app.get("/multiple", (req, res) => {
    res.write("<h1> Welcome to multiple page</h1>");
    res.write("<h1> Welcome to send Line</h1>");
    res.write('Welcome to third line');
    res.send();
})

app.listen(2000, () => {
    console.log('Listening the port at 7000')
})