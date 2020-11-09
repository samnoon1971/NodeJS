var sum = require('./Operations/sum')
var subs = require('./Operations/subtract')
var mul = require('./Operations/multiply')
var div = require('./Operations/division')

var firstOperand = +process.argv[2]
var secondOperand = +process.argv[3]
var thirdOperand = +process.argv[4]

console.log("Sum, ");

sum(firstOperand, secondOperand);

console.log("Mul, ");
mul(secondOperand, thirdOperand);