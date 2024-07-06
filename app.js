let numeroSecreto = 0;
let intentos = 0;
let maximo = 3;
let numerosGenerados = [];

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', `El número secreto es menor`);
        } else {        
            asignarTextoElemento('p', `El número secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
} 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * maximo + 1);
    if (numerosGenerados.length === maximo) {
        asignarTextoElemento('p', 'Ya superaste todos los niveles ¡Felicitaciones!');
    } else {
        if (numerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del número secreto");
    asignarTextoElemento('p', `Indica un número del 1 al ${maximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
    return;
}

condicionesIniciales();
