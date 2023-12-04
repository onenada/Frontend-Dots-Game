// ----------------------- CODIGO PRUEBA -----------------
// //Capturar el valor del input nick//

// const nickInput=document.getElementById("nick");
// console.log(nickInput.nodeType);
// nickInput.value="la puta que te pario";
// console.log(nickInput.value);

// const tamanoInput=document.getElementById("tamano");
// console.log(tamanoInput.options[tamanoInput.selectedIndex].text);
// const emailInput=document.getElementById("email");
// console.dir(emailInput);
// console.dir(tamanoInput);

// function test() {
//     console.log("evento click");
// }

// --------------------- FIN DE PRUEBAS -----------------

// Js para capturar datos de usuario

// ---------------Variables  y Objetos DOM---------------
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formInput=document.getElementById("formPrincipal");
const error=document.getElementById("error");
// --------------- Funciones de evento ----------------

function comprobarForm(event){
    if(nickInput.value.length == 0 || nickInput.value == "Yoshida")
    {
        console.log("No has colocado tu nick");
        nickInput.focus();
        error.innerText = "El campo de nick no puedo estar vació"
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
    return true;
}
//----------------- Inicio de eventos-------------------
formInput.addEventListener('submit',comprobarForm);