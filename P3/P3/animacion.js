//-- Declaración de variables y objetos

//-- Coordenadas iniciales del proyectil
var x = 5;
var y = 345;
var x1 = x;
var y2 = y;

//-- Coordenadas iniciales del objetivo
var xomin = 700;
var xomax = 150;
var xo = getRandomInt(xomin,xomax); //getRandomXO(xomin,xomax);
var yo = 370;

//-- Obtención del canvas y de los elementos HTML a usar

const u = {

    canvas : document.getElementById("canvas"),

    //-- Acceder al botón de disparo
    btnLanzar : document.getElementById("btnLanzar"),

    //-- Acceder al botón de inicio
    btnIniciar : document.getElementById("btnIniciar"),

    //Entradas de texto con visualización
    angulo : document.getElementById("angulo"),
    angulo_disp : document.getElementById("angulo_disp"),
    veloci : document.getElementById("veloci"),
    veloci_disp : document.getElementById("veloci_disp"),

    //Constante de cronómetro
    display : document.getElementById("display")
}

const g = 9.8;
var t= 0;
var tirolanzado = false;
var max_intentos, intentos;
var aciertos;
var fallo = false;
var umbral=20;



//-- Definir un objeto cronómetro
const crono = new Crono(u.display);

//-- Definir el tamaño del canvas
u.canvas.width = 800;
u.canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = u.canvas.getContext("2d");

//-- Función principal de actualización
function lanzar() 
{

    max_intentos = 3;
    intentos = 0;
    vel = Number(u.veloci.value);
    angulo = Number(u.angulo.value);

  //-- Implementación del algoritmo de animación:
  if ((x + 50  > u.canvas.width -20 || x < 0) && (y > u.canvas.height -20 || y - 50 < 0 )) {
    a_intentos();
    fallo = true;
    aciertos = false;
  }


  if (tirolanzado) {
  //-- 1) Actualizar posición de los elementos
  tiroP();
  }

  distancia =  Math.sqrt( (xo - x)**2 + (yo + y)**2 );
  if (distancia < xo) {
    aciertos=true;
    crono.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "100px Verdana";
    ctx.fillStyle = 'green';
    ctx.fillText("HEMOS GANADO!", 70, 230);
    // Detener el cronómetro y mostrar un mensaje de éxito aquí
  } else {
    fallo=false;
  }
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas

  dibujarO(xo,yo);
  dibujarP(x, y, 50, 50, "blue"); // Dibujar el proyectil

  ctx.font = "25px Arial";
  ctx.fillStyle = 'yellow'
  ctx.fillText("¡Date prisa!", 10, 30);

  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText(`Intentos restantes: ${intentos + "/" +  max_intentos}`, canvas.width - 270 , canvas.height -365);

  if ((fallo=true) && (aciertos = false)){
    crono.stop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "100px Verdana";
    ctx.fillStyle = 'red'
    ctx.fillText("PERDISTE", 70, 230);
  }

  //-- 4) Repetir

  requestAnimationFrame(lanzar);

}

//-- Otras funciones....

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,
    ctx.rect(x, y, lx, ly);

    //-- Color de relleno del rectángulo
    ctx.fillStyle = color;

    //-- Mostrar el relleno
    ctx.fill();

    //-- Mostrar el trazo del rectángulo
    ctx.stroke();

    ctx.closePath();
}

//-- Generar números aleatorios con un valor máximo
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min) +min);
}


//-- función para pintar el objetivo
function dibujarO(x,y) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
    ctx.arc(x, y, 25, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.fillStyle = 'red';

    //-- Dibujar el relleno
    ctx.fill()    

    //-- Dibujar el trazo
    ctx.stroke();

    ctx.closePath();
}

function tiroP() {
    x = x1 + vel * Math.cos(angulo* Math.PI / 180) * t;
    y = y2 - vel * Math.sin(angulo* Math.PI / 180) * t +0.5 * g * t**2;
    t += 0.1;
}

function ej_tiro(){
    tiroP();
    tirolanzado = true;
}

function a_intentos(){
    intentos+=1;
    if(intentos >= max_intentos){
        location.reload();
    }
}



//---- Configurar las funciones de retrollamada

//-- Función de retrollamada del botón de disparo
u.btnLanzar.onclick = () => {
    ej_tiro();
    crono.start();
}


//-- Función de retrollamada del botón iniciar
u.btnIniciar.onclick = () => {
    location.reload();
}

u.angulo.oninput = () => {
    u.angulo_disp.innerHTML = u.angulo.value;
  };
  
u.veloci.oninput = () => {
    u.veloci_disp.innerHTML = u.veloci.value;
  };
  


//-- Hay que llamar a update la primera vez
lanzar();
