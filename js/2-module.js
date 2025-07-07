// 1 - method slice

// Отримати останні символи рядка

// Оголоси функцію getLastSubString(String, length)
// яка приймає два параметри:
// - string - початковий рядок 
// - length - скільки останніх символів треба повернути

// Повертає підрядок з кінця рядка, довжиною length.символів

// function getLastSubString(string, length) {
//     return string.slice(string.length - length);
// }

// або

// function getLastSubString(string, length) {
//     return string.slice(-length);
// }

// console.log(getLastSubString("JavaScript", 3));

// getLastSubString("JavaScript", 3); // "ipt"
// getLastSubString("Frontend", 4);   // "tend"
// getLastSubString("Hello", 2);      // "lo"