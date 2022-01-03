/* 1. Leer un numero entero y mostrar todos lo enteros comprendidos
 entre 1 y el numero leido */

let numero = 15;

for (let i = 1; i<= numero; i++){
    console.log(i)
}

/* 2. Leer un numero entero y mostrar todos los pares comprendidos 
entre 1 y el numero leido */

numero = 255

for (let j = 1; j <= numero; j++){
    if (j % 2 == 0) {
        console.log(j)
    }

}


/* Leer un numero entero y mostrar todos los divisores exactos del numero comprendidos 
entre 1 y el numero leido */

for(let i = 1; i <= numero; i++){
    if (numero % i == 0){
        console.log(i)
    }
}


/* 4. Leer dos numeros y mostrar todos los enteros comprendidos entre ellos. */
let numeroUno = 12;
let numeroDos = 32;


if (numeroUno > numeroDos) {
    for(let i = numeroDos; i <= numeroUno; i++){
        console.log(i)
    }
} else if(numeroDos > numeroUno) {
    for(let i = numeroUno; i <= numeroDos; i++){
        console.log(i)
    }    
}else{
    console.log('los numero son iguales')
}


/* 5. Leer dos numero y mostrar todos lo numeros terminados en 4 comprendidos entre ellos */

numeroUno = 12;
numeroDos = 254;

let modulo;

for(i = numeroUno; i <= numeroDos; i++){
    if(i % 10 == 4){
        console.log(i)
    }
}

/* Leer un numero entero de tre digitos y mostrar todos los enteros comprendidos 
entre 1 y cada uno de los digitos'*/

let nuevoNumero = 235;

let digitoUno = Math.trunc((nuevoNumero / 100))
let digitoDos = Math.trunc((nuevoNumero % 100) / 10)
let digitoTres = (nuevoNumero % 100) % 10

console.log(digitoUno)
console.log(digitoDos)
console.log(digitoTres)

for (i = 1; i <= digitoUno; i++){
    console.log(i)
}

for (i = 1; i <= digitoDos; i ++){
    console.log(i)
}

for (i = 1; i <= digitoTres; i ++){
    console.log(i)
}


/* 7. mostrar en pantalla todos los enteros comprendidos entre 1 y 100 */

for(i = 1; i <= 100; i++){
    console.log(i)
}


/* 8. mostrar en pantalla todos los pares comprendido entre 20 y 200 */

for(i = 20; i <= 200; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}



/* 9. mostrar en pantalla todos los numeros terminados en 6 comprendidos entre 25 y 205*/


for(i = 25; i <= 205; i++){
    if(i % 10 == 6){
        console.log(i)
    }
}


/* Leer un numero entero y determinar a cuanto es igual la suma de todos los enteros 
comprendidos entre 1 y el numero leido */


let inicial = 0;
let final = 20;
let contador = 0;

while (inicial <= final){
    contador = contador + inicial
    inicial+= 1
}

console.log(contador)

/* Leer un numero entero de dos digitos y mostrar en pantalla todos los enteros
comprendidos entre digito y otro */

nuevoNumero = 23;

digitoUno = Math.trunc((nuevoNumero / 10))
digitoDos = (nuevoNumero % 10)

for(i = digitoUno; i <= digitoDos; i++ ){
    console.log(i)
}


/* Leer un numero entero de 3 digitos y determinar si tiene el digito 1 */

nuevoNumero = 231;

digitoUno = Math.trunc((nuevoNumero / 100))
digitoDos = Math.trunc((nuevoNumero % 100) / 10)
digitoTres = (nuevoNumero % 100) % 10

if (digitoUno === 1 ){
    console.log('La cifra si contiene el numero uno')

}else if(digitoDos === 1){
    console.log('La cifra si contiene el numero uno')

}else if(digitoTres === 1){
    console.log('La cifra si contiene el numero uno')
}else {
    console.log('La cifra no contiene el numero uno')
}


/* Leer un numero entero y mostrar todos los multiplos de 5 comprendidos 
entre 1 y el numero leido */


nuevoNumero = 56

while (i <= nuevoNumero){
    if(i % 5 == 0){
        console.log(i)
    }
    i += 1
}



