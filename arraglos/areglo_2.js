//Autor: yo mismo

/* 14. Leer 10 números enteros, almacenarlos en un vector y determinar cuántas veces se repite el
promedio entero de los datos dentro del vector. */

function promedio(datos){
    let promedio = 0
    let longitud = datos.length
    for (let i = 0; i < datos.length; i++) {
        let elemento = datos[i]
        promedio = promedio + elemento        
    }

    return promedio / longitud
}

function buscarPromedio(numero, vec){
    let contador = 0
    for (let j = 0; j < vec.length; j++) {
        if (numero === vec[j]){
            contador += 1
        }
    }
    return contador
}
let vector = [85, 78, 15, 52, 63, 96, 64, 15, 10, 16]
let vectorDos = [4, 4, 4]

let salida = promedio(vector)
let salida2 = promedio(vectorDos)

console.log(salida)
console.log(salida2)

let numDos = buscarPromedio(salida2, vectorDos)
let num = buscarPromedio(salida, vector)

console.log(`el promedio se repite ${num}`)
console.log(`el promedio se repite ${numDos}`)


/* 18. Leer 10 números enteros, almacenarlos en un vector y determinar en qué posiciones están los
números positivos.*/


function buscarNumerosPositivo(datos){
    let numero = 0
    for (let i = 0; i < datos.length; i++) {
        numero = datos[i]
       if(numero > 0){
           console.log(`el numero ${numero} esta en la posicion ${i}`)
       }
        
    }

}
vectorDos = [15, -5, 8, 10, -9, 4, -63, 10, -15, 15]

buscarNumerosPositivo(vectorDos)

/* 19. Leer 10 numero esteros, almacenarlos en un vector y determinar cual es 
el numero menor */

function burcarNumeroMenor(datos){
    let numeroMenor = datos[1]
    for (let i = 0; i < datos.length; i++) {
        let numeroActual = datos[i]
        if(numeroActual < numeroMenor){
            numeroMenor = numeroActual
        }
        
    }
    return numeroMenor
}

vector = [85, 78, 15, 52, 63, 96, 64, 15, 10, 16]

let resultado = burcarNumeroMenor(vector)

console.log(`Numero menor ${resultado}`)


/* 20. Leer 10 números enteros, almacenarlos en un vector y determinar en qué posición está el
menor número primo.*/


function buscarMenorNumeroPrimo(datos){
    let valor = datos[0]
    let posicion = 0

    for (let j = 0; j < datos.length; j++) {
       let numero = datos[j]
       if(numero % 2 === 1){
           if(numero < valor){
               valor = numero
               posicion = j
            }
        }
        
    }
   console.log(`el menor numero primo es ${valor} y su posicion es ${posicion}`)

}


vector = [85, 78, 15, 52, 63, 96, 64, 11, 10, 16]

buscarMenorNumeroPrimo(vector)

/*  21. Leer 10 números enteros, almacenarlos en un vector y determinar en qué posición está el
número cuya suma de dígitos sea la mayor. */


function sumaDigitos(datos){
    let posicion = 0
    let numero = datos[0]
    let suma = 0
    let digitoUno = Math.trunc(numero / 10)
    let digitoDos = (numero % 10)
    suma = digitoUno + digitoDos
    console.log(suma)

    for (let k = 0; k < datos.length; k++){

        let elementoVector = datos[k]
        let digUno = Math.trunc(elementoVector / 10)
        let digDos = elementoVector % 10
        let elemento = digUno + digDos

        if(elemento > suma){
            suma = elemento
            posicion = k
        }
        
    }
    console.log(`el numero que la suma de su digitos es mayor esta en la posicion ${posicion}`)

}

vectorX = [85, 78, 15, 52, 99, 96, 64, 11, 10, 16]
sumaDigitos(vectorX)


/* 22. Leer 10 números enteros, almacenarlos en un vector y determinar cuáles son los números
múltiplos de 5 y en qué posiciones están. */

function multiplosDeCinco(datos){
    for (let i = 0; i < datos.length; i++) {
        let numero = datos[i]
        if(numero % 5 === 0){
            console.log(`el numero ${numero} es multiplo de 5 y se encuentre en la posicion ${i}`)
        }
        
    }
}

vectorX = [85, 78, 15, 52, 99, 96, 64, 11, 10, 16]
multiplosDeCinco(vectorX)



/* 24. Leer 10 números enteros, almacenarlos en un vector y determinar en qué posición está el
número con mas dígitos*/


function numeroMasDigitos(datos){
    let mayor = datos[0]
    let posicion = 0
    for (let i = 0; i < datos.length; i++) {
        let elemento = datos[i]
        if (elemento > mayor){
            mayor = elemento
            posicion = i
        }
        
    }
    console.log(`El numero con mas digitos se encuentra en la posicion ${posicion}`)
    
}

vectorX = [80, 78, 78, 52, 33, 33, 640, 11, 10, 10]
numeroMasDigitos(vectorX)

/* 25. 25. Leer 10 números enteros, almacenarlos en un vector y determinar cuántos de los números
leídos son números primos terminados en 3.*/

function primosTerminadosEnTres(datos){
    let posicion = 0
    for (let j = 0; j < datos.length; j++) {
        let primo = datos[j]
        if(primo % 2 === 1){
            if(primo % 10 === 3){
                posicion = j
                console.log(`el numero ${primo} se encuetra en la posicion ${posicion}`)
            }
        } 
        
    }

}

vectorX = [80, 3, 78, 52, 33, 333, 640, 11, 13, 10]
primosTerminadosEnTres(vectorX)


/* 26 y 27. Leer 10 números enteros, almacenarlos en un vector y calcularle el factorial a cada uno de los
números leídos almacenándolos en otro vector.*/

let numero = [9, 5, 4, 6, 6, 7, 9, 7, 3, 8]
let factorial = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let fact = 1
let long = factorial.length
let promedioFactorial = 0

for (let i = 0; i < numero.length; i++) {
    let elemento = numero[i]
    for (let j = 1; j <= elemento; j++) {
        fact = fact * j
              
    }
   
   promedioFactorial = promedioFactorial + fact 
   factorial[i] = fact
   fact = 1    
}

promedioFactorial = promedioFactorial / long
console.log(factorial)
console.log(`el promedio acumulado de los factoriales ${promedioFactorial}`)


/* 28. Leer 10 numeros enteros, almacenarlos en un vector y mostrar en pantalla todos
los numeros enteros comprendidos entre 1 y cada numero alamacenado en el vector.*/

numero = [9, 5, 4, 6, 6, 7, 9, 7, 3, 8]

for (let i = 0; i < numero.length; i++) {
    let elemento = numero[i]
    for (let j = 1; j <= elemento; j++) {
        console.log(j)
              
    }
   
    
}

/* 30. Leer 10 números enteros, almacenarlos en un vector. Luego leer un entero y determinar si este
último entero se encuentra entre los 10 valores almacenados en el vector.*/

let valorB = 15
let aux = 0
let element = 0
vectorN = [150, 26, 96, 16, 150, 12, 13, 26, 9, 10]

for (let j = 0; j < vectorN.length; j++) {
    element = vectorN[j]
    if(valorB === element){
        console.log(`el numero ${valorB} se encuentra en la posicion ${j}`)
    }else{
        console.log(`el numero ${valorB} no se encuentra en ninguna posicion`)
        break
    }    
}



