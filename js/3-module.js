// 1 - Функція getLastElementMeta(array) приймає один параметр array -
//  масив довільних значень. Доповни код функції таким чином, 
// щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

function getLastElementMeta(array) {
    const lastIndex = array.length - 1;
    const  secondId  = array[lastIndex];
    const newArr = [lastIndex, secondId];
    return newArr;
  }

  console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));


  // 2 - method join

  // Напиши функцію joinWords(array), яка приймає масив слів і 
  // повертає один рядок,  у якому всі слова зєднані без пробілів


// function joinWords(array) {
//   const newStr = array.join("");
//   return newStr;
// }

// console.log(joinWords(["I", "love", "JS"])); 

// console.log(joinWords(["cat", "dog"]));

// console.log(joinWords(["a", "b", "c"]));


// 3 - method split

// Сервісу гравірування прикрас потрібна функція, 
// яка б автоматично рахувала ціну гравірування, 
// залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).
//  Ця функція приймає першим параметром рядок,
//   що складається зі слів, розділених лише пробілами (параметр message)
//    та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так,
//  щоб вона повертала загальну вартість гравірування усіх слів в рядку.


function calculateEngravingPrice(message, pricePerWord) {
  
  
 const newArr =   message.split(" ");
 return newArr.length * pricePerWord;
 }

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));


// 4 - method slice()

// Доповни код таким чином,
//  щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, 
// крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

// 5 - method concat()
// Оголоси змінну allClients та доповни код таким чином, 
// щоб її значенням було посилання на масив,
//  що складається з усіх елементів масивів oldClients і newClients.
//   Спочатку мають іти елементи з масива oldClients,
//   а потім з newClients.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

console.log(allClients);

// 6 - Метод indexOf()

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так,
// щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value i
// підмасив, що починається з початку array і
//  до елемента зі значенням value включно, якщо такий елемент є в array

function getSlice(array, value) {
  if (array.indexOf(value) !== - 1) {
    return array.slice(0, array.indexOf(value) + 1);
  } else {
return array = [];
  }
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));

// 7 - Метод push() з циклом

const tags = [];

for(let i = 0; i < 3; i += 1) {
	tags.push(`tag-${i}`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]

// 8 -  Метод push() 

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, 
// щоб вона повертала масив усіх цілих чисел від значення min до max включно.

function createArrayOfNumbers(min, max) {
const numbers = [];

for (let i = min; i <= max; i += 1) {
     numbers.push(i);
}

return numbers;
}


console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));

// 9 - ітерація по масиву

// Функція calculateTotalPrice(order) приймає один параметр order -
//  масив чисел. Доповни функцію так,
//   щоб вона повертала загальну суму елементів з масиву order.

function calculateTotalPrice(order) {

  let total = 0;

  for (let i = 0; i < order.length; i++) {
   total += order[i] ; 
  }
 return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));


// 10 - ітерація з парними числами 

// Функція getEvenNumbers(start, end) має два параметри start та end, 
// які є цілими числами. Доповни код функції так, 
// щоб вона повертала масив усіх парних чисел від start до end. 
// Якщо жодного парного числа немає, то масив має бути пустим. 
// Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). 
// Використовуй цикл for.

function getEvenNumbers(start, end) {
let newArr = [];

for (let i = start; i <= end; i += 1) {
  if (i % 2 === 0 ) {
    newArr.push(i);
  }
} 
return newArr;
};

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(7, 7));


// 11 - Метод includes()

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, 
// наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, 
// чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!",
//  де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, 
// тобто наприклад "plum" і "pLuM" мають бути знайдені
//  у масиві ["apple", "plum", "pear"].

function checkStorage(storage, item) {

  const newItem = item.toLowerCase();

  if (storage.includes(newItem)) {
    return `${newItem} is available to order!`
  } else {
    return "Sorry! We are out of stock!";
  }
}


console.log(checkStorage(["apple", "plum", "pear"], "plum"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));

// 12 - спільні елементи

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. 
// Спільними елементами масивів називають ті елементи, 
// які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] 
// спільними будуть числа 3 і 5, оскільки вони присутні в 
// обох вхідних масивах.
//  А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), 
// приймає два масиви (array1 та array2) довільної довжини в 
// якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 
// за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

function getCommonElements(array1, array2) {
  const newElem = [];
  for (let i = 0; i <= array1.length; i++) {
    if (array2.includes(array1[i])) {
      newElem.push(array1[i]);
    }
  }
    return newElem;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// 13 - несумісні елементи

// напиши функцію  getUncommonElements(array1, array2), яка:
// - приймає два масиви
// - повертає новий масив елементів, які є тільки в одному з масивів, 
// але не в обох

function getUncommonElements(array1, array2) {

  let newM = [];

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      newM.push(array1[i]);
    }
    
  }
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      newM.push(array2[i]);
}
  }
  return newM;
}

console.log(getUncommonElements([1, 2, 3], [2, 4]));
// Повертає: [1, 3, 4]

console.log(getUncommonElements([5, 6, 7], [7, 8, 9]));
// Повертає: [5, 6, 8, 9]

// 14 - Цикл for...of

// Доповни код функції calculateTotalPrice(order) так,
//  щоб вона повертала загальну суму чисел в масиві order.
//   Використай цикл for...of для перебору масиву.


function calculateTotalPrice(order) {
  let total = 0;

  for (const item of order) {
    total += item;
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));

// 15 - аргументи

function multiply() {
  let total = 1;
  

  for (const arg of arguments) {
    total *= arg;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// 16 - псевдомасиви

// Функція createReversedArray() може приймати довільну кількість аргументів. 
// Доповни код функції так,
//  щоб вона повертала масив усіх аргументів, 
//  але в масиві вони повинні йти у зворотному порядку. 
//  Тобто, при виклику createReversedArray(1, 2, 3), 
//  функція має повернути масив [3, 2, 1].
//   Використовуй цикл або метод масиву toReversed(), 
//   який застосовується до масиву і результатом роботи повертає 
//   новий масив з елементами у зворотньому порядку.

function createReversedArray() {
  const args = Array.from(arguments);
  return args.toReversed();
}

console.log(createReversedArray(12, 85, 37, 4));


