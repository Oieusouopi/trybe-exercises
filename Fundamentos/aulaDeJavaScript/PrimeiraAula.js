//Inicio
let myName = "Rafael";
let birthCity = "Belo_Horizonte";
const birthYear = 2001;

console.log(myName);
console.log(birthCity);
console.log(birthYear);

//tipos primitivos
let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

//algumas operações
const base = 5;
let height = 8;
const area = base*height;
const perimeter = 2*base+2*height

console.log(area);
console.log(perimeter);

//if e else

const nota = 85;
if (nota > 80) {
    console.log("Parabens,você foi aprovada(o)");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovada(o)");
}

//Operador AND
const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
const conditionOne = true;
const conditionTwo = true;

console.log(conditionOne && conditionTwo);

const currentHour = 22;
let message = null ;
if (currentHour >= 22) {
    message ="Nao deveriamos comer nada,é hora de dormir"
}
else if(currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite,vamos jantar :D";
}
else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
}
else {
    message = "hmm,cheiro de café recém passado";
}
    console.log(message) ;

//Operador OR
const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}
//operador NOT
console.log(!(2 + 2) === 4);    