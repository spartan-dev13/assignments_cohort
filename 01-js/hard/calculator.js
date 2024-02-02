/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
/*
class Calculator {
  constructor(result,exp){
    this.result = result || 0;
    this.exp=exp ||"";
  }
  add(num) {
    this.result += num;
  }
  subtract(num){
    this.result -= num;
  }
  multiply(num){
    this.result *= num;
  }
  divide(num){
    if (num===0){
      throw new Error("Division by zero is not allowed");
    }
    else{
      this.result/=num;
    }
  }
  clear(){
    this.result = 0;
  }
  getResult() { 
    return this.result;
  }
  calculate(str){
    clean_str=str.replace(/[" "]/g, "")
    while(i < clean_str.length){
        if(clean_str[i] == '+'){this.add(Number(str[i+1]))}
        else if(clean_str[i] == '-'){this.subtract(Number(clean_str[i+1]))}
        else if(clean_str[i] == '*'){this.multiply(Number(clean_str[i+1]))}
        else if(clean_str[i] == '/'){this.divide(Number(clean_str[i+1]))}
        else if(clean_str[i] == '('){
          let  j=i+1;
          let tempStr="";
          tempstr=clean_str.substring(j,clean_str.indexOf(')',j))
          this.calculate(tempStr);
        }else{
            this.exp+=clean_str[i];
        }
      i++
    }
    this.exp=""
  }
}*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ''); // Remove spaces
    const validCharsRegex = /^[\d+\-*/().]+$/; // Valid characters are digits, +, -, *, /, (, and )
    if (!validCharsRegex.test(sanitizedExpression)) {
      throw new Error("Invalid characters in the expression");
    }
    const operation = new Function(`return ${sanitizedExpression}`);
    try {
      this.result = operation();
    } catch (error) {
      throw new Error("Invalid expression");
    }
    if (!isFinite(this.result)) {
      throw new Error("Invalid expression: division by zero");
    }
  }
}

// Example usage:
const calculator = new Calculator();
calculator.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log(calculator.getResult()); // Output: 24

module.exports = Calculator;

