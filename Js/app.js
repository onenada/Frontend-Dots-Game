//Capturar el valor del input nick//

const nickInput=document.getElementById("nick");
console.log(nickInput.nodeType);
nickInput.value="la puta que te pario";
console.log(nickInput.value);

const tamanoInput=document.getElementById("tamano");
console.log(tamanoInput.options[tamanoInput.selectedIndex].text);
const emailInput=document.getElementById("email");
console.dir(emailInput);
console.dir(tamanoInput);