// 1 - Функція getLastElementMeta(array) приймає один параметр array -
//  масив довільних значень. Доповни код функції таким чином, 
// щоб вона повертала новий масив з двох елементів:

// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

function getLastElementMeta(array) {
    const lastIndex = array.length - 1;
    const  secondId  = array[lastIndex];
    const newArr = [lastIndex, secondId];
    return newArr;
  }

  console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));