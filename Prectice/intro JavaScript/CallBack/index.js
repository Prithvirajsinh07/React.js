const callback = (a , b) => {
console.log(b(a));

}
const sum = (a) => {
    return a + 2;
}

callback(10 , sum);