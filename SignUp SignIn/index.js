import { config } from "dotenv";
config();

import app from './app.js'
const PORT = process.env.PORT || 5004;

app.listen(PORT, () =>{
    console.log(`Server is listening at http://localhost:${PORT}`)
});