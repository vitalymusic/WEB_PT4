// API - Advanced programming interface

// FETCH
// XMLHttpRequest
document.body.style.background = "#fff";

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => showData(json));
}


function showData(data) {
    document.querySelector(".posts").innerHTML = "";

    for (post of data) {
        document.querySelector(".posts").innerHTML += `
                <div class="post" data-userId = "${post.userId}" style="cursor:pointer" onclick = "showUser(${post.userId})">
                    <h1 >${post.title}</h1>
                    <p>
                        ${post.body}
                    </p>
                </div>
            `
    }
}

function showUser(userID) {

    fetch('https://jsonplaceholder.typicode.com/users/' + userID)
        .then((response) => response.json())
        .then((json) => {
            table = document.querySelector('.userData');
            table.innerHTML += `
                <tr class="data">
                    <td>${json.name}</td>
                    <td>${json.email}</td>
                    <td>${json.phone}</td>
                </tr>    
                `;

            document.querySelector('#openDialog2').showModal();
        });
}

function closeModal(element) {
    document.querySelector(element).close();
    document.querySelector(".data").remove();
}



const formBackend = "https://www.formbackend.com/f/00bed15c59b760e9";
const contactFormEl = document.querySelector('#contactForm');


let formasLauki1 = document.querySelectorAll('input,textarea');

for (lauks of formasLauki1) {
    lauks.removeAttribute('required');
}



contactFormEl.onsubmit = (e) => {


    e.preventDefault();
    // Formas validācija
    let formasLauki = document.querySelectorAll('input,textarea');

    // Izņemam vecās kļūdas

    for(errorDiv of document.querySelectorAll('.invalid-feedback')){
        errorDiv.remove();
    }
    let errors = [];


    if (formasLauki[0].value.length < 3) {
        let error = "Ievadiet Vārdu";
        errors.push(error);
        formasLauki[0].classList.add('is-invalid');
        if (!formasLauki[0].parentElement.querySelector('.invalid-feedback')) {
            formasLauki[0].parentElement.innerHTML += `
            <div id="invalidCheck1" class="invalid-feedback">
                       ${error}
            </div>  
          `
        }

    }
    else {
        formasLauki[0].classList.replace('is-invalid', 'is-valid');
    }

    if (!formasLauki[1].value.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)) {
        let error = "Ievadiet pareizu epastu";
        errors.push(error);
        formasLauki[1].classList.add('is-invalid');
        if (!formasLauki[1].parentElement.querySelector('.invalid-feedback')) {
            formasLauki[1].parentElement.innerHTML += `
            <div id="invalidCheck1" class="invalid-feedback">
                        ${error}
            </div>  
          `
        }

    }
    else {
        formasLauki[1].classList.replace('is-invalid', 'is-valid');
    }

     if (formasLauki[2].value.length < 10) {
        let error = "Ievadiet ziņu vismaz 10 simboli";
        errors.push(error);
        formasLauki[2].classList.add('is-invalid');
        if (!formasLauki[2].parentElement.querySelector('.invalid-feedback')) {
            formasLauki[2].parentElement.innerHTML += `
            <div id="invalidCheck1" class="invalid-feedback">
                       ${error}
            </div>  
          `
        }
    }
    else {
        formasLauki[2].classList.replace('is-invalid', 'is-valid');
        
    }
    console.log(errors);
    if(errors.length > 0){
        return;
    }





    
    

    let data = new FormData(contactFormEl);

    fetch(formBackend, {
        method: "POST",
        body: data,
        headers: {
            'accept': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            if (json.errors) {
                alert('Vēstule ir nosūtīta');
            } else {
                console.error(json.errors);
            }
        })
}









