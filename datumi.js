let laiks1 = new Date();
function laiks(){
let laiks1 = new Date();
// console.log(Date.now());

let diena = laiks1.getDate();
let menesis = laiks1.getMonth();
let gads = laiks1.getFullYear();

let stundas = laiks1.getHours();
let minutes = laiks1.getMinutes();
let sekundes = laiks1.getSeconds();

heading1.innerHTML = `Pašlaik ir: ${diena}.${menesis+1}.${gads} ${stundas}:${minutes}:${sekundes}`
console.log(menesis,stundas,minutes,sekundes,gads,diena);
}


// setInterval(()=>{laiks()},1000);

let tekosaisMS = Date.now();
let laiksPec48stundam = tekosaisMS+(1000*3600*48);
let laiks2 = new Date(laiksPec48stundam);


console.log(laiks1,laiks2);



