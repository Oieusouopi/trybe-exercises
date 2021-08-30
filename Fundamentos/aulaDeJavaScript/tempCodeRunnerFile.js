function numbers (array){
    let indiceMaior=0;
    for(let index=0 ; index<array.length ; index=+1){
        if(array[indiceMaior]<array[index]){
            indiceMaior = index;
        }
    }
    return indiceMaior;
}
console.log(numbers([2, 3, 6, 7, 10, 1]));