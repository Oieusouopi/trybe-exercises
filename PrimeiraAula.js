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
