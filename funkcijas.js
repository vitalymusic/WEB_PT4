function funkcija1(){
    console.log(2+2);
}


const saskaitit = (sk1,sk2)=>{
    return sk1+sk2;
}

funkcija1();


function izvade(){
    document.body.innerHTML += `Šo skaitļu summa ir: ${saskaitit(3,7)}<br>`;

}

// izvade();