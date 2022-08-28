const form = document.querySelector("form");

form.addEventListener("submit",formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const data = new FormData(form); 
    const json = {};
    data.forEach((value, key)=>{json[key] = value});
    fetch(event.target.action, {
        method: 'put',
        headers: {"Content-Type": "application/json"} , 
        body: JSON.stringify(json),
        redirect: 'follow' 
    }).then(response => {
        response.json().then(
            data => {
                if(data.data[0].id){
                    alert('datos actualizados');
                    location.href = '/';
                }else{
                    alert(data.data[0].result);
                }
            }
        )
    });
}