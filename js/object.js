// const dogName = '멍멍이';
// const dogAge = 2;

// console.log(dogName);
// console.log(dogAge)

// const dog = {
//     name: '멍멍이',
//     age: 2,
//     cute: true,
//     sample: {
//         a: 1,
//         b: 2
//     }
// }

// console.log(dog);
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.sample);

const ironMan = {
    name : '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

// 비구조화 할당
// function print(hero) {
function print({ alias, name, actor}) {
    // const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`
    // const { alias, name, actor} = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`
    console.log(text);
}
// print(ironMan);

// const dog ={
//     name: '멍멍이',
//     sound: '멍멍!',
//     say: function(){
//         console.log(this.sound);
//     }
// };

const cat = {
    name: '야옹이',
    sound: '야옹~'
}

// cat.say = dog.say;
// dog.say();
// cat.say();

const catSay = cat.say; // this 관계가 사라져 버림
// catSay(); // undefined

// const numbers = {
//     a: 1,
//     b: 2,
//     get sum() {
//         console.log('sum 함수가 실행됩니다.');
//         return this.a + this.b;
//     }
// };

// numbers.a = 5;
// console.log(numbers);
// console.log(numbers.sum);
// numbers.b = 5;
// console.log(numbers.sum);

const dog = {
    _name: '멍멍이',
    get name() {
        console.log('_name을 조회합니다...');
        return this._name;
    },
    set name(value) {
        console.log('이름이 바뀝니다....' + value);
        this._name = value;
    }
}

// console.log(dog._name);
// dog._name = '뭉뭉이';
// console.log(dog._name);

const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.a = 6;
numbers.a = 7;
console.log(numbers.sum);