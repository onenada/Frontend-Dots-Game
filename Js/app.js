// ----------------------- CODIGO PRUEBA ----------------
// Js para capturar datos de usuario

// ---------------Variables  y Objetos DOM---------------

const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formInput=document.getElementById("formPrincipal");
const error=document.getElementById("error");
// --------------- Comprobando errores de juego.html ----
if (sessionStorage.getItem('error')){
    error.innerText = sessionStorage.getItem('error');
    sessionStorage.removeItem('error');
}

// --------------- Funciones de evento ----------------

function comprobarForm(event){
    if(nickInput.value.match(/(?<!\S)[0-9]/))
    {
        console.log("No has colocado tu nick");
        nickInput.focus();
        error.innerText = "El campo de nick no puedo comenzar con un numero"
        event.preventDefault();
        return false
    }
    if(tamanoInput.value=="0")
    {
        console.log("No seleccionado un tamano de juego");
        tamanoInput.focus();
        error.innerText = "Debes seleccionar un tamaño de juego"
        event.preventDefault();
        return false
    }
    //INFORMACION CORRECTA
    userData(nickInput);
    userHistory(nickInput);
    return true;
}
//----------------- Inicio de eventos-------------------
formInput.addEventListener('submit',comprobarForm);