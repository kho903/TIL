// const superheros = [
//     '아이언맨',
//     '캡틴 아메리카',
//     '토르',
//     '닥터스트레인지'
// ]

// forEach

// for(let i = 0; i< superheros.length; i++){
//     console.log(superheros[i]);
// }

// function print(hero){
//     console.log(hero);
// }
// superheros.forEach(print)

// superheros.forEach(function(hero) {
//     console.log(hero);
// })

// superheros.forEach(hero => {
//     console.log(hero);
// })

const arr = [1,2,3,4,5,6,7,8]


// const squared = [];
// for (let i = 0; i < arr.length; i++){
//     squared.push(arr[i] * arr[i])
// }

// arr.forEach(n => {
//     squared.push(n * n);
// })

// map
const square = n => n * n;
const squared = arr.map(n => n * n);

// console.log(squared)

// const items = [
//     {
//         id: 1,
//         text: 'hello'
//     },
//     {
//         id:2,
//         text: 'bye'
//     }
// ];

// const texts = items.map(item => item.text);
// console.log(texts);

const superheros = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터스트레인지'
]

// indexof
// const index = superheros.indexOf('아이언맨');
// console.log(index);

const todos =[
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
]

// const index = todos.indexOf(3);
// console.log(index); // 존재 X
// const index2 = todos.findIndex(todo => todo.id === 3)
// console.log(index2);

// // find
// const todo = todos.find(todo => todo.id === 3);
// console.log(todo);
// const todo2 = todos.find(todo => todo.done === false);
// console.log(todo2);


// filter
// const taskNotDone = todos.filter(todo => todo.done === true);
// const taskNotDone = todos.filter(todo => todo.done);
// console.log(taskNotDone);

// splice
// const numbers = [10, 20, 30, 40];
// const index = numbers.indexOf(30);
// const spliced = numbers.splice(index, 2); // index부터 n개 지우겟다.
// console.log(numbers);
// console.log(spliced)

// slice // 기존 배열 값 건드리지 않음
// const sliced = numbers.slice(0, 2);
// console.log(sliced);
// console.log(numbers);

// shift
// const value = numbers.shift();
// console.log(value);
// console.log(numbers);

// const value = numbers.pop()
// console.log(value);
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);
// const shift_value = numbers.shift();
// console.log(shift_value);

// numbers.push(50);
// console.log(numbers);
// const pop_value = numbers.pop();
// console.log(pop_value);

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const concated = arr1.concat(arr2);
// console.log(concated);

const arr4 = [1, 2, 3, 4, 5];
// console.log(arr.join());
// console.log(arr.join(' '));
// console.log(arr.join(', '));

// reduce
const numbers = [1,2,3,4,5];
// let sum = 0;
// numbers.forEach(n => {
//     sum += n;
// })
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); 
// 초기값 0, 누적값 accumulator
// const avg = numbers.reduce((accumulator, current, index, array) => {
//     if (index === array.length - 1) {
//         return (accumulator + current) / array.length;
//     }
//     return accumulator + current;
// }, 0); 

// console.log(sum);
// console.log(avg);

// const alph = ['a','a','a','b','c','c','d','e'];
// const counts = alph.reduce((acc, cur) => {
//     if (acc[cur]){
//         acc[cur] += 1;
//     }else {
//         acc[cur] = 1;
//     }
//     return acc;
// }, {})

// console.log(counts);

// 퀴즈
function countBiggerThanTen(numbers) {
    const counts = numbers.reduce((acc, cur) => {
        if (cur > 10){
            acc += 1;
        }
        return acc;
    }, 0)
    return counts;
}

const count = countBiggerThanTen([1,2,5,10,20,30,40,50,60]);
console.log(count);