// const person = {firstName:"Abc", lastName:"Xyz", age:25}; 
// let txt1 = "";
// for (let x in person){
//   txt1 += person[x] + " ";
//   console.log(x)
// }
// console.log(txt1+"\n\n")

// const numbers2 = [1, 5, 11, 7, 3];
// let num2 = 0;
// for (let x in numbers2) {
//   num2 += numbers2[x];
//   console.log(x,typeof(x))
// }
// console.log(num2+"\n\n")


// const numbers3 = [2, 4, 6, 8, 10];
// let num3 = 0;
// numbers3.forEach(myFunction);
// function myFunction(value, index, array) {
//     console.log(value,typeof(value), index,typeof(index), array)
//     num3 += value;
// }
// console.log(num3+"\n\n")

// const numbers4 =[1,3,5,7,9,11];
// let num4=0;
// for(let x of numbers4){
//     console.log(x,typeof(x))
//     num4+= x;
// }
// console.log(num4+"\n\n")

const numbers5 =[10,20,30,40];
let num5=0;
for(let x=0;x<numbers5.length;x++){
    console.log(x,typeof(x))
    num5+= numbers5[x];
}
console.log(num5)