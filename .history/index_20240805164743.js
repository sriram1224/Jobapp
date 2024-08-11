const express = require('express');

const jobroutes = require('./routes/job.js');
const { mongo } = require('mongoose');

const app = express();
app.use(express.json());
mongoose
    .connect("mongodb://localhost:27017/jobapp"
        .then(() => console.log("Connection with Database established Successfully"));
        .catch ((err) => console.log(err));
)
app.use(jobroutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
