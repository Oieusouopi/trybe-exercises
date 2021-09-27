//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
function VerificarPalindrome (word){
let reverse = word.split("").reverse().join("")
if (reverse === word){
    return true;
}
else{
    return false;
}
}
console.log(VerificarPalindrome('arara'));
console.log(VerificarPalindrome('desenvolvimento'));
// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function numbers(array){
    let indiceMaior=0;
    for (let index=0 ; index<array.length ; index+=1){
        if(array[indiceMaior]<array[index]){
            indiceMaior = index;
        }
    }
    return indiceMaior;
}
console.log(numbers([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function numbers(array){
    let indiceMenor=0;
    for(let index in array){
        if(array[indiceMenor]>array[index]){
        indiceMenor = index;
    }
}
return indiceMenor;
}
console.log(numbers([2, 4, 6, 7, 10, 0, -3]));