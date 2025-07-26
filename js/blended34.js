// 1 - // Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// const bluesIndex = styles.indexOf('blues');
// if (bluesIndex !== -1) {
//     styles[bluesIndex] = "classic";
//     // styles.splice(bluesIndex, 1, "classic");
// }


// function logItems(array) {

//     for (let i = 0; i <= array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }


// logItems(styles);

// 2 - // Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє  виводить повідомлення: "User not found".

// const login = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//    const userName = prompt('Введіть імя');
//    if(!userName) {
//     return 'Invalid';
//    } 
//     if ( login.includes(userName)) {
//       alert(`Welcome ${userName}!`);
//    } else {
//     alert('User not found')
//    }
// };

// checkLogin(login);

// 3 - перевірка ролі користувача

// Є масив ролей: ["admin", "editor", "moderator"]
// Напиши функцію checkAccess(array), яка
// - запитує у користувача його роль через промт
// - якщо нічого не ввів - виводить Invalid input 
// - якщо введена роль є у масиві - виводить Access granted for <роль>
//  - інакше - виводить Access denied

// const roles = ["admin", "editor", "moderator"];

// function checkAccess(array) {
//     const yourRole = prompt('Введіть роль');

//     if(!yourRole) {
//         return 'Invalid input';
//     }

//     if (roles.includes(yourRole)) {
//         alert(`Access granted for ${yourRole}`);
//     } else {
//         alert('Access denied');
//     }
// };

// checkAccess(roles);


// 3 - // Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage(...arg) {
//     let total = 0;
//     let count = 0;
//     for (const item of arg) {
//         if (typeof item === "number") {
//             count += 1;
//            total += item;
//         }
//     }
//     return total / count;
//     };

//     console.log(caclculateAverage(5, 6, 8, "hello"));


// 3 - b - напиши функцію sumEvenNumbers(...args), 
// яка 
// - приймає будь яку кількість аргументів
//  - ігнорує все що не є числом
//  - складає тільки парні числа
//   - 

// function sumEvenNumbers(...arg) {
//     let total = 0;
   

//      for (const item of arg) {
//         if (typeof item === "number" && item % 2 === 0) {

//             total += item;
//         }
//      }
//     return total;
// };

//     console.log(sumEvenNumbers(5, 6, 8, "hello"));

