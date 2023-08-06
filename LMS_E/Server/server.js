import { config } from'dotenv'
config();
import app from './app.js'
import connectToDb  from './Config/DBconnection.js';
const PORT = process.env.PORT || 5008;

 app.listen(PORT,  async() => {
     console.log(`App is running at http:localhost:${PORT}`)
     await connectToDb();
 });

