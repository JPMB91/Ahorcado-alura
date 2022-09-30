//selectores o variables globales
let palabras=["ZAPATO", "MONTE", "GLOBO", "RATA", "AURORA", "LAPIZ", "PUERTA"];
let pantalla = document.getElementById("lienzo").getContext("2d");
let palabraSecreta="";
let letras=[];
let intentos=0;
let errores=8; // quesesto
let aciertos=0;
let LargoSecreto = palabraSecreta.length; //etsperimentando
let letra=[];



//funcion palabra secreta desde el array "palabras"
function escogerPalabra(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta=palabra;
    console.log(palabraSecreta)
}

function sumarletraIncorrecta(){
  errores -=1
}  

//suma aciertos
function sumarAciertos(){
  aciertos +=1
  console.log(aciertos)
}

    
//iniciar
    function iniciarJuego(){
        document.getElementById("inicioJuego").style.display = "none";
        escogerPalabra()
        dibujarCanvas()
        dibujarLinea()
        dibujarHorca()
        perdiste()
        
        document.onkeydown = (e) => {
            let letra = e.key.toUpperCase()
              if (verificar(letra) && palabraSecreta.includes(letra)) {
                  for (let i = 0; i < palabraSecreta.length; i++) {
                    if (palabraSecreta[i] === letra) {
                      escribirLetraCorrecta(i);
                      sumarAciertos(); 
                      ganaste()       
                    } 
                  }                 
                }
                else{
                sumarletraIncorrecta(letra)
                escribirLetraIncorrecta(letra, errores)
                dibujarHorca() //aer esta ensala de weas que armé
                }
        }
    
}

function ganaste(){
  if(aciertos >= palabraSecreta.length){
      console.log("ganaste")
      alert("Ganaste");
     
  }
}


//probando
/*document.getElementById("btn-guardarSeguir").onclick = () => {
 guardarSeguir()
}*/

//nueva palabra ingresada por usuario se convierte automaticamente a mayusculas
function nuevaPalabraIngresada(){
  let palabraIngresada = document.getElementById("ingresarPalabra").value.toUpperCase();
      palabraSecreta = palabraIngresada;
      console.log(palabraSecreta)
}


//hacer que el boton guardar y continuar inicie el juego luego de ingresar palabra

function guardarSeguir(){
      //document.getElementById("ingresarPalabra").style.display = "none"; // necesito cambiar los botones que quedan y los que se esconden
      nuevaPalabraIngresada()
      dibujarCanvas()
      dibujarLinea()
      dibujarHorca()
      //perdiste()
      
      document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
          if (verificar(letra) && palabraSecreta.includes(letra)) {
              for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                  escribirLetraCorrecta(i);
                  sumarAciertos(); 
                  ganaste()       
                }
                
              }
              
            }
            else{
            sumarletraIncorrecta(letra)
            escribirLetraIncorrecta(letra, errores)
            dibujarHorca() //aer esta ensala de weas que armé
            }
    }

  }




function verificar(key){
  //let estado= false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        return estado
        }
        else{
            estado = true;
            console.log(key)
            return estado;
         }
}




function perdiste() {
    if (intentos == 10) {
        console.log("PERDISTE");
        document.removeEventListener("keydown", verificar);
        alert("Perdiste, la palabra oculta era " + palabraSecreta);
        //necesito crear algo que lo envie a la pantalla home
    }
 }


//necesito boton volver a jugar


