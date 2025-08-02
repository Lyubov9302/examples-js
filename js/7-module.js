// // 1 - Створення та додавання елементів
// // Створеємо заголовок

// // const titleEl = document.createElement("h1");

// // titleEl.textContent = "My title";

// // titleEl.classList.add("page-title");

// // document.body.prepend(titleEl);


// // 2 - Створення зображення
// // https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg

// // const imgEl = document.createElement("img");


// // imgEl.src =  "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg";
// // imgEl.alt = "kitty";
// // imgEl.width = 320;


// // console.log(imgEl);

// // const heroEl = document.querySelector('.hero');

// // heroEl.append(imgEl, titleEl);


// // 3 - створюємо та додаємо новий пункт меню (нову лішку)

// // const navItemEl = document.createElement("li");

// // navItemEl.classList.add("site-nav__item");


// // const navLinkEl = document.createElement("a");
// // navLinkEl.href = "/profile";
// // navLinkEl.classList.add("site-nav__link");

// // navLinkEl.textContent = "Lalala";


// // navItemEl.append(navLinkEl);

// // console.log(navItemEl);

// // const siteNav = document.querySelector(".site-nav");

// // siteNav.append(navItemEl);

// // 4 -

// // Створюємо та додаємо колекцію

// // const options = [
// //     { label: "червоний", color: "#f44369" },
// //     { label: "бузковий", color: "#f56362" },
// //     { label: "оранжевий", color: "#467692" },
// //     { label: "чорний", color: "#943692" },
// //     { label: "зелений", color: "#943692" },
// //     { label: "фіолетовий", color: "#f46692" },
    
// // ];

// // const colorPickerContainerEl = document.querySelector('.color-picker');

// // const elements = options.map((option) => {
// //    const btn = document.createElement("button");

// //    btn.classList.add("color-picker__option");
// //    btn.textContent = option.label;

// //    btn.style.backgroundColor = option.color;

// //    return btn;

// // })

// // colorPickerContainerEl.append(...elements);


// // 4 - b  пишемо функцію для створення розмітки колрпікера

// // const createMarkup = (arr) => {
// //     return arr.map((option) => {
// //         const btn = document.createElement("button");
     
// //         btn.classList.add("color-picker__option");
// //         btn.textContent = option.label;
     
// //         btn.style.backgroundColor = option.color;
     
// //         return btn;
     
// //      })
// // }

// // console.log(createMarkup(options));

// // colorPickerContainerEl.append(...createMarkup(options));

// // 5 - Властивість innerHTML 
// // зчитування 
// // запис

// // const titleEl = document.querySelector('.title');

// // console.log(titleEl.innerHTML);

// // titleEl.innerHTML = '<a href="">Title</a>';
// // titleEl.innerHTML ="";



// // 6 - вставка розмітки за допомогою insertAdjacentHTML

// // titleEl.insertAdjacentHTML("beforeend", ' <a href="">Title</a>');

// // 7 - подія click

// // Натискаючи на Click me змусь червоний 
// // квадратик зміщуватись на 50px по діагоналі


// // const btn = document.querySelector(".js-click");

// // const box = document.querySelector(".js-box");

// // btn.addEventListener("click", handleClick);
// // box.addEventListener("click", handleClick);
 
// // let step = 0;


// // function handleClick() {
// //     step += 50;
// //     box.style.marginTop = `${step}px`;
// //     box.style.marginLeft = `${step}px`;
// // }

// // 8  - подія input
// // подія blur

// // Виводь в консоль все, що користувач вводить в input


// // checkbox


// //  const jsCheckbox = document.querySelector(".js-checkbox");

// //  jsCheckbox.addEventListener("change", () => {
// //        console.log("ok");

// //  })

// // input 

// // const userName = document.querySelector(".js-user-name");

// // userName.addEventListener("input", (event) => {
// //     console.log(event.target.value);

// // })


// // 9 - користувач вводить в input своє імя після
// // втрати фокусу отримує alert з повідомленням привітання



// // const userName = document.querySelector(".js-user-name");

// // userName.addEventListener("blur", (event) => {
// //     const name = event.target.value;

// //     alert(`Hello ${name}`)
// // })

// // 10 - подія submit 
// // Дії браузера за замовчуванням
// // Властивість elements 



// // Оброби форму та збери відгук користувача в обєкт 

