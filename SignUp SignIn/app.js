import express from 'express'
const app = express();
import router from "./Router/RoutrIndex.js"


import databaseConnect from "./Database/DBIndex.js"

databaseConnect();
app.use(express.json());
app.use('/api/auth/', router );

app.use("/", (req, res) => {
    res.status(200).json({
         data: "JWTauth server."
    });
});


export default app.js
