//@author Paul L. Hernandez <back2bytes@gmail.com> //
//@link https://github.com/onenada/Frontend-Dots-Game //
// Js Para la lógica del juego //


// Funciones //
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function rellenarFormularioUsuario(){
    document.getElementById("nick").value=nick;
    document.getElementById("avatarImg").src=avatarImg;
}
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
    }
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
    console.log("circulo presionado");
}

//Captura de datos //

getUserData();
//Comprobación de datos //

if (!checkUserData()) location="index.html";


// Rellenar Formulario //
rellenarFormularioUsuario();
pintarPanelJuego();
programarEventosJuego();
