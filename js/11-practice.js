// Потрібно створити функціонал для отримання прогнозу погоди
// в місті
// Використай публічне API https://www.weatherapi.com/docs
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз
//  погоди на декілька днів 


// Створи форму в яку користувач:
// 1) вводить назву міста
// 2) обирає на яку кількість днів він хоче отримати прогноз погоди

// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою
// з бекенду
// Карта має містити відомості про:
// 1) зображення з погодою (icon)
// 2) еукст з погодою (text)
// 3) Date
// 4) середню температуру Цульсія (avgtemp_c)
// приклад картки: https://prnt.sc/h_p-A6Hty-i-

const BASE_URL = "http://api.weatherapi.com/v1";
const weather_API_KEY = "e924fd8ce48845e1a0b110735251707";


const form = document.querySelector(".js-search-form");
const list = document.querySelector(".js-list");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {city, days} = event.currentTarget.elements;

    serviceWeather(city.value, days.value)
    .then(data => {
        console.log(data);
        list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch(error => {
        list.innerHTML = `<h3>Oops</h3>`;
})
.finally(() => {
    event.target.reset()
})



}


// функція, яка робитиме запит на сервер 
function serviceWeather(city = "", days = 1) {

const params = new URLSearchParams({
key: weather_API_KEY,
q: city,
days: days,
lang: "uk"
})


// робим запит на сервіс і повертаєм результат цього запиту 
return fetch(`${BASE_URL}/forecast.json?${params}`)
.then((result) => {
if(!result.ok) {
    throw new Error(result.statusText);
}

return result.json();
})

}

function createMarkup(arr) {
    return arr.map(({ date, day: { avgtemp_c, condition: { icon, text }}}) => `
    <li class="weather-card">
    <img src="${icon}" alt="${text}" class="weather-icon"/>
    <h2 class="weather-date">${date}</h2>
    <h3 class="weather-text">${text}</h3>
    <h3 class="temperature">${avgtemp_c} °C</h3>
    </li>
    
    `).join("");
}
