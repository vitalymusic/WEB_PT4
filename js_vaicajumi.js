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

    const formasLauki = document.querySelectorAll('#contactForm input, #contactForm textarea');

    // Notīrām iepriekšējās kļūdas
    document.querySelectorAll('.invalid-feedback').forEach(err => err.remove());
    formasLauki.forEach(field => field.classList.remove('is-invalid', 'is-valid'));

    let errors = [];

    // Palīgfunkcija kļūdu pievienošanai
    function addError(field, msg) {
        errors.push(msg);
        field.classList.add('is-invalid');
        if (!field.parentElement.querySelector('.invalid-feedback')) {
            const div = document.createElement('div');
            div.className = 'invalid-feedback';
            div.innerText = msg;
            field.parentElement.appendChild(div);
        }
    }

    // Validācijas noteikumi
    if (formasLauki[0].value.trim().length < 3) {
        addError(formasLauki[0], "Ievadiet vārdu (vismaz 3 simboli)");
    } else {
        formasLauki[0].classList.add('is-valid');
    }

    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i;
    if (!emailRegex.test(formasLauki[1].value.trim())) {
        addError(formasLauki[1], "Ievadiet pareizu e-pastu");
    } else {
        formasLauki[1].classList.add('is-valid');
    }

    if (formasLauki[2].value.trim().length < 10) {
        addError(formasLauki[2], "Ievadiet ziņu (vismaz 10 simboli)");
    } else {
        formasLauki[2].classList.add('is-valid');
    }

    if (errors.length > 0) return;

    // Nosūtam formu
    const data = new FormData(contactFormEl);

    fetch(formBackend, {
        method: "POST",
        body: data,
        headers: { 'accept': 'application/json' },
    })
    .then(res => res.json())
    .then(json => {
        if (json.errors.length == 0) {
            alert('Vēstule ir nosūtīta');
            contactFormEl.reset();
            formasLauki.forEach(f => f.classList.remove('is-valid'));
        } else {
            console.error(json.errors);
        }
    })
    .catch(err => console.error("Kļūda:", err));
};










