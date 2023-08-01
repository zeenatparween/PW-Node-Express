import mongoose from "mongoose"

const  Mongodb_uri = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";
const ConnectDB = () => {
     console.log("yes I am Connected")
    return mongoose.connect(Mongodb_uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
};

module.exports = ConnectDB;

export default ConnectDataB.js