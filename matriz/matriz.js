/* Leer una matrix de 4x4 y determinar en que fila y en que columna se encuentra 
el numero mayor */

function numeroMayorMatrix(datos, filas,columnas) {
    let numero = 0;
    let f = null;
    let c = null;
  
    for (let i = 0; i < filas; i++) {
      for (let j = 0; j < columnas; j++) {
        let valor = datos[i][j];
        if (valor > numero) {
          numero = valor;
          f = i;
          c = j;
        }
      }
    }
    return [numero, f, c];
  }
  
let matrix1 = [
    [10, 320, 10, 5],
    [11, 211, 3, 4],
    [1, 220, 36, 800],
    [17, 28, 34, 41],
  ];
  
let resultados = numeroMayorMatrix(matrix1, 4, 4);
  console.log(
    `El numero mayor es ${resultados[0]} en la posicion [${resultados[1]}, ${resultados[2]}]`,
);
  
/* 2. Leer una matriz de 4x4 y determinar cuantas veces se repite el numero mayor */

matrix1 = [
    [110, 320, 100, 5],
    [810, 211, 300, 4],
    [115, 220, 810, 5],
    [170, 280, 810, 4],
  ];

let resultados_2 = numeroMayorMatrix(matrix1, 4, 4)  
console.log(resultados_2)

function contarNumeroMayor(num, matrix, filas, columnas){
    let numeroMayor = num
    let contador = 0
    for (let k = 0; k < filas; k++) {
        for (let h = 0; h < columnas; h++) {
            valorMatrix = matrix[k][h] 
            if(numeroMayor[0] === valorMatrix){
                contador = contador + 1
            }
            
        }
        
    }
    return contador
}


let salida = contarNumeroMayor(resultados_2, matrix1, 4, 4)
console.log(`el numero mayor se repite ${salida}`)


/*leer una matriz 3x4 entera y determinar en que posiciones exactas se 
encuentran los numero pares */


function posicionesNumerosPares(matrix){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let numerMatrix = matrix[i][j]
            if(numerMatrix % 2 === 0){
                console.log(`El numero par es ${matrix[i][j]} en la posicion [${i}, ${j}]`)
            }
            
        }
        
    }
}

matrix2 = [
    [11, 3, 100, 5],
    [810, 21, 300, 8],
    [115, 220, 810, 5]    
];

let posiciones = posicionesNumerosPares(matrix2)


/*leer una matriz 4x3 entera y determinar en que posiciones exactas se 
encuentran los numero primos */


function esPrimo(numero){
    if(numero >= 2){
        for(let i = 2; i < numero; i++){
            if(numero % i === 0){
                return false
            }else{
                return true
            }
        }
    }
}


function posicionesNumerosPrimos(matrix){
    for (let j = 0; j < matrix.length; j++) {
       for (let i = 0; i < matrix.length; i++) {
           let primo = matrix[j][i]
           if(esPrimo(primo)){
               console.log(`El numero ${primo} es primo esta en la posicion [${j}, ${i}]`)
            
           }
           
       }
        
    }
}


let matrix4 = [
    [11, 19, 3],
    [50, 6, 7],
    [18, 19, 12],
    [15, 51, 73],
]

posicionesNumerosPrimos(matrix4)


/* 5. Leer una matrix 4x3 entera, calcular la suma de los elementos de cada fila 
y determinar cual es la fila que tiene mayor suma */

let mat1, sumafilas = 0;

mat1 = [[5,6,7],
       [9,8,6],
       [7,5,4],
       [10, 9, 8]]

for (let i = 0; i < mat1.length; i++) {
     sumafilas = 0
    for (let j = 0; j < mat1[0].length; j++) {
        
        sumafilas = sumafilas + mat1[i][j]
    }
   
    console.log(sumafilas)
      
}


/* 6. Leer una matriz 4x4 entera, calcular el promedio de los numeros mayores
de cada fila */

let mat2 = [
    [10, 50, 60, 70],
    [90, 80, 60, 85],
    [70, 50, 40, 85],
    [10, 90, 80, 50]
]

let vector = [3]
let aux = 0
let num = 0
let promedio = 0

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2.length; j++) {
        aux = mat2[i][j]
        if(aux >= num){
            num = aux
        }
        
    }
    vector[i] = num
    num = 0
}

