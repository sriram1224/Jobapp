const express = require('express');

const jobroutes = require('./routes/job.js');

const app = express();
app.use(express.json());

app.use(jobroutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});