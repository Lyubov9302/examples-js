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

// **********************

// function showThis(a, b, arr) {
//   console.log(a, b, arr);
//   console.log("this", this);
  
// }

// const object = {
//   a: 5,
//   b: 10
// }

// const abj2 = {
//   a: 22,
//   b: 33
// }


// showThis.call(object, "Alice", 2, [1, 2, 3]);
// showThis.call(abj2);

// showThis.apply(object, ["Petya", 3, [1, 2, 3]]);



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
  

// ***************
// function changeColor(newColor) {
//   console.log("this", this);
//   this.color = newColor;

// }


// const hat = {
//   color: "black"
// }

// const sweater = {
//   color: "green"
// }


// changeColor.call(hat, "red");
// console.log(hat);

// changeColor.apply(sweater, ["blue"]);
// console.log(sweater);


// 4 - Метод bind() і втрата контексту

// function sayHello() {
//     console.log("Привіт, я " + this.name);
//   }
  
//   const user = { name: "Марія" };
  
//   const helloMaria = sayHello.bind(user);
  
//   helloMaria(); // Привіт, я Марія

// **************
// const changeHatColor = changeColor.bind(hat);


// changeHatColor("yellow");
// console.log(hat);




// ****************************

// const counter = {
//   value: 0,
//   increment(num) {
//     console.log("increment", this);
//     this.value += num;
//   },

//   decrement(num) {
//     console.log("decrement", this);
//     this.value -= num;
//   }
// }

// function foo(number, callback) {

//   console.log(callback);
//   callback(number); 
// }

// foo(10, counter.increment.bind(counter));
// foo(3, counter.decrement.bind(counter));

// console.log(counter);












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


// 6 - class and constructor


// class User {
//     constructor(name, email) {
//           console.log(name, email);
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
//   console.log(mango); // {}
  
// 7 - Об'єкт параметрів

// class Car {
//     constructor(params) {
//       this.brand = params.brand;
//       this.model = params.model;
//       this.price = params.price;
//     }
//   }
  
//   console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));


// 8 - Методи класу

// class User {
//     constructor(params) {
//       this.name = params.name;
//       this.email = params.email;
//     }
  
//     getEmail() {
//       return this.email;
//     }
  
//     changeEmail(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

// 9 - статичні методи

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

// 9 - b

// Додай класу Car публічний статичний метод checkPrice(price), 
// що приймає ціну автомобіля. Метод повинен порівняти значення
//  параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну,
//  метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! 
// Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики
//  методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }

//   static checkPrice(price) {
//     if(price > Car.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     } 
//       return "Success! Price is within acceptable limits";
//     }
     
//     }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// 10 - 

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

//   class Admin extends User {
//     static role = {
//       BASIC: "basic", 
//       SUPERUSER: "superuser"
//     };
//   }


//   console.log(Admin.role.BASIC);
//   console.log(Admin.role.SUPERUSER);


// 10 - b

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   access;
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//       super(params.email);
//     this.access = params.access;

//   }
// }


// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"



// 11 - дочірні методи



// 12 - this 

// 'use strict'

// function foo() {
//   console.log(this);
// }
// foo();


// контекст методу обєкта

// const user = {
//   username: "Alice",

//   showThis() {
//     console.log(this);

//     const foo = () => {
//       console.log("foo", this);
//     } 
//     foo();
//   }
// }

// user.showThis();


// стрілочні ф

// const user = {
//   username: "Alice",

//   showThis: () => {
//     console.log(this);
//   }
// }

// user.showThis();

// контекст методу обєкта, 
// але оголошена як зовн функція

// function showThis() {
//   console.log("this", this);
// }


// const obj = {
//   username: "Alice",
// }


// obj.showUserThis = showThis;

// // console.log(obj.showUserThis);

// obj.showUserThis()


// виклик без контекста,
//  але оголошений як метод обєкта



// const user = {
//   userName: "Petya",
//   showThis() {
//     console.log("this", this);
//     console.log("userName", this.userName);
//   }
// }

// user.showThis();

// const foo = user.showThis;

// console.log(foo);

// foo();


//  контекст у колбек функціях


// const user = {
//   userName: "Petya",

//   showThis() {
//     console.log("this", this);
//   }
// }

// function foo(callback) {
// console.log(callback);
// callback();


// }

// foo(user.showThis);



// ***

// function foo() {
//   console.log(this.lalala);
// }

// foo();


// const user = {
//   userName: "Alice",
//   showThis() {
//     console.log(this);
//   },

//   showName() {

//               //window.userName
//     console.log(this.userName);
//   }
// }

// // user.showThis();

// // const foo = user.showThis;

// const foo1 = user.showName;
// foo1();


// 13 - напишіть метод calcTotalPtice(stoneName), який
// приймає назву каменя і розрах та поверт загальну 
// кількість
// каменів з таким імям, ціною та кількістю з властив stones


// const chopShop = {
//   stones: [
//       { name: "Emerald", price: 1300, quantity: 4 },
//       { name: "Diamond", price: 2700, quantity: 3 },
//       { name: "Sapphire", price: 1400, quantity: 7 },
//       { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPtice(stoneName) {
//    const stone = this.stones.find((item) => item.name === stoneName);
//    if(!stone) {
//    return `${stoneName} not found`;

//    }

//    return stone.price * stone.quantity;
//   }
// }


