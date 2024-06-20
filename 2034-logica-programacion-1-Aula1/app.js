// -----------------------------1ER CURSO: LÓGICA DE PROGRAMACIÓN-----------------------------------

// EJEMPLO 1:
/* let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}

let numeroSecreto = 3;
let numeroUsuario = prompt("Me indicas tu numero, por favor: ");

console.log(numeroUsuario);

if(numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero: ' + numeroUsuario);
} else{
    alert('Lo siento, no acertaste: ' + numeroSecreto + ' ,elegiste: ' + numeroUsuario);
} 
*/

/*

//----------------------- CLASE 1: Desafío: hora de practicar------------------------

alert('Bienvenida y bienvenido a nuestro sitio web');
let nombre = 'Luna';
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

alert('¡Error! Completa todos los campos');

let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);

let nombre = prompt('Me indicas tu nombre');

let edad = prompt('Ingrese su edad');
if (edad >= 18) {
    alert('¡Puedes obtener tu licencia de conducir!');
} 
*/

//----------------------- CLASE 2: EJERCICIOS ------------------------

/*
// EJERC 1 : Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt('Que dia de la semana es?: ');
if (diaSemana == 'Sabado' || diaSemana == 'domingo'){
    alert('¡Buen fin de semana!');
}    else{
        alert('¡Buena semana!')
}
*/

/*
// EJERC 2 : Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let numero = prompt('Inserta un numero: ')
if (numero >= 0){
    alert('Positivo');
}    else{
        alert('Negativo')
}
*/

/*
// EJERC 3:Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let numero = prompt('Inserta un numero: ');
if (numero >= 100){
    alert('Super ganaste!');
}    else{
        alert('Intentalo nuevamente para ganar')
}

/*
// EJERC 4: Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 500;
alert(`Actualemente tienes un saldo de:  ${saldoCuenta}`);
*/

/*
// EJERC 5: Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUser = prompt('Ingresa tu nombre: ')
alert(`Bienvenido ${nombreUser}!`);
*/


    //----------------------- CLASE 3: EJERCICIOS ------------------------
    let numeroSecreto = 6;
    let numeroUsuario;
    let intentos = 1;
    let palabra = 'intento';
    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = prompt("Me indicas un numero del 1 al 10 por favor:");

        console.log(numeroUsuario);

        if (numeroUsuario == numeroSecreto) {
            alert(`Acertaste el numero es: ${numeroUsuario}. Lo lograste en ${intentos} ${palabra}.`);
        } else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero es menor');
        } 
        else{
            alert('El numero es mayor');
        }
        intentos = intentos + 1;
        palabra = 'intentos'
        }
}