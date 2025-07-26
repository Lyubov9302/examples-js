// // 1 - method slice

// // Отримати останні символи рядка

// // Оголоси функцію getLastSubString(String, length)
// // яка приймає два параметри:
// // - string - початковий рядок 
// // - length - скільки останніх символів треба повернути

// // Повертає підрядок з кінця рядка, довжиною length.символів

// // function getLastSubString(string, length) {
// //     return string.slice(string.length - length);
// // }

// // або

// // function getLastSubString(string, length) {
// //     return string.slice(-length);
// // }

// // console.log(getLastSubString("JavaScript", 3));

// // getLastSubString("JavaScript", 3); // "ipt"
// // getLastSubString("Frontend", 4);   // "tend"
// // getLastSubString("Hello", 2);      // "lo"


// // 2 - method includes() 

// // Доповни функцію checkForWord(sentence, word), 
// // щоб вона повертала true, якщо слово word входить у речення sentence,
// // незалежно від регістру символів. Інакше - false
// // sentence - рядок, що містить повне речення
// // word - слово, яке потрібно знайти у реченні
// // Перед перевіркою приведи обидва рядки до нижнього регістру


// // function checkForWord(sentence, word) {
// // const newSentece = sentence.toLowerCase();
// // const newWord = sentence.toLowerCase();
// // return newSentece.includes(newWord);
    
// // }

// // console.log(checkForWord("JavaScript is Awesome", "awesome")); // true  
// // checkForWord("Keep learning every day", "Learn");   // true  
// // checkForWord("Try your best", "test");              // false


// // 3 -  method indexOf()

// // Допиши функцію getDomainFromEmail(email), яка приймає email
// // і повертає тільки доменну частину, після @

// function getDomainFromEmail(email) {
// const newDomPart = email.indexOf('@');

// return email.slice(newDomPart + 1);

// }

// console.log(getDomainFromEmail("user@example.com"));     // "example.com"
// console.log(getDomainFromEmail("anna.koval@ukr.net"));   // "ukr.net"
// console.log(getDomainFromEmail("info@gmail.com"));       // "gmail.com"

// // 4 - method trim()

// // Допиши функцію createGreeting(name, day), 
// // яка приймає два рядки:
// // - name - імя користувача (може мати зайві пробіли на початку чи в кінці)
// // - day - назва дня тижня (наприклад "Tuesday")

// // Функція має повертати привітання у форматі:
// // "Hello, name [name]! Happy [day]!"

// function createGreeting(name, day) {
//     const nameNew = name.trim();
//      return `Hello, ${nameNew}! Happy ${day}!`
// }

// console.log(createGreeting(" Anna ", "Monday"));     // "Hello, Anna! Happy Monday!"
// console.log(createGreeting("Dmytro", "Friday"));     // "Hello, Dmytro! Happy Friday!"
// console.log(createGreeting("  Ira  ", "Sunday"));    // "Hello, Ira! Happy Sunday!"

// // 5 - цикл while 

// // Допиши функцію countEvenNumbers(number),
// // яка:
// // - приймає ціле число number
// // - рахує, скільки парних чисел є від 1 до number включно
// // - повертає цю кількість

// function countEvenNumbers(number) {
// let i = 1;
// let count= 0;


// while (i <= number) {
//     if ( i % 2 === 0 ) {
//     count++;
// }
// i++;

// }
// return count;
// }

// console.log(countEvenNumbers(5));    // 2  → (2, 4)
// console.log(countEvenNumbers(10));   // 5  → (2, 4, 6, 8, 10)
// console.log(countEvenNumbers(1));    // 0

// // 6 - цикл while 

// // Напиши функцію multiplyUpTo(number), яка:
// // - приймає число number 
// // - перемножує всі цілі числа від 1 до number включно
// // - повертає результат множення 


// function multiplyUpTo(number) {
//     let i = 1;
//     let result = 1;

//     while (i <= number) {
//         result = result * i;
//         i++;
//     }
//     return result;
// }

// console.log(multiplyUpTo(1));    // 1          → 1
// console.log(multiplyUpTo(3));    // 6          → 1 * 2 * 3
// console.log(multiplyUpTo(5));    // 120        → 1 * 2 * 3 * 4 * 5

