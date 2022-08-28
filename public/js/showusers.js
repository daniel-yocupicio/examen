async function getusers(){
  return await fetch('/api/userlist');
}
const users = document.getElementById('users');

getusers().then(
  response => response.json().then(data => {
        Object.values(data.data).forEach(user => {
              users.innerHTML += `
                <div class="infouser">
                    <div class="subcontainer"><label>Nombre:</label><label class="info">${user.nombre}</label></div>
                    
                    <div class="subcontainer"><label>Apellidos:</label><label class="info">${user.apellidos}</label></div>
                    
                    <div class="subcontainer"><label>Correo:</label><label class="info">${user.correo_electronico}</label></div>
                    
                    <div class="subcontainer"><label>Número de teléfono:</label><label class="info">${user.numero_tel}</label></div>
                    
                    <div class="subcontainer"><label>País:</label><label class="info">${user.pais}</label></div>
                   
                    <div class="subcontainer"><label>CP:</label><label class="info">${user.cp}</label></div>
                    
                    <div class="subcontainer"><label>Estado:</label><label class="info">${user.estado}</label></div>
                    
                    <div class="subcontainer"><label>Municipio:</label><label class="info">${user.municipio}</label></div>
                    
                    <div class="subcontainer"><label>Colonia:</label><label class="info">${user.colonia}</label></div>
                    
                    <div class="subcontainer"><label>Calle:</label><label class="info">${user.calle}</label></div>
                    
                
                </div>
                `
        });
  })
);


