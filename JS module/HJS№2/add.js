//1

// let number = [11, 22, 33, 44, 55];
// console.log(number);

//2

// let str = ['srt', 'srv', 'src', 'srr', 'str'];
// console.log(str);

//3

// let sib = ['srt', 2, true, false, -1];
// console.log(sib);

//4

// let ar = [];
// ar[1] = 1;
// ar[7] = 'skills';
// console.log(ar);

//5

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Hello </div>`)
//     }

//6

// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Hello ${i} </div>`)
// }

//7

// let i = 0;
// while (i < 20){
//     document.write(`<h1> Hell </h1>`);
//     i++;
// }

//8

// let i = 0;
// while (i < 20){
//     document.write(`<h1> Hell ${i} </h1>`);
//     i++;
// }

//9

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let zzz of arr){
//     console.log(zzz);
// }

//10

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'k', 'z']
// for (let zzz of arr){
//     console.log(zzz);
// }

//11

// let arr = ['a', 1, [2, 'b'], true, 'e', -7, [5, false, 'ssa'], 'j', 4, 'z']
// for (let zzz of arr){
//     console.log(zzz);
// }

//12

// let arr = ['a', 1, 2, true, 'e', -7, false, 'j', 4, 'z']
// for (let zzz = 0; zzz < arr.length; zzz++){
//     if (typeof arr[zzz] === "boolean"){
//     console.log (arr[zzz]);}
// }

//13

// let arr = ['a', 1, 2, true, 'e', -7, false, 'j', 4, 'z']
// for (let zzz = 0; zzz < arr.length; zzz++){
//     if (typeof arr[zzz] === "number"){
//         console.log (arr[zzz]);}
// }

//14

// let arr = ['a', 1, 2, true, 'e', -7, false, 'j', 4, 'z']
// for (let zzz = 0; zzz < arr.length; zzz++){
//     if (typeof arr[zzz] === "string"){
//         console.log (arr[zzz]);}
// }

//15

// let arr = [];
//
// arr[0] = 'a';
// arr[1] = 1;
// arr[2] = 2;
// arr[3] = true;
// arr[4] = 'z';
// arr[5] = 6;
// arr[6] = 7;
// arr[7] = false;
// arr[8] = 'd';
// arr[9] = 'sdsd';
// for (let zzz of arr){
//     console.log(zzz);
// }

//16

// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
// }

//17

// for (let i = 1; i <= 100; i++){
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
// }

//18
//
// for (let i = 1; i <= 100; i+=2){
//     console.log(i);
//     document.write(i);
//     document.write('<br>');
// }

//19-20

// for (let i = 1; i <= 100; i++){
//    if(i%2 === 0){
//     console.log(i);
//     document.write(i);
//     document.write('<br>');}
// }

//20

// for (let i = 1; i <= 100; i++){
//     if(i%2 === 1){
//         console.log(i);
//         document.write(i);
//         document.write('<br>');}
// }

//21

// for (let i = 0; i <= 2; i++) {
// if(i === 2){
//     console.log('00:02:00')
// }else
//     for (let j = 0; j < 60; j++){
//         if(j<10){
//         console.log('00:' + '0' + i + ':' + '0' + j);
//         }else console.log('00:' + '0' + i + ':' + j);
//     }
// }

//22

// for (let i = 0; i <= 2; i++) {
//
//     for (let t = 0; t < 60; t++) {
//         if (i === 2 && t === 21) {break}
//         for (let j = 0; j < 60; j++) {
//             if (i === 2 && t === 20 && j === 1) {
//                 break
//             }else if (j < 10 && t < 10) {
//                 console.log('0' + i + ':' + '0' + t + ':' + '0' + j);
//             }else if (j < 10) {
//             console.log('0' + i +':' + t + ':' + '0' + j);
//             }else if (t < 10) {
//                 console.log('0' + i + ':' + '0' + t + ':' + j);
//             } else console.log('0' + i +':' + t + ':' + j);
//         }
//     }
// }

//23

// let arr = ['a', 'b', 'c']
// let a = " "
// for (let i = 0; i < arr.length; i++){
//     a+=arr[i];
// }
// console.log(a);

//24

// let arr = ['a', 'b', 'c']
// let a = " "
// let j = 0;
// while (j < arr.length){
//     a+=arr[j];
//     j++;
// }
// console.log(a);

//25

// let arr = ['a', 'b', 'c']
// let a = " "
// for (let x of arr){
//     a+=x;
// }
// console.log(a);

//26

// let arr = ['a', 'b', 'c']
//
// for (let i = 1; i < 4; i++){
//     arr.push(i);
//
// }console.log(arr);

//27

// let arr = [1, 2, 3]
// let ar = []
// for(let i = arr.length; i > 0; i--){
//     ar.push(i);
// }
// console.log(ar);

//28

// let arr = [1, 2, 3]
//
// for (let i = 4; i < 7; i++){
//     arr.push(i);
//
// }console.log(arr);

//29

// let arr = [1, 2, 3]
//
// for (let i = 6; i > 3; i--){
//     arr.unshift(i);
//
// }console.log(arr);

//30

// let arr = ['js', 'css', 'jq']
//
// let sh = arr.shift()
// console.log(sh);

//31

// let arr = ['js', 'css', 'jq']
//
// let sh = arr.pop()
// console.log(sh);


//32

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(3));

//33

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0 ,2));

//34

