// 1 - color palette from long read 

// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }


// 2 -  спливання подій

// event.target - цілoьвий (вихідний) елемент
// - event.currentTarget - поточний елемент, на слухачі якого
// спймали подію

// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);
// innerChild.addEventListener("click", () => {
//     console.log("lalala");
// })

// function onParentClick(event) {
//     console.log("onParentClick target", event.target);
//     console.log("onParentClick currentTarget", event.currentTarget);
// }


// function onChildClick(event) {
//     console.log("onChildClick target", event.target);
//     console.log("onChildClick currentTarget", event.currentTarget);
// }


// function onInnerChildClick(event) {
//     event.stopImmediatePropagation();
//     console.log("onInnerChildClick target", event.target);
//     console.log("onInnerChildClick currentTarget", event.currentTarget);
// }


// 3 - додавання прослуховувача подій на кожен елемент
// Отримай колір квадратика по якому було здійснено клік 

// const container = document.querySelector(".container");

// [...container.children].forEach(box => {
//    box.addEventListener("click", handleClick);
// })

// function handleClick(event) {
// const color = event.currentTarget.dataset.color;
// console.log("color:", color);
// }


// 3 - b - Делегування подій

// Отримай колір, по якому було здійснено клік  

// const container = document.querySelector(".container");

// container.addEventListener("click", handleClick);

// function handleClick(event) {
// if(!event.target.classList.contains("box")) {
//     return;
// }

// const color = event.target.dataset.color;
// console.log(color);
// }


// 4 -	.	Створи картки з товарами на основі масиву products
// 📎 Приклад картки: https://prnt.sc/KmgDlzqoIA3M
// 	2.	Реалізуй делегування подій на колекції карток
// 🔘 Після кліку на картку повинно зявлятись модальне вікно з детальною інформацією про продукт
// 📎 Приклад модального вікна: https://prnt.sc/vWNoCezCw7ji
// 	3.	Для реалізації модального вікна використовуй бібліотеку basicLightbox

// const products = [
//     {
//       id: 1,
//       img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture11.jpg",
//       name: "Monitor",
//       price: 3000,
//       description: "23-inch monitor with Full HD resolution.",
//     },
//     {
//       id: 2,
//       img: "https://upload.wikimedia.org/wikipedia/commons/2/22/Keyboard3.jpg",
//       name: "Keyboard",
//       price: 800,
//       description: "Mechanical keyboard with RGB lighting.",
//     },
//     {
//       id: 3,
//       img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Computer_mouse.jpg",
//       name: "Mouse",
//       price: 500,
//       description: "Wireless ergonomic mouse.",
//     },
//   ];

//   const container = document.querySelector(".products");

// container.insertAdjacentHTML("beforeend", createMarkup(products));
// container.addEventListener("click", handleClick);


//   function createMarkup(arr) {
//     return arr.map(item => `
//         <li class="item product-item" data-id="${item.id}">
//         <img src="${item.img}" alt="${item.name}" width="300" />
//         <h2>${item.name}</h2>
//         <p>${item.price}грн</p>
//         </li>
//         `).join("");

//   }

//   function handleClick(event) {
// if(event.currentTarget === event.target) {
//     return;
// }

// const parent = event.target.closest(".product-item");
// const productId = parent.dataset.id;
// const product = products.find((item) => item.id === Number(productId));

// const instance = basicLightbox.create(`
// 	<div class="modal">
//     <img src="${product.img}" alt="${product.name}" />
//     <h2>${product.name}</h2>
//     <h3>${product.price}</h3>
//     <p>${product.description}</p>
//     </div>
// `)

// instance.show();
//   }

// 5 - деструктуризація обєкта в параметрах функціі

// `Hello my name is , i know html - , css - , and js -`

// const user = {
//   name: "Petya",
//   skills: {
//     html: true,
//     css: true,
//     js: false
//   }
// }
 

  // без деструктуризації 

//   function getUserInfo(obj) {

// console.log(`Hello my name is ${obj.name}, i know html - ${obj.skills.html}, css - ${obj.skills.css}, and js - ${obj.skills.js}`)

//   }

//   getUserInfo(user);


// з деструктуризацією 

// function getUserInfo({name, skills: { html, css, js }}) {
// console.log(`Hello my name is ${name}, i know html - ${html}, css - ${css}, and js - ${js}`)

// }

// getUserInfo(user);

// 6 - необхідно зробити рефакторинг функції calculateHousePerimeter,
// так, щоб вона приймала обєкт з параметрами будинку, включаючи
// довжини сторін будинку
// Функція повинна розрахувати та повернути параметр будинку 


// function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
//   const perimeter = sideA + sideB + sideC + sideD;
//   return perimeter;
// }

// const house = {
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15
// }


// const perimeter = calculateHousePerimeter(house);
// console.log(`Параметр будинку: ${perimeter}`);


// 7 - lightbox 

// Знаходимо кнопку, яка буде відкривати модальне вікно
const openLightboxBtn = document.querySelector('#open-lightbox');

// Створюємо екземпляр модального вікна
const instance = basicLightbox.create(`
  <h1>Not closable!</h1>
  <p>Це вікно не можна закрити кліком</p>
`, {
  closable: true
});

// Додаємо слухача подій на кнопку
openLightboxBtn.addEventListener('click', () => {
  
  instance.show(); // Цей рядок відкриває модальне вікно
});