// // const form = document.querySelector(".js-form");

// // form.addEventListener("submit", handleSubmit);

// // function handleSubmit(event) {
// // event.preventDefault();


// // const elements = event.target.elements;


// // const info = {
// //     email: elements.email.value,
// //     password: elements.password.value,
// //     comment: elements.comment.value
// // }

// // console.log(info);
// // event.target.reset();

// // }

// // 11 - типи подій: keypress,
// // keydown, keyup

// // - Обмеження keypress
// // - Властивості key та code 


// // document.addEventListener("keyup", handleKeyPress);

// // function handleKeyPress(event) {

// // if(event.code === 'Escape') {
// //     console.log("Escape");
// // } else {
// //     console.log("Oops");
// // }
// // }


// // 12 - обробка комбінацій клавіш

// // document.addEventListener("keydown", handleKeyPress);

// // function handleKeyPress(event) {

// //    if(event.ctrKey && event.code === "KeyC") {

// //     event.pr4eventDeafult();
// //    }
// // }

// // 13 - Події миші
// // - mouseenter i mouseleave (це ховер)
// // - mouseover i mouseout
// // - mousemove (chatty event) - балакуча подія


// // const boxx = document.querySelector(".js-box");

// // boxx.addEventListener("mouseover", onMouseEnter);
// // boxx.addEventListener("mouseout", onMouseLeave);
// // boxx.addEventListener("mousemove", onMouseMove);

// // function onMouseMove(event) {
// //     console.log(event);
// // }

// // function onMouseEnter() {
// // console.log("mouseover");

// // }

// // function onMouseLeave() {
// //     console.log("mouseout");
// // }

// // 14 - Реалізуй пошук авто по сайту

// // Користувач потрапляє на сайт і одразу бачить форму для пошуку
// // і картки всіх автомобілів (масив cars) 
// // Користувач може ввести в форму назву Марки або Моделі авто і в 
// // тегу селект обрати що він вибрав: марку або модель
// // Після натиск кнопки пошуку відмалюй авто які збігаються  
// // з критеріями пошуку

// const cars = [
//     {
//       id: 1,
//       car: "Audi",
//       type: "A6",
//       price: 30000,
//       img: "https://static.wixstatic.com/media/90aeac_387aa63e45394ad9bdf915b6b9629f21~mv2.jpg"
//     },
//     {
//       id: 2,
//       car: "Honda",
//       type: "Civic",
//       price: 12000,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYkFuhOzKciDv2epVKqG1bAyFrHybYyGeYg"
//     },
//     {
//       id: 3,
//       car: "BMW",
//       type: "X5",
//       price: 45000,
//       img: "https://www.bmwusa.com/content/dam/bmwusa/x5/2021/overview/BMW-MY21-X5-Overview-Hero-Desktop.jpg"
//     },
//     {
//       id: 4,
//       car: "Toyota",
//       type: "Camry",
//       price: 20000,
//       img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/2018_Toyota_Camry_SE_front_4.22.18.jpg"
//     },
//     {
//       id: 5,
//       car: "Tesla",
//       type: "Model 3",
//       price: 38000,
//       img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_Model_3_parked%2C_front_driver_side.jpg"
//     },
//     {
//       id: 6,
//       car: "Mercedes-Benz",
//       type: "C-Class",
//       price: 35000,
//       img: "https://media.ed.edmunds-media.com/mercedes-benz/c-class/2021/oem/2021_mercedes-benz_c-class_sedan_amg-c-63_fq_oem_1_1280.jpg"
//     }
//   ];


// // const form = document.querySelector(".js-form");
// // const container = document.querySelector(".js-list");


// // form.addEventListener("submit", handleSubmit);

// // function createMarkup(arr) {
// //     return arr.map((car) => `
// //      <li class="car-card>
// //      <img src="${car.img}" alt="${car.type}" class="car-image" />
// //       <h2 class="car-title">${car.car}</h2>
// //       <h3 class="car-type">${car.type}</h3>
// //       <p class="car-price">${car.price}$</p>
// //      </li>
// //     `).join("");
// // }

// // container.style.display = "flex";
// // container.style.flexWrap = "wrap";
// // container.style.gap = "25px";

// // container.insertAdjacentHTML("beforeend", createMarkup(cars));


// // function handleSubmit(event) {
// //     event.preventDefault();


