import app from './app.js'
const mongoose = require('mongoose');
const port = 30036

// database Connection - mongodb
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// Async await IIFE (Interview Point topic)
// PROFESIONAL APPROCH FOR CONNECTING DB
( async() => {
    try {
        // db connection
        await mongoose.connect('dbstring')
        console.log("DB connected successfully");

        // for show app Error when database connected
        app.on("error", (err) => {
            console.log("Error:", err)
            throw err
        })
        const onListening = () => {
            console.log(`Listening on port ${port}`)
        }
        app.listen(port, onListening)

        
    } catch (error) {
        console.error('Error : ', err)
        throw err
    }
})()

console.log('Hello I am Ready')





// 1) Database Connection may fail (so we used trycath for handling failure)
// 2) Database is always in another Continent (so we used asynawait if time taken to load )