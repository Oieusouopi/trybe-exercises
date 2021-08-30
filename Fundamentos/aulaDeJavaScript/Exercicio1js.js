//Exercicio 1
const a = 6;
const b = 8;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
//Exercicio 2
const a = 6;
const b = 8;
if(a > b) {
    console.log(a);
}
else{
    console.log(b);
}
//Exercicio 3
const a = 6;
const b = 4;
const c = 8;
if(a > b && a > c){
    console.log(a);
}
else if(b > a && b > c){
    console.log(b);
}
else{
    console.log(c);
}
//Exercicio 4
const a = 0;
if(a > 0){
    console.log("positive");
}
else if(a < 0){
    console.log("negative");
}
else{
    console.log("zero");
}
//Exercicio 5
const a = 60;
const b = 60;
const c = 65;
if (a < 0 || b < 0 || c < 0){
    console.log("error");
}
else if (a+b+c==180){
    console.log("true");
}
else if (a+b+c<180 || a+b+c>180){
    console.log("false");
}
//Exercicio 6
//Exercicio 7
let nota = 100;
if (nota >=90 && nota <= 100) {
    console.log("A");
}
else if (nota >=80 && nota < 90){
    console.log("B");
}
else if (nota >=70 && nota < 80){
    console.log("C");
}
else if (nota >=60 && nota < 70){
    console.log("D");
}
else if (nota >=50 && nota < 60) {
    console.log("E");
}
else if (nota > 0 && nota < 50){
    console.log("F");
}
else{
    console.log("error");
}
//exercicio 8
const a = 7;
const b = 5;
const c = 5;
if (a%2 || b%2 || c%2) {
    console.log("true");
}
else{
    console.log("false");
}