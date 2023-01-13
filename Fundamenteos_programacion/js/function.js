/** 
document.getElementById('button').onclick = function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Probamos primer evento JS en HTML";
}
*/

/**document.addEventListener("click", function() {
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Probamos primer evento JS en HTML";
});*/

document.getElementById('button').addEventListener("click", function() {
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Probamos primer evento JS en HTML";
});

document.getElementById('button_color').addEventListener("click", function() {
    console.log("el fondo cambio de color");
    document.body.style.backgroundColor = 'white';
});

document.getElementById('button_default').addEventListener("click", function() {
    console.log("Se reestablecio el color original");
    document.body.style.backgroundColor = 'blue';
});

document.getElementById('button_ocultar').addEventListener("click", function() {
    console.log("Se ocultó el texto de la página");
    document.getElementById("demo").style.display = 'none';
});

const collection = document.getElementsByClassName('prueba');
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "pink";
}