// - створити функцію яка виводить масив

// function f() {
// const a = [1, 'asda']
//     console.log(a);
// }
// f();

// - створити функцію яка заповнює масив рандомними числами та виводить його.

// function f1(a, b, c) {
// const arr = [a, b, c]
//     console.log(arr);
// }
// f1(1,4,'hello')

// Для виведення використати попвередню функцію.
// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function f(a, b, c) {
//     let min = arguments[0]
//     for (i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//     }
//     console.log(min);
// } f(8, 7, 3)
// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function f(a, b, c) {
//     let max = arguments[0]
//     for (i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
// } f(8, 7, 3)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function f(a, b, c) {
//     let max = arguments[0]
//     for (i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     console.log(max);
// } f(8, 7, 3)

// - створити функцію яка виводить масив

// function f() {
// const a = [1, 'asda']
//     console.log(a);
// }
// f();

// - створити функцію яка повертає найбільше число з масиву

// function f() {
// const a = [1, 3 , 6, 54, 9]
//     let b = a[0];
//     for(let x of a){
//          if (x>b){
//              b = x;
//          }}
//         console.log(b);
// }
// f();
//


// - створити функцію яка повертає найменьше число з масиву

// function f() {
//     const a = [1, 3 , 6, 54, 9]
//     let b = a[0];
//     for(let x of a){
//         if (x<b){
//             b = x;
//         }}
//     console.log(b);
// }
// f();


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function f(a) {
//
//     let b = 0;
//     for(let x of a){
//          b = x + b
//     }
//     console.log(b);
// }
// f([1, 7, 9, 10, 11])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function f(a) {
// let x = 0
//     let b = 0;
//     while ( x < a.length){
//          b = a[x] + b
// x++;
//     }
//     console.log(b/(x));
// }
// f([1, 7, 9, 10, 11])

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function f() {
//     let b = 0;
// for (let x = 1; x <= arguments.length; x++){
//     b++;
// }
//     console.log(b);
// }
// f({qwq: 'qwqw'}, {qwq: 'qwqw'}, {qwq: 'qwqw'}, {qwq: 'qwqw'});

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

// function f() {
//         let d = 0;
// for (let x of arguments){
//        for(let c in x){
//         d++;
//     }}
//     console.log(d);
// }
// f({qwq: 'qwqw', asd: 'asda'}, {qwq: 'qwqw', sda: 'asd', as: 'asdsads'}, {qwq: 'qwqw'}, {qwq: 'qwqw'});

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// function f(a, b) {
//     const resul = []
// for (let i = 0; i < a.length; i++){
//     const sum = a[i] + b[i]
//     resul.push(sum)
// }
// return resul;
// }
// let arr  = f([1,2,3,4], [2,3,4,5])
// console.log(arr);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function f(a, b) {
// let x = 0;
// x = a [b];
// a[b] = a[b+1];
// a[b+1]=x;
//     return a;
// }
// let ar = f([1, 5, 77, 33, 43, 2, 656], 5)
// console.log(ar);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function f(a) {
//
//     let len = a.length
//     let t = 0;
//     for (let i = 0; i < len; i++) {
//         if (a[0] === 0) {
//             a.shift();
//             t++;
//         } else{
//             a.push(a[0]);
//             a.shift();
//         } }
//     for (let x = 0; x < t; x++){
//         a.push(0);
//     }
//     console.log(a);
//
// }
//
// f([1, 0, 6, 0, 3]);

// Створити функцію яка :
//     - Додає в боді блок з текстом "Hello owu"
// function f() {
//     let a = document.createElement('div')
//     a.innerText = 'Hello owu'
//     document.body.appendChild(a)
// }
// f()


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// function fa(a, b) {
// let z = document.createElement(a)
//     z.innerText = b;
// document.body.appendChild(z);
// }
// fa('p', 'asdasdas')

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок,
//     та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

// let car = [
//         {Model:"Lada", age:1, power:100, color:"Black"},
//         {Model:"Toyota", age:2, power:140, color:"Silver"},
//         {Model:"Shevy", age:3, power:120, color:"Red"},
//         {Model:"Zaz", age:4, power:81, color:"Yellow"},
//         {Model:"Dodge", age:5, power:136, color:"White"},
//         {Model:"Bmv", age:7, power:222, color:"Black"},
//         {Model:"Mers", age:6, power:121, color:"Yellow"},
//         {Model:"Mazda", age:8, power:111, color:"Red"},
//         {Model:"Homda", age:10, power:123, color:"White"},
//         {Model:"Jeep", age:11, power:144, color:"Silver"},
//         ]
// let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function ff(a, b){
//  let i = 0;
//     for (let x of car){
//        car[i].id = id[i];
//         i++;
//             let div = document.createElement('div');
//             div.innerText = JSON.stringify(x);
//             document.body.appendChild(div)
//     }}
//
// ff(car, id)

// - приймає масив автомобілів (можна взяти з попередніх дз ),
// та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     Для кожної властивості створити всередені блока автомоблія свій блок

//         {Model:"Lada", age:1, power:100, color:"Black"},
//         {Model:"Toyota", age:2, power:140, color:"Silver"},
//         {Model:"Shevy", age:3, power:120, color:"Red"},
//         {Model:"Zaz", age:4, power:81, color:"Yellow"},
//         {Model:"Dodge", age:5, power:136, color:"White"},
//         {Model:"Bmv", age:7, power:222, color:"Black"},
//         {Model:"Mers", age:6, power:121, color:"Yellow"},
//         {Model:"Mazda", age:8, power:111, color:"Red"},
//         {Model:"Homda", age:10, power:123, color:"White"},
//         {Model:"Jeep", age:11, power:144, color:"Silver"},
//         ]
// let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function ff(a, b){
// let car = [
// let i = 0;
//     for (let x of car){
//        car[i].id = id[i];
//         i++;
//             let div = document.createElement('div');
//             document.body.appendChild(div);
//         for(let z in x){
// let divka = document.createElement('div')
//             divka.innerText = `${z}: ${x[z]}`
//             div.appendChild(divka)   }}
// }
//
// ff(car, id)


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача
// та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
//     Приклад масивів:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function f(a, b) {
// for (let x = 0; x < a.length; x++){
//     for(let y = 0; y < b.length; y++)
//     if (a[x].id === b[y].user_id){
//         a[x].country = b[y].country
//         a[x].city  = b[y].city
//     }}
//     console.log(a);
// }
// f(usersWithId, citiesWithId)



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила.
// Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];

// function f(rules) {
// let div = document.createElement('div')
//     document.body.appendChild(div);
// for (let x of rules){
//     let div1 = document.createElement('div')
//     div.appendChild(div1);
//     console.log(x);
// for (let xx in x){
// let div2 = document.createElement('div');
//     div1.appendChild(div2);
// div2.innerText = `${xx}: ${x[xx]}`
// }}}
//
// f(rules)


// 1) Точная степень двойки.
//     Дано натуральное число N.
//     Выведите слово YES, если число N является точной степенью двойки,
//     или слово NO в противном случае.
//     Операцией возведения в степень пользоваться нельзя!
// let n = +prompt('Stepen')
// function f(a) {

//     let z = 1;
// if (a === 0){
//     console.log('NO');
// }else
//     while ( a !== 0 ) {
//         if (z * 2 === a ) {
//             console.log('yes');
//             break;
//         } else if (z * 2 > a){
//             console.log('NO');
//             break;} else z= z * 2
//     }}
// f(n)



// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]


// let arr = [1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9]
//
// ar = [];
// function f(a) {
//
// for (let x of a){
//         if (typeof x === 'object'){
// f(x)
//         }else ar.push(x)
//     }
//
//     console.log(ar);}
// f(arr)

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//




const myArray =   [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }
    ]




function f(a) {
    let ar = [];
    if (Array.isArray(a) === true){

        for (let x of a){
            console.log(x);

            if (typeof x === "object"){
                // f(x)
            } else ar.push(x)
        }
        } else {
        for (let x of a) {
            console.log(x);
            // if (typeof x === "object") {
            //     f(x)
            // } else ar.push(x)

        }
    }
    // for (let x in a){
    //
    //     if (typeof a[x] === 'object'){
    //         f(a[x])
    //     }else ar.push(a[x])
    // }
    //
    // console.log(ar);
// console.log(ar);
}
f(myArray);
// // f1[0].name= 'jkdfjksfdjkfsdjkfssfdjkdfskjdfskjfsdsfdkj'
// // console.log(myArray);


