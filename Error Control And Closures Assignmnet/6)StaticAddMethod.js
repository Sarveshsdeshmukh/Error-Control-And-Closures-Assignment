// Using Static Method to Add Two Numbers with Calculator Class
// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.

class Calculator{
    num1;
    num2;
    static addtwoNumber(num1,num2){
        return num1+num2;
    }
}

const sum = Calculator.addtwoNumber(5295492945, 2945849572953);
console.log(sum);
