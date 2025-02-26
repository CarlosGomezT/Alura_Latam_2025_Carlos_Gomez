let numeroSecreto = crearNumeroAleatorio(); 

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function crearNumeroAleatorio(){
    return Math.floor(Math.random()*15)+1;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    console.log(typeof(numeroDeUsuario));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 15');


//////////////////////
//Desafios
//function holaMundo() {
//    console.log("Hola undo")
//}
//
//function holaNombre(nombre) {
//    console.log("Hola " + nombre);
//}
//
//function numeroDoble(numero) {
//    return numero*2; 
//}
//
//function numerosPromedio (numero1, numero2, numero3)
//{
//    return (numero1+numero2+numero3)/3
//}
//
//function numeroMayor(numero1, numero2)
//{
//    if (numero1>numero2)
//    { return numero1
//    }else {return numero2}
//}
//
//function numeroAlCuadrado(numeroAMultiplicar){
//    return numeroAMultiplicar*numeroAMultiplicar
//}