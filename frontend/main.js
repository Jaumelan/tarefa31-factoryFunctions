const express = require("express");
const app = express();
const port = 3003;

app.use('/calculadora', express.static('./public/calculadora'));
app.use('/funcionarios', express.static('./public/funcionarios'));

app.listen(port, () => {console.log(`Listening at port ${port}`)});
