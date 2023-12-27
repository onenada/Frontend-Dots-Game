//@author Paul L. Hernandez <back2bytes@gmail.com> //
//@link https://github.com/onenada/Frontend-Dots-Game //
// Js Para la lógica del juego //

// Variables // 
var inicioMarcado=false;
// Funciones //

//Devuelve un numero random entre 0 y max 
// @param {} max numero tope 
//source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

//Obtener y rellenar los datos del usuario con los datos guardados en session storage
function rellenarFormularioUsuario(){
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
}
//Pintado del panel de juego dependiendo de la seleccion de tamano en index.html
function pintarPanelJuego(){
    document.getElementById('game').style.gridTemplateColumns="repeat("+tamano+", 1fr)";
    document.getElementById('game').style.gridTemplateRows="repeat("+tamano+", 1fr)";
    // Pintar elementos de forma automatica //
    let items="";
    let color=["rojo","verde","naranja"];
    let colorRandom=0;
    for (let index = 0; index < parseInt(tamano)*parseInt(tamano); index++) {
        if(index%2>0) colorRandom=getRandomInt(3);
        items+= `<div class="containerItem"><div class="item ${color[colorRandom]}"></div></div>`;
    }
    document.getElementById("game").innerHTML=items;
}

// Añadir los eventos al juego //

function programarEventosJuego(){
    const items=document.getElementsByClassName('item');
    for (let item of items){
        item.addEventListener('mousedown', comenzarMarcar);
        item.addEventListener('mouseover', continuarMarcar);
    }
    document.addEventListener('mouseup', finMarcar);
}


//  Funciones del juego  //
// Iniciar el marcado de los puntos
// @param {} event 
function comenzarMarcar(event){
    let item=event.target;
    let containerItem=event.target.parentElement;
    if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
    else if(item.classList.contains('naranja')) containerItem.classList.add('naranja');
    else if(item.classList.contains('verde')) containerItem.classList.add('verde');
    if(!inicioMarcado) inicioMarcado=true;
}

// Continua el marcado de los puntos mientras el mouse este encima de los puntos
// @param {} event 
function continuarMarcar(event){
    if(inicioMarcado){
        let item=event.target;
        let containerItem=event.target.parentElement;
        if(item.classList.contains('rojo')) containerItem.classList.add('rojo');
        else if(item.classList.contains('naranja')) containerItem.classList.add('naranja');
        else if(item.classList.contains('verde')) containerItem.classList.add('verde');
    }
}
// Finaliza el marcado de puntos 
function finMarcar(){
    inicioMarcado=false;
    }



// MAIN //

//Captura de datos //

getUserData();
//Comprobación de datos //

if (!checkUserData()) location="index.html";

// Rellenar Formulario //
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuego();
