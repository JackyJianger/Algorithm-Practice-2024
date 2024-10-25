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
