const form = document.querySelector("form");

form.addEventListener("submit",formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const data = new FormData(form); 
    fetch(event.target.action, {
        method: 'post', 
        headers: {"Content-Type": "application/json"} , 
        body: JSON.stringify({contraseña: data.get('contraseña'), correo_electronico: data.get('correo_electronico') }),
        redirect: 'follow' 
    }).then(response => {
        response.json().then(
            data => {
                if(data.data[0].id){
                    location.href = '/';
                }else{
                    alert(data.data[0].result);
                }
            }
        )
    });
}