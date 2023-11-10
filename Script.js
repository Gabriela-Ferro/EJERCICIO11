function nameHandler(){
const name = getName();
changeTextOfName(name);
}
function getName(){
return prompt("Cual es tu nombre");
}

function changeTextOfName (newName ){
 document.getElementById("Nombre").innerHTML = newName;
}