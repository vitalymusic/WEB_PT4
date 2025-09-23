// API - Advanced programming interface

// FETCH
// XMLHttpRequest
    document.body.style.background = "#fff";


fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => showData(json));



  function showData(data){

        for( post of data){
            document.querySelector(".posts").innerHTML +=`
                <div class="post">
                    <h1>${post.title}</h1>
                    <p>
                        ${post.body}
                    </p>
                </div>
            `

        }

  }





