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
       
            fetch('https://jsonplaceholder.typicode.com/users/'+userID)
            .then((response) => response.json())
            .then((json) => {
                table = document.querySelector('.userData');
                table.innerHTML+=`
                <tr class="data">
                    <td>${json.name}</td>
                    <td>${json.email}</td>
                    <td>${json.phone}</td>
                </tr>    
                `;

                document.querySelector('#openDialog2').showModal();
            });
}

function closeModal(element){
        document.querySelector(element).close();
        document.querySelector(".data").remove();
}



    const formBackend = "https://www.formbackend.com/f/00bed15c59b760e9";
    const contactFormEl = document.querySelector('#contactForm');


    let formasLauki = document.querySelectorAll('input,textarea');
        
        for(lauks of formasLauki){
            lauks.removeAttribute('required');
        }

        let errors = [];

    contactFormEl.onsubmit = (e)=>{
        e.preventDefault();
        // Formas validācija


        if(formasLauki[0].value.length <3){
          errors.push("Ievadiet Vārdu");
            formasLauki[0].classList.add('is-invalid');


        }



        


        console.log(formasLauki);
        return;

        let data = new FormData(contactFormEl);

        fetch(formBackend,{
            method:"POST",
            body:data,
            headers: {
               'accept': 'application/json',
            },
        })
          .then((response) => response.json())  
          .then((json) => {
            if(json.errors){
                alert('Vēstule ir nosūtīta');
            }else{
                console.error(json.errors);
            }
          })  
    }









