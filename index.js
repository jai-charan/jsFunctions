 // Map() function alternative [Squaring array elements]

const array= [1,2,3,4,5];
const squareArray=[];
for(let val=0;val<array.length;val++){
    squareArray.push(array[val]**2);
}
console.log(squareArray)

// Filter() function alternative [Filtering odd numbers out]

const mixedArray=[86,54,7,5,32,54,76,87,23]
let newArray=[];
for(let val=0;val<mixedArray.length;val++){
    if(mixedArray[val]%2==0) newArray.push(mixedArray[val]);
}
console.log(newArray);

// reduce() function alternative [Reducing array to a single string(value)]

const stringArray=['r','a','i','n','b','o','w'];
let reducedArray = '';
for(let val=0;val<stringArray.length;val++){
    reducedArray+=stringArray[val];
}
console.log(reducedArray);

//forEach() alternative [Printing elements using for loop]

const arrayElement=[86,54,7,5,32,54,76,87,23]
for(let i=0;i<arrayElement.length;i++){
    console.log(`Element ${arrayElement[i]} at index ${i}`);
}
 
