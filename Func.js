function greet() {
  console.log("Hello");
}
greet();
//Parameters
function sum(number1, number2) {
  console.log(number1 + number2);
}
//Function Call Arguments
sum("hello", "sum");
sum(9, 8);

function multiply(number1, number2) {
  //   console.log(number1 * number2);
  return number1 * number2;
}
let ans = multiply(4, 5);
console.log(ans);

const func1 = function () {
  console.log("Hello Doston");
};

func1();

//Arrow Function

let square = (num1, num2) => {
  console.log("Hello Bhaiyon");
  return num1 * num2;
};

let summ = (num1, num2) => num1 + num2;

const cube = (n) => n * n * n;

let res_cu = cube(6);
console.log(res_cu);

let res = square(4, 4);
console.log(res);

let res_sum = summ(4, 4);
console.log(res_sum);
