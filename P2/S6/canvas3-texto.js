console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texto sólido", 150, 150);

//-- Texto trazo
ctx.strokeStyle = 'blue'; //Fuente
ctx.font = "35px Arial"; //Estilo
ctx.strokeText("Texto trazo", 150, 50); //(150,50) en la posicion del canvas al que va a salir