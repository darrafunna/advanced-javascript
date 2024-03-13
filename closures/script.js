// 2.1 Execution Context, Hoisting & Scope

// console.log(nama);
// var nama = 'Darra';

// creation phase pada Global Context
// 1. nama var = undefined
// 2. nama function = fn()
// kedua konsep diatas itu namanya hoisting
// yang dilakukan sama javascript juga
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = 'Darra';
// var umur = 23;

// function sayHello(){
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// bedanya kalau local execution context itu kita bisa akses:
// 1. window
// 2. arguments
// 3. hoisting

// var nama = 'Darra Funna';
// var username = 'darrafunna';

// function cetakURL(username){
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();

// ----------------------------------------------------------

// CLOSURE

// function init(){
//     // let nama = 'Darra';
//     // let umur = 23;
//     // function tampilNama(nama){
//     return function(nama){
//         // console.log(umur);
//         console.log(nama);
//     }
//     // return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Rafly');
// panggilNama('Ramadhan');


// ----------------------------------------------------------

function ucapkanSalam (waktu){
    return function(nama){
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('Darra');
selamatSiang('Mona');
selamatMalam('Gunawan');
