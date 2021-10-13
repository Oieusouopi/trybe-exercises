function user(nome){
    let objeto = {
      nomeCompleto:nome,
      email:`${nome}@trybe.com`,
    }
    return objeto;
};
const newEmployees = (user) => {
    const employees = {
      id1: user('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: user('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: user('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
console.log(newEmployees(user));