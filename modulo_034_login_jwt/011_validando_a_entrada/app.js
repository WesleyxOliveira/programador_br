require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routes/user.router');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRouter');

mongoose.connect(process.env.MONGO_CONNECTION_URL)
.then(() => console.log('Mongo connected!'))
.catch(error => console.log(error.message));

app.use('/user', express.json(), userRouter);
app.use('/admin', express.json(), adminRouter);

app.listen(process.env.PORT, ()=> {console.log('Server Running.')});