// // 6 - цикл while  

// // напиши функцію countOddNumbers(), яка:
// // - приймає число numbers
// // - рахує скільки непарних чисел є від 1 до number включно
// // - повертає цю кількість

// function countOddNumbers(number) {
//    let i = 1;
//    let oddNumbers = 0;

//    while (i <= number) {
//     if (i % 2 !== 0) {
//         oddNumbers++;
//     }
//     i++;
//    }

//    return oddNumbers;
// }

// console.log(countOddNumbers(5));   // 3  → (1, 3, 5)
// console.log(countOddNumbers(10));  // 5  → (1, 3, 5, 7, 9)
// console.log(countOddNumbers(1));   // 1


// // 7 - цикл for 

// // Напиши функцію calculateMultiple(number), 
// // яка:
// // - приймає ціле число number;
// // - обчислює суму всіх числе від 1 до намбер, які діляться на 3 без остачі
// // - повертає суму

// function calculateMultiple(number) {
//     let totalNum = 0;

//     for (let i = 1; i <= number; i++) {
//         if (i % 3 === 0) {
//             totalNum += i;
//         }
//     }
//     return totalNum;
// }

// console.log(calculateMultiple(6));     // 3 + 6 = 9
// console.log(calculateMultiple(10));    // 3 + 6 + 9 = 18
// console.log(calculateMultiple(1));     // 0


// // 8 -  оператор break

// // Знайти перше парне число в діапазоні
// // Доповни код таким яином, щоб у змінну number записувалося
// // перше парне число від start to end


// // const start = 3;
// // const end = 12;
// // let number;

// // for (let i = start; i <= end; i++) {
// //     if (i % 2 === 0) {
// //         number = i;
// //         break;
// //     }

// // }
// // console.log(number);


// // 9 - Станція з продажу ремонтних дроїдів готова до запуску, 
// // залишилося написати програмне забезпечення для відділу продажів. 
// // Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
// //  яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// // Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// // quantity — кількість замовлених дроїдів
// // pricePerDroid — ціна одного дроїда
// // customerCredits — сума коштів на рахунку клієнта

// // Доповни функцію таким чином:

// // Оголоси змінну для зберігання загальної суми замовлення 
// // (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// // Додай перевірку, чи зможе клієнт оплатити замовлення:
// // якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// //  функція має повертати рядок "Insufficient funds!"
// // в іншому випадку функція має повертати рядок 
// // "You ordered <quantity> droids worth <totalPrice> credits!",
// //  де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.


// // function makeTransaction(quantity, pricePerDroid, customerCredits) {
// //     const totalPrice = quantity * pricePerDroid;
 
// //    if ( totalPrice > customerCredits) {
// //       return "Insufficient funds!";
// //     } else {
// //         return `You ordered ${quantity} droids worth ${totalPrice} credits!`

// //         }
// //     }


// // console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// // console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// // console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// // console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// // console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"


// // 10 --- (2 task homework) 
// // - Оголоси функцію formatMessage(message, maxLength), 
// // яка приймає рядок (параметр message) та перевіряє його довжину 
// // відповідно до заданої максимальної довжини (параметр maxLength).


// // Доповни код функції таким чином, що:

// // Якщо довжина рядка дорівнює або менша за maxLength, 
// // то функція повертає початковий рядок без змін.
// // Якщо довжина перевищує maxLength, 
// // то функція обрізає рядок до maxLength символів, додає трикрапку "..."
// //  в кінці та повертає обрізану версію.


// // Візьми код нижче і встав після оголошення своєї функції
// //  для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// // function formatMessage(message, maxLength) {
// //     if (message.length <= maxLength) {
// //         return message;
// //     } else {
// //         return message.slice(0, maxLength) + '...';
// //     }
// //     }
    

// // console.log(formatMessage('Happy birthday to you'));


// // 11 - Доповни код функції formatName(name, maxLength)
// // таким чином, щоб
// // - якщо довжина імені name не перевищує maxLength, 
// // функція повертає імя без змін
// // - якщо перевищує - скорочує імя до maxLength - 1 символів
// // - додає в кінець крапку щоб показати що імя було скорочено
// // і повертає скорочену версію імені

