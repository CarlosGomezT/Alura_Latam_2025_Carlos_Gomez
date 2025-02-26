let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function crearNumeroAleatorio(){
    return Math.floor(Math.random()*5)+1;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    if(numeroDeUsuario === numeroSecreto)
    {
        asignarTextoElemento(`p`, `¡Adivinaste! El numero era ${numeroSecreto} Acertaste en ${intentos} ${intentos===1 ?`intento`:`intentos`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else{ 
        if (numeroDeUsuario > numeroSecreto)
            { 
                asignarTextoElemento(`p`,`El numero secreto es menor al introducido ${numeroDeUsuario}`);
            }else
            {
                asignarTextoElemento(`p`,`El numero secreto es mayor al introducido ${numeroDeUsuario}`);
            }
            intentos++
            limpiarCaja();
    } 
    return;
}

function limpiarCaja() {
    document.getElementById(`valorUsuario`).value=``;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById(`reiniciar`).setAttribute(`disabled`,`true`);
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 5');
    intentos = 1;
    numeroSecreto = crearNumeroAleatorio();
}
condicionesIniciales();

//Desafio 2-3
///////
function calculoIMC(altura, peso) {
    let imc = peso/(altura*altura);
    return peso/altura;
}

function calculoFatorial (numero) {
    let conteo = numero
    let total = numero
    while (conteo>1)
    {     
        total = total*(conteo-1);
        conteo--;  
    }
    return total;
}
function convertirAPeso(dolares){
    pesos = dolares*20.49;
    return pesos;
}
function medirSala(altura, anchura) {
    console.log(`La sala tiene un perimetro de ${(altura+anchura)*2} y un area de ${altura*anchura}`);    
}
function medirSalaCircular(radio) {
    console.log(`La sala tiene un perimetro de ${radio*2*3.14} y un area de ${radio*radio*3.14}`);   
}
function tablaDeMultiplicar(numeroAMultiplicar){
    for(i=1;i<=10; i++ )
        {
            console.log(`${numeroAMultiplicar} x ${i} = ${numeroAMultiplicar*i}`);
        }  
}