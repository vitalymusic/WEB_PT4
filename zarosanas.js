nosacijums2 = (5>3 && 2>3);
nosacijums2 = (5>3 || 2>3);

if(false){
    console.log(true);

}else if(nosacijums2){
     console.log(nosacijums2);
}

else{
    console.log(false);
}

let y=5;

switch(y){
    case 1: console.log("Pirmdiena");break;
    case 2: console.log("Otrdiena");break;
    default: console.log("cits");break;
}

let skaitlis = 6;
// if(skaitlis <10){
//     skaitlis="0"+skaitlis;
// }

document.body.innerHTML+=skaitlis<10?"0"+skaitlis:skaitlis; //ternārais operātors


