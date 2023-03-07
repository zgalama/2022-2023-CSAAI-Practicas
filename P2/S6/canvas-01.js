console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 300;

const ctx =canvas.getContext("2d");

ctx.beginPath();

ctx.rect(50,50,150,100); // dimensiones del rectángulo (100x50), cuya esquina superior izqda está en (5,5)

ctx.fillStyle = 'blue'; //decimos el color que queremos que se pinte el cuadrado, si no se pone nada, por defecto es negro.

ctx.fill(); //Mostrar el relleno

ctx.lineWidth= 4; //Cambiar el tamaño de la línea del trazo

ctx.stroke(); //Muestra el trazo del rectángulo
ctx.close.Path(); 