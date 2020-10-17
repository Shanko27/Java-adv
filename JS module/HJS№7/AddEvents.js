// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let text = document.querySelector('#text')
// let button = document.forms.myForma1.del
// button.onclick = (ev) => {text.hidden ? text.hidden = false: text.hidden = true }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.forms.myForma1.del
//
// button.onclick = (ev) =>{
// button.style.display = 'none' }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// let button = document.forms.myForma1.del
// let text = document.forms.myForma1.age;
// button.onclick = (ex) => {
//     ex.preventDefault()
//     let tx = text.value
//     if (tx < 18) {console.log(`вік меньше 18`)} else console.log(`вік більше 18`)}

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let men = document.getElementById('men')
// let xz = document.getElementById('xz')
// let a = false
// xz.onclick = () => {
//     if(a) {
//         men.style.display = 'block';
//          a = false;
//     } else {
//         men.style.display = 'none';
//          a = true;
//     }}
// - Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// class Koment {
//     constructor(title, body) {
//         this.title = title;
//         this.body = body;
//     }}
// let Artur = new Koment('телефон', "купив, а він не працює")
// let Oleg = new Koment('телевізор', "великий єкран")
// let Olia = new Koment('кава', "смачна міцна кава")
//
// let arr  = [Artur, Oleg, Olia]
// arr.forEach(value => {
//     let div = document.createElement('div');
//     document.body.appendChild(div);
//     let input = document.createElement('input')
//     input.setAttribute("type", "submit")
//     input.setAttribute("value", "val")
//     input.setAttribute("name", "a")
//     let h3 = document.createElement('h3')
//     let p = document.createElement('p')
//     div.appendChild(input)
//     div.appendChild(h3)
//     div.appendChild(p)
//
//     h3.innerText = value.title
//     p.innerText = value.body
//     input.onclick = () => {
//         if (p.style.display === 'block') {
//             p.style.display = 'none'
//         } else {
//             p.style.display = 'block'
//         }
//     }
// })

// - створити 2 форми  по 2 інпути в кожній.
// ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let toDiv = document.querySelector('#toForm')
// document.body.appendChild(toDiv)
// let Form1 = document.createElement('form')
// Form1.setAttribute("action", "")
// Form1.setAttribute("name", "name1")
// toDiv.appendChild(Form1)
// let input1 = document.createElement('input')
// input1.setAttribute("type", "number")
// input1.setAttribute("name", "nameI1")
// Form1.appendChild(input1)
// let input2 = document.createElement('input')
// input2.setAttribute("type", "text")
// input2.setAttribute("name", "nameI2")
// Form1.appendChild(input2)
// let Form2 = document.createElement('form')
// Form2.setAttribute("action", "")
// Form2.setAttribute("name", "name2")
// toDiv.appendChild(Form2)
// let input3 = document.createElement('input')
// input3.setAttribute("type", "number")
// input3.setAttribute("name", "nameI3")
// Form2.appendChild(input3)
// let input4 = document.createElement('input')
// input4.setAttribute("type", "text")
// input4.setAttribute("name", "nameI4")
// Form2.appendChild(input4)
//
// let butt = document.createElement('button')
// document.body.appendChild(butt)
// butt.innerText = 'okey'
// butt.onclick = () => {
//     console.log(document.forms.name1.nameI1.value);
//     console.log(document.forms.name1.nameI2.value);
//     console.log(document.forms.name2.nameI3.value);
//     console.log(document.forms.name2.nameI4.value); }

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// let div = document.getElementById("toForm");
// function crTab(a, b, c) {
//     let tab = document.createElement('table')
//     с.appendChild(tab)
//     for(let i = 0; i < a; i++){
//         let tr = document.createElement('tr')
//         tab.appendChild(tr)
//         for(let l = 0; l < b; l++){
//             let td = document.createElement('td')
//             tr.appendChild(td)}
//     }}
// crTab(1,4, div)

// - Створити 3 инпута та кнопку.
// Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//


