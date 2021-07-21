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