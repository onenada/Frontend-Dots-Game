// JS Para los datos del usuario


//Variables//
var nick;

//Funciones//

function userData(nick){
    sessionStorage.setItem('nick',nick.value);
}

function getUserData(){
    nick = sessionStorage.getItem('nick');
    console.log(nick);
}

function checkUserData(){
    if(nick==null){
        sessionStorage.setItem('error','No se ha rellenado correctamente el formulario')
        return false
    }
    return true
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