// let but = document.getElementById("push");
// but.onclick = () =>{
//     function crTab(a, b, c=[]) {
//         let div = document.getElementById("toForm");
//         let j=0
//         let tab = document.createElement('table')
//         div.appendChild(tab)
//         for(let i = 0; i < a; i++){
//             let tr = document.createElement('tr')
//             tab.appendChild(tr)
//             for(let l = 0; l < b; l++){
//                 let td = document.createElement('td')
//                 tr.appendChild(td)
//                 td.innerText = c[j].toString()
//                 j++ }}}
//     crTab(2,4, ["div",'tr','td','a','p','h2','bt','h1'])}

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let left = document.getElementById('left')
// let right = document.getElementById('right')
// let img = document.getElementById('img')
// let img1 = 'foto/AC.jpg'
// let img2 = 'foto/Cr.jpg'
// let img3 = 'foto/F.png'
// let img4 = 'foto/W.jpg'
// let arr = [img1, img2, img3, img4]
// let i=0
//
// left.onclick = () => {
//     if (i !== 0) {
//         i--
//         img.src = arr[i]
//
//         console.log(arr[i]);
//         console.log(i);
//
//     }else {img.src = arr[arr.length-1]
//         console.log(arr[arr.length]);
//         i=arr.length- 1}}
// right.onclick = () => {
//     if (i !== arr.length-1) {
//         i++
//         img.src = arr[i]
//
//     }else {img.src = arr[0]
//     i=0}}

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// arr = ['чорт', "блин", "кувах", "курва"]
// let wor = document.getElementById('wor')
// let but = document.getElementById('button')
// but.innerText = "OK"
// but.onclick = () => {
//     for(let xx of arr){
//         if (wor.value === xx){
//             alert('stop')
//         }}wor.value = ""}



// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// arr = ['чорт', "блин", "кувах", "курва"]
// let wor = document.getElementById('wor')
// let but = document.getElementById('button')
// but.innerText = "OK"
// but.onclick = () => {
//     let spl = wor.value.split(' ')
//     for(let xx of arr){
//         for (let xy of spl){
//             if (xy === xx){
//             alert('stop')
//         }}}wor.value = ""}



// -- создать скрипт, который берет считывает на странице (rules.html)
// текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
//     При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// let arrH2 = document.getElementsByTagName("h2")
// let rulMenu = document.getElementById("rulMenu")
//
// for (let x=0; x < arrH2.length; x++) {
//     let li = document.createElement("li")
//     rulMenu.appendChild(li)
//     let text = arrH2[x].innerText
//     let a = document.createElement("a")
//     li.appendChild(a)
//     a.innerText = text
//     a.setAttribute("href", "#set"+x)
//     arrH2[x].setAttribute("id", "set"+x)}

// -- взять массив пользователей
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ


// let usersWithAddress = [

//     {id:1,name: 'vasya', age: 31, status: false, address:
//             {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address:
//             {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address:
//             {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address:
//             {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address:
//             {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address:
//             {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address:
//             {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address:
//             {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address:
//             {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address:
//             {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address:
//             {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];

// let ck1 = document.forms.myForma3.check1
// let ck2 = document.forms.myForma3.check2
// let ck3 = document.forms.myForma3.check3
// let diva = document.getElementById('diva')
// function funk()
// {let tagP = document.getElementsByTagName('p')
// for(xxx of tagP){
//         xxx.innerText = ''
// }}

// function fun(a)
// {a.forEach(val => {
//    let p = document.createElement('p')     
// diva.appendChild(p)
//         p.innerText = p.innerText  + JSON.stringify(val) 
// })}
// fun(usersWithAddress)

