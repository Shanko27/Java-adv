// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей.
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let user = {
//     name: 'Oleg',
//     age: '80',
// job: 'retired',
//     sex: 'male'
// };
// let book = {
//     author: 'Jeffrey Victor‏ Sutherland',
//     cover: 'Hard',
//     page_size: 279,
//     Date: '2014',
// };
// let car = {
//     model: 'Toyota',
//     brand: 'Avensis',
//     color: 'silver',
//     type: 'sedan',
// };
// let building = {
//     room: 4,
//     floor: 2,
//     dwellers: 'Max',
//  }
// let driver = {
//     experience: 10,
//     category: 'b',
//     fines: 'parking'
// }
 // - создать 5 объектов с полностью разным набором полей.
// В каждом объекте должен присутсвовать массив и внутренний объект.
// Опишите что угодно, машину, картину, болт

// let human = {
//     first_name: 'Max',
//     Second_name: 'Guz',
//     wife: {
//         Name: 'Olga',
//         age: 22
//     },
//     Job: ['Storozh', 'Master']
// };
// let room = {
//     door: 2,
//     table: {
//         color: 'Black',
//         height: 70,
//         width: 120
//     },
//     color: 'White',
//     chair: ['Black', 'White', 'Red']
//     };
//     let Shirt = {
//         color: ['red', 'silver'],
//        Sleeve: 'long',
//         Button: {
//              color: 'Black',
//                 Hole: 4
//         },
//         size: ['s', 'm', 'l', 'xl', 'xxl']
// };
// let Monitor = {
//     diagonal: 24,
//     dell: {
//         model: 'a1',
//         color: 'Black'
//     },
//     usb: true,
//     out: ['vga', 'hdmi']
// };
// let Notebook=  {
//     diagonal: 24,
//     dell: {
//         model: 'l440',
//         color: 'Black'
//     },
//     usb: true,
//     out: ['vga', 'hdmi']
//     };
//     - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for(let x in user){
//     console.log(x);
// }
// for(let a in book){
//     console.log(a);
// }
// for(let x in car){
//     console.log(x);
// }
// for(let x in building){
//     console.log(x);
// }
// for(let x in driver){
//     console.log(x);
// }
// for(let x in human){
//     console.log(x);
// }
// for(let x in room){
//     console.log(x);
// }
// for(let x in Shirt){
//     console.log(x);
// }
// for(let x in Monitor){
//     console.log(x);
// }
// for(let x in Notebook){
//     console.log(x);
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let q = Object.keys(user)
// console.log(q);
// let w = Object.keys(book)
// console.log(w);
// let e = Object.keys(car)
// console.log(e);
// let r = Object.keys(building)
// console.log(r);
// let t = Object.keys(driver)
// console.log(t);
// let y = Object.keys(human)
// console.log(y);
// let u = Object.keys(room)
// console.log(u);
// let i = Object.keys(Shirt)
// console.log(i);
// let o = Object.keys(Monitor)
// console.log(o);
// let p = Object.keys(Notebook)
// console.log(p);
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
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
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион.
//     // (Значаения полей могу быть выдуманными)
// let cities = [
//         {population: 150000, country: 'Makedonia', region:'Mavr'},
//         {population: 1500000, country: 'Boliv', region:'Rock'},
//         {population: 550000, country: 'Ukr', region:'Zamb'},
//         {population: 650000, country: 'Rus', region:'Lot'},
//         {population: 8850000, country: 'USA', region:'Uta'},
//         {population: 9990000, country: 'Kor', region:'Sever'},
//         {population: 1150000, country: 'Moria', region:'Oko'},
//         {population: 1250000, country: 'Nord', region:'Troll'},
//         {population: 1540000, country: 'Tor', region:'Mol'},
//     ]
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель.
    // Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// let car = [
//         {Model:"Lada", age:1, power:100, color:"Black", driver:
//                 {name: 'Ivan', age: '30', sex: 'male', experience: 10,}},
//         {Model:"Toyota", age:2, power:140, color:"Silver", driver:
//                 {name: 'Ira', age: '25', sex: 'Fmale', experience: 5,}},
//         {Model:"Shevy", age:3, power:120, color:"Red", driver:
//                 {name: 'Nina', age: '34', sex: 'fmale', experience: 6,}},
//         {Model:"Zaz", age:4, power:81, color:"Yellow", driver:
//                 {name: 'Max', age: '55', sex: 'male', experience: 30,}},
//         {Model:"Dodge", age:5, power:136, color:"White", driver:
//                 {name: 'Vlad', age: '21', sex: 'male', experience: 2,}},
//         {Model:"Bmv", age:7, power:222, color:"Black", driver:
//                 {name: 'Zahar', age: '66', sex: 'male', experience: 11,}},
//         {Model:"Mers", age:6, power:121, color:"Yellow", driver:
//                 {name: 'Olga', age: '26', sex: 'Fmale', experience: 5,}},
//         {Model:"Mazda", age:8, power:111, color:"Red", driver:
//                 {name: 'Tania', age: '44', sex: 'Fmale', experience: 23,}},
//         {Model:"Homda", age:10, power:123, color:"White", driver:
//                 {name: 'Oleg', age: '55', sex: 'male', experience: 33,}},
//         {Model:"Jeep", age:11, power:144, color:"Silver", driver:
//                 {name: 'Tolia', age: '19', sex: 'male', experience: 1,}},
//     ]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while(i < car.length){
// console.log(car[i]);
//     i++;}
// let i = 0;
// while(i < cities.length){
//     console.log(cities[i]);
//     i++;}
// let i = 0;
// while(i < car.length){
//     console.log(car[i]);
//     i++;}

//     - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (i = 0; i < car.length; i++){
// console.log(car[i]); }
// for (i = 0; i < cities.length; i++){
// console.log(cities[i]); }
// for (i = 0; i < car.length; i++){
// console.log(car[i]); }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let a of car){
// console.log(a); }
// for (let a of cities){
// console.log(a); }
// for (let a of car){
// console.log(a); }

//- взять объекты из задания 1 и превратить каждый в json.
// let a = JSON.stringify(user);
// console.log(a);
// let b = JSON.stringify(book);
// console.log(b);
// let c = JSON.stringify(car);
// console.log(c);
// let d = JSON.stringify(building);
// console.log(d);
// let f = JSON.stringify(driver);
// console.log(f);


// - взять json из задания 11 и превратить их обратно в объекты.

// let q = JSON.parse(a);
// console.log(q);
// let w = JSON.parse(b);
// console.log(w);
// let r = JSON.parse(c);
// console.log(r);
// let t = JSON.parse(d);
// console.log(t);
// let y = JSON.parse(f);
// console.log(y);

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
//  for (let x of car){
//   let a = JSON.stringify(x)
//      console.log(a); }

// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// for (let x of cities){
//     let a = JSON.stringify(x)
//     console.log(a); }

// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// for (let x of car){
//     let a = JSON.stringify(x)
//     console.log(a);
//     let b = JSON.parse(a);
//     console.log(b); }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let user = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (let a of user){
//     console.log(a);
//     console.log(a.skills);
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом.
// Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills.
// Скопировать все skills всех пользователей в отедльный массив

// let user = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// let b = [];
// for (let a of user){
//     console.log(a);
//     console.log(a.skills);
//     b.push(a.skills);
// } console.log(b);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//
// let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
// {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']},
// {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']},
// {name: 'olya', age: 28, status: false, skills: ['java', 'js']},
// {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
//
// for (let a of users){
//    for (let x in a){
//     console.log(a[x]);
// }}

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// for (let a of users){
//     for (let x in a){
//         // console.log(a[x]);
// let l=a[x];
//
//         if (x === 'address'){
//             let b = [];
//             for (let z in l){
//                 b.push(l[z])
//         }console.log(b);
//     }}}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Всі данні в одному блоці.
// let sa = document.createElement('div')
// document.body.appendChild(sa)
// for (let x of users){
//     let as = document.createElement('div')
// sa.appendChild(as);
//     as.innerText = JSON.stringify(x);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// let sa = document.createElement('div')
// document.body.appendChild(sa)
// for (let x of users){
//     let zz = document.createElement('div')
//    sa.appendChild(zz)
//         for (let b in x){
//             let as = document.createElement('div')
//             zz.appendChild(as);
//         as.innerHTML = `${JSON.stringify(b)} : ${JSON.stringify(x[b])}`;
//     }}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let sa = document.createElement('div')
// document.body.appendChild(sa)
// for (let x of users){
//     let zz = document.createElement('div')
//    sa.appendChild(zz)
//
//         for (let b in x){
//             let as = document.createElement('div')
//             let qw = x[b];
//             if(b === "address"){
//                 console.log(qw);
//                 for(let cc in qw){
//                     as = document.createElement('div')
//                     zz.appendChild(as);
//                     as.innerText = `${JSON.stringify(cc)} : ${JSON.stringify(qw[cc])}`
//                 }
//             }else {
//                 zz.appendChild(as);
//                 as.innerText = `${JSON.stringify(b)} : ${JSON.stringify(x[b])}`
//             };}}

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Частковий приклад реультату:

// for(let i = 0; i < usersWithId.length; i++){
//     for(let j = 0; j < citiesWithId.length; j++){
//         if(usersWithId[i].id === citiesWithId[j].user_id){
//             usersWithId[i].address = citiesWithId[j]
//         }}}
// console.log(usersWithId);



// - створити розмітці блок з id, class та текстом в середені.
// Зчитати окремо цей текст з селекторів по id , class та тегу

// let ruls = document.getElementById('rul')
// console.log(ruls.innerText);
// let teg = document.getElementsByTagName('p')
// for(let  xxx of teg){
// console.log(xxx.innerText);}
// let clas = document.getElementsByClassName('rules rule1')
// for(let xxx of clas){
//     console.log(xxx.innerText);}

// - змінити цей текст використовуючи селектори id, class,  tag

// let ruls = document.getElementById('rul')
// ruls.innerText = 'dasdad';
// let teg = document.getElementsByTagName('p')
// for(let  xxx of teg){
// xxx.innerText = 'dasdasdas';}
// let clas = document.getElementsByClassName('rules rule1')
// for(let xxx of clas){
//     xxx.innerText = 'asdasdasdasdasd';}

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let ruls = document.getElementById('rul')
// ruls.style.width = '700px'
// ruls.style.height = '50px'
// let teg = document.getElementsByTagName('p')
// for(let  xxx of teg){
//     xxx.style.width = '800px';
//     xxx.style.height = '50px';}
// let clas = document.getElementsByClassName('rules rule1')
// for(let xxx of clas){
//     xxx.style.width = '800px';
//     xxx.style.height = '50px';}

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let bod = document.createElement("div")
// let one = document.createElement("div")
// let two = document.createElement("div")
// let three = document.createElement("div")
// bod.style.display = 'flex'
// one.style.height = '50px'
// one.style.width = '100px'
// one.style.backgroundColor = "silver"
// two.style.height = '50px'
// two.style.width = '100px'
// two.style.backgroundColor = "red"
// three.style.height = '50px'
// three.style.width = '100px'
// three.style.backgroundColor = "black"
// document.body.appendChild(bod)
// bod.appendChild(one)
// bod.appendChild(two)
// bod.appendChild(three)


// - за допомоги document.createElement,or
// appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
let tab = document.createElement('table')
   document.body.appendChild(tab)
for(let i=0; i < 10; i++) {
let tr = document.createElement('tr')
tab.appendChild(tr)
for(let j=0; j < 3; j++) {
    let td = document.createElement('td')
    tr.appendChild(td)
    td.style.border = '4px double'
    td.style.width = '100px'
    td.style.height = '20px'

}}

// - за допомоги document.createElement,
// appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let tab = document.createElement('table')
//    document.body.appendChild(tab)
// for(let i=0; i < 10; i++) {
//     let tr = document.createElement('tr')
//     tab.appendChild(tr)
//     for(let j=0; j < 5; j++) {
//         let td = document.createElement('td')
//         tr.appendChild(td)
//         td.style.border = '4px double'
//         td.style.width = '100px'
//         td.style.height = '20px'
//
//     }}


// - за допомоги document.createElement,
// appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені.
// n та m отримати з prompt


// let a = +prompt("ctroka")
// let b = +prompt("ctolb")
//let tab = document.createElement('table')
//    document.body.appendChild(tab)
// for(let i=0; i < b; i++) {
//     let tr = document.createElement('tr')
//     tab.appendChild(tr)
//     for(let j=0; j < a; j++) {
//         let td = document.createElement('td')
//         tr.appendChild(td)
//         td.style.border = '4px double'
//         td.style.width = '100px'
//         td.style.height = '20px'
//
//     }}

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл.
// У файлі прописати наступні доступи та дії
// - знайти всі елементі, які мають class
// let body = document.getElementsByClassName(class  {
//
// })
// console.log(body[1].classList);

// - знайти всі параграфи ,та змінити текст на hello oktenweb!

// let okt = document.getElementsByTagName('p')
// for(let i=0; i < okt.length; i++){
//     okt[i].innerText = 'hello oktenweb';
// }
//     - знайти всі div та змінити ім колір на червоний

// let div = document.getElementsByTagName('div')
// for(let i = 0; i < div.length; i++){
//     div[i].style.backgroundColor = 'aqua'
// }


// - є сторінка rules.html.
// Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скрипт, котрий зчитує всі заголовки,
//     та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let id = document.getElementById('content');
// let h2 = document.getElementsByTagName('h2');
// let ul = document.createElement('ul')
//
// id.appendChild(ul);
//
// for(let xx of h2) {
//     let inn = xx.innerText;
//        let li = document.createElement('li')
//         ul.appendChild(li)
//         li.innerText = inn;
//     }




// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

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
//     }];
//
// let div1 = document.createElement("div");
// document.body.appendChild(div1);
// for (let xxx of rules){
//     console.log(xxx);
//     let div2 = document.createElement("div");
//     div1.appendChild(div2);
//     for (let xx in xxx){
//
//         if (xx === 'title') {
//             let div3 = document.createElement("div");
//             div2.appendChild(div3);
//             let text = `${xx}: ${xxx[xx]}`;
//             div3.innerText = text;
//         } else {
//             let div4 = document.createElement("div");
//             div2.appendChild(div4);
//             let text = `${xx}: ${xxx[xx]}`;
//             div4.innerText = text;}
//     }
// }







