// 1 - Створення та додавання елементів
// Створеємо заголовок

// const titleEl = document.createElement("h1");

// titleEl.textContent = "My title";

// titleEl.classList.add("page-title");

// document.body.prepend(titleEl);


// 2 - Створення зображення
// https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg

// const imgEl = document.createElement("img");


// imgEl.src =  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg";
// imgEl.alt = "kitty";
// imgEl.width = 320;


// console.log(imgEl);

// const heroEl = document.querySelector('.hero');

// heroEl.append(imgEl, titleEl);


// 3 - створюємо та додаємо новий пункт меню (нову лішку)

// const navItemEl = document.createElement("li");

// navItemEl.classList.add("site-nav__item");


// const navLinkEl = document.createElement("a");
// navLinkEl.href = "/profile";
// navLinkEl.classList.add("site-nav__link");

// navLinkEl.textContent = "Lalala";


// navItemEl.append(navLinkEl);

// console.log(navItemEl);

// const siteNav = document.querySelector(".site-nav");

// siteNav.append(navItemEl);

// 4 -

// Створюємо та додаємо колекцію

// const options = [
//     { label: "червоний", color: "#f44369" },
//     { label: "бузковий", color: "#f56362" },
//     { label: "оранжевий", color: "#467692" },
//     { label: "чорний", color: "#943692" },
//     { label: "зелений", color: "#943692" },
//     { label: "фіолетовий", color: "#f46692" },
    
// ];

// const colorPickerContainerEl = document.querySelector('.color-picker');

// const elements = options.map((option) => {
//    const btn = document.createElement("button");

//    btn.classList.add("color-picker__option");
//    btn.textContent = option.label;

//    btn.style.backgroundColor = option.color;

//    return btn;

// })

// colorPickerContainerEl.append(...elements);


// 4 - b  пишемо функцію для створення розмітки колрпікера

// const createMarkup = (arr) => {
//     return arr.map((option) => {
//         const btn = document.createElement("button");
     
//         btn.classList.add("color-picker__option");
//         btn.textContent = option.label;
     
//         btn.style.backgroundColor = option.color;
     
//         return btn;
     
//      })
// }

// console.log(createMarkup(options));

// colorPickerContainerEl.append(...createMarkup(options));

// 5 - Властивість innerHTML 
// зчитування 
// запис

// const titleEl = document.querySelector('.title');

// console.log(titleEl.innerHTML);

// titleEl.innerHTML = '<a href="">Title</a>';
// titleEl.innerHTML ="";



// 6 - вставка розмітки за допомогою insertAdjacentHTML

// titleEl.insertAdjacentHTML("beforeend", ' <a href="">Title</a>');

// 7 - подія click

// Натискаючи на Click me змусь червоний 
// квадратик зміщуватись на 50px по діагоналі


// const btn = document.querySelector(".js-click");

// const box = document.querySelector(".js-box");

// btn.addEventListener("click", handleClick);
// box.addEventListener("click", handleClick);
 
// let step = 0;


// function handleClick() {
//     step += 50;
//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;
// }

// 8  - подія input
// подія blur

// Виводь в консоль все, що користувач вводить в input


// checkbox


//  const jsCheckbox = document.querySelector(".js-checkbox");

//  jsCheckbox.addEventListener("change", () => {
//        console.log("ok");

//  })

// input 

// const userName = document.querySelector(".js-user-name");

// userName.addEventListener("input", (event) => {
//     console.log(event.target.value);

// })


// 9 - користувач вводить в input своє імя після
// втрати фокусу отримує alert з повідомленням привітання



// const userName = document.querySelector(".js-user-name");

// userName.addEventListener("blur", (event) => {
//     const name = event.target.value;

//     alert(`Hello ${name}`)
// })

// 10 - подія submit 
// Дії браузера за замовчуванням
// Властивість elements 

// Оброби форму та збери відгук користувача в обєкт 

// const form = document.querySelector(".js-form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
// event.preventDefault();


// const elements = event.target.elements;


// const info = {
//     email: elements.email.value,
//     password: elements.password.value,
//     comment: elements.comment.value
// }

// console.log(info);
// event.target.reset();

// }