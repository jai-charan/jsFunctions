function Map(array){
const resultArray=[];
for(let val=0;val<array.length;val++){
    resultArray.push(array[val]**2);
}
console.log(resultArray)
}

function Filter(array){
let resultArray=[];
for(let val=0;val<array.length;val++){
    if(array[val]%2==0) 
    resultArray.push(array[val]);
}
console.log(resultArray);
}

function Reduce(array){
let resultValue = 0;
for(let val=0;val<array.length;val++){
    resultValue+=array[val];
}
console.log(resultValue);
}

function ForEach(array){
for(let i=0;i<array.length;i++){
    console.log(`Element ${array[i]} at index ${i}`);
}
}

const array= [1,5,8,5,2,9,7,14];
Map(array);
Filter(array);
Reduce(array);
ForEach(array)