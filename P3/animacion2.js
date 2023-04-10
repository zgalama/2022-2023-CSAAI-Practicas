//-- Declaración de variables y objetos

//-- Coordenadas iniciales del proyectil
var x = 5;
var y = 345;
var x1 = x;
var y2 = y;

//-- Coordenadas iniciales del objetivo
var xomin = 600;
var xomax = 150;
var xo = getRandomInt(xomin,xomax); //getRandomXO(xomin,xomax);
var yo = 345;

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
    display : document.getElementById("display"),
    shin_chan : document.getElementById("shin_chan"),
    karlos : document.getElementById("karlos")
}

const g = 9.8;
var t= 0;
var tirolanzado = false;
var r=1;
//-- Definir un objeto cronómetro
const crono = new Crono(u.display);

//-- Definir el tamaño del canvas
u.canvas.width = 700;
u.canvas.height = 400;

//-- Obtener el contexto del canvas
const ctx = u.canvas.getContext("2d");

//-- Función principal de actualización
function lanzar() 
{
    
    vel = Number(u.veloci.value);
    angulo = Number(u.angulo.value);
    
    //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, u.canvas.width, u.canvas.height);
    
    //-- 3) Pintar los elementos en el canvas
    
    dibujarO(xo,yo,karlos);
    dibujarP(x, y, 50, 50); // Dibujar el proyectil
    
    ctx.font = "25px Arial";
    ctx.fillStyle = 'yellow';
    ctx.fillRect( 275, 8, 130, 30);
    ctx.fillStyle = 'red';
    ctx.fillText("¡Date prisa!", 275, 30);
    
    //-- 4) Repetir
    
    requestAnimationFrame(lanzar);

    if (tirolanzado) {
        tiroP();
    }
    if (((x > (xo -15)) && (x < (xo+15))) && (((yo +20) > y) && ((yo-20) <y))){
        console.log("Ganar")
        crono.stop();
        ctx.font = "100px Verdana";
        ctx.fillStyle = 'green';
        ctx.fillText("¡Lo lograste!", 70, 230);
        tirolanzado=false;
    }else if ((x >= u.canvas.width || x <= 0) || (y >= u.canvas.height || y <= 0 )){
        console.log("Perder")
        crono.stop();
        ctx.font = "50px Verdana";
        ctx.fillStyle = 'red'
        ctx.fillText("Intentalo de nuevo...", 70, 230);
        tirolanzado=false;
    }
}


//-- función para pintar el proyectil
function dibujarP(x,y, lx, ly) {

    //-- Pintando el proyectil
    ctx.beginPath();

    //-- Definir un rectángulo de dimensiones lx x ly,

    ctx.drawImage(u.shin_chan, x, y,lx,ly);

    ctx.closePath();
}

//-- Generar números aleatorios con un valor máximo
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min) +min);
}


//-- función para pintar el objetivo
function dibujarO(x,y,karlos) {

    //-- Pintando el objetivo
    ctx.beginPath();

    //-- Dibujar la imagen
    ctx.drawImage(karlos, x, y);

    ctx.closePath();
}

function tiroP() {
    x = x1 + vel * Math.cos(angulo* Math.PI / 180) * t;
    y = y2 - vel * Math.sin(angulo* Math.PI / 180) * t +0.5 * g * t**2;
    t += 0.1;
}

function ej_tiro(){
    tirolanzado=true
    tiroP();
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

u.shin_chan.onload = () => {
    ctx.drawImage(u.shin_chan, x, y);
  };
  
  
u.karlos.onload = () => {
    ctx.drawImage(u.karlos, xo, yo);
  };

//-- Hay que llamar a update la primera vez
lanzar();