// let arr = [1, 2, 3, 4, 5];
// arr.splice(-4, 2);
// console.log(arr);

//35

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//36

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(9, 0, 'e');
// console.log(arr);

//37

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i=0; i< arr.length; i++){
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
// }

//38

// let
//     arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     ar = [];
//     for (let i=0; i< arr.length; i++) {
//     ar.push(arr[i]);
//     }
// console.log(arr);
// console.log(ar);

//39

// let
//     arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     ar = [];
//     i = arr.length
//    while  (i > 0) {
//         i--;
//         ar.unshift(arr[i]);
//
//      }
//  console.log(arr);
//  console.log(ar);

//40

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0
//    while  (i < arr.length) {
//
//        console.log(arr[i]);
//        i++;
//      }

//41

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i=0; i< arr.length; i++) {
//        console.log(arr[i]);
//      }

//42

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0
//    while  (i < arr.length) {
//        if (i%2 === 0) {
//         console.log(arr[i]);
//     }
//        i++;
//      }

//43

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for  (let i = 0; i < arr.length; i++) {
//     if (i%2 === 0) {
//         console.log(arr[i]);
//     }
//
// }

//44

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0
// while  (i < arr.length) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
//     i++;
// }

//45

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for  (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 === 0) {
//         console.log(arr[i]);
//     }
//
// }

//46

// let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for  (let i = 0; i < arr.length; i++) {
//     if (arr[i]%3 === 0) {
//         arr.splice(i, 1, "okten");
//     }
// }
// console.log(arr);


//47

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let i=0; i < arr.length; i++) {
//     ar.unshift(arr[i]);
//     }
// console.log(ar);

//48

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// i = 0
//    while  (i < ar.length) {
//
//        console.log(ar[i]);
//        i++;
//      }

//49

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// for (let i=0; i< ar.length; i++) {
//        console.log(ar[i]);
//      }

//50

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// i = 0
//    while  (i < ar.length) {
//        if (i%2 === 0) {
//         console.log(ar[i]);
//     }
//        i++;
//      }

//51

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// for  (let i = 0; i < ar.length; i++) {
//     if (i%2 === 0) {
//         console.log(ar[i]);
//     }
//
// }

//52

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// i = 0
// while  (i < ar.length) {
//     if (ar[i]%2 === 0) {
//         console.log(ar[i]);
//     }
//     i++;
// }

//53

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// for  (let i = 0; i < ar.length; i++) {
//     if (ar[i]%2 === 0) {
//         console.log(ar[i]);
//     }
//
// }

//54

// let arr = [2,17,13,6,22,31,45,66,100,-18],
//     ar = [];
//     for (let t=0; t < arr.length; t++) {
//     ar.unshift(arr[t]);
//     }
// for  (let i = 0; i < ar.length; i++) {
//     if (ar[i]%3 === 0) {
//         ar.splice(i, 1, "okten");
//     }
// }
// console.log(ar);

//56, 58

// let ar = [];
//     for (let t=1; t <= 50; t++) {
//     ar.push(t*2);
//     }
// console.log(ar);

//57, 59

// let ar = [];
// for (let t=1; t <= 50; t++) {
//     ar.push(t*2-1);
// }
// console.log(ar);

//58

// let ar = [];
// for (let t=1; t <= 50; t++) {
//    let i = Math.floor(Math.random() * (732 - 8 ) + 8);
//     ar.push(i);
// }
// console.log(ar);

//59

// let ar = [];
// for (let t=1; t <= 50; t++) {
//    let i = Math.floor(Math.random() * (732 - 8 ) + 8);
//     ar.push(i);
//
//     if (t%3 === 0 ) {
//         console.log(i);
//      }
// }console.log(ar);

//60

// let ar = [];
// for (let t=1; t <= 50; t++) {
//     let i = Math.floor(Math.random() * (732 - 8 ) + 8);
//     ar.push(i);
//
//     if (t%3 === 0 && i%2 === 0) {
//         console.log(i);
//     }
// }console.log(ar);

//61

// let ar = [],
//     arr = [];
// for (let t=1; t <= 50; t++) {
//     let i = Math.floor(Math.random() * (732 - 8 ) + 8);
//     ar.push(i);
//
//     if (t%3 === 0 && i%2 === 0) {
//         arr.push(i);
//     }
// }console.log(ar);
// console.log(arr);

//jdksjdkskjdkddsdsdsds
//62

// let ar = [];
// for (let t=0; t < 50; t++) {
//     let i = Math.floor(Math.random() * (732 - 8 ) + 8);
//     ar.push(i);
//
//     if (i%2 === 0) {
//         console.log(ar [t-1]);
//     }
// }console.log(ar);

//63

// let arr = [100,250,50,168,120,345,188];
// let sum = 0;
// for (let t=0; t < arr.length; t++) {
//      sum = arr[t] + sum
// }
// console.log(sum / arr.length);

// 64

// let ar = [],
//     arr = [];
// for (let t = 0; t < 5; t++) {
//     let i = Math.floor(Math.random() * 10);
//     ar.push(i);
// arr.push(ar[t] * 5);
//
// }console.log(ar);
// console.log(arr);

//65

// let arr = ['a', 1, 2, true, 'e', -7, false, 'j', 4, 'z'],
//     ar = [];
// for (let t = 0; t < arr.length; t++) {
//
//     if (typeof arr[t] === "number") {
//         ar.push(arr[t]);
//     }
// }console.log(ar);
// console.log(arr);
























