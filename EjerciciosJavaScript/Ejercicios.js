/* 1.  Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.*/

function contrasenaValida(input){
    if(input == "2F" || input == "3F"){
        return true;
    }else{
        return false;
    }
}

console.log(contrasenaValida("2F"));
console.log(contrasenaValida("4F"));
console.log("---------------------------------------------------------------------------------")

/*2.  Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.*/

function calcularimpuesto(edad, ingresos){
    if(edad >= 18 && ingresos >= 1000){
        return ingresos * 0.4;
    }else{
        return ingresos = 0;
    }
}

console.log(calcularimpuesto(18, 1000)) // 400
console.log(calcularimpuesto(40, 10000)) // 4000
console.log(calcularimpuesto(17, 5000)) // 0
console.log(calcularimpuesto(30, 500)) // 0
console.log("---------------------------------------------------------------------------------")

/*3.  El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

function bmi(peso, altura){
    let valbmi = peso/Math.pow (altura,2); //importante al hacer una operacion declarar la variable
    if(valbmi < 15.5){
        return "Bajo de peso"
    }else if(valbmi >= 18.5 && valbmi <= 24.9){
        return "Normal"
    }else if(valbmi >= 25 && valbmi <= 29.9){
        return "Sobrepeso"
    }else (valbmi >= 30)
        return "Obeso" 
}


console.log(bmi(73,1.90));
console.log(bmi(65,1.8)); 
console.log(bmi(72,1.6)); // "Sobrepeso"
console.log(bmi(52,1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"
console.log("---------------------------------------------------------------------------------")

/*4.  Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:*/

function imprimirArreglo(arreglo) {
    arreglo.forEach(elemento => {
        console.log(elemento);
    });
}

imprimirArreglo([1, "Hola", 2, "Mundo"]);
console.log("---------------------------------------------------------------------------------")

/*5.  Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.*/

function likes(numero){
    if (numero >= 1000000){
        return (Math.round(numero / 1000000 )+ "M" );  
    }else if(numero >= 1000){
        return numero / 1000 + "K";
    }else
        return numero;

}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"
console.log("---------------------------------------------------------------------------------")

/*6.  Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.*/

function fizzBuzz(numero){
    if((numero % 3 == 0) && (numero % 5 == 0)){
        return "fizzBuzz"
    }else if(numero % 3 == 0){
        return "fizz"
    }else if(numero % 5 == 0){
        return "Buzz"
    }else
        return numero
}
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
console.log("---------------------------------------------------------------------------------")

/*7.  Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.*/

function contarRango(n1, n2){
    let cont = 0;
    let n1a = n1+1;
    while (n1a < n2 ){
        n1a += 1;
        cont += 1;
    }
    return cont; //-1
     
}
console.log(contarRango(1, 9))
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
console.log("---------------------------------------------------------------------------------")

/*8.  Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.*/



function sumarRango(num1, num2){
    let sum = 0;
    let cont = num1;
    while(cont<num2){
        sum += cont;
        cont += 1;
    }
    return sum;
}

/*function sumarRango(num1, num2){
    let sum = 0;
    for(i = num1; i<= num2; i++){
        sum += i;
    }
    return sum;
}*/
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
console.log("---------------------------------------------------------------------------------")

/*9.  Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":*/

function numeroDeAes(input){
    let coincidencias = input.match(/[a]/g);
    return coincidencias ? coincidencias.length : 0;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
console.log("---------------------------------------------------------------------------------")


/*10.  Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.*/

function numeroDeCaracteres(input, dato){
    let contador = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === dato) {
            contador++;
        }
    }
    return contador;
}
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4
console.log("---------------------------------------------------------------------------------")

/*11.  Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.*/
function sumarArreglo(numeros){
    let sum = 0;
    numeros.forEach(numero => sum += numero);
    return sum;
}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
console.log("---------------------------------------------------------------------------------")

/*12.  Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos. */
function multiplicarArreglo(numero){
    let mul = 1;
    numero.forEach(numeroa => mul *=   numeroa);
    return mul;
}
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1
console.log("---------------------------------------------------------------------------------")

