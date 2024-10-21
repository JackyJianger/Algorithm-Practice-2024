/*for( let i=0; i < 7; i++){
console.log(i);
}
let x = [1,2,3,4];
x.forEach((i) => console.log(i));

let HP=100
while (HP>0) {
    console.log("Select fight command");
    console.log("randomly slect enemy command");
    console.log("Subtract health");
}*/
function factorLister(number) {
for( let i=0; i < number; i++){
    if (number % i === 0) {
        console.log(i)
    }
    }
}
factorLister(15)

function factorial(n){
    if (n<=0){
        return "negative number or 0"
    }
    let result = 1;
    for(let i = 1; i <=n; i++){
        result*=i;  
    }
    return result;
}
console.log(factorial(-6));
factorLister(9);