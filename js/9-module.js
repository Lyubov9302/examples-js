// 1 - localStorage
// збереження
// чому використовуємо 

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, JSON.stringify(names));

// читання 

// const value = localStorage.getItem(LS_KEY);

// console.log(JSON.parse(value));

// видалення  
// localStorage.removeItem("totot");


// не може зберігати функції 

// const calc = {
//     a: 5,
//     b: 10,
//     add() {
//         return this.a + this.b;
//     }
// }

// localStorage.setItem("foo", JSON.stringify(calc));

// const value1 = localStorage.getItem("foo");

// console.log(JSON.parse(value1));

// 2 - отримуємо значення поля, зберігаємо його у сховище



const STORAGE_KEY = "feedback-msg";

const form = document.querySelector('.feedback-form');
const textarea = form.querySelector('textarea');


textarea.addEventListener('input', onTextareaInput);

function onTextareaInput(e) {
    const message = e.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}


// (викликаємо функцію, яку реалізували нижче )
populateTextarea();
// - отримуємо значення зі сховища
// - якщо там щось було - оновлюємо DOM 

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage) {
        textarea.value = savedMessage;
    }

    console.log("savedMessage", savedMessage);
} 

// - cкасовуємо стандартну поведінку
// - видаляємо повідомлення зі свховища
// - очищуємо форму 

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

 e.currentTarget.reset();
 localStorage.removeItem(STORAGE_KEY);
}