/*13.  Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).*/
function removerCeros(lista){
    return lista.filter(numero => numero !== 0);
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
console.log("---------------------------------------------------------------------------------")


/*14.  Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.*/

function sumarArreglos(lis, ini, fin){
    let sum = 0;
    for(let i = ini; i <= fin; i++){
        sum += lis[i];
    }
    return sum;

}
console.log(sumarArreglos([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglos([7, 8, 9], 0, 0)) // 0
console.log("---------------------------------------------------------------------------------")

/*15.  Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U */

function transcribir(cadenaADN) {
    return cadenaADN.split('').map(nucleotido => {
        switch (nucleotido) {
            case 'G':
                return 'C';
            case 'C':
                return 'G';
            case 'T':
                return 'A';
            case 'A':
                return 'U';
            default:
                // Si hay un carácter no válido, lo dejamos como está en el complemento ARN
                return nucleotido;
        }
    }).join('');
}
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
console.log("---------------------------------------------------------------------------------")


/*16.  Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:*/
function capitalizar(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1); //el charAt coge un lugar del string y el upper la coloca en mayuscula
} 
console.log(capitalizar("pedro")) // "Pedro"
console.log(capitalizar("hola mundo")) // "Hola mundo"
console.log(capitalizar("")) // ""
console.log("---------------------------------------------------------------------------------")

/*17.  Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra:*/
function capitalizar(cadena) {
    // Dividir la cadena en palabras usando espacio como separador
    let palabras = cadena.split(" ");
    
    // Capitalizar la primera letra de cada palabra
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    
    // Unir las palabras capitalizadas en una cadena y devolverla
    return palabras.join(" ");
}
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""
console.log("---------------------------------------------------------------------------------")

/*18.  Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:
Nota: Intentarlo hacer sin el método Math.max de JavaScript. */

function max(arreglo){
    let max = 0;
    for(let i = 0; i<= arreglo.length; i++){
        if(arreglo[i]>max){
            max = arreglo[i];
        }
    }
    return max;
}
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9
console.log("---------------------------------------------------------------------------------")

/*19.  Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo:
Nota: Intentarlo hacer sin el método Math.min de JavaScript.*/
function min(arreglo){
    let min = 10000;
    for(let i = 0; i<= arreglo.length; i++){
        if(arreglo[i]<min){
            min = arreglo[i];
        }
    }
    return min;
}
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2
console.log("---------------------------------------------------------------------------------")


/*20.  Escribir una función llamada password que reciba un string y retorne un nuevo string realizando los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter “a” por “4”.
Reemplaza el caracter “e” por “3”.
Reemplaza el caracter “i” por “1”.
Reemplaza el carater “o” por “0”. */

function password(cadena) {
    // Convertir todas las letras a minúsculas
    cadena = cadena.toLowerCase();
    
    // Eliminar los espacios en blanco
    cadena = cadena.replace(/\s+/g, '');
    
    // Realizar las sustituciones especificadas
    cadena = cadena.replace(/a/g, '4');
    cadena = cadena.replace(/e/g, '3');
    cadena = cadena.replace(/i/g, '1');
    cadena = cadena.replace(/o/g, '0');
    
    return cadena;
}
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""
console.log("---------------------------------------------------------------------------------")

/*21.  Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.*/
function pares(array){
    return array.filter(numero => numero % 2 === 0);
}
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // [] 
console.log("---------------------------------------------------------------------------------")

/*22.  Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo con las posiciones donde se encuentran números pares. */
function posiciones(arreglo) {
    let posicionesPares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            posicionesPares.push(i);
        }
    }
    return posicionesPares;
}
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []
console.log("---------------------------------------------------------------------------------")

/*23.  Escribir una función llamada duplicar que reciba un arreglo de números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2). */
function duplicar(arreglo){
    return arreglo.map(function (x) {
        return x * 2;
    });
}
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []
console.log("---------------------------------------------------------------------------------")

/*24.  Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que empiecen por "a" (mayúscula o minúscula). 
function empiezanConA(arreglo){
    arreglo.sort();
    return arreglo
}*/

function empiezanConA(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().startsWith('a'));
}

console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
console.log("---------------------------------------------------------------------------------")


/*25.  Escribir una función llamada terminanConS que reciba un arreglo de strings y retorne un nuevo arreglo con todas las palabras que terminan con "s" (mayúscula o minúscula). */

function terminanConS(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().endsWith('s'));
}
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
console.log("---------------------------------------------------------------------------------")


/*26.  Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo. */

function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            console.log(matriz[i][j]);
        }
    }
}
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))
console.log("---------------------------------------------------------------------------------")

/*27.  Escribir una función llamada numerosAPalabras que reciba un arreglo de números (cada número en el rango de 0 a 0) y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras. */
function numerosAPalabras(arreglo) {
    const numerosEnPalabras = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    return arreglo.map(numero => numerosEnPalabras[numero]);
}
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
//esto lo que hace es que busca la posicion con el numero y muestra lo que hay en esa posicion
console.log("---------------------------------------------------------------------------------")

/*28.  Escribir una función llamada palabrasANumeros que reciba un arreglo de strings y retorne un nuevo arreglo traduciendo cada palabra a su versión numérica (del 0 al 9). Si la palabra no es un número traducir a -1. */
function palabrasANumeros(arreglo) {
    const numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };

    return arreglo.map(palabra => numeros[palabra] || -1);
}
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])); // [0, 1, 2, 3, -1, 4]
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"])); // [5, 6, 7, 8, 9]
console.log("---------------------------------------------------------------------------------")

/*30.  Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos: */ 




function numAsteriscos(matriz) {
    let cont = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] == "*")
            cont += 1;
        }
    }
    return cont;
}
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
console.log("---------------------------------------------------------------------------------")