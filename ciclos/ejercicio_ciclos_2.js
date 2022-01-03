/* 37. Generar las tablas del 1 al 10 */

for(let i = 1; i<= 10; i++){
    
    for(let j = 1; j <= 10; j++){
        
        console.log(`${i} * ${j} = ${i * j}`)
    }
    
}

/* 38. Leer un numero entero y mostrar su tabla de multiplicar */

numero = 21
let k = 1;

while(k <= 10){
    console.log(`${numero} * ${k} = ${numero * k}`)
    k += 1
}


/* 39. Se define la serie de Fibonacci como la serie que comineza con los digitos 1 y 0
y va sumando progresivamente los dos ultimos elementos de la serie

0 , 1, 3, 5 , 8, 13, 21, 34..... */

let a = 1;
let b = 0
let c = 0
let n = 23
for (let i = 0; i <= 20; i++) {
    c = a + b
    b = a
    a = c
    console.log(b)
    if (n === b){
        console.log(`El numero ${n} pertenece a la serie Fibonacci`)
    }
}    


/* 40. Leer un numero de dos digitos y determinar si pertenece a la serie de Fibonacci */

let est = false
a = 1;
b = 0
c = 0
n = 55


for (i = 0; i <= 20; i++) {
    c = a + b
    b = a
    a = c
   
    if (b === n){
        console.log(`El numero ${n} pertenece a la serie Fibonacci`)
        est = true
    }
    
} 

if (est != true){
    console.log('el numero leido no pertenece a la serie fibonaci')
}


/* 41. Determinar a cuanto es igual la suma de los elementos de la serie fibonacci */

a = 1;
b = 0
c = 0
n = 551
let acumulador = 0
for (i = 0; i <= 20; i++) {
    c = a + b
    b = a
    a = c
   
    if (b <= 100){
       acumulador = acumulador + b
    }

    
} 
   
console.log(acumulador)

/* 43. determinar cuantos elementos de la serie de Fibonaci se encuentran
entre 1000 y 2000 */


a = 1;
b = 0
c = 0
n = 551
let contador = 0;

for (i = 0; i <= 20; i++) {
    c = a + b
    b = a
    a = c
   
    if (b >= 1000 && b <= 2000){
      contador = contador + 1
    }

    
} 
   
console.log(contador)
