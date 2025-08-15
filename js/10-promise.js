// 1 - cтворення та обробка промісу
// - клас Promise 
// - resolve
// - reject 
// - then, catch, finally 


// const promise = new Promise((resolve, reject) => {
// const random = Math.random();

// setTimeout(() => {
// if(random > 0.5) {
//     resolve("ok");
// } else {
//     reject("oops");
// }
// }, 2000)
// });

// promise
// .then((res) => {
//     console.log("then", res);
// })
// .catch((error) => {
//     console.log("catch", error);
// })

// 2 - ланцюги промісів 
// - декілька послідовних then 
// - then повертає проміс 

// const promise = new Promise(( resolve, reject) => {
//      resolve(5);
// });

// promise
// .then((res) => {
//     console.log(res);
//     return res * 2;
// })
// .then((data) => {
//     return data * 5;
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
// console.log(error);
// })
// .finally(() => {
//     console.log("finally");
// })


// 3 - питання з кахуту: що буде виведено у консоль?

// const promise = new Promise((resolve) => {
// resolve(10);

// })

// promise
// .then((data) => {
//     // додаєм return, тоді функція поверне 20, а не undefined 
//     return new Promise((resolve) => {
//         resolve(data * 2)
//     })
// })
// .then((value) => {
//     console.log(value);
// })


// 3 - питання з кахуту:
//  в якому порядку виведуться логи в консоль?



// console.log("step 1");


// // макропроцес
// setTimeout(() => {
//     console.log("step 2");
// }, 0)

// // мiкропроцес (спочатку виконуються вони)
// new Promise((resolve) => {
//     resolve("step 3")
// })
// .then(data => console.log(data))

// setTimeout(() => {
//     console.log("step 4");
// })

// 4 - промісифікація 
// - проблема доступу до результату проміса з колбеком
// - функція, яка повертає проміс 

// const makeOrder = (dish, onSuccess, onError) => {
//     // рандомно визначаємо чи заверш операція успіхом чи помилкою  
// const random = Math.random();

// // імітуєм запит на сервер 
// setTimeout(() => {
//     if(random > 0.5) {
//         onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError("Закінчились продукти");
//     }
// }, 3000)
// }

// makeOrder(
//     "Пиріжок",
//     (str) => {
//         console.log("onSeccess", str)
//     },

//     (error) => {
//         console.log("onError", error)
//     }
// )

// реалізуєм промісифікацію 

// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
// const random = Math.random();

// setTimeout(() => {
// if(random > 0.5) {
//  resolve(`Ваше замовлення ${dish}`)
// } else {
//     reject("Закінчились продукти");
// }
// }, 1000)
//   })
// }

// makeOrder("Пиріжок") 
// .then(data => console.log(data))
// .catch(error => console.log(error))

// 5 - промісифікація синхронних функцій

// - Promise.resolve()
// - Promise.reject()

// const makeOrder = (dish) => {
// const random = Math.random();

// if(random > 0.5) {
// return Promise.resolved(`Ваше замовлення ${dish}`);
// } else {
// return Promise.reject("Закінчились продукти");
// }
// }

// makeOrder("Пиріжок") 
// .then(data => console.log(data))
// .catch(error => console.log(error))


// 6 - Promise.all, Promise.race 

// const startTime = Date.now();

// const res1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;

//         resolve({title: "fisrt", time: deltaTime})
//     }, 3000)
// })
// }

// const res2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;

//         resolve({title: "second", time: deltaTime})
//     }, 1000)
// })
// }

// const res3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;

//         resolve({title: "third", time: deltaTime})
//     }, 5000)
// })
// }

// Promise.all([res1(), res2(), res3()])
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error);
// })

// Promise.race([res1(), res2(), res3()])
// .then(data => {
//     console.log("then", data);
// })
// .catch(error => {
//     console.log("catch", error);
// })


