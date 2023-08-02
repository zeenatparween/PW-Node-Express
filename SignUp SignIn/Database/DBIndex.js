import mongoose from "mongoose"

const Mongodb_uri = process.env.MONGODB_URL || "mongodb://localhost:27017/SigupDB";

 const databaseConnect = () => {
    mongoose
    .connect(Mongodb_uri)
    .then((conn) => console.log(`connected to DB: ${conn.connection.host}`))
    .catch((err) => console.log(err.message))
 }

 module.exports = databaseConnect; 
 