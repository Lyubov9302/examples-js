// 1 - 
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Index ${i}, value ${numbers[i]}`);
// // }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// 2 - forEach

// getLongWords(words, minLength) 

// Створи функцію getLongWords(words, minLength), яка приймає:
// - words - масив слів (рядків),
// - minLength - мінімальну довжину слова

// Функція повинна повернути новий масив, 
// до якого потрапляють лише ті слова, 
// довжина яких строго більша за minLength.

function getLongWords(words, minLength)  {
    newArr = [];
    words.forEach( function (word) {
        if(word.length > minLength ) {
            newArr.push(word);
        }
    })

    return newArr;
}

console.log(getLongWords(["apple", "hi", "sunshine", "no", "javascript"], 4));
// 👉 ["apple", "sunshine", "javascript"]

console.log(getLongWords(["cat", "dog", "horse", "elephant"], 5));
// 👉 ["elephant"]

// 3 - порівняння звичайної анонімної функції і стрілочної анонімної функції

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });


// 4 - рефакторинг звичайної функції на стрілочну

// Перепиши функцію calculateTotalLength, 
// яка рахує загальну довжину усіх слів у масиві

// Використай - стрілочну функцію для calculateTotalLength
// - стрілочну функцію, як колбек у forEach

// function calculateTotalLength(words) {
//     let total = 0;
  
//     words.forEach(function(word) {
//       total += word.length;
//     });
  
//     return total;
//   }


//   Змінена функція 

const calculateTotalLength = (words) => {
    let total = 0;

    words.forEach((word) => {
        total += word.length;
      });
    
      return total;
}

console.log(calculateTotalLength(["apple", "banana", "kiwi"])); // повертає 15
console.log(calculateTotalLength(["hi", "world"]));             // повертає 7



// 5 - функція з побічними ефектами

// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//       array[i] = array[i] * value;
//     }
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   dirtyMultiply(numbers, 2);
//   // Відбулася мутація вихідних даних - масиву numbers
//   console.log(numbers); // [2, 4, 6, 8, 10]

//   6 - чиста функція 
  
// const pureMultiply = (array, value) => {
//     const newArray = [];
  
//     array.forEach(element => {
//       newArray.push(element * value);
//     });
  
//     return newArray;
//   };
  
//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);
  
//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 7 - Функція changeEven(numbers, value) приймає масив чисел 
// numbers і оновлює кожен елемент, 
// значення якого - це парне число, 
// додаючи до нього значення параметра value, який точно є числом.

// Виконай рефакторинг функції таким чином,
// щоб вона стала чистою - не змінювала масив чисел numbers,
//  а створювала, наповнювала і повертала новий масив з 
//  оновленими значеннями.

// function changeEven(numbers, value) {
//     const newArray = [];
  
//       numbers.forEach((number) => {
//         if(number % 2 === 0) {
//       newArray.push(number + value);
//         } else {
//           newArray.push(number);
//         }
//     });
//     return newArray;
//   };


//   console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
  
// // 7 - b
// changeOdd(numbers, value)

// Напиши функцію, яка:
// - приймає масив чисел numbers і число value
// - створює новий масив
// - змінює непарні числа, додаючи до них value
// - парні - залишає без змінює
// - не змінює вихідний масив


// function changeOdd(numbers, value) {
// let newArray = [];

// numbers.forEach((number) => {
//     if(number % 2 !== 0) {
//         newArray.push(number + value);
//     } else {
//         newArray.push(number);
//     }
// });
// return newArray;
// }

// console.log(changeOdd([1, 2, 3, 4, 5], 10));
// // Повертає: [11, 2, 13, 4, 15])

// 8 - Метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// 9 - В масиві planets зберігаються назви планет.
//  Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, 
//  що буде складатися з довжин назв кожної планети з масиву planets.
//   Обов'язково використовуй метод map().

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsLengths = planets.map(planet => planet.length);

// 10 - масив обєктів 

// const students = [
//     { name: "Mango", score: 83 },
//     { name: "Poly", score: 59 },
//     { name: "Ajax", score: 37 },
//     { name: "Kiwi", score: 94 },
//     { name: "Houston", score: 64 },
//   ];
  
//   const names = students.map(student => student.name);
//   console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

//   11 - Метод flatMap()

const students = [
    { name: "Mango", courses: ["mathematics", "physics"] },
    { name: "Poly", courses: ["science", "mathematics"] },
    { name: "Kiwi", courses: ["physics", "biology"] },
  ];
  
  const mappedCourses = students.map(student => student.courses);
  console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
  
  const flattenedCourses = students.flatMap(student => student.courses);
  console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
  

//   12 - Метод filter()

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]
// до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []
// до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився


// 13 - Метод find()
const colorPickerOptions = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
  ];
  
  console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: "blue", color: "#2196F3" }
  console.log(colorPickerOptions.find((option) => option.label === "pink")); // { label: "pink", color: "#E91E63" }
  console.log(colorPickerOptions.find((option) => option.label === "white")); // undefined
  

//   14 - Метод every()

const products = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false

  15 - 



