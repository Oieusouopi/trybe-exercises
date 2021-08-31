//Exercicio De FOR/IN e Objetos em JavaSCript:
// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log("boas-vindas, " + info.personagem);
//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info.recorrente='Sim'
  console.log(info.recorrente);
  //3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  for (let Tudo in info){
      console.log(Tudo);
  }
  //4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
  let info = {
      personagem :'Margarida',
      origem:'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente:'sim',
  };
  for (let valores in info){
      console.log(info[valores])
  }
  //5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
  // 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'.
  //  Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
  let info = {
    personagem :'Margarida',
    origem:'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente:'sim',
  };
  let info2 = {
      personagem:'Tio Patinhas',
      origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota:"O último MacPatinhas",
      recorrente:"sim",
  };
    for(let tudo in info){
    if (tudo === 'recorrente' && info[tudo] === 'sim' &&  info2[tudo]=== 'sim'){
        console.log('ambos sao recorrentes');
    }
    else{
        console.log(info[tudo] + ' e ' + info2[tudo]);
    }
}