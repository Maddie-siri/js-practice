function add(a,b){
    return a+b;
}
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
function divide (a,b =1){
    if(b===0){
        return"error";
    }return a/b;
} 
function calculator(a,b, operation){
    switch (operation){
        case "add":
            return add(a,b);
            case "subtract":
                return subtract(a,b);
                case "multiply" :
                    return multiply(a,b);
                    case "divide" :
                    return divide(a,b);
                    default:
                        return "unknown operation";
    }
}
console.log(calculator(5,3,"add"));
console.log(calculator(5,3,"subtract"));
console.log(calculator(5,3,"multiply"));
console.log(calculator(5,3,"divide"));
console.log(calculator(5,3,"power"));