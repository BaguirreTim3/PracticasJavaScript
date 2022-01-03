/* 25 Leer un numero entero de tres digitos y determinar si alguno de sus digitos es igual
a la suma de los otros dos */

let numero = 633

let digitoUno = Math.trunc((numero / 100))
let digitoDos = Math.trunc((numero% 100) / 10)
let digitoTres = (numero % 100) % 10

if(digitoUno + digitoDos === digitoTres){
    console.log('la suma de dos digitos es igual a uno de los digitos')
}else if(digitoTres + digitoDos === digitoUno){
    console.log('la suma de dos digitos es igual a uno de los digitos')
}else if(digitoUno + digitoTres == digitoDos){
    console.log('la suma de dos digitos es igual a uno de los digitos')
}else{
    console.log('la de culaquiera de los digitos no es igual a uno de los digitos')
}

/* 26. Leer un numero entero de cuatro digitos y determinar cuanto 
es igual la suma de sus digitos */

numero = 6336

digitoUno = Math.trunc((numero / 1000))
digitoDos = Math.trunc((numero /100) % 10)
digitoTres = Math.trunc((numero /10)) % 10
digitoCuatro = (numero % 10)

let resultado = (digitoUno + digitoDos + digitoTres + digitoCuatro)
console.log(`la suma de los 4 digitos es ${resultado}`)


/* 27. Leer un numero entero de cuatro digitos y determinar 
cuantos digitos pares tiene*/

numero = 6336

digitoUno = Math.trunc((numero / 1000))
digitoDos = Math.trunc((numero /100) % 10)
digitoTres = Math.trunc((numero /10)) % 10
digitoCuatro = (numero % 10)

let cantidadDigitosPares = 0

if(digitoUno % 2 === 0){
    cantidadDigitosPares = cantidadDigitosPares + 1
}
if(digitoDos % 2 === 0){
    cantidadDigitosPares = cantidadDigitosPares + 1 
}
if(digitoTres % 2 === 0){
    cantidadDigitosPares = cantidadDigitosPares + 1 
}
if(digitoCuatro % 2 === 0){
    cantidadDigitosPares = cantidadDigitosPares + 1 
}

console.log(`la cantidad de digitos pares que tiene ${numero} es ${cantidadDigitosPares}`)


/* 30 Leer un numero entero de cuatro digitos y determinar si el segundo es igual 
al penultimo */

numero = 6336

digitoUno = Math.trunc((numero / 1000))
digitoDos = Math.trunc((numero /100) % 10)
digitoTres = Math.trunc((numero /10)) % 10
digitoCuatro = (numero % 10)

if(digitoDos === digitoTres){
    console.log(`el digito ${digitoDos} y el ${digitoTres} son iguales`)
}else{
    console.log('no son iguales')
}



