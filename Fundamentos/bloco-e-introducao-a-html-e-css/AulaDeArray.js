let menu = ["home", "serviços", "Portifólio","links"];
let indexOfPortfolio = menu.indexOf("Portifólio") ;
console.log(indexOfPortfolio);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato");
console.log(menu);

let grocerylist = ["Arroz", "Feijão", "Alface", "Melancia"];
for (let index = 0; index < index.length; index+=1) {
    console.log(grocerylist[index]);
}


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let index of names){
    console.log(index);
}
//Exercicios Array e Loop For;
/*Exercicio 1
Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    console.log(numbers[Percorrer]);
}
/*Exercicio 2
Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Resultado = null;
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    Resultado = Resultado + numbers[Percorrer];
}
    console.log(Resultado);
/*Exercicio 3
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Resultado = null;
let Media = null;
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    Resultado = Resultado + numbers[Percorrer];
}
    Media = Resultado / numbers.length;
    console.log(Media);
/*Exercicio 4
Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Resultado = null;
let Media = null;
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    Resultado = Resultado + numbers[Percorrer];
}
    Media = Resultado / numbers.length;
if (Media > 20) {
    console.log("Valor maior que 20")
}
else{
    console.log("Valor menor que 20");
}
/*Exercicio 5
Utilizando for , descubra qual o maior valor contido no array e imprima-o;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoMaior = [];
for (let index = 0; index < numbers.length; index+=1) {
    for (let comparacao = 0; comparacao < numbers.length; comparacao+=1)
    if (numbers[index]>numbers[comparacao]) {
        if (numbers[index]>novoMaior) {
            novoMaior=numbers[index];
        }
    }
}
console.log(novoMaior);
/*Exercicio 6
Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares =0;
for (let index = 0; index < numbers.length; index+=1){
    if (numbers[index]%2!=0) {
         valoresImpares+=1
    }
    else if(valoresImpares=0)
    console.log("nenhum valor ímpar encontrado")
}
console.log(valoresImpares);
/*Exercicio 7
Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoMenor = 9999999;
for (let index = 0; index < numbers.length; index+=1) {
    for (let comparacao = 0; comparacao < numbers.length; comparacao+=1)
    if (numbers[index]<numbers[comparacao]) {
        if (numbers[index]<novoMenor) {
            novoMenor=numbers[index];
        }
    }
}
console.log(novoMenor);
//Exercicio 8/9
//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers= [];
let numbersDividido =[]
for (let index = 1; index <=25 ; index+=1){
    numbers.push(index)
    numbersDividido.push(index/2)
}
console.log(numbers);
console.log(numbersDividido);