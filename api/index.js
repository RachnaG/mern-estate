import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to successfully!!!")
}).catch((err) => {
    console.log(err)
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server is ruuning on port 3000!!`);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})