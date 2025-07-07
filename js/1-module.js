
// Homework - task1
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
return `You ordered ${quantity} droids worth ${totalPrice} credits!`
};


console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"


// Homework - task2

 function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`
 };
 console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
 console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
 console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
 

// Homework - task3

function getElementWidth(content, padding, border) {
    const contentValue = Number.parseFloat(content);
    const paddingValue = Number.parseFloat(padding);
    const borderValue = Number.parseFloat(border);

    return contentValue + paddingValue * 2 + borderValue * 2;
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


// 4 -
//  Обчисли висоту елемента з урахуванням border-box

//  Оголоси функцію getElementHeight, яка очікує три параметри, 
//  значення яких задаються під час її виклику:

//  - перший параметр - висота контенту content (напр, "100рх")
// - padding - вертик паддінг для кожної зі сторін (напр, 10рх)
// - border - товщина бордера для кожерї зі сторін. напр 2рх

// Функція має повертати загальну висотку елемента,
//  виходячи з того, що box-sixing: border-box (
//     тобто контент вже включає паддінг і бордер)

function getElementHeight(content, padding, border) {

    const contentNum = Number.parseFloat(content);
    const paddingNum = Number.parseFloat(padding);
    const borderNum = Number.parseFloat(border);

    return contentNum - paddingNum * 2 - borderNum * 2;


}

console.log(getElementHeight("100px", "10px", "2px")); // 76
console.log(getElementHeight("80px", "5px", "5px"));   // 60
console.log(getElementHeight("200px", "0px", "0px"));  // 200


