const readline = require('readline-sync')
const input = readline.question

let calculator = {
    target: "",
    calc: function() {
        return eval(target);
    }
};

let target = "";
for(;true; target=input("Input Calculation Formula (Input q to exit) : ")) {
    if(target === 'q' || target === 'Q') {
        break;
    }
    calculator.target = target;
    let tmp = calculator.calc();
    if(tmp !== undefined) {
    let answer = target + " = " + tmp;
    console.log(answer);
    }
}