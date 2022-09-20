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