// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// const names = ['멍멍이', '야옹이', '멍뭉이'];

// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// for .. of
// const num = [10,20,30,40,50];

// for (let n of num) {
//     console.log(n);
// }

// const doggy = {
//     name : '멍멍이',
//     sound : '멍멍',
//     age : 2
// }

// console.log(Object.entries(doggy));
// console.log(Object.keys(doggy));
// console.log(Object.values(doggy));

// for (let key in doggy){
//     console.log(`${key}: ${doggy.key}`);
// }

// continue, break
// for (let i = 0; i < 10; i++){
//     if (i === 2) continue;
//     console.log(i);
//     if (i === 5) break;
// }

// function sumOf(numbers) {
//     let sum = 0;
//     for (let i = 0; i<numbers.length; i++){
//         sum += numbers[i];
//     }
//     return sum;
// }

// const result = sumOf([1,2,3,4,5]);
// console.log(result);

// quiz
function biggerThanThree(numbers) {
    const bTA = []
    for (let n of numbers) {
        if (n > 3) {
            bTA.push(n);
        }
    }
    return bTA;
}

const numbers = [1,2,3,4,5,6,7];
console.log(biggerThanThree(numbers));