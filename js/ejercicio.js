let puntaje = prompt("ingresar el resultado de su examen");
while (puntaje != "ESC") {
    switch (true) {
        case puntaje > 0 && puntaje <= 59:
            alert("A seguir estudiando");
            break;
        case puntaje >= 59 && puntaje <= 64:
             alert("Te faltó poco, esforzate un poco más");
             break;    
        case puntaje >= 65 && puntaje <= 100 :
            alert("aprobaste, felicitaciones");
            break;
         defult:
             alert("ingresa tu calificación");
            break;
    }
    puntaje = prompt("ingresar el resultado de su examen");
}




