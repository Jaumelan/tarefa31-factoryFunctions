const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//module import for router
const calculation = require ('./routes/calculation.js');
const funcionarios = require('./routes/funcionarios.js');

app.use('/calculation' , calculation);
app.use('/funcionarios', funcionarios);

app.listen(port, err => {
    if (err) {
        return console.log(`ERROR ${err}`);
    } else {
        console.log(`Listening at port ${port}`);
    }
})