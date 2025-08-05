// 1 - отримай body елемент і виведи його в консоль;

const body = document.body;
console.log(body);


// 2 - отримай елемент id="title" і виведи його в консоль;


const title = document.querySelector("#title");
console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;

const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;

const dataTopicAll = document.querySelectorAll("[data-topic]");
console.log(dataTopicAll);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;

const dataTopic = document.querySelector("[data-topic]");
console.log(dataTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;


console.log(dataTopicAll[dataTopicAll.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;

console.log(title.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const titles3 = document.querySelectorAll("h3");
titles3.forEach(item => console.log(item));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір

titles3.forEach(item => item.classList.add("active"));

console.log(titles3);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;

const someLi = document.querySelector('[data-topic="navigation"]');
console.log(someLi);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим

someLi.style.backgroundColor = "yellow";

console.log(someLi);

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".

someLi.lastElementChild.textContent = "Я змінив тут текст!";


// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;

const currentTopic = "manipulation";

const topicEl = document.querySelector(`[data-topic = ${currentTopic}]`);

console.log(topicEl);


// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;

topicEl.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;

const completedTitle = document.querySelector('.completed');
console.log(completedTitle);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

completedTitle.parentNode.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і 
// задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"

const p = document.createElement("p");

p.textContent = "Об'єктна модель документа (Document Object Model)";

title.after(p);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" 
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - 
// це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, 
// потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

const itemEl = document.createElement('li');
itemEl.innerHTML = `<li><h3>"Властивість innerHTML" </h3><p>"Ще один спосіб створити DOM-елементи і помістити їх в дерево - 
це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". 
</p></li>`;
list.append(itemEl);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

list.insertAdjacentHTML('beforeend', `<li><h3>"Властивість innerHTML" </h3><p>
    "Ще один спосіб створити DOM-елементи і помістити їх в дерево - 
це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". 
</p></li>`
);
// 20 - очисти список

// list.innerHTML = '';


//2 -  Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).


const numberContainerEl = document.querySelector(".number-container");

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const elements = [];

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add("number");

const randomNum = randomNumber();
div.textContent = randomNum;

if(randomNum % 2 === 0) {
    div.classList.add("even");
} else {
    div.classList.add("odd");
}

elements.push(div);
}

numberContainerEl.append(...elements);




