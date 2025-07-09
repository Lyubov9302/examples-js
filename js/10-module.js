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

// 7 -- показуємо та ховаємо, додаючи та видаляючи клас is-visible
// - ховаємо через певний час
// - ховаємо при кліці
// - не забуваємо чистити таймер

// const NOTIFICATION_DELAY = 3000;

// const notification = document.querySelector(".js-alert");

// let timerId = null;

// notification.addEventListener('click', onNotificationClick);

// showNotification();



// function onNotificationClick() {
// hideNotification();
// clearTimeout(timerId);
// }



// function showNotification() {
//     notification.classList.add("is-visible");

//     timerId = setTimeout(() => {
//    console.log("hidden");

//        hideNotofication();
//     }, NOTIFICATION_DELAY)
// }


// function hideNotification() {
//     notification.classList.remove("is-visible");
// }

// 8 -- 
// - створення
// - unix - час
// - методи
// - різниця часу
// - Date.now()

const currentDate = new Date();

// const day = currentDate.getDay();
// const date = currentDate.getDate();
// const month = currentDate.getMonth();
// const year = currentDate.getFullYear();

// console.log(day);
// console.log(date);
// console.log(month);
// console.log(year);
// console.log(currentDate);

// можна перезаписати
// currentDate.setFullYear(2007);

// час який пройшов з 1.1.1970 на даний час
// console.dir(currentDate.getTime());

// console.dir(currentDate);


// отримати кількість мілісекунд іншим способом:

// console.log(Date.now());


// - рахуємо різницю часу

// const startTime = Date.now();

// setTimeout(() => {
//     const currentTime = Date.now();

//     console.log(currentTime - startTime);

// }, 2000);


// 9 - написати клас timer який буде 
// запускати та зупиняти відлік часу

