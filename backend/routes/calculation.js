const express = require('express');
const router = express.Router();
const calculator = require('../components/calculator');
let stage = false;
const cal1 = calculator();

router.use(express.json());

function isNumber(parameter) {
    return /^[0-9]{1}$/.test(parameter)
}

router.get( '/:oper' , (req,res) => {
    let operand = req.params;
    console.log(operand);
    
    if (isNumber(operand.oper)) {
        if (!stage) {
            cal1.setOperand1(Number(operand.oper));
            res.send( (cal1.getOperand1().toString()) );
        } else {
            cal1.setOperand2(Number(operand.oper));
            res.send( (cal1.getOperand2().toString()) );
        }
    } else {
        if (operand.oper === "=") {
            res.send( (cal1.getResult().toString()) );
            stage = false;
            cal1.clearCalculator();
        } else {
            cal1.setOperation(operand.oper);
            cal1.getOperation();
            res.status(200)
            //res.json( cal1.getOperation() )
            stage = true;
        }
    }

})

module.exports = router;