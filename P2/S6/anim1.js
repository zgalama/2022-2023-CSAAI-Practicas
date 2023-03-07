console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Coordenadas del objeto
let x = 0;
let y = 10;
let x1= 30;
let y2= 30;

//-- Velocidades del objeto
let velx = 3;
let vely = 1;
let velx1= 3;
let vely2= 1;

//-- Función principal de animación
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posición del  elemento
  //-- (física del movimiento rectilineo uniforme)

   //-- Condición de rebote en extremos verticales del canvas
   if (x < 0 || x >= (canvas.width - 20) ) {
    velx = -velx;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 0 || y > 80) {
    vely = -vely;
  }

//-- Condición de rebote en extremos verticales del canvas
  if (x1 < 0 || x1 >= (canvas.width - 20) ) {
    velx1 = -velx1;
  }

//-- Condición de rebote en extremos horizontales del canvas
  if (y2 <= 0 || y2 > 80) {
    vely2 = -vely2;
  }

  //-- Actualizar la posición
  x = x + velx;
  y = y + vely;
  x1 = x1 + velx1;
  y2= y2 + vely2;

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
    ctx.rect(x, y, 10, 15);

    //-- Dibujar
    ctx.fillStyle = 'blue';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(x1, y2, 40, 25);

  //-- Dibujar
  ctx.fillStyle = 'red';

  //-- Rellenar
  ctx.fill();

  //-- Dibujar el trazo
  ctx.stroke()
ctx.closePath();

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();