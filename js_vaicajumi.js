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








