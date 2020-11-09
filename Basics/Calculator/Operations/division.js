function division(a, b) {
    if (b === 0) {
        console.log("Divide by zero error");
    }
    else {
        console.log(a + " / " + b + " = " + (a / b));
    }
}
module.exports = division;