// // function formatName(name, maxLength) {
// //     if (name.length <= maxLength) {
// //         return name;
// //     } else {
// //         return name.slice(0, maxLength - 1) + '.';
// //     }
// // }

// // console.log(formatName('Oleksandr', 5));
// // console.log(formatName('Petro', 2));
// // console.log(formatName('Maryna', 4));

// // 12 - task3 homeWork

// // Функція checkForSpam(message) приймає рядок (параметр message), 
// // перевіряє його на вміст заборонених слів spam і sale, 
// // і повертає результат перевірки. Слова в рядку параметра message можуть бути
// //  в довільному регістрі, наприклад SPAM або sAlE.

// // Доповни код функції таким чином, що:

// // Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// // Якщо в рядку відсутні заборонені слова, функція повертає буль false


// // Візьми код нижче і встав після оголошення
// //  своєї функції для перевірки коректності її роботи.
// //   У консоль будуть виведені результати її роботи.

// // function checkForSpam(message) {
// //     const newMessage = message.toLowerCase();
// // return newMessage.includes("spam") || newMessage.includes("sale");
    
// // }

// // console.log(checkForSpam("Latest technology news")); // false
// // console.log(checkForSpam("JavaScript weekly newsletter")); // false
// // console.log(checkForSpam("Get best sale offers now!")); // true
// // console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// // console.log(checkForSpam("Trust me, this is not a spam message")); // true
// // console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// // console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// // 13 - напиши функцію checkPassword(password),
// // яка перевіряє чи містить рядок password заборонені символи
// // - ' '(пробіл)
// // - '!'
// // - '%'
// // -'@'

// // Якщо хоча б 1 із заборонених символів є в паролі -
// // повертаємо true (є порушення)
// // якщо таких немає - повертаємо false

// // function checkPassword(password) {
// //   return password.includes(' ') || password.includes('!') || password.includes('%') || password.includes('@') 
        
// //     }


// // console.log(checkPassword("MySecurePass123"));         // false
// // console.log(checkPassword("NoSpaceHere!"));            // true (бо '!')
// // console.log(checkPassword("password with space"));     // true (бо пробіл)
// // console.log(checkPassword("SuperSecure@2025"));        // true (бо '@')
// // console.log(checkPassword("CleanPass"));               // false

// // 14 - task 4 homework
// // Оголоси функцію getShippingCost(country), 
// // яка повинна перевіряти можливість доставки товару 
// // в країну користувача (параметр country) і повертати повідомлення про результат. 
// // Обов'язково використовуй інструкцію switch.

// // Формат рядка, що повертається "Shipping to <country> will cost <price> credits", 
// // де замість <country> і <price> необхідно підставити відповідні значення.


// // Список країн і вартість доставки:

// // China — 100 кредитів
// // Chile — 250 кредитів
// // Australia — 170 кредитів
// // Jamaica — 120 кредитів

// // Зі списку видно, що доставка можлива не скрізь.
// //  Якщо зазначена країна відсутня у списку, 
// //  то функція повинна повернути рядок 
// //  "Sorry, there is no delivery to your country".

// // Візьми код нижче і встав після оголошення своєї 
// // функції для перевірки коректності її роботи. 
// // У консоль будуть виведені результати її роботи.

// // function getShippingCost(country) {
// //     let message;
// //     let price;

// // switch (country) {
// //     case 'China':
// //     price = 100;
// //     return `Shipping to ${country} will cost ${price} credits`;
// //     break;

// // case 'Chile':
// //     price = 250;
// //     return `Shipping to ${country} will cost ${price} credits`;
// //      break;
// // case 'Australia':
// //     price = 170;
// //     return `Shipping to ${country} will cost ${price} credits`;
// //     break;
// // case 'Jamaica':
// //     price = 120;
// //     return `Shipping to ${country} will cost ${price} credits`;
// //     break;
// // default: 
// // return "Sorry, there is no delivery to your country";
// // }
// // }

// // console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// // console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// // console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// // console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// // console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// // console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
