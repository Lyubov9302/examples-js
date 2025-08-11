const PRODUCT_LS_KEY = 'basket';

const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");
const container = document.querySelector(".js-list");

// ліземо в корзину глянути чи порожня чи є там товари 

const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];

let totalCost;

// перевіряєм чи є в корзині товари 

if(products.length) {
    // якщо продукти є -
    //  я хочу мати можливість очистити корзину 
   clear.hidden = false;
totalCost = products.reduce((acc, { price, qty}) => acc +
price * qty ,0);


                        //  якщо тут щось є відмінне від 0, то заг сума = ... грн, а якщо нема - Ваш кошик пустий 
totalPrice.textContent = totalCost ? `Total cost ${totalCost} uah` : 'Your basket is empty';
}
 
// і додаєм в ДОМ після відмалювання картки нижче 
container.insertAdjacentHTML("beforeend", createMarkup(products));

clear.addEventListener('click',  handleClear);
// відмальвовуєм картки на основі продуктів 
// в корзині 

function createMarkup(arr) {
    return arr.map(({ img, name, price, qty}) => `
    <li class="cart-item">
    <img src="${img}" alt="${name}" class="product-img/>
    <h2>${name}</h2>
    <p>Quantity:${qty}</p>
    <p>Total price: ${price * qty}</p>
    </li>
    `).join("");
}


// очищаєм корзину за допомог цієї функції,
// попереденьо повісивши на кнопку clear слухача вище
function handleClear() {
    localStorage.removeItem(PRODUCT_LS_KEY);

    // і робимо редірект на попередню сторінку 
    window.location.href = "9shop.html";
}