// ck1.onclick = () => {
//         let statusF = usersWithAddress.filter(value => value.status === true)
//         let agef = statusF.filter(value => value.age > 29)
//         let cityF = statusF.filter(value => value.address.city === 'Kyiv')
//         let cityF3 = cityF.filter(value => value.address.city === 'Kyiv')
//                 ck1.checked? ck1.checked = true: ck1.checked = false
//        if (ck1.checked === true && ck2.checked === true && ck3.checked === true){
//         funk()
//         fun(cityF3)
//         } else if(ck1.checked === true && ck2.checked === true){
//                 funk()
//                 fun(agef)
//         } else if(ck1.checked === true && ck3.checked === true){
//                 funk()
//                 fun(cityF)    
//         } else if (ck1.checked === true){
//                 funk()
//                 fun(statusF)
//         }else  { 
//                 funk()
//                 fun(usersWithAddress) }}

// ck1.onclick = () => {
//         let statusF = usersWithAddress.filter(value => value.status === true)
//         let agef = statusF.filter(value => value.age > 29)
//         let cityF = statusF.filter(value => value.address.city === 'Kyiv')
//         let cityF3 = agef.filter(value => value.address.city === 'Kyiv')
//                 ck1.checked? ck1.checked = true: ck1.checked = false
//        if (ck1.checked === true && ck2.checked === true && ck3.checked === true){
//         funk()
//         fun(cityF3)
//         } else if(ck1.checked === true && ck2.checked === true){
//                 funk()
//                 fun(agef)
//         } else if(ck1.checked === true && ck3.checked === true){
//                 funk()
//                 fun(cityF)    
//         } else if (ck1.checked === true){
//                 funk()
//                 fun(statusF)
//         }else  { 
//                 funk()
//                 fun(usersWithAddress) }}
// ck2.onclick = () => {
//           let agef = usersWithAddress.filter(value => value.age > 29)
//           let statusF = agef.filter(value => value.status === true)
//           let cityF = agef.filter(value => value.address.city === 'Kyiv')
//           let cityF3 = statusF.filter(value => value.address.city === 'Kyiv')
//           ck2.checked? ck2.checked = true: ck2.checked = false
//          if (ck2.checked === true && ck1.checked === true && ck3.checked === true){
//           funk()
//           fun(cityF3)
//           } else if(ck2.checked === true && ck1.checked === true){
//                   funk()
//                   fun(statusF)
//           } else if(ck2.checked === true && ck3.checked === true){
//                   funk()
//                   fun(cityF)    
//           } else if (ck2.checked === true){
//                   funk()
//                   fun(agef)
//           }else  { 
//                   funk()
//                   fun(usersWithAddress) }}
//   ck3.onclick = () => {
//           let cityF = usersWithAddress.filter(value => value.address.city === 'Kyiv')
//           let statusF = cityF.filter(value => value.status === true)
//           let agef = cityF.filter(value => value.age > 29)
//           let cityF3 = statusF.filter(value => value.age > 29)
//           ck3.checked? ck3.checked = true: ck3.checked = false
//          if (ck1.checked === true && ck2.checked === true && ck3.checked === true){
//           funk()
//           fun(cityF3)
//           } else if(ck3.checked === true && ck2.checked === true){
//                   funk()
//                   fun(agef)
//           } else if(ck1.checked === true && ck3.checked === true){
//                   funk()
//                   fun(statusF)    
//           } else if (ck3.checked === true){
//                   funk()
//                   fun(cityF)
//           }else  { 
//                   funk()
//                   fun(usersWithAddress) }}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры.
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети,
// то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
//     лежащему с ним на одном уровне

let back = document.createElement("button")
let next = document.createElement("button")
let start = document.getElementById('start')
back.setAttribute("id", "back")
next.setAttribute("id", "next")
document.body.appendChild(back)
document.body.appendChild(next)
back.innerText = 'BACK'
next.innerText = 'NEXT'

function nextChild (a) {
let child =   a.children[0]
 return child
}

let childer = nextChild(start)

next.onclick = () => {
        let childer = nextChild(start)
        nextChild(childer)
}

// *** При виділені сегменту тексту на сторінці
// він стає жирний/курсивний/або якось іншим способом змінює свій стан








































































