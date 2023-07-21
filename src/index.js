import app from './app.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const port = 3000;
 const mongoDB_url = "mongodb://localhost:27017/User"

 (async () => {
    try {
        await mongoose.connect( mongoDB_url);
        console.log("DB connected Successfully");

        app.on('error', (err) => {
            console.log('ERROR: ', err);
            throw err
        })
        const onListening = () => {
            console.log(`Listening on port ${port}`)
        }

        app.listen (port, onListening);
        
    } catch (error) {
        console.log("Error: " ,error);
        throw error
    }
 })()