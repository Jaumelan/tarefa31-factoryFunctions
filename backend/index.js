const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//module import for router
const calculation = require ('./routes/calculation.js');

app.use('/calculation' , calculation);


app.listen(port, err => {
    if (err) {
        return console.log(`ERROR ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})