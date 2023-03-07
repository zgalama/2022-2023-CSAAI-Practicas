console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Línea horizontal
    ctx.moveTo(10, 20);
    ctx.lineTo(100, 20);

    //-- Línea horizontal y vertical, unidas
    ctx.moveTo(10, 80);
    ctx.lineTo(150,80);
    ctx.lineTo(150,20);
    ctx.lineTo(80,50);
    ctx.lineTo(50,60);

    ctx.strokeStyle = 'blue';
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 4;

    //-- Dibujar el trazo
    ctx.stroke()

ctx.closePath()


ctx.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(100, 150, 40, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'yellow';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()