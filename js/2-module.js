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


// 2 - method includes() 

// Доповни функцію checkForWord(sentence, word), 
// щоб вона повертала true, якщо слово word входить у речення sentence,
// незалежно від регістру символів. Інакше - false
// sentence - рядок, що містить повне речення
// word - слово, яке потрібно знайти у реченні
// Перед перевіркою приведи обидва рядки до нижнього регістру


// function checkForWord(sentence, word) {
// const newSentece = sentence.toLowerCase();
// const newWord = sentence.toLowerCase();
// return newSentece.includes(newWord);
    
// }

// console.log(checkForWord("JavaScript is Awesome", "awesome")); // true  
// checkForWord("Keep learning every day", "Learn");   // true  
// checkForWord("Try your best", "test");              // false


// 3 -  method indexOf()

// Допиши функцію getDomainFromEmail(email), яка приймає email
// і повертає тільки доменну частину, після @

function getDomainFromEmail(email) {
const newDomPart = email.indexOf('@');

return email.slice(newDomPart + 1);

}

console.log(getDomainFromEmail("user@example.com"));     // "example.com"
console.log(getDomainFromEmail("anna.koval@ukr.net"));   // "ukr.net"
console.log(getDomainFromEmail("info@gmail.com"));       // "gmail.com"

// 4 - method trim()

// Допиши функцію createGreeting(name, day), 
// яка приймає два рядки:
// - name - імя користувача (може мати зайві пробіли на початку чи в кінці)
// - day - назва дня тижня (наприклад "Tuesday")

// Функція має повертати привітання у форматі:
// "Hello, name [name]! Happy [day]!"

function createGreeting(name, day) {
    const nameNew = name.trim();
     return `Hello, ${nameNew}! Happy ${day}!`
}

console.log(createGreeting(" Anna ", "Monday"));     // "Hello, Anna! Happy Monday!"
console.log(createGreeting("Dmytro", "Friday"));     // "Hello, Dmytro! Happy Friday!"
console.log(createGreeting("  Ira  ", "Sunday"));    // "Hello, Ira! Happy Sunday!"

// 5 - цикл while 

// Допиши функцію countEvenNumbers(number),
// яка:
// - приймає ціле число number
// - рахує, скільки парних чисел є від 1 до number включно
// - повертає цю кількість

function countEvenNumbers(number) {
let i = 1;
let count= 0;


while (i <= number) {
    if ( i % 2 === 0 ) {
    count++;
}
i++;

}
return count;
}

console.log(countEvenNumbers(5));    // 2  → (2, 4)
console.log(countEvenNumbers(10));   // 5  → (2, 4, 6, 8, 10)
console.log(countEvenNumbers(1));    // 0

// 6 - цикл while 

// Напиши функцію multiplyUpTo(number), яка:
// - приймає число number 
// - перемножує всі цілі числа від 1 до number включно
// - повертає результат множення 


function multiplyUpTo(number) {
    let i = 1;
    let result = 1;

    while (i <= number) {
        result = result * i;
        i++;
    }
    return result;
}

console.log(multiplyUpTo(1));    // 1          → 1
console.log(multiplyUpTo(3));    // 6          → 1 * 2 * 3
console.log(multiplyUpTo(5));    // 120        → 1 * 2 * 3 * 4 * 5

// 6 - цикл while  

// напиши функцію countOddNumbers(), яка:
// - приймає число numbers
// - рахує скільки непарних чисел є від 1 до number включно
// - повертає цю кількість

function countOddNumbers(number) {
   let i = 1;
   let oddNumbers = 0;

   while (i <= number) {
    if (i % 2 !== 0) {
        oddNumbers++;
    }
    i++;
   }

   return oddNumbers;
}

console.log(countOddNumbers(5));   // 3  → (1, 3, 5)
console.log(countOddNumbers(10));  // 5  → (1, 3, 5, 7, 9)
console.log(countOddNumbers(1));   // 1


// 7 - цикл for 

// Напиши функцію calculateMultiple(number), 
// яка:
// - приймає ціле число number;
// - обчислює суму всіх числе від 1 до намбер, які діляться на 3 без остачі
// - повертає суму

function calculateMultiple(number) {
    let totalNum = 0;

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0) {
            totalNum += i;
        }
    }
    return totalNum;
}

console.log(calculateMultiple(6));     // 3 + 6 = 9
console.log(calculateMultiple(10));    // 3 + 6 + 9 = 18
console.log(calculateMultiple(1));     // 0

