


//-- Array que almacena números secretos
const secretkey = [];

//-- Generar números aleatorios con un valor máximo
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
 }

 //-- Generamos números secretos y los almacenamos en un array
 for (let i = 0; i < 4; i++) {
     let rnum = getRandomInt(4);
     secretkey.push(rnum.toString());
 }

 //-- Mostramos el contenido del array de números secretos en la consola
 for (let j = 0; j < secretkey.length; j++) {
     console.log( j + ' Secret Key ' + secretkey[j]);
 }

 //-- Generar números aleatorios con un valor máximo
 function getRandomInt(max) {
     return Math.floor(Math.random() * max);
 }

 console.log(secretkey);

//-- Elementos de la gui


const gui = {

    //Constantes para el cronometro
    display : document.getElementById("display"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset"),

    //Constantes para los números
    botones : document.getElementsByClassName("b"),


}

console.log("Ejecutando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}

function digito(value)
{
  console.log("Valor: " + value);
}

for (let boton of gui.botones) {

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  boton.onclick = (ev) => {
    digito(ev.target.value)
    crono.start()
  }
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}


  

