const path = require('path')
const express = require('express')
const app = express();
const port = 12000;

const staticPath = path.join(__dirname, "../webpage2" )
// built in middleware
app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.send('Hello from the express server')
})
app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})