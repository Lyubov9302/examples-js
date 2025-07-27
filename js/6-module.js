// 1 - Ключове слово this
// Рефакторинг

// Створи обєкт bookStore з методами:
// 1. Обєкт bookStore має масив книг books, наприклад: 
// books: ["Dune", "1984", "The Hobbit", "Harry Potter"]

// 2. Метод hasBooks(bookName) - перевіряє, чи є така книга в наявності
// (використову this.books.includes(...))

// 3.Метод buyBook(bookName):
// - якщо книга є - повертає "You successfully bought '${bookName}'"
// - якщо немає - повертає 'Sorry, ${bookName} is not available'

// 4.Обивдва методи повинні викор  this для звернення
//  до властивості books i Методy hasBooks(...)

// const bookStore = {
//     books: ["Dune", "1984", "The Hobbit", "Harry Potter"],

//     hasBooks(bookName) {
// return this.books.includes(bookName);
//     },

//     buyBook(bookName) {
//         if(!this.hasBooks(bookName)) {
//             return `Sorry, ${bookName} is not available`;
//         }
//         return `You successfully bought '${bookName}`;
//     },
// }


// console.log(bookStore.buyBook("1984")); 
// // You successfully bought '1984'

// console.log(bookStore.buyBook("Clean Code")); 
// //  Sorry, Clean Code is not available

// 2 - Метод call()

// function showName() {
// 	console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// showName.call(user);


// 3 - Метод apply()

// function greet(str) {
//     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
//   }
  
//   const mango = {
//     username: "Mango",
//       room: 27
//   };
  
//   const poly = {
//     username: "Poly",
//       room: 191
//   };
  
//   greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
//   greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"
  
// 4 - Метод bind() і втрата контексту

// function sayHello() {
//     console.log("Привіт, я " + this.name);
//   }
  
//   const user = { name: "Марія" };
  
//   const helloMaria = sayHello.bind(user);
  
//   helloMaria(); // Привіт, я Марія

// 5 - Стрілочні функції

// "use strict";

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window


// 5 - b 
// const a = () => {
// 	console.log(this);
// };

// function b() {
// 	a();
// }

// b.call({ user: "Mango" });




