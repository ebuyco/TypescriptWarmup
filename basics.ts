function add(n1: number, n2: number, showResult: boolean, phrase: string){
    // console.log(typeof number1);
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorect input!');
    // }
    // if(showResult){
    //     console.log(phrase + n1+n2);
    // }else{
    //     return n1 + n2;
    // }

    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result)
    } else {
        return result;
    }
   
}

// const number1 = 5;
// const number1 = 5;

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
// const resultPhrase = 'Result Phrase is: '
let resultPhrase = 'Result Phrase is : ';


 add(number1, number2, printResult, resultPhrase);
// const result = add(number1, number2, printResult);
// console.log(result);