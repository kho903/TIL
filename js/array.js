const arr = [1,2,3,4];
// console.log(arr[0]);
const obj = [
    {name : '멍멍이'},
    {name: '야옹이'}
];
// console.log(obj);
// console.log(obj[0]);
// console.log(obj[1]);

obj.push({
    name: '멍뭉이'
})
console.log(obj);
console.log(obj.length);

const array = [1,true,{a:1}, [1,2,3,4]];
array.push(6);
console.log(array);
console.log(array.length);