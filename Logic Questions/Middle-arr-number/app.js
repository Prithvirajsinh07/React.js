let arr = [1 , 6 , 5, 4 , 10, 9 , 8 , 0 ,7];
let length = arr.length;

function middleIndex () {
    arr.sort((a , b)=> a - b);
   let index = Math.floor(length / 2)
    console.log(arr[index]);
    
    console.log(arr);
}

middleIndex();