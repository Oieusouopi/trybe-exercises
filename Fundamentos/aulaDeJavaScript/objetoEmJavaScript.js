//Aula de objeto Java
//Exercicio de Fixação 1:
let player =  {
    name:"Marta",
    lastName:"Silva",
    age: 34,
    medals: {
        golden:2,
        silver:3,
    }
};
console.log(player);
//Exercicio de Fixação 2
let player =  {
    name:"Marta",
    lastName:"Silva",
    age: 34,
    medals: {
        golden:2,
        silver:3,
    }
};
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade")
//Exercicio de fixação 3
let player =  {
    name:"Marta",
    lastName:"Silva",
    age: 34,
    medals: {
        golden:2,
        silver:3,
    },
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
};
console.log(player)
//Exercicio de fixação 4
let player =  {
    name:"Marta",
    lastName:"Silva",
    age: 34,
    medals: {
        golden:2,
        silver:3,
    },
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
};
console.log(player.bestInTheWorld + " A jogadora foi melhor do mundo 6 vezes");
//Exercicio de Fixação 5
let player =  {
    name:"Marta",
    lastName:"Silva",
    age: 34,
    medals: {
        golden:2,
        silver:3,
    },
    bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
};
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");