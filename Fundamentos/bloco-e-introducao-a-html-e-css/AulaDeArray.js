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
//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    console.log(numbers[Percorrer]);
}
//Exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Resultado = null;
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    Resultado = Resultado + numbers[Percorrer];
}
    console.log(Resultado);
//Exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let Resultado = null;
let Media = null;
for (let Percorrer=0; Percorrer < numbers.length; Percorrer+=1){
    Resultado = Resultado + numbers[Percorrer];
}
    Media = Resultado / numbers.length;
    console.log(Media);
//Exercicio 4
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
//Exercicio 5
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
//Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valoresImpares =0;
for (let index = 0; index < numbers.length; index+=1){
    if (numbers[index]%2!=0) {
        valoresImpares+=1
    }
}
console.log(valoresImpares);
//Exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoMenor = 99999;
for (let index = 0; index < numbers.length; index+=1) {
    for (let comparacao = 0; comparacao < numbers.length; comparacao+=1)
    if (numbers[index]<numbers[comparacao]) {
        if (numbers[index]<novoMenor) {
            novoMenor=numbers[index];
        }
    }
}
console.log(novoMenor);