// - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

 // arr = [23, 54, 1, 60, 87, 0, 45, 3, 8, 90, 111, 654, 7, 43, 40, 2,  4, 65, 11, 12]
// let arry = arr.sort((a, b) => a -b )
// console.log(arry);
// let array = arr.sort((a, b) => b - a)
// console.log(array);
// let arrF3 = arr.filter(value => !(value % 3));
// console.log(arrF3);
// let arrF10 = arr.filter(value => !(value % 10));
// console.log(arrF10);
// arr.forEach(value => {
//  console.log(value);})
// let arrMap = arr.map(value => value * 3)
// console.log(arrMap);


// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map()
// и получить новый массив в котором все значения будут со знаком "!" в конце

// let word = [
//     'Hello', 'Please', 'War', 'Change', 'Age',
//     'Name', 'Address', 'Type', 'Wall', 'See',
//     'Box', 'Music', 'All', 'Good', 'Zombie'
// ]
// let wordS = word.sort((a, b) => (a > b)? 1 : -1)
// console.log(wordS);
// let wordS1 = word.sort((a, b) => (a < b)? 1 : -1)
// console.log(wordS1);
// let wordF = word.filter(value => value.length < 4)
// console.log(wordF);
// let wordM = word.map(value => `${value}!`)
// console.log(wordM);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let usersS = users.sort((a, b) => a.age - b.age)
// console.log(usersS);
// let usersSo = users.sort((a, b) => b.age - a.age)
// console.log(usersSo);
// let usersSortN = users.sort((a, b) => a.name.length - b.name.length)
// console.log(usersSortN);
// let usersSortNa = users.sort((a, b) => b.name.length - a.name.length)
// console.log(usersSortNa);
// let usersM = users.map((name, index) => {
//    return  name = {name: name.name,
//                     age: name.age,
//                     status: name.status,
//                     id: index + 1}
// })
// console.log(usersM);
// console.log(users);
//
// let use = usersM.sort((a, b) => a.id - b.id)
// console.log(use);


// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calcul(a, b, callback) {
//     console.log(callback(a, b));
// }
// calcul(20, 30, function (a, b) {
//     return a + b;
// })
//
// function calcula(a, b, c, callback) {
//     console.log(callback(a, b, c));
// }
// calcula(20, 30, 10, function (a, b, c) {
//     return a + b - c;
// })

// let cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// let carVolume = cars.filter(value => value.volume > 3)
// console.log(carVolume);
// let carVolume1 = cars.filter(value => value.volume === 2)
// console.log(carVolume1);
// let carProducer = cars.filter(value => value.producer === 'mercedes')
// console.log(carProducer);
// let carMercedes = cars.filter(value => {
//    return  value.producer === 'mercedes' && value.volume > 3;
// })
// console.log(carMercedes);
// let carSubaru = cars.filter(value => {
//     return  value.producer === 'subaru' && value.volume > 3;
// })
// console.log(carSubaru);
// let carPower = cars.filter(value => value.power > 300)
// console.log(carPower);
// let carSubaruP = cars.filter(value => {
//     return  value.producer === 'subaru' && value.power > 300;
// })
// console.log(carSubaruP);
// let carPowerEj = cars.filter(value => value.engine.startsWith('ej'))
// console.log(carPowerEj)
// let carEj = cars.filter(value => {
//     return value.producer === 'subaru' && value.power > 300 && value.engine.startsWith('ej')
// })
// console.log(carEj);
// let carMers = cars.filter(value => {
//     return value.producer === 'mercedes' && value.volume < 3
// })
// console.log(carMers);
// let carVolu = cars.filter(value => {
//     return value.power > 250 && value.volume > 2
// })
// console.log(carVolu);
// let carBmw = cars.filter(value => {
//     return value.power > 250 && value.producer === 'bmw'
// })
// console.log(carBmw);


// - взять слдующий массив
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let usersSort = usersWithAddress.sort((a, b) => a.id - b.id)
// console.log(usersSort);
// let usersSort1 = usersWithAddress.sort((a, b) => b.id - a.id)
// console.log(usersSort1);
// let usersAge = usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(usersAge);
// let usersAge1 = usersWithAddress.sort((a, b) => b.age - a.age)
// console.log(usersAge1);
// let usersName = usersWithAddress.sort((a, b) => (a.name > b.name)? 1: -1)
// console.log(usersName);
// let usersName1 = usersWithAddress.sort((a, b) => (a.name < b.name)? 1: -1)
// console.log(usersName1);
// let usersStreet = usersWithAddress.sort((a, b) => (a.address.street > b.address.street)? 1: -1)
// console.log(usersStreet);
// let usersNumber = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
// console.log(usersNumber);
// let userAge = usersWithAddress.filter(value => value.age < 30)
// console.log(userAge);
// let userStatus = usersWithAddress.filter(value => !(value.status))
// console.log(userStatus);
// let userStatusA = usersWithAddress.filter(value => {
//   return   !(value.status) && value.age < 30
// })
// console.log(userStatusA);
// let userNum = usersWithAddress.filter(value => !(value.address.number%2))
// console.log(userNum);

// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10%
//     (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2),
//     та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв.
// Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// class Car {
//     constructor(producer, year, price, power, experience, name, age) {
//         this.producer = producer;
//         this.year = year;
//         this.price = price;
//         this.power = power;
//         this.user = {experience: experience, name: name, age: age}
//     }
// renovation() {
//     this.power = this.power * 0.1 + this.power
// }
//     driver(experience, name, age){
//         this.user = {experience: experience, name: name, age: age}
//     }
//
//
// }
// let subaru = new Car('subaru',2010,10000,400,1, 'vasya', 31 )
// let toyota = new Car('toyota',2007,3000,250, 3, 'kolya', 29 )
// let kia = new Car('kia',2011,8000,300,2, 'petya',30 )
// let zaz = new Car('zaz',1998,200,140, 4, 'olya',  28 )
// let ford = new Car('ford',2014,12000,200, 5,  'max',27 )
// let honda = new Car('honda',2014,20000,165, 6, 'anya', 33 )
// let bmw = new Car('bmw',2013,11000,120,7, 'oleg', 28 )
// let mercedes = new Car('mercedes',1990,2000,180, 11, 'maxi', 32 )
//
// kia.renovation()
// toyota.renovation()
// bmw.renovation()
// honda.renovation()
// kia.driver(4, 'vova', 24)
// toyota.driver(10, 'Igor', 32)
// bmw.driver(15, 'Stepan', 45)
// honda.driver(11, 'Galia', 33)
//
// let arr = [subaru, toyota, kia, zaz, ford, honda, bmw, mercedes]
//
// for(let xx of arr){
//     if (arr.length % 2 === 0){
//         xx.power = xx.power * 0.1 + xx.power
//         xx.price = xx.price * 0.05 + xx.price
// }}
//
// for(let xxx of arr){
//     if (xxx.user.experience < 5 && xxx.user.age > 25 ){
//         xxx.user.experience ++
//     }}
// console.log(arr);
// let price = arr.reduce((a, b) => {
// return a + b.price
// }, 0)
// console.log(price);


// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10.
//     Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента.
//     Если такого элемента нет в массиве, выведите -1.
//
// Пример:

// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.


let  arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9]
function f(a) {

    let ar = []
    for (let i = 0; arr.length > i; i++) {
        if (arr[i] === a) {
            ar.push(i)
        }
    }
    if (ar.length === 0) {
        console.log(-1);
    } else {
        console.log(ar.length - 1);
        console.log(ar[ar.length - 1]);
    }
}
f(4)



