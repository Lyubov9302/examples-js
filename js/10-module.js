// 1 - method window.setTimeout();

// console.log("before");


// setTimeout(() => {
//     console.log("timer 1");
// }, 2000);

// setTimeout(() => {
//     console.log("timer 2");
// }, 1500);

// console.log("after");

// 2 - очищення таймаута за допомогою clearTimeout(timeoutId);

// const logger = () => {
//     console.log("logger");
// }

// const timerId = setTimeout(logger, 2000);

// clearTimeout(timerId);


// 3 - можливість передати параметри для колбеку

// const logger = (time) => {
//         console.log(`logger.${time}`);
//     }
    
//     const timerId = setTimeout(logger, 2000, "2s");



// 4 -  вправа з кахуту 


// for (let i = 3; i > 0; i--) {
//     const delay = i * 1000;


//     setTimeout(() => {
//         console.log(i);
//     }, delay)
// }


// 5 - method setInterval() 


// setInterval((time) => {
//     console.log("timer", time);
// }, 2000, "2s");

// 6 - очищення інтервалу за допом clearInterval(intervalId)

// const timerId = setInterval(() => {
//          console.log("timer");
// }, 2000)

// // запуститься 2 таймера і через 5000мс зупиниться
// setTimeout(() => {
//     clearInterval(timerId);
// }, 5000)

