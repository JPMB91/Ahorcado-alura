//selectores o variables globales
let palabras=["ALURA", "ORACLE", "HTML", "ONE"];
let pantalla = document.getElementById("lienzo").getContext("2d");
let palabraSecreta="";


//palabra Secreta desde el array "palabras"

function escogerPalabra(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta=palabra;
    console.log(palabraSecreta)
}

//iniciar
function iniciarJuego(){
    document.getElementById("inicioJuego").style.display = "none";
    escogerPalabra()
    dibujarCanvas()
    dibujarLinea()
}

//nueva palabra ingresada por usuario

function nuevaPalabraIngresada(){
    let palabraIngresada = document.getElementById("ingresarPalabra").value;
            palabraSecreta = palabraIngresada;
            console.log(palabraSecreta)
}

//hacer que el boton guardar y continuar inicie el juego 

function guardarSeguir(){
    document.getElementById("ingresarTxt").style.display = "none";
    nuevaPalabraIngresada()
    dibujarCanvas()
    dibujarLinea()
}