// console.log(chopShop.calcTotalPtice("Sapphire"));


// 14 - прототип обєкта
// - Object.create()
// - Власні і невласні власти
// - перебір власних властив з hasOwnProperty()
// - ланцюжки прототипів


// const animal = {
// legs: 4

// }

// const dog = Object.create(animal);
// dog.name = "Patron";

// console.log(dog);
// console.log(dog.hasOwnProperty("name"));


// for(const key in dog) {
//   if(dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }


// **********************
// const objC = { c: "objC" };

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";


// console.log(objA);
// console.log(objA.b);
// console.log(objA.hasOwnProperty("c"));
// console.log(objB);
// console.log(objC);


// ********************

// наше завдання написати програмне забезпечення
// для автомобіля, а саме натиск набору та зниж 
// швидкості в системі круіз авто
// Створити обєкт cruiseControl з методами accelerate 
// та decrease 

// const cruiseControl = {
//   speed: 0,
//   brand: "Audi",

//   acceserate() {
//     this.speed += 10;
//     console.log(`The car ${this.brand} has speed ${this.speed}`)
//   },

//   decrease() {
//     if(this.speed <= 0) {
//       console.log('The car has stopped');
//       return ;
//     }

//     this.speed -= 10;
//     console.log(`The car ${this.brand} is slowing down ${this.speed}`);
//   }
// }

// cruiseControl.acceserate();
// cruiseControl.acceserate();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// console.log(cruiseControl)


// ****************************
//  потрібно створити функціонал для контролю швидкості
//  прокатних авто

//  Створіть функцію, яка буде приймати один параметр (
//   макс довзолену швидк
//  ) та виводити повідомлення чи рух з безпеч шви чи перевищує

//  Ф має опрацьовувати обєкт авто як this


// const SPEED = 60;

// const bmw = {
//   brand: "BMW",
//   speed: 40
// }

// const audi = {
//   brand: "Audi",
//   speed: 70
// }

// function speedSensor(maxSpeed) {
  // if(this.speed <= maxSpeed) {
  //   return `The car ${this.brand} has ok speed`;
  // }
  // return `The car ${this.brand} has too big speed`;

  // or 

//   return this.speed <= maxSpeed ? `The car ${this.brand} has ok speed` : 
//   `The car ${this.brand} has too big speed`;
// }

// console.log(speedSensor.call(bmw, SPEED));
// console.log(speedSensor.call(audi, SPEED));


// 15 - hometask 1
// Перед звільненням розробник зламав вихідний код
//  управління акаунтами користувачів нашого сервісу 
//  доставки їжі. Виконай рефакторинг методів об'єкта customer,
//   розставивши відсутні this під час звернення до властивостей 
//   об'єкта.

// Використай цей стартовий код і виконай рефакторинг.
//  Після оголошення об'єкта ми додали виклики методів.
//   У консоль будуть виведені результати їх роботи.
//    Будь ласка, нічого там не змінюй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// 16 - hometask 2

// Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
//  Клас очікує лише один аргумент — початковий масив товарів, 
//  який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у 
// приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і
//  додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і 
// видаляє його з масиву товарів у приватній властивості items об'єкта.

// class Storage {
//   #items;

//   constructor(items) {
//   this.#items = items;
//   }

//   getItems() {
//    return this.#items;
//   }

//   addItem(newItem) {
//    this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//    const indexToRemove = this.#items.indexOf(itemToRemove);
//    if (indexToRemove !== -1) {
//     this.#items.splice(indexToRemove, 1);
//    }
   
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// 16 - b 

// створи клас Library, який створює обєкти для керування бібліотекою книг. 
// Клас приймає один агрумент - початковий масив книг,
// який зберігається у приватній властивості books

// Реалізуй наступні методи:
// - getBooks() - повертає масив поточних книг
// - addBook(newBook) - додає нову книгу до масиву books
// - removeBook(bookName)  - видаляє книгу з масиву books, 
// якщо така є за допомогою splice()
// - hasBook(bookName) - повертає true, якщо книга є в бібліотеці
// інакше - false

// class Library {
//   #books;

//   constructor(books) {
//     this.#books = books;
//   }

//   getBooks() {
//     return this.#books;
//   }

//   addBook(newBook) {
//     this.#books.push(newBook);
//   }

//   removeBook(bookName) {
//     const indexOfBook = this.#books.indexOf(bookName);
//     if(indexOfBook !== -1) {
//       this.#books.splice(indexOfBook, 1);
//     }
//   }

//   hasBook(bookName) {
//     return this.#books.includes(bookName);
//   }
// }

// const library = new Library(["The Lord of the Rings ", "Harry Potter", "1984", "Eat, Pray, Love"]);
// console.log(library.getBooks()); 


// library.addBook("Before the coffee gets cold");
// console.log(library.getBooks()); 

// library.removeBook("1984");
// console.log(library.getBooks()); 


// console.log(library.hasBook("Eat, Pray, Love")); 
// console.log(library.hasBook("Dune")); 

// 17 - hometask 3
// Напиши клас StringBuilder, який приймає один параметр initialValue — 
// довільний рядок, який записується у приватну властивість value об'єкта, 
// що створюється.



// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець
//  значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок
//  значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і
//  в кінець значення приватної властивості value об'єкта, який викликає цей метод.

// class StringBuilder {
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value =  this.#value + str;
//   }


//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.#value = str + this.#value + str;
// }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
