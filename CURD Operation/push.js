//push() example

const animals=['pigs','goats','sheep'];
console.push('chicken');
console.log(animals);

// example2

const animals=['pigs','goats','sheep'];
const count=animals.push['chicken'];
console.log(animals);
console.log(count);



// unshif() example

const animals=['pigs','goats','sheep'];
const count=animals.unshif['chicken'];
console.log(count);
console.log(animals);


//example 2
const myNumbers=[1,2,3,4,5];
myNumbers.unshif[4,5];
console.log(myNumbers);




// Pop() example
const plants=['broccole','cauleflower','kale','tomata','cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);


//shift() example
const plants=['broccole','cauleflower','kale','tomata','cabbage'];
console.log(plants);
console.log(plants.shift());
console.log(plants);




//map() and reduce method

// using Map()

const array1=[1,4,9,16,25];
let nerArr=array1.map((curElem,index,arr)=>{
    return curElem>9;
})
console.log(array1);
console.log(newArr);



//using reduce()
let arr[5,6,2];
let sum=arr.reduce((accumulator,curElem,index,arr)=>{
    return accumulator +=curElem;

})
console.log(sum);