// 1 - основи запиту
// - fetch API
// - URL запиту
// - Вкладка Network
// - Обробка відповіді (404 з fetch)
// - 


// https://jsonplaceholder.typicode.com/todos 

// const list = document.querySelector(".todo-list");

// const params = new URLSearchParams({
// _limit: 5,
// _page: 1

// });

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
// .then((res) => {

//     // відловлюєм помилку вручну і перекидаєм в catch 
//     if(!res.ok) {
//         throw new Error(res.status);
//     }
// //  або повернем результат робити json з параметром res 
//     return res.json();
// })
// .then(data => {
// console.log("then:", data);
// list.insertAdjacentHTML("beforeend", createMarkup(data));
// })
// .catch(error => {
//     console.log("catch:", error);
// })



// function createMarkup(todos) {
//     return todos.map(({ id, title, completed}) => `
//     <li data-id="${id}" class="list-item">
//     <input type="checkbox" ${completed && "checked"}/>
//     <p>${title}</p>
//     </li>
//     `).join("");
// }


// 1 b - всередині функції запит, зовні обробка 

// function foo(url) {
//     return fetch(url)
//     .then(result => {
//   if(!result.ok) {
//     throw new Error(result.status);
//   }

//    return result.json();
//     })
// }

// foo("https://jsonplaceholder.typicode.com/todos")
// .then(data => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data))
// })
// .catch(error => {
//     console.log(error);
// })

// foo("https://jsonplaceholder.typicode.com/users")
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log(error);
// })

// 2 - авторизація запитів з ключами
// які бувають: 
// - у query string 
// - у хедерах 

// Для прикладу використовуєм https://pixabay.com/api/docs/ 

const API_KEY = "51359701-f6006c27d1fc3647654901390";

const list = document.querySelector(".list");


const params = new URLSearchParams({
    key: API_KEY,
    q: "red rose"

})

fetch(`https://pixabay.com/api/?${params}`)
.then(res => {
    if(!res.ok) {
        throw new Error (res.statusText);
    }

    return res.json();
})
.then(data => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
})
.catch(error => {
    console.log(error);
})

function createMarkup(arr) {
return arr.map(({previewURL, tags}) => `
<li>
<img src="${previewURL}" alt="${tags}" width="300" />
</li>
`).joim("")

}

// fetch(`https://pixabay.com/api?${params}`, {
// headers: {
//    Authorization: `Bearer lalala`

// }


// })