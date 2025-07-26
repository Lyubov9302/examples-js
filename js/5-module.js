// // 1 - 
// // const numbers = [5, 10, 15, 20, 25];

// // // Класичний for
// // // for (let i = 0; i < numbers.length; i += 1) {
// // //   console.log(`Index ${i}, value ${numbers[i]}`);
// // // }

// // // Перебираючий метод forEach
// // numbers.forEach(function (number, index) {
// //   console.log(`Index ${index}, value ${number}`);
// // });

// // 2 - forEach

// // getLongWords(words, minLength) 

// // Створи функцію getLongWords(words, minLength), яка приймає:
// // - words - масив слів (рядків),
// // - minLength - мінімальну довжину слова

// // Функція повинна повернути новий масив, 
// // до якого потрапляють лише ті слова, 
// // довжина яких строго більша за minLength.

// // function getLongWords(words, minLength)  {
// //     newArr = [];
// //     words.forEach( function (word) {
// //         if(word.length > minLength ) {
// //             newArr.push(word);
// //         }
// //     })

// //     return newArr;
// // }

// // console.log(getLongWords(["apple", "hi", "sunshine", "no", "javascript"], 4));
// // // 👉 ["apple", "sunshine", "javascript"]

// // console.log(getLongWords(["cat", "dog", "horse", "elephant"], 5));
// // // 👉 ["elephant"]

// // 3 - порівняння звичайної анонімної функції і стрілочної анонімної функції

// // const numbers = [5, 10, 15, 20, 25];

// // // Звичайна анонімна функція
// // numbers.forEach(function (number, index) {
// //   console.log(`Index ${index}, value ${number}`);
// // });

// // // Стрілочна анонімна функція
// // numbers.forEach((number, index) => {
// //   console.log(`Index ${index}, value ${number}`);
// // });


// // 4 - рефакторинг звичайної функції на стрілочну

// // Перепиши функцію calculateTotalLength, 
// // яка рахує загальну довжину усіх слів у масиві

// // Використай - стрілочну функцію для calculateTotalLength
// // - стрілочну функцію, як колбек у forEach

// // function calculateTotalLength(words) {
// //     let total = 0;
  
// //     words.forEach(function(word) {
// //       total += word.length;
// //     });
  
// //     return total;
// //   }


// //   Змінена функція 

// // const calculateTotalLength = (words) => {
// //     let total = 0;

// //     words.forEach((word) => {
// //         total += word.length;
// //       });
    
// //       return total;
// // }

// // console.log(calculateTotalLength(["apple", "banana", "kiwi"])); // повертає 15
// // console.log(calculateTotalLength(["hi", "world"]));             // повертає 7



// // 5 - функція з побічними ефектами

// // const dirtyMultiply = (array, value) => {
// //     for (let i = 0; i < array.length; i += 1) {
// //       array[i] = array[i] * value;
// //     }
// //   };
  
// //   const numbers = [1, 2, 3, 4, 5];
// //   dirtyMultiply(numbers, 2);
// //   // Відбулася мутація вихідних даних - масиву numbers
// //   console.log(numbers); // [2, 4, 6, 8, 10]

// //   6 - чиста функція 
  
// // const pureMultiply = (array, value) => {
// //     const newArray = [];
  
// //     array.forEach(element => {
// //       newArray.push(element * value);
// //     });
  
// //     return newArray;
// //   };
  
// //   const numbers = [1, 2, 3, 4, 5];
// //   const doubledNumbers = pureMultiply(numbers, 2);
  
// //   // Мутація вихідних даних не відбулася
// //   console.log(numbers); // [1, 2, 3, 4, 5]
// //   // Функція повернула новий масив зі зміненими даними
// //   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// // 7 - Функція changeEven(numbers, value) приймає масив чисел 
// // numbers і оновлює кожен елемент, 
// // значення якого - це парне число, 
// // додаючи до нього значення параметра value, який точно є числом.

