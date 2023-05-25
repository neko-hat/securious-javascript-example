const input = require('readline-sync').question;

const sep_oper = /<<|>>>|>>|\+|\*|-|&|\||\/|\^/g;
const SEP_NUM = /\d+/g;

const calculator = {
    num1: 0,
    num2: 0,
    calc: (num1, operand, num2) => {
        switch(operand) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;    
            case "/":
                return num1*1.0 / num2;
            case "&":
                return num1 & num2;
            case "|":
                return num1 | num2;
            case "^":
                return num1 ^ num2;
            case "<<":
                return num1 << num2;
            case ">>":
                return num1 >> num2;
            case ">>>":
                return num1 >>> num2;
            default:
                console.log("Invalid operand!");
                break;
        }
        return "ERROR"
    }
};

let target = "";
for(;true; target = input("Input Calculation Formula (Input q to exit) : ")) {
    if(target === 'q' || target === 'Q') {
        break;
    }
    let nums = target.match(SEP_NUM);
    if (nums) {
    calculator.num1 = nums[0] * 1;
    calculator.num2 = nums[1] * 1;
    let operand = target.match(sep_oper)[0];
    calculator.operand = operand;
    let answer = target + ' = ' + calculator.calc(calculator.num1, calculator.operand, calculator.num2);
    console.log(answer);
    }
}

