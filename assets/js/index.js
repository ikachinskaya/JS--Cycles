console.log("Задание 1");
console.log("for");
for (let i = 25; i >= 0; i--) {
  console.log(i);
}

console.log("while");
let counter = 25;
while (true) {
  console.log(counter);
  counter--;
  if (counter < 0) {
    break;
  }
}

console.log("do while");
let count = 25;
do {
  console.log(count);
  count--;
} while (count >= 0);
console.log("==================");

console.log("Задание 2");
console.log("for");
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

console.log("while");
let counter1 = 10;
while (true) {
  if (counter1 % 5 === 0) {
    console.log(counter1);
  }
  counter1++;
  if (counter1 > 50) {
    break;
  }
}

console.log("do while");
let count1 = 10;
do {
  if (count1 % 5 === 0) {
    console.log(count1);
  }
  count1++;
} while (count1 <= 50);
console.log("==================");

console.log("Задание 3");
console.log("for");
let summa = 0;
for (let i = 1; i <= 100; i++) {
  summa += i;
}
console.log(summa);

console.log("while");
let counter2 = 1;
let summa1 = 0;
while (true) {
  summa1 += counter2;
  counter2++;
  if (counter2 > 100) {
    break;
  }
}
console.log(summa1);

console.log("do while");
let count2 = 1;
let summa2 = 0;
do {
  summa2 += count2;
  count2++;
} while (count2 <= 100);
console.log(summa2);
console.log("==================");

alert("Задание 4");
alert("while");
const result = 6;
while (true) {
  let resultUser = +prompt("Решите пример: 2+2*2");
  if (resultUser === result) {
    break;
  }
}

alert("do while");
const result1 = 6;
do {
  let resultUser1 = +prompt("Решите пример: 2+2*2");
  if (resultUser1 === result1) {
    break;
  }
} while (true);

alert("for");
const MAX_TRIES = 6;
let result2 = 6;
for (let i = 0; i < MAX_TRIES; i++) {
  let resultUser2 = +prompt("Решите пример: 2+2*2");
  if (resultUser2 === result2) {
    break;
  }
}
