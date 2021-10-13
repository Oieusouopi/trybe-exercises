const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  const addTurno = (obj,key,value) => { //Exercicio 1
      obj[key] = value;
  }
  addTurno(lesson2,"turno","noite");

  const listarKeys = (obj) =>  //Exercicio 2
      Object.keys(obj);
      console.log(listarKeys(lesson1));
  
    const tamanhoObj = (obj) =>   //Exercicio 3
      Object.keys(obj).length
      console.log(tamanhoObj(lesson1));
      
      const valueObj = (obj) => //Exercicio 4
      Object.values(obj)
      console.log(valueObj(lesson1));
      
    
      const allLessons = Object.assign({},{lesson1,lesson2,lesson3});
      console.log(allLessons)
      