// // Виконай рефакторинг функції таким чином,
// // щоб вона стала чистою - не змінювала масив чисел numbers,
// //  а створювала, наповнювала і повертала новий масив з 
// //  оновленими значеннями.

// // function changeEven(numbers, value) {
// //     const newArray = [];
  
// //       numbers.forEach((number) => {
// //         if(number % 2 === 0) {
// //       newArray.push(number + value);
// //         } else {
// //           newArray.push(number);
// //         }
// //     });
// //     return newArray;
// //   };


// //   console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
  
// // // 7 - b
// // changeOdd(numbers, value)

// // Напиши функцію, яка:
// // - приймає масив чисел numbers і число value
// // - створює новий масив
// // - змінює непарні числа, додаючи до них value
// // - парні - залишає без змінює
// // - не змінює вихідний масив


// // function changeOdd(numbers, value) {
// // let newArray = [];

// // numbers.forEach((number) => {
// //     if(number % 2 !== 0) {
// //         newArray.push(number + value);
// //     } else {
// //         newArray.push(number);
// //     }
// // });
// // return newArray;
// // }

// // console.log(changeOdd([1, 2, 3, 4, 5], 10));
// // // Повертає: [11, 2, 13, 4, 15])

// // 8 - Метод map()

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// // const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// // console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// // const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// // console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // // Оригінальний масив не змінився
// // console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// // 9 - В масиві planets зберігаються назви планет.
// //  Доповни код таким чином, щоб у змінній planetsLengths вийшов масив, 
// //  що буде складатися з довжин назв кожної планети з масиву planets.
// //   Обов'язково використовуй метод map().

// // const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// // const planetsLengths = planets.map(planet => planet.length);

// // 10 - масив обєктів 

// // const students = [
// //     { name: "Mango", score: 83 },
// //     { name: "Poly", score: 59 },
// //     { name: "Ajax", score: 37 },
// //     { name: "Kiwi", score: 94 },
// //     { name: "Houston", score: 64 },
// //   ];
  
// //   const names = students.map(student => student.name);
// //   console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// //   11 - Метод flatMap()

// // const students = [
// //     { name: "Mango", courses: ["mathematics", "physics"] },
// //     { name: "Poly", courses: ["science", "mathematics"] },
// //     { name: "Kiwi", courses: ["physics", "biology"] },
// //   ];
  
// //   const mappedCourses = students.map(student => student.courses);
// //   console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
  
// //   const flattenedCourses = students.flatMap(student => student.courses);
// //   console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
  

// //   12 - Метод filter()

// // const values = [51, -3, 27, 21, -68, 42, -37];

// // const positiveValues = values.filter(value => value >= 0);
// // console.log(positiveValues); // [51, 27, 21, 42]
// // // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

// // const negativeValues = values.filter(value => value < 0);
// // console.log(negativeValues); // [-3, -68, -37]
// // // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

// // const bigValues = values.filter(value => value > 1000);
// // console.log(bigValues); // []
// // // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// // console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // // Оригінальний масив values не змінився


// // 13 - Метод find()
// const colorPickerOptions = [
//     { label: "red", color: "#F44336" },
//     { label: "green", color: "#4CAF50" },
//     { label: "blue", color: "#2196F3" },
//     { label: "pink", color: "#E91E63" },
//     { label: "indigo", color: "#3F51B5" },
//   ];
  
//   console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: "blue", color: "#2196F3" }
//   console.log(colorPickerOptions.find((option) => option.label === "pink")); // { label: "pink", color: "#E91E63" }
//   console.log(colorPickerOptions.find((option) => option.label === "white")); // undefined
  

// //   14 - Метод every()

// // const products = [
// // 	{ name: "apple", quantity: 2 },
// // 	{ name: "orange", quantity: 5 },
// // 	{ name: "plum", quantity: 0 },
// // ];

// // const hasEveryProduct = products.every(product => product.quantity > 0);
// // console.log(hasEveryProduct); // false

