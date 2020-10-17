// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, 
// введенный текст остался в textarea.
// let textarea = document.getElementById('area');
// textarea.innerText = localStorage.getItem("key")
// textarea.oninput = (a) => {
// let val = a.target.value;
// localStorage.setItem("key", val)
// }



// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// textarea.innerText = localStorage.getItem("key")
// let myForm = document.forms.myForm
// myForm.elements[0].innerText = localStorage.getItem("key")
// myForm.elements[1].value = localStorage.getItem("key3")
// myForm.elements[2].checked = localStorage.getItem("key1")
// myForm.elements[3].checked = localStorage.getItem("key2")
//  myForm.oninput = (a) => {
//  if(a.target.type === "textarea"){    
//  let textarea = a.target.value;
// localStorage.setItem("key", textarea)}
//  else if (a.target.type === "radio" ){
  
//     let radio = a.target.checked;
//     localStorage.setItem("key1", radio)}
// else if ( a.target.type === "checkbox"){
  
//     let checkbox = a.target.checked;
//     localStorage.setItem("key2", checkbox)}
// else if (a.target.type === "text"){
   
//     let text = a.target.value;
//     localStorage.setItem("key3", text)
// }}



// -Дан текстареа. В него можно ввести данные, 
// нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, 
// затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, 
// с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let textarea = document.getElementById('tx');
// let save = document.getElementById('save');
// let left = document.getElementById('left');
// let right = document.getElementById('right');
// textarea.innerText = localStorage.getItem("key"+localStorage.length)
// let j = 0
// save.onclick = () => {
// j++
// let val = textarea.value;
// localStorage.setItem("key" + j.toString(), val)
// }
// i = localStorage.length
// left.onclick = () => {
//     if(i !== 1){
//         i--
//     textarea.innerText = localStorage.getItem("key"+i)}
//     else {
//         i = localStorage.length
//         textarea.innerText = localStorage.getItem("key"+i)
//     }}
// right.onclick = () => {
//     if(localStorage.length !== i){
//         i++
//     textarea.innerText = localStorage.getItem("key"+i)}
//     else {
//         textarea.innerText = localStorage.getItem("key"+1)
//         i=1
//     }}


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить  кнопку редактироваиня.
//  При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, 
// которые уже заполнены данными объекта


let form = document.forms.myF
let fio = form.fio
let nomer = form.nomer
let pochta = form.pochta
let firma = form.firma
let otdel = form.otdel
let dr = form.dr
let button = form.button
let divka = document.getElementById ("divk")
let arr = []
button.onclick = () => {

    let fioT = fio.value
    let nomerT = nomer.value
    let pochtaT = pochta.value
    let firmaT = firma.value
    let otdelT = otdel.value
    let drT = dr.value
    arr.push({fioT, nomerT, pochtaT, firmaT, otdelT, drT})  

    fio.value = ''
    nomer.value = ''
    pochta.value =''
    firma.value =''
    otdel.value =''
    dr.value = ''
 book()
}

function book(){ 
    divka.innerHTML = ""
arr.forEach(( ar, index ) => {

let user = document.createElement('div')
let edit = document.createElement('button')
let delit = document.createElement('button')
edit.innerText = 'edit'
delit.innerText = 'delit'

localStorage.setItem(index, JSON.stringify(ar))


divka.appendChild(user)

user.innerText = localStorage.getItem(index)
user.appendChild(edit)
user.appendChild(delit)
delit.onclick = () => {
    user.innerHTML = ""
    localStorage.removeItem(index)
}
edit.onclick = () => {
    let redact = document.createElement('div')
    let save = document.createElement('button')
    let pip = document.createElement('input')
    let nam = document.createElement('input')
    let mail = document.createElement('input')
    let komp = document.createElement('input')
    let grup = document.createElement('input')
    let data = document.createElement('input')
    pip.setAttribute("type", "text")
    nam.setAttribute("type", "text")
    mail.setAttribute("type", "text")
    komp.setAttribute("type", "text")
    grup.setAttribute("type", "text")
    data.setAttribute("type", "text")
    save.innerText = 'save'
    user.appendChild(redact)
    redact.appendChild(pip)
    redact.appendChild(nam)
    redact.appendChild(mail)
    redact.appendChild(komp)
    redact.appendChild(grup)
    redact.appendChild(data)
    redact.appendChild(save)
    pip.value = JSON.parse(localStorage.getItem(index)).fioT
    nam.value = JSON.parse(localStorage.getItem(index)).nomerT
    mail.value = JSON.parse(localStorage.getItem(index)).pochtaT
    komp.value = JSON.parse(localStorage.getItem(index)).firmaT
    grup.value = JSON.parse(localStorage.getItem(index)).otdelT
    data.value = JSON.parse(localStorage.getItem(index)).drT

    save.onclick = () => {

    let obj = {fioT:pip.value, 
        nomerT:nam.value, 
        pochtaT:mail.value, 
        firmaT:komp.value,
         otdelT:grup.value, 
         drT:data.value}
       localStorage.setItem(index, JSON.stringify(obj))
       user.innerText = localStorage.getItem(index)
       user.appendChild(edit)
user.appendChild(delit)
      redact.innerHTML = ''  
    }
}
}) }
