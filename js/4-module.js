// 1 -  Object.keys()
// Виконай рефакторинг функції countProps(object), 
// замінивши перебір ключів за допомогою циклу for…in на метод 
// Object.keys() для отримання масиву властивостей. 
// Функція має повернути кількість властивостей в об'єкті object.

function countProps(object) {
return Object.keys(object).length;
  }


  console.log(countProps({}));
  console.log(countProps({ name: "Mango", age: 2 }));
  console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//   2 - Object.values()
// Функція countTotalSalary(salaries) приймає об'єкт зарплат 
// (salaries) в якості параметра. 
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я
//  співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так,
//  щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, 
// яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) 
// з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та 
// додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат


function countTotalSalary(salaries) {
    let totalSalary = 0;
  const values = Object.values(salaries);
    for (const value of values) {
      totalSalary += value;
    }
    return totalSalary;
  }


console.log(countTotalSalary({}));
  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//   3 - Пошук об'єкта за значенням властивості

// Функція getProductPrice(productName) приймає один параметр productName - 
// назва продукту. Функція містить масив об'єктів products з такими властивостями, 
// як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту 
// з певним ім'ям (властивість name) в масиві products і 
// повертала його ціну (властивість price). 
// Якщо продукт з такою назвою не знайдений,
//  функція повинна повертати null.

function getProductPrice(productName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];


  
  for (const product of products) {
    if(productName === product.name) {
        return product.price;
    }
  
  }
    
  }

  console.log(getProductPrice("Scanner"));

//   4 - Колекція значень властивості

// Напиши функцію getAllPropValues(propName), 
// яка приймає один параметр propName - ім'я (ключ) властивості. 
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з 
// кожного об'єкта в масиві products. Якщо в об'єктах
//  відсутні властивості з таким ім'ям, 
// функція повинна повернути порожній масив.

function getAllPropValues(propName) {
    const products = [
      { name: "Radar", price: 1300, quantity: 4 },
      { name: "Scanner", price: 2700, quantity: 3 },
      { name: "Droid", price: 400, quantity: 7 },
      { name: "Grip", price: 1200, quantity: 9 },
    ];
const newArr = [];

    for (const product of products) {
        if(product.hasOwnProperty(propName)) {
   newArr.push(product[propName]);
      
    }
} 
return newArr;
  }

  console.log(getAllPropValues("price"));

//   4 - b 
// У тебе є масив користувачів. Кожен користувач має властивості name, age, isAdmin
// , email. Напиши функцію getAllValuesByType(propName, type),
// яка: 
// - приймає два аргументи 1)propName - назва властивості
// 2)type - тип значення, який ми шукаємо
// Повертає масив значень з усіх обєктів, де ця 
// властивість існує і має відповідних тип
function getAllValuesByType(propName, type) {
const users = [
    { name: "Anna", age: 25, isAdmin: false, email: "anna@mail.com" },
    { name: "Bohdan", isAdmin: true },
    { name: "Ivan", age: "30", email: "ivan@mail.com" },
    { name: "Olia", age: 28, isAdmin: false, email: null },
  ];

  const someArr = [];

  for (const user of users) {
    if(user.hasOwnProperty(propName) && typeof user[propName] === type) {
        someArr.push(user[propName])
    }
  }

  return someArr;
}

console.log(getAllValuesByType("age", "number"));    
// ➝ [25, 28]

console.log(getAllValuesByType("email", "string"));  
// ➝ ["anna@mail.com", "ivan@mail.com"]

console.log(getAllValuesByType("isAdmin", "boolean"));
// ➝ [false, true, false]

// 5 - Залишкові параметри args
// Використовуючи синтаксис залишкових параметрів,
//  доповни код функції add() так, 
//  щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

function add(...args) {
  let total = 0;
   for (const arg of args) {
     total += arg;
   }
   return total;
  
 }
console.log(add(15, 27));

// 6 - оператор spread

// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

function getExtremeScores(scores) {
 const best = Math.max(...scores);
 const worst = Math.min(...scores);
 return {best, worst};
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// 7 - homework task1

// Напиши функцію isEnoughCapacity(products, containerSize),
//  яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — обєкт, у якому ключі містять назви товарів,
//  а їхні значення — кількість цих товарів. 
//  Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, 
// яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, 
// чи помістяться всі товари в контейнер. Тобто порахувати загальну 
// кількість товарів в обєкті products і повернути true, 
// якщо вона менше або дорівнює containerSize, і false, якщо ні.

function isEnoughCapacity(products, containerSize) {
  let totalItems = 0;
  for (const quantity of Object.values(products)) {
      totalItems += quantity;
  }

  return totalItems <= containerSize;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false

// 8 - Напиши функцію canAffordShopping(prices, budget), 
// яка перевіряє, чи вистачить грошей, щоб купити всі товари зі списку
// Функція має:
// 	•	Порахувати суму всіх цін товарів;
// 	•	Порівняти її з budget;
// 	•	Повернути:
// 	•	true, якщо грошей вистачає;
// 	•	false, якщо не вистачає

function canAffordShopping(prices, budget) {
  let goodsPrice = 0;

  for (const price of Object.values(prices)) {
    goodsPrice += price;
  }

  return budget >= goodsPrice;
}

console.log(canAffordShopping({ milk: 40, bread: 25, eggs: 35 }, 100)); // true
console.log(canAffordShopping({ milk: 40, bread: 25, eggs: 35 }, 90));  // false

// 9 - homework task2

// Напиши функцію calcAverageCalories(days),
//  яка повертає середньодобове значення кількості калорій,
//   які спортсмен споживав протягом тижня.
//    Функція очікує один параметр: days — масив обєктів.
//     Кожен обєкт описує день тижня та кількість калорій calories, спожитих спортсменом,
//      у цей день.

function calcAverageCalories(days) {
  let totalCalories = 0;
  
  for (const day of days) {
   totalCalories += day.calories;
  } if (days.length === 0) {
   return 0;
  }
  return totalCalories / days.length;
}  

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0


// 10 - homework task 3
// Обєкт profile описує профіль користувача на ігровій платформі.
//  У його властивостях зберігається імя 
//  профілю username та кількість активних годин playTime, проведених у грі.



// Доповни обєкт profile методами для роботи з його властивостями.

// Метод changeUsername(newName) повинен приймати рядок 
// (нове імя) в параметр newName та змінювати значення властивості username на нове. 
// Нічого не повертає.
// Метод updatePlayTime(hours) повинен приймати 
// число (кількість годин) у параметр hours та збільшити на нього значення
//  властивості playTime. Нічого не повертає.

const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  },
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