// // 15 - Метод some()

// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.some(product => product.quantity > 0);
// console.log(hasEveryProduct); // true;


// // 16 - Метод reduce()

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12

// // 17 - 
// // Ігровому сервісу необхідний функціонал підрахунку середнього часу, 
// // проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт,
// //  де ключ це ім'я гравця, а значення - його ігровий час.
// //   У змінній playtimes зберігається масив значень об'єкта players, 
// //   тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime 
// //   буде середній час, проведений одним гравцем в іграх.

// // Доповни код таким чином, щоб у змінній totalPlayTime
// //  вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().

// // const players = {
// //   mango: 1270,
// //   poly: 468,
// //   ajax: 710,
// //   kiwi: 244,
// // };
// // const playtimes = Object.values(players); // [1270, 468, 710, 244]

// // const totalPlayTime = playtimes.reduce((total, playtime) => {
// //   return total + playtime;
// // }, 0);

// // const averagePlayTime = totalPlayTime / playtimes.length;

// // console.log(averagePlayTime);

// // 18 -
// //  У змінній players зберігається масив об'єктів, 
// //  кожен з яких має властивості name, playtime та gamesPlayed.

// // Нашому сервісу необхідно розрахувати середній час, 
// // проведений в одній грі для кожного гравця, 
// // і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame.
// //  Розрахувати час для кожного з гравців можна, розділивши його час 
// //  (властивість playtime) на кількість ігор (властивість gamesPlayed).


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame =  players.reduce((acc, player) => {
//   return acc + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame);


// // 19 - Метод toSorted()

// // const scores = [61, 19, 74, 35, 92, 56];
// // const ascendingScores = scores.toSorted();

// // console.log(scores); // [61, 19, 74, 35, 92, 56]
// // console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// // 20 - Метод toSorted() - Свій порядок сортування чисел


// // за зростанням

// // const scores = [61, 19, 74, 35, 92, 56];
// // const ascendingScores = scores.toSorted((a, b) => a - b);
// // console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// // за спаданням 

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// // 20 - метод для сортування рядків localeCompare()

// // const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// // const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// // console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// // const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// // console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// // 21 - ланцюжки методів 

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// // Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]



// // 22 - homework task1

// // Напиши стрілочну функцію getUserNames(users), 
// // яка прийматиме один параметр users — масив обєктів користувачів. 
// // Функція має повертати масив імен усіх користувачів 
// // (властивість name) із масиву users.

// // Візьми код нижче і встав після оголошення своєї функції для
// //  перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

// const getUserNames = (users) =>{
//   return users.map(user => user.name);
//  };

//  console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]


// // 23 - homework task2

// // Напиши стрілочну функцію getUsersWithFriend(users, friendName) ,
// //  яка прийматиме два параметра:

// // перший параметр users — масив обєктів користувачів
// // другий параметр friendName — імя друга для пошуку.
// // Функція має повертати масив усіх користувачів із масиву users, 
// // у яких є друг з іменем friendName. Друзі кожного користувача 
// // зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає, 
// // то функція має повернути порожній масив.


// // Поради:

// // Метод filter() можна використовувати для створення нового масиву з елементами,
// //  які задовольняють певну умову.
// // Використовуй метод includes() для перевірки, чи масив friends містить friendName.
// // Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її 
// // роботи. У консоль будуть виведені результати її роботи.


// // const getUsersWithFriend = (users, friendName) => {
// //   return users.filter( user => user.friends.includes(friendName));

// // };



// // const allUsers = [
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"]
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"]
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ];

// // console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// // // [
// // //   {
// // //     name: "Sharlene Bush",
// // //     friends: ["Briana Decker", "Sharron Pace"]
// // //   },
// // //   {
// // //     name: "Sheree Anthony",
// // //     friends: ["Goldie Gentry", "Briana Decker"]
// // //   }
// // // ]

// // console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // // [
// // //   {
// // //     name: "Elma Head",
// // //     friends: ["Goldie Gentry", "Aisha Tran"]
// // //   },
// // //   {
// // //     name: "Sheree Anthony",
// // //     friends: ["Goldie Gentry", "Briana Decker"]
// // //   }
// // // ]

// // console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

// // 24 - b

// // напиши стрілочну функцію getUsersInCity(users, cityName), 
// // яка повертає масив користувачів, які живуть у вказаному місті


// // const getUsersInCity = (users, cityName) => {
// //   return users.filter(user => user.citiesVisited.includes(cityName));
// // };


// // const users = [
// //   { name: "Ira", citiesVisited: ["Kyiv", "Lviv", "Odessa"] },
// //   { name: "Maks", citiesVisited: ["Kharkiv", "Dnipro"] },
// //   { name: "Olia", citiesVisited: ["Lviv", "Ternopil"] },
// // ];

// // console.log(getUsersInCity(users, "Lviv"));


// // 25 - homework task3

// // Напиши стрілочну функцію sortByDescendingFriendCount(users) ,
// //  яка прийматиме один параметр users — масив обєктів користувачів.

// // Функція має повертати масив усіх користувачів,
// //  відсортованих за спаданням кількості їх друзів (властивість friends).

// // Візьми код нижче і встав після оголошення своєї функції для
// //  перевірки коректності її роботи. У консоль будуть виведені результати її роботи.



// // const sortByDescendingFriendCount = (users) => {
// // return users.toSorted((fisrtName, secondName) => fisrtName.friends.length - secondName.friends.length);
// // };


// // console.log(
// //   sortByDescendingFriendCount([
// //     {
// //       name: "Moore Hensley",
// //       friends: ["Sharron Pace"],
// //       gender: "male"
// //     },
// //     {
// //       name: "Sharlene Bush",
// //       friends: ["Briana Decker", "Sharron Pace"],
// //       gender: "female"
// //     },
// //     {
// //       name: "Ross Vazquez",
// //       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //       gender: "male"
// //     },
// //     {
// //       name: "Elma Head",
// //       friends: ["Goldie Gentry", "Aisha Tran"],
// //       gender: "female"
// //     },
// //     {
// //       name: "Carey Barr",
// //       friends: ["Jordan Sampson", "Eddie Strong"],
// //       gender: "male"
// //     },
// //     {
// //       name: "Blackburn Dotson",
// //       friends: ["Jacklyn Lucas", "Linda Chapman"],
// //       gender: "male"
// //     },
// //     {
// //       name: "Sheree Anthony",
// //       friends: ["Goldie Gentry", "Briana Decker"],
// //       gender: "female"
// //     }
// //   ])
// // );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// // 25 - b

// // напиши стрілочну функцію sortByPostCount(users), яка приймає масив користувачів
// //  і повертає новий масив, відсортований за кількістю постів (posts) 
// //  - від більшої до меншої.


// const sortByPostCount = (users) => {
//   return users.toSorted((firstUser, secondUser) => secondUser.posts - firstUser.posts);
// }


// const users = [
//   { name: "Anna", posts: 10 },
//   { name: "Oleh", posts: 5 },
//   { name: "Dasha", posts: 20 },
// ];

// // 26 - homework task3

// // Напиши стрілочну функцію getTotalBalanceByGender(users, gender), 
// // яка прийматиме два параметра:

// // перший параметр users — масив обєктів користувачів,
// // другий параметр gender — рядок, що зберігає стать.
// // Функція має використовувати ланцюжок виклику методів та повертати 
// // загальний баланс користувачів (властивість balance),
// //  стать яких (властивість gender) збігається зі значенням параметра gender.

// // Візьми код нижче і встав після оголошення своєї функції для
// //  перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


// const getTotalBalanceByGender = (users, gender) => {
//    users.filter(user => user.gender === gender).reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };

// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

