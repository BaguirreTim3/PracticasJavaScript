/* 1. Leer un numero entero y determinar si es un numero terminado en 4 */

let numero = 14

ultimoDigito = Math.trunc((numero % 10))

if (ultimoDigito === 4){
    console.log('El numero termina es 4')
}else{
    console.log('El numero no termina es 4')
}



/* 2 Leer un numero entero y determinar si tiene 3 digitos */

numero = 115

if(numero >= 100 & numero < 1000){
    console.log('El numero es de tres digitos')
}else{
    console.log('El numero no es de tres dgitos')
}


/* 3. Leer un numero entero y determinar si es negativo */

numero - 5

numero > 0 
? console.log('El numero es negativo') 
: console('El numero es positivo')


/* 4. Leer un numero entero de dos digitos y determinar a cuanto es 
igual la suma de sus digitos */

numero = 52

let digitoUno = Math.trunc((numero / 10))
let digitoDos = Math.trunc((numero % 10))

console.log(digitoUno + digitoDos)


/* 5 Leer un numero entero de dos digitos y determinar 
si ambos digitos son pares */

numero = 42

digitoUno = Math.trunc((numero / 10))
digitoDos = Math.trunc((numero % 10))

if(digitoUno % 2 === 0 && digitoDos % 2 === 0){
    console.log(`los dos digitos del # ${numero} son pares`)
}else{
    console.log(`los dos digitos del # ${numero} no son pares`)
}


/* 6. Leer un numero entero de dos digitos menor que 20 y 
determinar si es primo */

numero = 1991
let j = 0
for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        j = j + 1
    }
}

j === 2 
?console.log('El numero es primo') 
:console.log('El numero  no es primo')
    

/* 8 ller un numero entero de so digitos y determinar si sus 
dos digitos son primo */

numero = 29

digitoUno = Math.trunc((numero / 10))
digitoDos = Math.trunc((numero % 10))
let a = 0
let b = 0

for(let i = 1; i <= digitoUno; i++){
    if(digitoUno % i === 0){
        console.log(a+= 1)
    }
    
}

for(let c = 1; c <= digitoDos; c++){
    if(digitoDos % c === 0){
        b+= 1
    }
}

a === 2 && b === 2
?console.log(`los dos digitos del # ${numero} son primos`) 
:console.log(`los dos digitos del # ${numero} no son primos`) 


/* 9. Leer un numero entero de dos digitos y determinar
si un digito es multiplo de otro */

numero = 39

digitoUno = Math.trunc((numero / 10))
digitoDos = Math.trunc((numero % 10))


if(digitoUno % digitoDos === 0){
    console.log(`El ${digitoUno} es multiplo de ${digitoDos}`)
}else if(digitoDos % digitoUno === 0){
    console.log(`El ${digitoDos} es multiplo de ${digitoUno}`)
}else{
    console.log('No son multiplo')
}
    
/* 10. Leer un numero estero de dos digitos y determinar 
si los dos dgitos son iguales */

numero = 33

digitoUno = Math.trunc((numero / 10))
digitoDos = Math.trunc((numero % 10))

if(digitoUno === digitoDos){
    console.log('Los numero son iguales')
}else{
    console.log('los numero son distintos')
}


/* 11. Leer dos numero enteros y determinar cual es mayor. */

numeroUno = 6
numeroDos = 40

if(numeroUno > numeroDos){
    console.log(`${numeroUno} es mayor que ${numeroDos}`)
}else if(numeroDos > numeroUno){
    console.log(`${numeroDos} es mayor que ${numeroUno}`)
}else{
    console.log(`${numeroUno} y ${numeroDos} son iguales`)
}

/* 13 Leer dos numeros enteros de dos digitos y determina 
si la suma de los dos origina un numero par */

numeroUno = 9
numeroDos = 40

let resultado = numeroUno + numeroDos

if(resultado % 2 === 0){
    console.log('Origina un numero par')
}else{
    console.log('No origina un numero par')
}

/* 14. Leer dos numeros enteros de dos digitos y determina a cuanto es igual
la suma de todos los digitos */

numero = 39

digitoUno = Math.trunc((numero / 10))
digitoDos = Math.trunc((numero % 10))

resultado = digitoUno + digitoDos
console.log(`${digitoUno} + ${digitoDos} = ${resultado}`)

/* 15. Leer un numero entero de tres digitos y determinar a cuanto es igual
la suma de sus digitos*/

numero = 365
digitoUno = Math.trunc((numero / 100))
digitoDos = Math.trunc((numero% 100) / 10)
digitoTres = (numero % 100) % 10

resultado = (digitoUno + digitoDos + digitoTres)
console.log(resultado)


/* 15. Leer un numero entero de tres digitos y determinar si al menos
dos de sus digitos son iguales*/

numero = 776
digitoUno = Math.trunc((numero / 100))
digitoDos = Math.trunc((numero% 100) / 10)
digitoTres = (numero % 100) % 10

if(digitoUno === digitoDos || digitoDos === digitoTres){
    console.log('si tiene dos digitos iguales')
}else if(digitoTres === digitoUno){
    console.log('si tiene dos digitos iguales')
}else{
    console.log('no tiene dos digitos iguales')
}


/* 22. Leer un numero entero de tres digitos y determinar si el primer
digito es igual al ultimo digito */

numero = 767
digitoUno = Math.trunc((numero / 100))
digitoDos = Math.trunc((numero% 100) / 10)
digitoTres = (numero % 100) % 10

if(digitoUno === digitoTres){
    console.log('el digito uno y el digito tres son iguales')
}else{
    console.log('no hay repetidos')
}

/* 23. Leer un numero entero de tres digitos y determinar cuantos numero primos tiene*/

numero = 312
digitoUno = Math.trunc((numero / 100))
digitoDos = Math.trunc((numero% 100) / 10)
digitoTres = (numero % 100) % 10
let p = 0
let h = 0
let c = 0
let contador = 0

for(i = 1; i<= digitoUno; i++){
    if(digitoUno % i === 0){
        p = p + 1
        if(p === 2){
            contador = contador + 1
        }
    }
}
console.log(p)
for(i = 1; i<= digitoDos; i++){
    if(digitoDos % i === 0){
        h = h + 1
        if(h === 2){
            contador = contador + 1
        }
       
    }
}

for(i = 1; i<= digitoTres; i++){
    if(digitoTres % i === 0){
        c = c + 1
        if(c === 2){
            contador = contador + 1
        }
    }
}
console.log(contador)

console.log(`el numero ${numero} tienes ${contador} digitos primos`)


/* 24. Leer un numero entero de tres digitos y determinar cuantos digitos pares tienes */

numero = 412
digitoUno = Math.trunc((numero / 100))
digitoDos = Math.trunc((numero% 100) / 10)
digitoTres = (numero % 100) % 10

let pares = 0

if(digitoUno % 2 === 0){
    pares = pares + 1
}
if(digitoDos % 2 === 0){
    pares = pares + 1
}
if(digitoTres % 2 === 0){
    pares = pares + 1
}

console.log(`el numero ${numero} tienes ${pares} digito pares`)

jhjhjhjhjh
