const d = new Date();
console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString());
console.log(d);
console.log(typeof d);

console.log(d.getDay());
console.log(d.getDay());

console.log(d.getMonth());
console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getFullYear());
console.log(d.getMilliseconds());
console.log(d.getTime());

const now = Date.now();
console.log(now);

const d1 = new Date();
d1.setDate(20);
d1.setFullYear(2021);
d1.setMonth(3);
console.log(d1.toString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleString());

//Date Calculation
const d3 = new Date();
const d2 = new Date("2025-04-21");

console.log(d2 - d3);

console.log(d2 > d1);

//Countdown Timer
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2 - date1;
const days = Math.floor(date / (1000 * 60 * 60 * 24));
console.log(days);
const hour = Math.floor((date / (1000 * 60 * 60)) % 24);
console.log(hour);
const min = Math.floor((date / (1000 * 60)) % 24);
console.log(min);
console.log(`Olympics Countdown TImer:${days} hour:${hour} minute:${min}`)
