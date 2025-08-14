// 1 - a 
// У прикладі коду нижче через дві секунди після натискання 
// на кнопку в консолі розробника з'явиться повідомлення,
//  вказане в колбек-функції для setTimeout. 
//  При кожному натисканні на кнопку буде запускатися новий таймер,
//   якому буде присвоюватися новий числовий ідентифікатор.

// const button = document.querySelector("button");

// const onClick = () => {
//   const timerId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);

//   console.log(timerId);
// };

// button.addEventListener("click", onClick);
// 
// 
// 
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

// або через зовнішню функцію

// setTimeout((time, name) => {
// console.log(`logger, ${time}, ${name}`)

// }, 2000, "2s", "Alice");



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

// // 1 a- отримуєм посил на елем 
// const notification = document.querySelector(".js-alert");

// // 4 - створюєм змінну 
// let timerId = null;


// 2 b - ховаємо при кліці, тому вішаєм клік на цей елем 
// notification.addEventListener('click', onNotificationClick);

// // 1 - c викликаєм функцію
// showNotification();


// // 2 - c додаєм функцію 
// function onNotificationClick() {
//     // 3 - b замість того рядка викликаєм нову функцію
//     hideNotification();

//     // 4-с - якщо клікаєм по елем, то метод отримує айді і припиняє таймер 
//    clearTimeout(timerId);

// }


// // 1 - b - додаєм клас 
// function showNotification() {
//     notification.classList.add("is-visible");

//     // 2 - ховаємо через певний час

//     // 4 - b - присвоюєм щоб отримати айді інтервалу
//     timerId = setTimeout(() => {
//    console.log("hidden");

// //  3 - b замість того рядка викликаєм нову функцію
//        hideNotification();
//     }, NOTIFICATION_DELAY)
// }

// // 3 - рядок notification.classList.remove("is-visible")
// // дублювавася, тому ми сторили цю функцію 
// function hideNotification() {
//     notification.classList.remove("is-visible");
// }


// 8 -- 
// - створення
// - unix - час
// - методи
// - різниця часу
// - Date.now()

// const currentDate = new Date();

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


// 8 - b напишемо клас Timer, який буде 
// запускати та зупиняти відлік часу 


// 1 a 
const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockFace = document.querySelector('.clockface');

// 1 b ств клас 
class Timer {

    // 7 с - 
    constructor( {onTick } ) {
       this.onTick = onTick;

    //    / 10 - створюєм властивість обєкта, 
    // яка буде відвовідати за те чи запущений
    // таймер чи ні
    this.isActive = false;

    // 12 - b сторюєм властив для зберігання id 
    this.intervalId = null;


    // 11 - b викликаєм його 
    this.init();
    }

// 11 - сторюєм method який буде створ обєкт з усіма нулями

init() {
const time = this.getTimeComponent(0);
// відображаєм на сторінці 
this.onTick(time);
}
    


// 2 a - ствр функцію для запуску відліку часу 

// 10 - b додаєм умову, яка перевіряє чи запущений
// таймер чи ні 
start() {

    // якщо тру то таймер запущений і не треба щоб 
    // функція старт працювала і тоді припиняєм роботу функції
    if(this.isActive) {
        return 
    }

    // 10 - c якщо він не запущений то запускаєм таймер
    this.isActive = true;

    // 2 - b дізнаємост скільки мілісек було коли ми клікнули
    const startTime = Date.now();


    // 12 - c зберігаєм резуль роботи інтервалу, додаючи
    // this.intervalId = наперед 
   this.intervalId = setInterval(() => {

    //2 - c  отримуєм поточний час 
    const currentTime = Date.now();
    // 2 - e рах різницю між поточним часом і часом натискання кнопки 
    const dataTime = currentTime - startTime;
    // 5 - 
    // робим це і отрим помилку, бо в зис втрач контекст 
    const time = this.getTimeComponent(dataTime);


    // 8 - викликаєм передаєм об і отрим актуальні дані на сторінці
    this.onTick(time);
   
    console.log(time);


   }, 1000)
}

// 12 - робим стоп таймера 

stop() {

// 12 - d виклик метод і вписуєм той інтервал  = 
// oчисти такое то значеняя
clearInterval(this.intervalId);

// 12-f - робим, щоб все було нуликами, коли тиснем стоп 
this.init();

// якщо натиск на стоп ,щоб власти isActive ставала false 
// і ми могли повторно запустит лічильник 
this.isActive = false;
}



// 4 - створюєм функцію, яка буде для того щоб перетворити мілісек
// в сек хв і год 
getTimeComponent(time) {

  // 6 - округляєм за допом Math.floor() 
//   9 - b  огортаєм вираз у this.pad 
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

// 4 - b повертаєм обєкт 
    // return {
    //     hours: hours,
    //     mins: mins,
    //     secs: secs
    // }

    // або так, за коротким синтаксисом 
    return { hours, mins, secs };

}


// 9 - додаєм нуль до секунд , щоб довж була 2 символи
pad(value) {
    return String(value).padStart(2, "0");
}

}


// 1 b - і екземпляр класу ;  7 b - передаєм агументи в дужки: ключ 
//                                   і моя функція
const time = new Timer( {onTick: updateClockface} );

// 3 - запустити таймер
startBtn.addEventListener('click', time.start.bind(time));

// 12 - e вішаєм слухач на кнопку стоп 
stopBtn.addEventListener('click', time.stop.bind(time));

// 5 - b тому додаєм bind вище щоб привязати контекст,  
// щоб на п.5 могли звертатись до this як time component 

// 7 - cтв фунцію 

function updateClockface( { hours, mins, secs } ) {
    clockFace.textContent = `${hours}:${mins}:${secs}`;
}



// ------------------ або це саме але без this 

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);


let isActive = false;
let intervalId = null;

function init() {
    const time = getTimeComponent(0);
    onTick(time);
    }

init()

function onTick( { hours, mins, secs } ) {
    clockFace.textContent = `${hours}:${mins}:${secs}`;
}

function start() {

    if(isActive) {
        return 
    }

    isActive = true;

    const startTime = Date.now();

     intervalId = setInterval(() => {

    const currentTime = Date.now();
    const dataTime = currentTime - startTime;
    const time = getTimeComponent(dataTime);

    onTick(time);
    console.log(time);


   }, 1000)
}


function stop() {

    clearInterval(this.intervalId);
    init();
    isActive = false;
    }

function getTimeComponent(time) {


      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
      return { hours, mins, secs };
  
  }

  function pad(value) {
    return String(value).padStart(2, "0");
}
