 // Map() function alternative [Squaring array elements]

const arr= [1,2,3,4,5];
const squareArr=[];
for(let i=0;i<arr.length;i++){
    squareArr.push(arr[i]**2);
}
console.log(squareArr)

// Filter() function alternative [Filtering odd numbers out]

const mixedArr=[86,54,7,5,32,54,76,87,23]
let newArr=mixedArr.filter((x)=>{
    if(x%2 ==0) return x;
})
console.log(newArr);

// reduce() function alternative [Reducing array to a single string(value)]

const stringArr=['r','a','i','n','b','o','w'];
const reducedArr = stringArr.reduce((accumulator,x)=>{
    return accumulator+x;
},"")
console.log(reducedArr);

//forEach() alternative [Printing elements using for loop]

const arrEle=[86,54,7,5,32,54,76,87,23]
for(let i=0;i<arr.length;i++){
    console.log(`Element ${arrEle[i]} at index ${i}`);
}
 