// 4 - // Напишіть функцію, яка сумуватиме сусідні числа 
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім, 
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function getNeighborSum(inputArr) {
//     let newArr = [];
// for (let i = 0; i < inputArr.length - 1; i++) {
//    newArr.push(inputArr[i] + inputArr[i + 1]);
//     }
//     return newArr;
// }

//  console.log(getNeighborSum(someArr));


// 5 - // Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і 
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sorry, it is not an array!'.

// function findSmallestNumber(numbers) {

//         if (!Array.isArray(numbers)) {
//             return 'Sorry, it is not an array!';
//         }
//         let smallestNumber = numbers[0];

//         for (const number of numbers) {
//          if (smallestNumber > number) {
//             smallestNumber = number;
//          }
    
//         }
//         return smallestNumber;
//         }
        
//         const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
    
//         // findSmallestNumber();
//         console.log(findSmallestNumber(numbers));

// 5 - b - Знайди найбільше парне число

// Напиши функцію findLargestEven(numbers), яка:
// - приймає масив чисел
// - перевіряє чи це дійсно масив 
// - повертає найбільше парне число
// - якщо парних чисел нема - повертає повідпомлення 'No even numbers found'
// - якщо агрумент не масив - 'Sorry, it is not an array!'




// function findLargestEven(numbers) {

//     if(!Array.isArray(numbers)) {
//         return 'Sorry, it is not an array!';
//     } 

//     let biggestNum = null;

//     for (const number of numbers) {
//         if( number % 2 === 0 && (biggestNum === null || number > biggestNum) ) {
//             biggestNum = number;
//         }
//     }
//  return biggestNum;
// }


// const arr = [3, 7, 22, 9, 18, 11, 5];
// console.log(findLargestEven(arr));

// 5 - Напиши функцію sumOfOdd(numbers),
// яка:
// - приймає масив чисел
// - перевіряє чи аргумент - справжній масив
// - складає усі непарні числа 
// - якщо непарних немає - повертає 'No odd numbers found'
// - якщо агрумент не масив - 'Sorry, it is not an array!';

// function sumOfOdd(numbers) {
//     if(!Array.isArray(numbers)) {
//         return 'Sorry, it is not an array!';
//     }

//     let total = 0;
//     for (const number of numbers) {
//         if(number % 2 !== 0) {
//             total += number; 
//         }
//      }
     
//      if(total === 0) {
//         return 'No odd numbers found';
//      }

//      return total;
// }

// const arr = [10, 5, 3, 8, 4];
// console.log(sumOfOdd(arr));


// 6 - // Напишіть функцію findLongestWord(string), яка 
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//        const arr = string.split(' ');
//        let longestWord = arr[0];
//         for (const word of arr) {
//             if (word.length > longestWord.length) {
//                 longestWord = word;
//             }
//         }
//       return longestWord;
//     }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// 6 - b 
// Порахуйте кількість довгих слів 

// Напиши функцію countLongWords(string), 
// яка:
// - приймає рядок слів, розділених пробілами 
// - визначає, скільки в цьому реченні слів, довших за 5 символів
// - повертає це число


// function countLongWords(string) {
//     const wordArr = string.split(' ');

//     let longerWords = 0;
// for (const word of wordArr) {
//     if (word.length > 5) {
//         longerWords += 1;
//     }
// };
// return longerWords;
// }

// console.log(countLongWords("London is the capital of Great Britain")); // 3

// 7 - // Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//   user.mood = "happy";
//   user.premium = false;
//   user.hobby = "skydiving";

//   console.log(user);


  
//   const keys = Object.keys(user);

// for (const key of keys)  {
// console.log(`${key}:${user[key]}`);
// }



// 8 - // Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

// const sal = Object.values(salaries);

// let sum = 0;

// for (const value of sal) {
//   sum += value;
 
// }

// console.log(sum);



// 9 - // Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень
//  (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і 
// повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {

//   read(a, b) {
// this.a = a;
// this.b = b;
//   },

//   exist() {
// return this.a !== undefined && this.b !== undefined;
//   },

//   sum() {
// if(!this.exist()) {
//   return 'No such propeties';
// }
// return this.a + this.b;
// },

//   mult() {

//     if(!this.exist()) {
//     return 'No such propeties';
//   }
// return this.a * this.b;
  

// },
// }

// console.dir(calculator);
// calculator.read(5, 10);
// console.log(calculator.exist());
// console.log(calculator.sum());
// console.log(calculator.mult());


// 9 - b 
// Обєкт bankAccount

// Створи обєкт bankAccount з такими методами:
// - init(balance) - приймає початковий баланс і зберігає його у властивість this.balance
// - deposit(amount) - додає amount до баланс
// - withdraw(amount) - віднімає amount з баланс
// (якщо грошей не вистачає - повертає рядок 'Insufficient funds')
// - getBalance() - повертає поточний баланс


// const bankAccount = {

//   init(balance) {
// this.balance = balance;
//   },

//   deposit(amount) {
  
// this.balance += amount;
// return this.balance;

//   },

//   withdraw(amount) {
//  if(amount > this.balance) {
//   return 'Insufficient funds';
//  }
//  this.balance -= amount;
//  return this.balance;

//   },

//   getBalance() {
//     return this.balance;
//   }

// }

// bankAccount.init(1000);
// bankAccount.deposit(500);
// console.log(bankAccount.getBalance());     // 1500
// console.log(bankAccount.withdraw(2000));   // 'Insufficient funds'
// console.log(bankAccount.withdraw(300));    // 1200


// 10 - // Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.


// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];


//   function calcTotalPrice(fruits, fruitName) {
//     return fruits.filter(fruit => fruit.name === fruitName)
//     .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0);
//   }
   
  
//   console.log(calcTotalPrice(fruits, "Яблуко")); // 315
//   console.log(calcTotalPrice(fruits, "Банан")); // 1375