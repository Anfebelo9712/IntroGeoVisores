// for each recorrer iterable - // no devuelve un arreglo, 

let arreglo = [4,6,8,6];

arreglo.forEach((valor,indice) =>{
    console.log(valor)
}
)

// map funcion de Js que permite aplicar una funcion a cada elemento del arreglo
//devuelve arreglo con los resultados

function calcularCuadrado (valor){
    //Va todo lo que uno sentencie
    return valor**2;

};


let cuadrados = arreglo.map(calcularCuadrado);
//imprimir cuadrados

console.log(arreglo);

cuadrados.forEach((valor,indice) => {
    console.log(valor);
});

//Filter crear un nuevo arreglo con los elmentos que cumplen la condicion 

let mayores50 = cuadrados.filter(valor => valor>50);

console.log(mayores50);

console.warn("Mensaje");
console.error("Mensaje");

//sice - subconjunto a partir de un arreglo

let parte = arreglo.slice(2,3)
console.log(arreglo)
console.info(parte)

