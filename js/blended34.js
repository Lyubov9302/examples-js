// 1 - // Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// const bluesIndex = styles.indexOf('blues');
// if (bluesIndex !== -1) {
//     styles[bluesIndex] = "classic";
//     // styles.splice(bluesIndex, 1, "classic");
// }


// function logItems(array) {

//     for (let i = 0; i <= array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }


// logItems(styles);

// 2 - // Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє  виводить повідомлення: "User not found".

// const login = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//    const userName = prompt('Введіть імя');
//    if(!userName) {
//     return 'Invalid';
//    } 
//     if ( login.includes(userName)) {
//       alert(`Welcome ${userName}!`);
//    } else {
//     alert('User not found')
//    }
// };

// checkLogin(login);

// 3 - перевірка ролі користувача

// Є масив ролей: ["admin", "editor", "moderator"]
// Напиши функцію checkAccess(array), яка
// - запитує у користувача його роль через промт
// - якщо нічого не ввів - виводить Invalid input 
// - якщо введена роль є у масиві - виводить Access granted for <роль>
//  - інакше - виводить Access denied

// const roles = ["admin", "editor", "moderator"];

// function checkAccess(array) {
//     const yourRole = prompt('Введіть роль');

//     if(!yourRole) {
//         return 'Invalid input';
//     }

//     if (roles.includes(yourRole)) {
//         alert(`Access granted for ${yourRole}`);
//     } else {
//         alert('Access denied');
//     }
// };

// checkAccess(roles);


// 3 - // Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function caclculateAverage(...arg) {
//     let total = 0;
//     let count = 0;
//     for (const item of arg) {
//         if (typeof item === "number") {
//             count += 1;
//            total += item;
//         }
//     }
//     return total / count;
//     };

//     console.log(caclculateAverage(5, 6, 8, "hello"));


4 - напиши функцію sumEvenNumbers(...args), 
яка 
- приймає будь яку кількість аргументів
 - ігнорує все що не є числом
 - складає тільки парні числа
  - 