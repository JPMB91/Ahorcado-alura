function dibujarCanvas(){
    pantalla.lineWidth = 8; //el largo de las lineas en el canvas pantalla
    pantalla.lineCap = "round"; //el estilo de las lineas
    pantalla.lineJoin = "round"; // Que es?
    pantalla.fillStyle ="#F3F5F6";
    pantalla.strokeStyle = "#8A3871";

    pantalla.fillRect(0,0,1200,860); //coordenas x e y para diseñar rectangulo
    pantalla.beginPath();
    pantalla.moveTo(650, 500);
    pantalla.lineTo(900, 500);
    pantalla.stroke();
    pantalla.closePath();
}

function dibujarLinea(){
    pantalla.lineWidth = 6; //el largo de las lineas en el canvas pantalla
    pantalla.lineCap = "round"; //el estilo de las lineas
    pantalla.lineJoin = "round"; // Que es?
    pantalla.fillStyle ="#F3F5F6"; //color
    pantalla.strokeStyle = "#8A3871";//color de los bordes

    let anchura = 600/palabraSecreta.length; //el espacio se divide por cada una de las letras de la palabra secreta

    for (let i = 0; i < palabraSecreta.length; i++){
        pantalla.moveTo(500 + (anchura*i), 640) //calculo considerando la ancura de las lineas anterores
        pantalla.lineTo(550 + (anchura*i), 640)
    }
    pantalla.stroke();
    pantalla.closePath();
}

//funcion para dibujar la horca

function dibujarHorca(){
    pantalla.lineWidth = 8;
 
    switch (intentos) {
       case 0:
        pantalla.strokeStyle = "black";
          pantalla.beginPath();
          pantalla.moveTo(50, 450);//base horca
          pantalla.lineTo(300, 450);
          intentos++;
          break;
 
       case 1:
        pantalla.strokeStyle = "black";
          pantalla.moveTo(100, 450);
          pantalla.lineTo(100, 50);
          intentos++;
          break;
 
       case 2:
        pantalla.strokeStyle = "black";
          pantalla.moveTo(100, 50);
          pantalla.lineTo(250, 50);
          intentos++;
          break;
 
       case 3:
        pantalla.strokeStyle = "black";
          pantalla.moveTo(250, 50)
          pantalla.lineTo(250, 100);
          intentos++;
          break;
 
       case 4:
        pantalla.strokeStyle = "blue";
          pantalla.moveTo(250, 100)
          pantalla.arc(250, 125, 25, 0, 2*Math.PI);
          intentos++;
          break;
 
    
       case 5:
        pantalla.strokeStyle = "blue";
          pantalla.moveTo(250, 150);
          pantalla.lineTo(250, 270);
          intentos++;
          break;
 
       case 6:
        pantalla.strokeStyle = "blue";
          pantalla.moveTo(250, 175);
          pantalla.lineTo(210, 200);
          intentos++;
          break;
 
       case 7:
        pantalla.strokeStyle = "blue";
          pantalla.moveTo(250, 175);
          pantalla.lineTo(290, 200);
          intentos++;
          break;
 
       case 8:
        pantalla.strokeStyle = "blue";
          pantalla.moveTo(250, 270);
          pantalla.lineTo(200, 320);
          intentos++;
          perdiste();
          break;
 
       case 9:
          pantalla.strokeStyle = "blue";
          pantalla.moveTo(250, 270);
          pantalla.lineTo(295, 320);
          intentos++;
          perdiste()
          break;
    }
    
    pantalla.closePath();
    pantalla.stroke();                   
 }    
   

//funcion para dibujar al ahorcado. posiblemente deba cambiar la Y de todo en 100 o mas


function escribirLetraCorrecta(index){ //pq index dentro del parentesis
    pantalla.font = "bold 63px Inter";
    pantalla.lineWidth = 6;
    pantalla.lineCap = "round";
    pantalla.lineJoin = "round";
    pantalla.fillStyle = "green";

    let anchura = 600/palabraSecreta.length
        pantalla.fillText(palabraSecreta[index],505+(anchura*index),620) //escribe la palabra secreta separandola en letras (index)  x 535 y 620
        pantalla.stroke()
        pantalla.closePath()
}

function escribirLetraIncorrecta(letra, erroresLeft){
    pantalla.font = "bold 40px Inter";
    pantalla.lineWidth = 6;
    pantalla.lineCap= "round";
    pantalla.lineJoin="round";
    pantalla.fillStyle="red";
    pantalla.fillText(letra, 535 +(40*(10-erroresLeft)),710,40)
     
}