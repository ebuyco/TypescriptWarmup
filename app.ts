// unknown types
// never types

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number ): never{
        throw {
           message: message,
           errorCode: code 
        };
        // while (true){} // create infinite loop
}

const result = generateError('An Error occur', 500);
console.log(result);