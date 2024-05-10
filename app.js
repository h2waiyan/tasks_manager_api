const express = require('express');
const app = express();
const tasks = require('./routes/task');
const connectDb = require('./db/connect');
require('dotenv').config()
//Middlwares
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () => {
    try {
        await connectDb(process.env.mongo_url);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            }
        );
    } catch (error) {
        console.log(error);
    }
}

start();