// //  const query = event.target.elements.query.value;
// //  const options = event.target.elements.options.value;

// //  const result = cars
// //  .filter((item) => item[options].toLowerCase().includes(query.toLowerCase()));

// //  container.innerHTML = createMarkup(result);


// // }

// 15 - homework task1



// const categoriesList = document.querySelector("#categories");
// const categoryItems = categoriesList.querySelectorAll(".item");

// console.log(`Number of categories: ${categoryItems.length}`);


// categoryItems.forEach(item => {
//     const title = item.querySelector("h2").textContent;
//     const elementsCount = item.querySelectorAll("li").length;



//     console.log(`Category: ${title}`);
//     console.log(`Elements: ${elementsCount}`);
// })

// 15 - b 

// напиши скрипт, який
// - порахує і виведе кількість студентів у списку
// - для кожного студента:
// виведе імя ( текст з h2)
// виведе кількість курсів (вкладених <li></li>)
// - виведе сам список курсів ( у форматі рядка)

// const list = document.querySelector("#students");

// const countStudents = list.querySelectorAll(".student");

// console.log('Number of students:', countStudents.length);

// countStudents.forEach(student => {
//     const name = student.querySelector("h2").textContent;
//     const courses = Array.from(student.querySelectorAll("ul li")).map(li => li.textContent);

//     console.log(`Student: ${name}`);
//     console.log(`Courses count:, ${courses.length}`);
//     console.log(`Courses:, ${courses.join(", ")}`);
// })





// 16 - hometask 2

// Напиши скрипт для створення галереї зображень
//  на основі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення
//  елементів <img>, вкладених в <li>.

// Ти можеш створити й додати HTML-елементи, використовуючи 
// document.createElement() і elem.append() або шаблонні рядки
//  і elem.insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за 
// одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами через CSS класи.


// const images = [
//      {
//      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//      alt: "White and Black Long Fur Cat",
//      },
//      {
    //  url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    //  alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    //  },
    //  {
    //  url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    //  alt: "Group of Horses Running",
    //  },
    //  {
    //  url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    //  alt: "Alpine Spring Meadows",
    //  },
    //  {
    //  url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    //  alt: "Nature Landscape",
    //  },
    //  {
    //  url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    //  alt: "Lighthouse Coast Sea",
    //  },
    // ];
    


// const gallery = document.querySelector(".gallery");
    

// const galleryItems = images
// .map(({url, alt}) => `<li><img src="${url}" alt="${alt}" width="300"/></li>`)
// .join('');

// gallery.insertAdjacentHTML('beforeend', galleryItems);

// 16 - b 
// Є масив products, у якому зберігається інформація про товари
// Створи список li з html картками для кожного товару:
// - назва (name)
// - price
// - img
// Додай усі картки всередину <ul class="products" - зроби флекс-бокс сітку

// const products = [
//     {
//       name: "iPhone 13",
//       price: 1000,
//       img: "https://example.com/iphone.jpg"
//     },
//     {
//       name: "MacBook Pro",
//       price: 2500,
//       img: "https://example.com/macbook.jpg"
//     },
//     {
//       name: "Apple Watch",
//       price: 500,
//       img: "https://example.com/watch.jpg"
//     }
//   ];


//   const productsList = document.querySelector(".products");

//   const productItems = products.map(({name, price, img}) => `
//   <li>
//   <h2>${name}</h2>
//   <p>${price}</p>
//   <img src="${img}" width="150"/>
//   </li>
  
//   `) .join("");


//   productsList.insertAdjacentHTML("beforeend", productItems);

// 17 - hometask 3

// Напиши скрипт, який під час набору тексту в інпуті
//  input#name-input (подія input) підставляє його поточне 
//  значення в span#name-output як імя для привітання. Обовязково 
//  очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить
//   лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// const input = document.querySelector("#name-input");
// const output = document.querySelector('#name-output');

// input.addEventListener("input", () => {
//         const name = input.value.trim();
    
//         output.textContent = name === ' ' ? 'Anonymous' : name;
//     });

// 17 - b 
// Створи скрипт, який під час набору тексту в інпуті input#message-input
// 1) підставляє очищене значення в div#message-output у вигляді повідомлення
// 2)якщо в інпуті порожній рядок - виводиться повідомлення "No message to display"
// 3) якщо повідомлення містить слово error - відображається "Potencial error detected"
// 4) використовуй trim i умовний(тернарний) оператор


