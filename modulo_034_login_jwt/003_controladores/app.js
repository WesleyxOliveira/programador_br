require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/user.router');

app.use('/user', userRouter);

app.listen(process.env.PORT, ()=> {console.log('Server Running.')});