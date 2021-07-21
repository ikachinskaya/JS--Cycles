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