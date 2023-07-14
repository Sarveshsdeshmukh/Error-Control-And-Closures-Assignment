// 2. Building Robust Functions in JavaScript
// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.


function getPerson(obj){
    try{
        if (typeof obj === 'object' && obj !== null && 'name' in obj && 'age' in obj) {
        return `The name :${obj.name} , Age : ${obj.age}`;
        }
    }catch(error){
       console.log("Invalid Parameter Type");
       return error;
    }
}

let object = {
    name : "Sarvesh",
    age : 34,
};
let result = getPerson(object);
console.log(result);