// const input = document.querySelector("#message-input");
// const output = document.querySelector("#message-output");

// input.addEventListener("input", () => {
//     const message = input.value.trim();

//     output.textContent = message === ' ' ? "No message to display" 
//     : message.toLowerCase().includes("error") ? "Potencial error detected" : message;

// or 
// if (message === '') {
//     output.textContent = 'No message';
//   } else if (message.includes('error')) {
//     output.textContent = '⚠️ Error';
//   } else {
//     output.textContent = message;
//   }
// })


// 18 - hometask 4

// Напиши скрипт управління формою логіна.

// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь 
// alert з попередженням про те, що 'All form fields must be filled in'.
//  Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт з двома властивостями, 
// де ключ — це ім'я інпутів, а значення — відповідні 
// значення цих інпутів, очищені від пробілів по краях. 
// Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в 
// консоль і очисти значення полів форми методом reset.


// const form = document.querySelector(".login-form");


// form.addEventListener('submit', (event) => {
//     event.preventDefault();


    // const { 
    //     elements: {email, password}, 
    // } = event.currentTarget;

    // or 

    // const currentForm = event.currentTarget;
    // const email = currentForm.elements.email;
    // const password = currentForm.elements.password;



    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();

    // if (emailValue === '' || passwordValue === '') {
    //     alert('All form fields must be filled in');
    //     return;
    // }

//     const formData = {
//         email: emailValue,
//         password: passwordValue,
//     };

//     console.log(formData);

//     form.reset();

// });

// 18 - b 

// Перевірка реєстраційної форми 
// Користувач вводить пошту і пароль у форму з класом .register-form
// Після натискання на кнопку register:
// - якщо будь яке поле порожнє - показати alert('All fields are required')
// - якщо імейл не містить @ або крапку - показати alert('Invalid email format')
// - якщо пароль коротший за 6 символів - alert('Password must be at least 6 characters')
// Якщо все гараз - вивести у консоль обєкт з імейлом і пасворд
// очистити форму метолом ресет()


// const registerForm = document.querySelector(".register-form");

// registerForm.addEventListener('submit', (event) => {
//         event.preventDefault();

    //     const form = event.currentTarget;
    //     const email = form.elements.email;
    // const password = form.elements.password;

    // const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();

    // const formData = {
    //             email: emailValue,
    //             password: passwordValue,
    //         };
        


//     if (emailValue === '' || passwordValue === '') {
//             alert('All fields are required');
//             return;
//         } 

//          if (!emailValue.includes("@") || !emailValue.includes(".")) {
//             alert('Invalid email format');
//             return;
//         } 
         
//             console.log(formData);
//             form.reset();

// });

// 19 - hometask5 

// Напиши скрипт, який змінює колір фону елемента <body> через 
// інлайн-стиль по кліку на button.change-color 
// і задає це значення кольору текстовим вмістом для span.color.


// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
//   }
  
//   const button = document.querySelector('.change-color');
//   const span = document.querySelector('.color');

// button.addEventListener('click', () => {
//     const color = getRandomHexColor();
//     document.body.style.backgroundColor = color;
//     span.textContent = color;
//   });


// 19 - b 
// Історія кольорів

// При настисканні кнопки:
// генеруєтся випадковий колір 
// змінюється фон сторінки на цей колір 
// виводиться його код у спан class="color"
// кольори додаються в список історіі 

// Історія це список  ul class="history", 
// де кожен li показує попередній колір 

// Максимальна довжина історіі - 5 кольорів, попередні видаляються


// function getRandomHexColor() {
//         return `#${Math.floor(Math.random() * 16777215)
//           .toString(16)
//           .padStart(6, 0)}`;
//       }

// const btn = document.querySelector(".change-color");
// const span = document.querySelector(".color");

// const list = document.querySelector(".history");



// btn.addEventListener("click", () => {
//     const color = getRandomHexColor();
//     document.body.style.backgroundColor = color;
//     span.textContent = color;

//     const li = document.createElement("li");
//     li.textContent = color;
//     li.style.color = color;


//     list.prepend(li);

//     if(list.children.length > 5) {
//         list.lastElementChild.remove();
//     }
// })

