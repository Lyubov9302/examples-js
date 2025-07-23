// 1 - 
const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

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