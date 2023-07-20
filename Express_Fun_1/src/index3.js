const path = require('path')
const express = require('express')
const app = express();
const port = 11000;

const staticPath = path.join(__dirname, "../webpage2" )
// built in middleware
app.use(express.static(staticPath));

 app.set('view engine', 'hbs')

 app.get('/', (req, res) => {
    res.render('index');
 })
app.get('/', (req, res) => {
    res.send('Hello from the express server')
})
app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})