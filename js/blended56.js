// 1 -
//  // Дано масив чисел [1, 2, 3, 4, 5]. 
// Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5]

// const newArr = [];

// for (const num of numbers) {
//     newArr.push(num * num);
// }

// or

// const newArr = numbers.map(number =>  number * number);

// console.log(newArr);

// 2 - 
// Дано масив об'єктів. Створіть новий масив,
//  що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному 
// масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];


// const newArr = data.flatMap(item => item.values);
// console.log(newArr);


// 3 - 

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// const checkAge = people.some(person => person.age < 20);

// console.log(checkAge);

// 4 - 

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkNum = numbers.every(number => number % 2 === 0);

// console.log(checkNum);


// 5 - 

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];


// const findFisrtOdd = numbers.find(number => number % 2 !== 0);

// console.log(findFisrtOdd);


// 6 - 

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];


// const sortedArr = numbersArray.toSorted((a, b) => a - b);

// console.log(sortedArr);

// 7 - 

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedStr = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(sortedStr);

// 8 - 

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const sortedAge = users.toSorted((a, b) => a.age - b.age);

// console.log(sortedAge);

// 9 -

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const newArr = users.filter(user => user.age > 20);

// console.log(newArr);

// 10 - 
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumArray = numbers.reduce((acc, num) => {
//     return acc += num;
// }, 0);

// console.log(sumArray);

// 11 -
 // Розроби клас Calculator, який дозволяє виконувати арифметичні
//операції над числом за допомогою методів класу, підтримуючи
// // ланцюжковий виклик (method chaining).
//// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів//
//  - метод multiply -Множить поточне значення на value.
//  Повертає this// Об'єкт класу може проводити послідовні операції 
// у вигляді ланцюжк// Приклад використання// const calc = new Calculator();


// const result = calc
// /.number(10)// Встановлюємо початкове значення 10
// /.add(5)// Додаємо 5 (10 + 5 = 15)
// / .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
// / .multiply(4) // Множимо на 4 (12 * 4 = 48)
// .divide(2) // Ділимо на 2 (48 / 2 = 24)
// .getResult(); // Отримуємо результат: 24


//console.log(result); // 24


// class Calculator {
    

//     number(value) {
//      this.total = value;
//      return this;
    // }

    // add(value) {
    // this.total += value; 
    // return this;
    // }

    // subtract(value) {
    //     this.total -= value;
    //     return this;
    // }

    // multiply(value) {
    //     this.total * value;
    //     return this;
    // }

//     divide(value) {
//         if (value !== 0) {
//          this.total / value;
//          return this;
//         } 
//          alert('Cant do it');
//          return this;
//     }

//     getResult() {
//         return this.total;
//      }

// }



// const calc = new Calculator();
// console.log(calc.number(10));

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24


// 12 - 
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

//  class Client {
//     #login;
//     #email;

//     constructor(myLogin, myEmail) {
//         this.#login = myLogin;
//         this.#email = myEmail;
//       }


//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//        this.#login = newLogin;
//     }

//  get email() {

//     return this.#email;
//  }

//  set email(newEemail) {
//     this.#email = newEemail;
//  }

//  }


// 13 - 
  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас 
  // `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
  //  який повертає об'єкт з зарплатою співробітника та відділом,
  //  в якому він працює.


// Клас Person
// class Person {
//     constructor(name, age, gender, email) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//       this.email = email;
//     }
  
//     getDetails() {
//       return {
//         name: this.name,
//         age: this.age,
//         gender: this.gender,
//         email: this.email
//       };
//     }
//   }
  
  // Клас Employee, який наслідує Person
//   class Employee extends Person {
//     constructor(name, age, gender, email, salary, department) {
//       super(name, age, gender, email); // викликаємо конструктор батьківського класу
//       this.salary = salary;
//       this.department = department;
//     }
  
//     getEmployeeDetails() {
//       return {
//         salary: this.salary,
//         department: this.department
//       };
//     }
//   }
  
//   // Приклад використання:
//   const employee1 = new Employee("Іван", 30, "чоловік", "ivan@example.com", 50000, "IT");
  
//   console.log(employee1.getDetails());           // інформація з Person
//   console.log(employee1.getEmployeeDetails());   // інформація з Employee
