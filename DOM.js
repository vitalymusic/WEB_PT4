// Document Object Model

// document.


// 1. Elementu atlase

const heading1 = document.querySelector('h1');
const heading2 = document.querySelector('#second');
const textinDiv = document.querySelector('div p');
const div1 = document.querySelector('div');
const tabula = document.querySelector('table');

const images = document.querySelectorAll('img');

// Vecās metodes
// getElementById(), getElementsByTagName(),getElementsByClassName()

// 2. Satura maiņa

// innerHTML innerText

heading1.innerText = `Šis teksts ir izmainīts`;

div1.innerHTML += "<input type=\"text\" name=\"textInp\">";

// alert(heading1.innerText);

let html = "";

for(let i=0;i<10;i++){
    html+=`<tr>`;
        for(let j=0;j<10;j++){
             html+=`<td>${i+1} un ${j+1}</td>`
        }
    html+=`</tr>`;
}

tabula.innerHTML += html;

console.log(heading1,textinDiv,images);


