// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select



// function Teg(name, description, arr=[]) {
//     this.name = name;
//     this.description = description;
//     this.arr = arr;
//
// }
// function Attribute(name, description) {
//     this.name = name;
//     this.description = description;
// }
//
// let accesskey = new Attribute('accesskey', 'Активация ссылки с помощью комбинации клавиш')
// let coords = new Attribute('coords', 'Устанавливает координаты активной области')
// let a = new Teg('a', 'створення посилань', [accesskey, coords])
// console.log(a);






// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// class Teg {
//     constructor(name, description, arr = []) {
//         this.name = name;
//         this.description = description;
//         this.arr = arr;
//     }}
// class Attribute {
//     constructor(name, description) {
//         this.name = name;
//         this.description = description;
//     }}
// let accesskey = new Attribute('accesskey', 'Активация ссылки с помощью комбинации клавиш')
// let coords = new Attribute('coords', 'Устанавливает координаты активной области')
// let a = new Teg('a', 'створення посилань', [coords, accesskey])
// console.log(a);



// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, 
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, 
// і доавляет його в поточний об'єкт car


// let car = {
//         model:  'BMW',
//         made: 'Germany',
//         age: 3,
//         speed: 200,
//         power: 3,
// }
// function drive() {
//          console.log(`їдемо зі швидкістю ${car.speed} на годину`);
//                  }
// drive()
// function info() {
//          console.log(car);
//                 }
//
// info()
// function increaseMaxSpeed(newSpeed) {
//          car.speed = newSpeed;
//
//                                     }
// increaseMaxSpeed(270)
// function addDriver(driver = {}) {
//          car.driver = driver;
//                                     }
// addDriver({Name: 'Ihor',age: 25, DriveAge: 3})
//
//          console.log(car);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і доавляет його в поточний об'єкт car

//  function Car (model, made, age, speed, power) {
//  this.model = model
//  this.made = made
//  this.age = age
//  this.speed = speed
//  this.power = power
//
//      this.drive = function () {
//           console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//      }
//
//     this.info =  function(infoCar) {
//               console.log(infoCar);
//      }
//        this.increaseMaxSpeed = function (newSpeed) {
//                this.speed = newSpeed;
//       }
//         this.changeYear = function (newValue){
//            age = newValue;
//        }
//        this.addDriver = function (driver) {
//                  this.addDriver = driver;
//        }
//      }
//  function Driver(Name, Age, DriveAge) {
//      this.Name = Name;
//      this.Age = Age;
//      this.DriveAge = DriveAge;
//  }
//  let driver = new Driver('Ihor', '25','2')
//  let zaz = new Car ('zaz', 'uk', 1, 120, 100)
//   zaz.drive()
//   zaz.info(zaz)
//   zaz.increaseMaxSpeed(150)
//   zaz.addDriver(driver)
// console.log(zaz);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


//   class Car {
//       constructor(model, made, age, speed, power) {
//   this.model = model
//   this.made = made
//   this.age = age
//   this.speed = speed
//   this.power = power
//       }
//
//       drive(){
//           console.log(`їдемо зі швидкістю ${this.speed} на годину`);
//       }
//      info(avto){
//          console.log(avto);
//      }
//       increaseMaxSpeed(newSpeed){
//           this.speed = newSpeed;
//       }
//       changeYear (newValue){
//           this.age = newValue;
//       }
//       addDriver (driver){
//           this.addDriver = driver;
//       }
//   }
//   class Drive  {
// constructor (Name, Age, DriveAge) {
//       this.Name = Name;
//       this.Age = Age;
//       this.DriveAge = DriveAge;
//   }          }
//   let driver = new Drive('Ihor', '25','2')
//
//
//
//   let zaz = new Car ('zaz', 'uk', 1, 120, 100)
//   zaz.drive()
//   zaz.info(zaz)
//   zaz.increaseMaxSpeed(130)
//   zaz.addDriver(driver)
//   console.log(zaz);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Cinderella {
//     constructor(name, age, sizeF) {
//         this.name = name;
//         this.age = age;
//         this.sizeF = sizeF;
//     }}
//
// class Prince {
//     constructor(name, age, sizeB) {
//         this.name = name;
//         this.age = age;
//         this.sizeB = sizeB;
//
//     }}
//
//     let aa = new Cinderella('aa',18,34);
//     let bb = new Cinderella('bb',19,35);
//     let cc = new Cinderella('cc',20,36);
//     let dd = new Cinderella('dd',21,37);
//     let ff = new Cinderella('ff',22,38);
//     let gg = new Cinderella('gg',23,39);
//     let jj = new Cinderella('jj',24,40);
//     let ee = new Cinderella('ee',25,41);
//     let kk = new Cinderella('kk',26,42);
//     let ll = new Cinderella('ll',27,43);
//
//     let yy = new Prince('yy',30,35);
//     let xx = new Prince('xx',29,34);
//     let ww = new Prince('ww',27,40);
//     let qq = new Prince('qq',28,39);
//     let rr = new Prince('rr',26,38);
//     let tt = new Prince('tt',25,37);
//     let ss = new Prince('ss',24,36);
//     let pp = new Prince('pp',23,43);
//     let oo = new Prince('oo',22,41);
//     let uu = new Prince('uu',21,42);
//
//
// arrC = [aa, bb, cc, dd, ff, gg, jj, ee, kk, ll];
// arrP = [yy, xx, ww, qq, rr, tt, ss, pp, oo, uu];
//
// for (let i = 0; i < arrC.length; i++) {
//
//     for(let j = 0; j < arrP.length; j++) {
//         if(arrC[i].sizeF === arrP[j].sizeB) {
//             arrC[i].Prince = arrP[j]
//         }
//         }}
// console.log(arrC);

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік,
// туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


// function Cinderella(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
//       }
// function Prince(name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
//     this.Cinderella  = function (arr=[]) {
// for (let i = 0; i < arr.length; i++) {
//              if(size === arr[i].size){
//             console.log(arr[i]);  }
// }
//     }
//       }
//         let aa = new Cinderella('aa',18,34);
//         let bb = new Cinderella('bb',19,35);
//         let cc = new Cinderella('cc',20,36);
//         let dd = new Cinderella('dd',21,37);
//         let ff = new Cinderella('ff',22,38);
//         let gg = new Cinderella('gg',23,39);
//         let jj = new Cinderella('jj',24,40);
//         let ee = new Cinderella('ee',25,41);
//         let kk = new Cinderella('kk',26,42);
//         let ll = new Cinderella('ll',27,43);
//
// arrC = [aa, bb, cc, dd, ff, gg, jj, ee, kk, ll];
//         let yy = new Prince('yy',30,35);
//          yy.Cinderella(arrC)









