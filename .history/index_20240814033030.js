const express = require('express');

const jobroutes = require('./routes/job.js');
const { mongoose } = require('mongoose');

const app = express();
app.use(express.json());
mongoose
    .connect(process.env.DB_CONNECTION_URL)
        .then(() => console.log("Connection with Database established Successfully"))
        .catch((err) => console.log("error coneting with database",err));
app.use(jobroutes);
app.listen(10000, () => {
    console.log('Server is running on port 3000');
});
