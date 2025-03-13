let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= 12;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function crearNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);

    if (listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento(`p`,`Ya se han visto todos los numero posibles`);
        return;
    } else

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return crearNumeroAleatorio();
    }
    else
    {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
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
    asignarTextoElemento(`p`,`Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = crearNumeroAleatorio();
}
condicionesIniciales();


/////////////////
//Desafio 2-4

let listaGenerica = [] 

let lenguajesDeProgramacion = [`JavaScript`, `C`, `C++`,`Kotlin`,`Python`];

lenguajesDeProgramacion.push(`Java`)
lenguajesDeProgramacion.push(`Ruby`)
lenguajesDeProgramacion.push(`GoLang`)

function elementosLista ()
{
    for (let i=0; i<lenguajesDeProgramacion.length ; i++)
    {
        console.log(`${lenguajesDeProgramacion[i]}`);
    }

}

function elementosListaInverso ()
{
    for (let i=0; i<lenguajesDeProgramacion.length ; i++)
    {
        console.log(`${lenguajesDeProgramacion[lenguajesDeProgramacion.length-i-1]}`);
    }

}

function promedioLista(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++ )
    {
        suma += listaNumeros[i];
    }    
    let promedio = suma / listaNumeros.length;
    console.log(`El promedio es: ${promedio}`);
    return promedio;
}

function numeroMenorMayor(listaNumeros) {
    let numMenor= 0;
    let numMayor= 0;

    for (let i = 0; i < listaNumeros.length; i++ )
        {
            if (listaNumeros[i]<numMenor)
            {
                numMenor = listaNumeros[i];
            }
            if (listaNumeros[i]>numMayor)
            {
                numMayor =listaNumeros[i];
            }
        }  

    console.log(`Numero mayor es: ${numMayor}` );
    console.log(`Numero menor es: ${numMenor}` );
}

function sumaLista(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++ )
    {
        suma += listaNumeros[i];
    }    
    console.log(`La suma es: ${suma}`);
    return suma;
}

function buscarPosicionIndice(indice, elemento){
    for (let i = 0; i < indice.length; i++ )
        {
            if(indice[i] == elemento )
            {
                console.log(`El elemento esta en la posicion: ${indice[i]}`);
                return i;
            }
        }   
    return -1;
}

function sumarDosListas(lista1, lista2) {
    let listaNueva = []
    for (let i = 0; i < lista1.length; i++ )
        {
            listaNueva.push(lista1[i] + lista2[i])
        } 
    return listaNueva;
}

function Listas(listaNumeros) {
    let listaNueva = []
    for (let i = 0; i < listaNumeros.length; i++ )
        {
            listaNueva.push(listaNumeros[i] ** 2)
        } 
    return listaNueva;
}

