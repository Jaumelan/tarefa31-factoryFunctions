module.exports = function () {
    return {
        _operand1 : 0,
        _operand2 : 0,
        _operation : "",
        setOperand1 : function(_Operand1) {
            if (this._operand1 === 0) {
                this._operand1 = _Operand1;
            } else {
                this._operand1 = this._operand1*10 + _Operand1;
            }
            
        },
        setOperand2 : function(_Operand2) {
            if (this._operand2 === 0) {
                this._operand2 = _Operand2;
            } else {
                this._operand2 = this._operand2*10 + _Operand2;
            }
            
        },

        setOperation: function(_newOperation) {
            let allowedOPerations = ["+", "-", "/", "*"];
            if( allowedOPerations.includes(_newOperation) ) {
                this._operation = _newOperation;
                return true;
            }
        },

        getOperand1: function() {
            return this._operand1;
        },

        getOperand2: function() {
            return this._operand2;
        },

        getOperation: function() {
            return this._operation;
        },
    
        getResult : function() {
            let result 
            if (this._operation === "+") {
                result = this._operand1 + this._operand2;
            } else if (this._operation === "-") {
                result = this._operand1 - this._operand2;
            } else if (this._operation === "*") {
                result = this._operand1 * this._operand2;
            } else {
                result = this._operand1 / this._operand2;
            }
    
            return result;
        },
    
        clearCalculator: function() {
            this._operand1 = 0;
            this._operand2 = 0;
            this._operation = "";
        }
    }
}