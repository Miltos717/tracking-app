const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// ewew
require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;
// ewewew
app.use(cors());
app.use(express.json());// ewewewe

const uri = "mongodb://localhost:27011"; 
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
