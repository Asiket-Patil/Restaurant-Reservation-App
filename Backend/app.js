import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/db.coonection.js'; 
import { errorMiddleware } from './error/error.js';
import ReservationRouter from './routes/reservationRoute.js';

dotenv.config({ path: './config/config.env' });

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true
}));

dbConnection();


app.use('/api/reservation', ReservationRouter);


app.use(errorMiddleware);

export default app;
