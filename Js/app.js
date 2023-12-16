//@author Paul L. Hernandez <back2bytes@gmail.com> //
//@link https://github.com/onenada/Frontend-Dots-Game //
// Js para capturar datos de usuario

// --------------- Variables --------------- //

var nickInput;
var tamanoInput;
var formInput;
var error;
var emailInput;

// --------------- Funciones de evento ---------------- //

// Comprobación de que el usuario coloco toda la información correctamente en el formulario //
// y evasion de recarga del formulario una vez presionado el botón submit //
// @param {HTMLElement} event <- Botón de submit del formulario del usuario //

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
    //Información correcta //
    userData(nickInput,emailInput,tamanoInput);
    userHistory(nickInput);
    return true;
}
// Carga de objetos del DOM, comprobaciones y eventos del formulario //
function domCargado(){
    // Captura de todos los Elements necesarios//
    nickInput=document.getElementById("nick");
    tamanoInput=document.getElementById("tamano");
    formInput=document.getElementById("formPrincipal");
    error=document.getElementById("error");
    emailInput=document.getElementById("email");

    // Comprobando errores de juego.html //
    if (sessionStorage.getItem('error')!=null)
    {
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }
    formInput.addEventListener('submit',comprobarForm);
}
//----------------- Inicio de eventos-------------------
document.addEventListener('DOMContentLoaded',domCargado);
//------------------- Geolocalizacion-------------------
geolocationData();