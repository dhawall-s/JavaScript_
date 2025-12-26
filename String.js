let str1 = "Hello Bacho";
let str2 = "Hello Bhaiyo";
let str3 = `Hello Doston`;
let price = 50;
console.log(`Price is ${price}`);

//String Concatenation
let s1 = "Hello";
let s2 = "Coder Army";
console.log('"Hello"');
let s3 = s1 + s2;
console.log(s3);
console.log(s3.length);

let message = "Badmosh hain \nDhawal Bhaiya";
console.log(message);
//Escape Character -\
let message1 = "Badmosh hain \\nDhawal Bhaiya";
console.log(message1);

let sp = "Dhawal";
console.log(sp[0]);
console.log(sp[1]);
console.log(sp[2]);
console.log(sp[3]);
console.log(sp[4]);
console.log(sp[5]);
console.log(sp.charAt(5));

//tolowercase , touppercase

console.log(sp.toLowerCase());
console.log(sp.toUpperCase());

let hero = "Hello Doston Kaise Ho";
console.log(hero.indexOf("Doston"));
console.log(hero.lastIndexOf("Hello"));
console.log(hero.includes("Doston"));

console.log(hero.slice(0, 12)); //slice can take the negative indexes also
console.log(hero.slice(0, 10)); //slice can take the negative indexes also
console.log(hero.substring(0, 12));
console.log(hero.substr(1, 20)); //koi specific length ki substring dega

let newstr = "Hello Ji Kaise Ho";
console.log(newstr);
console.log(newstr.replace("Ji", "Dhawal"));
console.log(newstr.replaceAll("Ji", "Dhawal"));

