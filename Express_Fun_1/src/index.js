const path = require('path')
const express = require('express')
const app = express();
const port = 9000;

const staticPath = path.join(__dirname, "../webpage" )
// built in middleware
app.use(express.static(staticPath));


app.get('/', (req, res) => {
    res.send('Hello from the express server')
})
app.listen(port, () => {
    console.log(`Listening to the port ${port}`)
})