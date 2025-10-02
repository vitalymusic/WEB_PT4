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

let errors = [];

contactFormEl.onsubmit = (e) => {
    e.preventDefault();
    // Formas validācija
    let formasLauki = document.querySelectorAll('input,textarea');

    if (formasLauki[0].value.length < 3) {
        errors.push("Ievadiet Vārdu");
        formasLauki[0].classList.add('is-invalid');
        if (!formasLauki[0].parentElement.querySelector('.invalid-feedback')) {
            formasLauki[0].parentElement.innerHTML += `
            <div id="invalidCheck1" class="invalid-feedback">
                        ${errors[0]}
            </div>  
          `
        }

    }
    else {
        formasLauki[0].classList.replace('is-invalid', 'is-valid');
        formasLauki[0].parentElement.querySelector('.invalid-feedback').remove();
    }

    if (!formasLauki[1].value.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)) {
        errors.push("Ievadiet pareizu epastu");
        formasLauki[1].classList.add('is-invalid');
        if (!formasLauki[1].parentElement.querySelector('.invalid-feedback')) {
            formasLauki[1].parentElement.innerHTML += `
            <div id="invalidCheck1" class="invalid-feedback">
                        ${errors[1]}
            </div>  
          `
        }

    }
    else {
        formasLauki[1].classList.replace('is-invalid', 'is-valid');
        formasLauki[1].parentElement.querySelector('.invalid-feedback').remove();
    }


     if (formasLauki[2].value.length < 10) {
        errors.push("Ievadiet ziņu vismaz 10 simboli");
        formasLauki[2].classList.add('is-invalid');
        if (!formasLauki[2].parentElement.querySelector('.invalid-feedback')) {
            formasLauki[2].parentElement.innerHTML += `
            <div id="invalidCheck1" class="invalid-feedback">
                        ${errors[2]}
            </div>  
          `
        }

    }
    else {
        formasLauki[2].classList.replace('is-invalid', 'is-valid');
        formasLauki[2].parentElement.querySelector('.invalid-feedback').remove();
    }







    console.log(formasLauki);
    return;

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









