const arr = [2, 3, 4, "Dhawal", 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr.at(-1));
const newarr = arr;
console.log(newarr);
console.log(arr == newarr);
console.log(typeof arr);
const new1 = structuredClone(arr);
console.log(arr == new1);

arr.push(20); //adds element from front
arr.pop(); //deletes element from end
console.log(arr);

arr.unshift(1); //adds element from front
console.log(arr);
arr.unshift(0);
console.log(arr);

arr.shift(); //delete element from front
console.log(arr);

delete arr[0]; //a hole will be created at that place
console.log(arr);

console.log(arr.indexOf("Dhawal"));
console.log(arr.lastIndexOf("Dhawal"));

console.log(arr.includes(4));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.slice(0, 3));
console.log(array.splice(0, 2)); //splice original array mein change kar sakta hain
array.splice(2, 3, "money", "90"); //2nd index se 3 elements delete kardo aur yeh baaki ki do values add kar do
array.splice(2, 0, "money", "90");
console.log(array);

console.log(arr.toString());

console.log(arr.join("*"));

let arr1 = [2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];
let arr4 = [10, 11, 12, 13];
let arr3 = arr1.concat(arr2, arr4);
console.log(arr3);

arr1.push(arr2);
console.log(arr1);

let a = [1, 2, 3, 4, 5, 6];
let a2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(a2d[2][0]);

let a2 = [1, 2, 3, 4, 5];
let a3d = [[1, 2, [4, 5]], 2, 3];
console.log(a3d[0][2][1]);

let newarr1 = a2d.flat();
console.log(newarr1);

let newarr2 = a3d.flat(Infinity);
console.log(newarr2);

let abc = [2, 1, 3, 4];
console.log(Array.isArray(abc));


let ac = new Array(2, 3, 4, 5);
console.log(ac);
