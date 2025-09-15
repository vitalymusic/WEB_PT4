let reg1 = /[a-z,.$#0-9]{3,}\@[a-z]{2,}\.[a-z]{2,}/gm;
let epasts = "vards.uzvards@inbox.lv";

if(epasts.match(reg1)){
    alert("Derīgs")
}

// https://regex101.com/