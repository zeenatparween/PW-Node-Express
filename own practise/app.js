
 import { config } from 'dotenv'
 config();
const express = require("express")
const app = express()

import connectDB from "./Database/ConnectDataB.js"
import Student from './Stud.JSON.js'
import Student_Info_Schema  from './Models/Schema.js'
const DATABASE_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";
const start = async() => {
    try {
        await connectDB(DATABASE_URL);
        await Student_Info_Schema.create(Student.JSON);
        console.log("Success")
       
        
    } catch (error) {
       console.log(error)
    }
};

start();

export default app.js




