const express = require('express');
const router = express.Router();
const fs = require('fs');
const funcionarios = require('../components/funcionarios');
const birthdates = require('../components/birthday');
const sectorFields = require('../components/sectors');
const onlyPhones = require('../components/ramais');



router.use(express.json());

router.get('/aniversariantes', (req,res) => {
    console.log(req.query);
    const month = req.query.birthMonth;
    res.send(birthdates(month));
})
.get('/funcionarios', (req,res) => {
    const sector = req.query.sector;
    res.send( funcionarios(sector) )
})
.get('/ramais', (req, res) => res.send( onlyPhones()))
.post('/adicionar', (req,res) => {
    let data = req.body;
    console.log(data);
    let before = JSON.parse( fs.readFileSync("../database.json") );
    data.id = before.length + 1;
    before.push(data);

    fs.writeFileSync("database.json", JSON.stringify(before))
    res.json(data);
})
.get('/fields', (req, res) => res.send( sectorFields() ) )

module.exports = router;