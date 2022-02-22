// Data Types

// let firstName = "Jasur";
// console.log(firstName);
// console.log(typeof firstName);

// let lastName = "Isokov";
// console.log(lastName);
// console.log(typeof lastName);

// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

// let age = 20;
// console.log(age);
// console.log(typeof age);

// let birthYear = 2002;
// console.log(birthYear);
// console.log(typeof birthYear);

// console.log(firstName + age);
// console.log(firstName + " " + birthYear);

// let width = true;
// console.log(width);
// console.log(typeof width);

// let university;
// console.log(university);
// console.log(typeof university);

// let year = 20n;
// console.log(year);
// console.log(typeof year);

// /Data Types

// let x = 10;
// let y = 18;
// z = x + y;
// console.log(z);

// let a = 12;
// let b = 69;
// c = a - b;
// console.log(c);

// m = x + y - (a - b);
// console.log(m);

// n = z - c;
// console.log(n);

// x += a; // x=10, a=12, x=x+a, x=10+12
// console.log(x);

// y -= b; // y=y-b
// console.log(y);

// let p = 9;
// q = p++;
// console.log(q);
// console.log(q);
// console.log(p);

// let f = 13;
// console.log(f);
// g = f++;
// console.log(g);
// console.log(g);

// f = 18;
// f++;
// console.log(f);

// l = f++;
// console.log(l);
// console.log(l);

// let f = 80;
// j = ++f;
// console.log(j);

// f = 70;
// j = ++f;
// console.log(j);

// let x = 4;
// let y = 6;
// z = x * y;
// console.log(z);

// z = x / y;
// console.log(z);

// z = x % y;
// console.log(z);

// z = x ** y;
// console.log(z);

// x > y;
// console.log(false);

// Exersice:

// 1. Masala: Og’irlikgingiz bo’yingizga mosmi? Tekshiramiz. Buning uchun quydagi formuladan foydalanasiz: A = ogirlik / buy ** 2 yoki A = ogirlik / (buy * buy);

// 2. Topshiriq:

//       1. Umid bilan o’zingzini ogirliginzi va buyizni variable larga saqlab oling

//      2. Formuladan foydalanib A ni toping. Uzingizni buyingiz va ogirlingizni quyib topasiz. Umid ni ham xuddi shunday.

//      3. kattaA o’zgaruvchisini yarating va uzingiz bilan  Umid ni solishtirib kurib kattaA ga saqlang (true yoki false qiymat qabul qiladi.)

// let jasur = "Jasur";
// let height = 1.76;
// let width = 68;
// A = width / height ** 2;
// console.log(jasur);
// console.log(height);
// console.log(width);
// console.log(A);

// let ulugbek = "Ulug'bek";
// height = 1.88;
// width = 80;
// B = width / height ** 2;
// console.log(ulugbek);
// console.log(height);
// console.log(width);
// console.log(B);

// let C = B > A;
// console.log(C);

// C = B < A;
// console.log(C);

let firstName = prompt("Your FirstName ");
let myName = "Name:";
let height = prompt("Your Heihght (m)");
let myHeight = "Height:";
let width = prompt("Your Width (kg)");
let myWidht = "Widht:";
let A = width / height ** 2;
let moslik = "Og'irlikning bo'yga mosligi:";

let uzunlik = "metr";
let ogirlik = "kilogram";

let yourName = prompt("Your Name");
let youName = "Name:";
let yourHeight = prompt("Your Height (m)");
let youHeight = "Height:";
let yourWidth = prompt("Your Width (kg)");
let youWidth = "Width:";
let B = yourWidth / yourHeight ** 2;

console.log(myName + " " + firstName);
console.log(myHeight + " " + height + " " + uzunlik);
console.log(myWidht + " " + width + " " + ogirlik);
console.log(moslik + " " + A);

console.log(youName + " " + yourName);
console.log(youHeight + " " + yourHeight + " " + uzunlik);
console.log(youWidth + " " + yourWidth + " " + ogirlik);

console.log(moslik + " " + B);

let presedense = A > B;
let positive = "ning ko'rsatkichi yahshi ->";
console.log(firstName + positive + "  " + presedense);

presedense = A < B;
console.log(yourName + positive + "  " + presedense);
