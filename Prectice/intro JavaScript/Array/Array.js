const arr = [5 , 10 , 15 , 20 , 25];
// const[num1 , num2 , num3  , num4 , num5 , num6] = arr;
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(num5);
// console.log(num6);
// const arr2 =arr;


// console.log(arr == arr2);
console.log(arr);

const mapfun = arr.map((element) => {
 return element * 2 + 100
});

console.log(mapfun);

const filterFun = arr.filter ((element) => {
return element % 2 !== 0 ; 
})
console.log(filterFun);

const reduceFun = arr.reduce ((element , acc) => {
    return  acc * element  ;
} , 1)

console.log(reduceFun);






