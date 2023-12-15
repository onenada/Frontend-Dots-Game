// JS Para los datos del usuario


//Variables//
var nick;
var email;
var tamano;
var geolocation;

//Funciones//

function userData(nick,email,tamano){
    sessionStorage.setItem('nick',nick.value);
    sessionStorage.setItem('email',email.value);
    sessionStorage.setItem('tamano',tamano.value);
    sessionStorage.setItem('geolocation',geolocationText);
}

function getUserData(){
    nick = sessionStorage.getItem('nick');
    email = sessionStorage.getItem('email');
    tamano = sessionStorage.getItem('tamano');
}

function checkUserData(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario')
        return false
    }
    return true
}

function geolocationData(){
    if(!navigator.geolocation){
        geolocationText= "El Navegador no es compatible con API Geolocation";
    }else{
        navigator.geolocation.getCurrentPosition(
            //éxito en callback//
            (position)=>{geolocationText='Latitud:'+position.coords.latitude+'Longitud:'+position.coords.longitude},
            //error//
            ()=>{geolocationText= "error en la geolocalizacion"}
        )
    }
}

//LocalStorage//

function userHistory(nick){
    let userListStored=localStorage.getItem('userList');
    let userList;
    if(userListStored==null){
        userList=[];
    }
    else{
        userList=JSON.parse(userListStored);
    }
    let regUser={
        usuario:nick.value,
        fecha:Date.now()
    }
    userList.push(regUser)
    localStorage.setItem("userList", JSON.stringify(userList));
}