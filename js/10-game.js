
// /  - напиши програмне забзепечення для ігрового автомату 
// Для вирішення використовуй готову розмітку

// Після натисн на кнопку "Start game" в кожному 
// віконці по черзі має зявлятись смайлик з затримкою в 1 сек 
// ("🤑" or "😈" )

// під час обробки кожного віконця створи масив з промісами,
// в якому кожен з них буде відповідати за своє віконце,
// після чого оброби масив за домопогою методу Promise.allSettled

// Після того як всі вікнонця були заповнені потрібно, щоб 
// скріпт автоматично визначав чи гравець переміг, чи ні.
// Якщо в кожному віконці однаковий смайлик - це означає, що користувач переміг

// В поле result виводиться повідомлення: "Winner" or "Loser"

// Після повторного натискання на кнопку "Start game" поле
// має очищатись, а гра починатись з початку.

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.container');
const result = document.querySelector('.result');

startBtn.addEventListener('click', handleStart);

function handleStart() {
result.textContent = '';

startBtn.disabled = true;

// квадратні дужки перетв псевдомасив на масив 
const promise = [...container.children].map(() => {
    return new Promise((resolve, reject) => {
const random = Math.random();

if(random > 0.5) {
    resolve("🤑" );
} else {
    reject("😈");
}

    })
})



Promise.allSettled(promise)
.then(items => {
const isWinner = items.every((item) => item.status === "fulfilled") ||
items.every((item) => item.status === "rejected")




items.forEach((item, i) => {
        container.children[i].textContent = "";
   
        setTimeout(() => { 
        container.children[i].textContent = item.value || item.reson;

        if(i === items.length - 1) {

        result.textContent = isWinner ? "Winner" : "Loser";
        startBtn.disabled = false;
        }
    }, 1000 * (i + 1))
    })
})

}