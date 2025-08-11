const instruments = [
    {
        id: 1,
        img: "https://static.dnipro-m.ua/cache/products/7056/catalog_origin_218728.jpg",
        name: "Шуруповерт",
        price: 150,
        description: "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."
    },
    {
        id: 3,
        img: "https://static.dnipro-m.ua/cache/products/1891/catalog_origin_491982.jpg",
        name: "Шліфмашина",
        price : 1299,
        description: "Кутова шліфувальна машина Dnipro-M GS-98  модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."
    },
    {
        id: 4,
        img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
        name: "Пила",
        price: 11049,
        description: "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."
    },
    {
        id: 5,
        img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_323420.jpg",
        name: "Рівень",
        price: 897,
        description: "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."
    },
    {
        id: 6,
        img: "https://static.dnipro-m.ua/cache/products/11482/catalog_origin_498215.jpg",
        name: "Тример",
        price: 3699,
        description: "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."
    },
    {
        id: 7,
        img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_500515.jpg",
        name: "Мотокоса",
        price: 11049,
        description: "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."
    },
    {
        id: 8,
        img: "https://static.dnipro-m.ua/cache/products/4980/catalog_origin_183761.jpg",
        name: "Генератор",
        price: 10890,
        description: "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."
    }
]


const PRODUCT_LS_KEY = 'basket';


// - у нас є масив з товарами
//  1, 1a, 1b - відобразити всі картки з товарами на сторінці,
// - 2 - дати можливість покупцю(користувачу) додавати товари
//  в кошик (на наступній сторінці)
// - також на тій іншій сторінці
//  кошика візуалізувати товари які він хоче придбати


// 1) 
const container = document.querySelector('.js-list');

// 1b 
container.insertAdjacentHTML("beforeend", createMarkup(instruments));

// 2 
// робим делегування події (відловлюєм клік, щоб додавати до кошика) 
container.addEventListener('click', handlerAdd);

// 1a 
function createMarkup(arr) {
    return arr.map(({id, img, name, price, description}) => `
    <li class="product-card js-product" data-id="${id}">
    <img src="${img}" alt="${name}" class="product-img"/>
    <h2 class="product-title">${name}</h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price} uah</p>
    <button class="product-add-btn js-add">Add to basket</button>
    </li>
    
    `).join("");
}

// 2 - a 

function handlerAdd(event) {
    // якщо клінув куди завгодно, але не на кнопку 
if(!event.target.classList.contains("js-add")) {
    return;
}

// звертаюсь до кнопки і кажу: знайди найближчий елем з
//  таким селектором 
const parent = event.target.closest(".js-product");
// (і показує кнопку з певним id) тобто
//  це рядок який ми перетвоєм на число  
// за допомогою унарного плюса 
const productId = +parent.dataset.id;

// знаходимо продукт у нашому масиві, який відповідає id натиснутої кнопки 
const currentProduct = instruments.find(({id}) => id === productId);



// робим змінну в якій збережеться значення 
// з локалсторидж або якщо корзина пуста - пустий масив 
const products = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) || [];


// перевіряєм чи є один і той самий товар уже в корзині 
const index = products.findIndex(({id}) => id === productId);

// (або мій продукт вперше додається в корзину,
//  або він уже є в корзині)
if(index === -1) {
    // дод властивість квантіті і присвоюєм 1
    // і додати в список продуктів в мою корзину 
    currentProduct.qty = 1;
    products.push(currentProduct);
} else {
    // звертаємся до елемента під таким-то індексом і 
    // збільшуєм його кількість на один 
    products[index].qty += 1;
}

// додаєм масив 
localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(products));

}