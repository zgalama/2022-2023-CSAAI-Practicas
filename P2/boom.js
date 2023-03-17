


//-- Array que almacena números secretos
var secretkey = [];

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

    //Constantes para los números secretos

    S1 : document.getElementById("s1"),
    S2 : document.getElementById("s2"),
    S3 : document.getElementById("s3"),
    S4 : document.getElementById("s4")

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
//-- Adivinar un dígito
let guess = ["*", "*", "*", "*"]; // arreglo para rastrear los dígitos adivinados
let index = 0; // variable para rastrear en qué posición del arreglo estamos
for (let boton of gui.botones) {
    boton.onclick = (ev) => {
        console.log("Valor: " + ev.target.value);
        crono.start();
        let value = ev.target.value;
        i= 0;
        // Si aún no hemos adivinado los 4 dígitos
        if (index < 4 && secretkey.includes(value)) {
            // Si el dígito adivinado es correcto
                // Iteramos el array secretkey para buscar el número adivinado
                for (let i = 0; i < secretkey.length; i++) {
                    // Si el número adivinado se encuentra en el array secretkey
                    if (value === secretkey[i]) {
   
                        index+=1
                        // Agregamos el número adivinado al arreglo de guess
                        guess[i] = value;
                    }
                }

                // Actualizamos los asteriscos en el HTML
                gui.S1.innerHTML = guess[0];
                gui.S2.innerHTML = guess[1];
                gui.S3.innerHTML = guess[2];
                gui.S4.innerHTML = guess[3];
            
        if (index === 4) {
            crono.stop()
            }    
            
        }
    };
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
    gui.S1.innerHTML = "*";
    gui.S2.innerHTML = "*";
    gui.S3.innerHTML = "*";
    gui.S4.innerHTML = "*";
    // Generar un nuevo código secreto
    guess = ["*", "*", "*", "*"];
    secretkey = [];
    for (let i = 0; i < 4; i++) {
        let rnum = getRandomInt(4);
        secretkey.push(rnum.toString());
        console.log(secretkey);
    }
    index = 0; // reiniciar el índice a 0
}
