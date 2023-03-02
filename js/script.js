
let userDate = prompt("Введіть дату в форматі ДД-ММ-РРР");

let dateParts = userDate.split("-");
let userDay = parseInt(dateParts[0]);
let userMonth = parseInt(dateParts[1]) - 1;
let userYear = parseInt(dateParts[2]);
let userDateTime = new Date(userYear, userMonth, userDay);


let nextDateTime = new Date(userYear, userMonth, userDay + 1);
if (nextDateTime.getMonth() !== userMonth) {

  nextDateTime = new Date(userYear, userMonth + 1, 1);
}
if (nextDateTime.getFullYear() !== userYear) {

  nextDateTime = new Date(userYear + 1, 0, 1);
}

let nextDay = nextDateTime.getDate();
let nextMonth = nextDateTime.getMonth() + 1;
let nextYear = nextDateTime.getFullYear();
alert(`Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`);
console.log(`Наступна дата: ${nextDay}-${nextMonth}-${nextYear}`);


for (let n = 2; n < 10; n++) {
    console.log(`Таблицця множення для ${n}:`);
    for (let i = 1; i < 11; i++) {
    console.log(`${n} * ${i}= ${n * i}`);
    }
}

let start = 0; 
let end = 100; 
let middle;

while (true) {
  middle = Math.floor((start + end) / 2); 
  
  let answer = prompt(`Ваше число > ${middle}, < ${middle} или = ${middle}?`); 
 
  
  if (answer === ">") {
    start = middle + 1; 
  } else if (answer === "<") {
    end = middle - 1; 
  } else if (answer === "=") {
    alert(`Ваше число: ${middle}!`);
    break;
} else {
    alert("Будь-ласка, введіть '>' '<' або '='!"); 
  }
}
