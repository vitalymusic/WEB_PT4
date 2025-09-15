// Komentārs

// camelCase

// let num1 = 10;
// let num1;

// {
     
// }

// Vienkāršie datu tipi
let num  = 20; //int
let summ = 23.67456 //double //float
let text1 = "Jauns teksts";
let text2 = 'Jauns teksts';
let text3 = `Jauns teksts`; //String
let bool1 = true;

// Saliktie 

let arr1 = [10,"teksts",bool1,[],{}]; //Masīvi
let krasas = ["balta", "melna"]


let obj1 = {
    marka:"BMW",
    krasas:krasas,
    jauna:true,
    bilde:"https://upload.wikimedia.org/wikipedia/commons/8/86/BMW_G60_520i_1X7A2443.jpg"
};

// Matemātiksie operatori

// +-*/ % atlikums no dalīšanas - Matematiskie 
// ++ -- inkrements un dekrements
// += -= *= /= 

// Ja runa iet par String, tad + ir konkatinācijas operators


// Datu izvade

// 1. document.write() izvada datus pašā dokumentā
document.write(num);
document.write(arr1[1]);
document.write(obj1);
document.write(`<img src=" ${obj1.bilde}" width="300px"> `);
// console.log(obj1);
// console.log(arr1);


// Darbības ar skaitļiem

// document.write(summ.toFixed(2));
// let sk1 = +prompt('Ievadiet 1. skaitli'); //Atmiņā saglabā tikai STRING
// let sk2 = +prompt('Ievadiet 2. skaitli'); //Atmiņā saglabā tikai STRING


// document.write(sk1+sk2);

const skaitlis = 45; //tikai nolasāms mainīgais


// Math.round(x)
// console.log(Math.ceil(0.95));
console.log(Math.floor(5.95));
// Expected output: 5

document.write(Math.trunc(Math.random()*100))


// Teksta funkcijas

document.write(text1[3]);

// Konkatenācija

let html = "<h1>" + text1 + "</h1>"; 
html += "<a href=' "+ text2+" '>"+text2+"</a>";
html += "<br>";

result = html.toLowerCase();
result = html.toUpperCase();
result = html.slice(0,100);


result = text2.split("j");
result = text2.search("tekkkk");
result = text2.search("tekkkk");
result = text2.replace("teksts","gads");



document.write(result);
console.log(result);

