/* 1. Leer 10 enteros, almacenarlos en un vector y determinnar en que posicion del 
vector esta el mayor numero leido */

let numero = [10, 15, 63, 96 , 78, 65, 25, 41, 85, 3]
let aux = numero[1]


for (let i = 0; i < numero.length; i++) {
    if(numero[i] >= aux){
       aux = numero[i] 
       posicion = i
    }
    
}

console.log(`numero mayor ${aux} esta en la posicion ${posicion}`)


/* 2. Leer 10 enteros, almacenarlos en un vector y determinar 
en que posicion esta el mayor numero par leido */

let vectorDos = [15, 86, 4, 6, 9, 88, 66, 75, 9, 156]
aux = 0
for (let j = 0; j < vectorDos.length; j++) {
    if(vectorDos[j] % 2 === 0){
        if(aux <= vectorDos[j]){
            aux = vectorDos[j]
            posicion = j
        } 
    }
    
}
console.log(`el mayor numero par es ${aux} y esta en la posicion ${posicion}`)


/* 3. Leer 10 enteros, almacenarlos en un vector y determinar en que posicion 
del vector esta el mayor numero primo leido */

vectorDos 
let primo = 0
let div = 1
let numeroPrimoMayor = 0

for (let j = 0; j <= vectorDos.length; j++) {
    numero = vectorDos[j]
    while(div <= numero){
        if(numero % div === 0){
            primo += 1
        }
        if(primo === 2){
            nume
        }        
        div += 1
    }
    
}
console.log(numeroPrimoMayor)

/* 4. Cargar un vector de 10 posiciones con los 10 primeros elementos de la 
serie de Fibonacci y mostrarlo en pantalla. */

let fibonacci = [0, 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0]
let h = 0
let a = 1
let b = 0
let c = 0
while (h <= fibonacci.length){
    c = a + b
    b = a
    a = c
    if (fibonacci[h] === 0){
        fibonacci[h] = b
    } 
    h+= 1
    
} 

for (let k = 0; k <= fibonacci.length; k++){
    console.log(fibonacci[k])
}


/* 7. Leer 10 numero enteros, alamacenados en un vector y determinar 
en que posicion se encuentra el numero mayor */

numero = [10, 15, 63, 96 , 788, 65, 25, 41, 85, 3]
aux = numero[1]


for (let i = 0; i < numero.length; i++) {
    if(numero[i] >= aux){
       aux = numero[i] 
       posicion = i
    }
    
}

console.log(`numero mayor esta en la posicion ${posicion}`)


/* 8 Leer 10 numero enteros, almacenados en un vector y determinar 
en que posiciones se encuentran los numeros terminados en 4*/

let vector = [324, 14, 6, 15, 34, 63, 4, 100, 9, 10 ]

for (let k = 0; k <= vector.length; k++) {
    if(vector[k] % 10 === 4){
        console.log(`el numero ${vector[k]} esta en la posicion ${k}`)
    }
    
    
}

/* 9. leer 10 numeros enteros, almacenarlos en un vector y determinar
cuantas veces esta repetido el mayor */

vector = [324, 15, 16, 324, 96, 98, 324, 40, 12, 324]
let mayor = vector[1]
repetido = 0

for (let g = 0; g <= vector.length; g++) {
    if(vector[g] >= mayor){
       mayor = vector[g] 
    }
}

for (let i = 0; i <= vector.length; i++){
    if(mayor === vector[i]){
        repetido = repetido + 1
    }
}

console.log(`el numero ${mayor} esta repetido ${repetido}`)


/* 10 Leer 10 numeros enteros, almacenarlos en un vector y determinar cuantos 
numeros tienen de los almacenados hay, tienen mas de 3 digitos */

vector = [3243, 15, 16, 324, 9663, 98, 324, 4000, 12, 324]
let masTresDigitos = 0
for (let k = 0; k < vector.length; k++) {
    if(vector[k] > 999){
        masTresDigitos = masTresDigitos + 1
    }
    
}

console.log(`hay ${masTresDigitos} con mas de tres digitos`)

/* 11. Leer 10 numero enteros, almacenarlos en un vector y determinar 
cuantos numeros tienen, de los almacenados alli tienen menos de 3 digitos */

vector = [3243, 15, 16, 324, 9663, 98, 324, 4000, 12, 324]
menosTresDigitos = 0
for (let k = 0; k < vector.length; k++) {
    if(vector[k] < 100){
        menosTresDigitos = menosTresDigitos + 1
    }
    
}

console.log(`hay ${menosTresDigitos} con menos de tres digitos`)


/* 12. Leer 10 numeros enteros, almacenarlos en un vector y determinar 
a cuanto es igual al promedio entero de los datos*/


vector = [3243, 15, 16, 324, 9663, 98, 324, 4000, 12, 324]
let promedio = 0

for (let k = 0; k < vector.length; k++) {
    
    (promedio = promedio + vector[k] /10)    
    
}

console.log('el promedio es ', Math.trunc(promedio))

/* 13. Leer 10 numeros enteros, almacenarlos en un vector y determinar si el promedio
entero de estos datos esta almacenado en el vector */


vector = [3243, 15, 16, 324, 663, 98, 324, 4000, 12, 324]
promedio = 0

for (let k = 0; k < vector.length; k++) {
    
    (promedio = promedio + vector[k] /10)    
    
}

console.log('el promedio es ', Math.trunc(promedio))
