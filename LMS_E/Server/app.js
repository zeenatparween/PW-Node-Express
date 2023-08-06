import express from "express"
import cors from 'cors'
import cookieParser from'cookie-parser'
import morgan from 'morgan'
import userRoutes from './Routes/user.routes.js'
import errorMiddleware from './middleware/error.middleware.js'
const app = express()

app.use(express.json());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    Credential: true
}));

app.use(cookieParser());
app.use(morgan('dev'));

app.use('/ping', function(req, res) {
    res.send('<h1>/Pong </h1>')
})

// routes of 3 modules

app.use('/api/v1/user', userRoutes)
app.all('*', (req,res) => {
    res.status(400).send('OOPS!! 404 page not found')
});

app.use(errorMiddleware);
export default app;