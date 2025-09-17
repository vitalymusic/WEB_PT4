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

for(let rinda=0;rinda<10;rinda++){
    html+=`<tr>`;
        for(let suna=0;suna<10;suna++){
             html+=`<td>${rinda+1} un ${suna+1}</td>`
        }
    html+=`</tr>`;
}

tabula.innerHTML += html;

console.log(html);

// console.log(heading1,textinDiv,images);


// Elementu atribūtu mainīšana

heading1.setAttribute('id','first');
console.log(heading1.getAttribute('id'));

tabula.id = "tabula1";
tabula.className = "tabula1";



images[0].src = "./imac-1998.jpg";
images[0].alt = "Imac";

// Iestatīt vairākiem elementiem

let imgNumber = 0;
for(image of images){

    image.src = `https://picsum.photos/id/${imgNumber}/200/300`;
    image.alt = `Attēla ID ${imgNumber}`;

    imgNumber++;
}



// Elementa stila maiņa

heading1.style.marginTop = "30px";
heading1.style.color = "#f60808ff";
document.body.style.background = "linear-gradient(#000,blue)";


// Elementa CSS klases pievienošana / noņemšana

heading1.classList.add('border','background');
heading1.classList.remove('background');



// Notikumu pievienošana pie elementiem

heading1.onclick = ()=>{
    heading1.classList.toggle('background');
}

for (cell of document.querySelectorAll('table td')){
    cell.onmouseenter = (e)=>{
        // console.log(e);
        e.target.style.background = "white";
        e.target.style.fontSize = "14pt";
    }

     cell.onmouseleave = (e)=>{
        // console.log(e);
        e.target.style.background = "none";
         e.target.style.fontSize = "";
    }
}

document.body.onkeydown = (e)=>{
    //  console.log(e);

     if(e.key==1){
        document.body.style.background = "red";
     }
     if(e.key==2){
        document.body.style.background = "green";
     }
     
}