for(i = 0; i < vector.length; i++){
    console.log(vector[i])
    promedio = promedio + vector[i]
    
}   

console.log(`El promedio de los numeros mayores de cada fila ${promedio / 4}`)

/* 7. Leer una matriz 4x4 y determinar en que posicion estan los neteros terminados en 0 */


mat2 = [
    [1, 50, 6, 70],
    [95, 8, 60, 85],
    [70, 5, 40, 85],
    [1, 90, 80, 50]
]

aux = 0
num = 0

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2.length; j++) {
        aux = mat2[i][j]
        if(aux % 10 === 0){
            console.log(`el numero ${aux} esta en la posicion ${i}  ${j}`)    
        }
    }
    
}


/* 8. leer una matriz de 4x4 y determinar cuantos numeros enteros terminados en 0 hay */

mat2 = [
    [1, 50, 6, 70],
    [95, 8, 60, 85],
    [70, 5, 40, 85],
    [1, 90, 80, 50]
]

aux = 0
cantidadNumeroTerminadosCero = 0

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2.length; j++) {
        aux = mat2[i][j]
        if(aux % 10 === 0){
           cantidadNumeroTerminadosCero = cantidadNumeroTerminadosCero + 1     
        }
    }
    
}

console.log(`cantidad numeros terminados en 0 es ${cantidadNumeroTerminadosCero}`)

/* 9. Leer una matriz 3x4 entera y determina cuantos numeros de los que estan alamacenados
son primos y terminan en 3*/


function esPrimo(numero){
    if(numero >= 2){
        for(let i = 2; i < numero; i++){
            if(numero % i === 0){
                return false
            }else{
                return true
            }
        }
    }
}

function posicionesNumerosPrimosTerminadosTres(matrix){
    for (let j = 0; j < matrix.length; j++) {
       for (let i = 0; i < matrix.length; i++) {
           let primo = matrix[j][i]
           if(esPrimo(primo)){
               if(primo % 10 === 3){
                   console.log(`El numero ${primo} terminado en 3 esta en la posicion [${j}, ${i}]`)

                }
            }
        }
    }
}

mat2 = [
    [13, 2, 10, 7],
    [95, 8, 33, 85],
    [73, 5, 40, 85],
    [1, 90, 15, 50]
]

posicionesNumerosPrimosTerminadosTres(mat2)

/* 10. Leer una matriz entera y determminar en que fila esta el mayor primo */




/* 14. Leer una matriz 5x5 y determinar cuantos numeros almacenados 
en ella tienen mas de tres digitos */

let elemento = 0
let cont = 0
mat2 = [
    [13, 2, 10, 7, 15],
    [95, 8, 33, 85, 25],
    [73, 5, 40, 85, 2125],
    [1000, 900, 15, 5000]
]

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2.length; j++) {
        elemento = mat2[i][j]
        if(elemento > 100){
            cont = cont + 1
        }
        
    }
    
}

console.log(`La cantidad de numeros con mas de tres cifras son ${cont}`)


/* 15. Leer una matriz 5x4 y determinar cuantos numeros almacenados 
en ella terminan en 34 */

elemento = 0
contador = 0
mat2 = [
    [13, 2, 10, 7, 15],
    [95, 8, 33, 85, 25],
    [73, 5, 40, 85, 234],
    [1000, 934, 15, 5034]
]

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2.length; j++) {
        elemento = mat2[i][j]
        if(elemento % 100 === 34 ){
            contador = contador + 1
        }
        
    }
    
}

console.log(`La cantidad de numeros terminados en 34 ${cont}`)


/* 1. Leer una matriz 5x4 y determinar cuantos numeros almacenados 
en ella tienen un solo digito */



elemento = 0
contadorUno = 0
mat2 = [
    [13, 2, 10, 7, 15],
    [95, 8, 33, 85, 25],
    [73, 5, 40, 85, 234],
    [1000, 934, 15, 5034]
]

for (let i = 0; i < mat2.length; i++) {
    for (let j = 0; j < mat2.length; j++) {
        elemento = mat2[i][j]
        if(elemento < 10 ){
            contadorUno = contadorUno + 1
        }
        
    }
    
}

console.log(`La cantidad de numeros con 1 solo sigito ${contadorUno}`)
