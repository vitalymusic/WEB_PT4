// KLasika

// while
let i = 0
while(i<=10){
    document.write("<h1>"+ i + "</h1>");
    i++;
}


// do while
let j = 0;
do{
      if(j>3 && j<5){
        j++;

        break //continue
    }
    document.write("<p>"+ j + "</p>");
    j++;

}
while(j<=10);



// for

for(let z=0;z<10;z++){
    if(z/5==1){
        continue
    }
    document.write("<h3>"+ z + "</h3>");
}


const menesi = [
  "Janvāris",
  "Februāris",
  "Marts",
  "Aprīlis",
  "Maijs",
  "Jūnijs",
  "Jūlijs",
  "Augusts",
  "Septembris",
  "Oktobris",
  "Novembris",
  "Decembris"
];


const months = [
  { title_lv: "Janvāris", title_en: "January", url: "january" },
  { title_lv: "Februāris", title_en: "February", url: "february" },
  { title_lv: "Marts", title_en: "March", url: "march" },
  { title_lv: "Aprīlis", title_en: "April", url: "april" },
  { title_lv: "Maijs", title_en: "May", url: "may" },
  { title_lv: "Jūnijs", title_en: "June", url: "june" },
  { title_lv: "Jūlijs", title_en: "July", url: "july" },
  { title_lv: "Augusts", title_en: "August", url: "august" },
  { title_lv: "Septembris", title_en: "September", url: "september" },
  { title_lv: "Oktobris", title_en: "October", url: "october" },
  { title_lv: "Novembris", title_en: "November", url: "november" },
  { title_lv: "Decembris", title_en: "December", url: "december" }
];



// for(let x = 0; x<months.length;x++){
//     document.body.innerHTML += `<a href="${months[x].url}.html">${months[x].title_lv}</a>`;
// }

for( month of months){
     document.body.innerHTML += `<a href="${month.url}.html">${month.title_lv}</a>`;
}

// for in domāts objektiem




