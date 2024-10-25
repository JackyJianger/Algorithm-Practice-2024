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
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
}

function factorial(n) {
  if (n <= 0) {
    return "negative number or 0";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function occupyParking(spaces, yesterday, today) {
  let occupyAnswer = 0;
  for (let i = 0; i <= spaces; i++) {
    if (today[i] === "C" && yesterday[i] === "C") {
      occupyAnswer += 1;
    }
  }
  console.log(occupyAnswer);
}

function binaryToDecimal(number) {
  let length = number.toString().length - 1;
  let reverse = number.toString.split("").reverse().join("");
  let decimalAnswer = 0;
  for (i = 0; i <= length; i++) {
    if (reverse[i] === "1") {
      decimalAnswer += 2 ** i;
    }
  }
  console.log(decimalAnswer);
}
binaryToDecimal(1101);
