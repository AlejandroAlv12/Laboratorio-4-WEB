function ordenar(arr) { // Algoritmo Bubble Sort
    const nuevoArray = [ ... arr]
    for (let i = 0; i < nuevoArray. length ; i++) {
        for(let j = 0 ; j < nuevoArray. length - i - 1; j++){
            if (nuevoArray[j] > nuevoArray[j + 1]) {
                let temporal = nuevoArray[j];
                nuevoArray[j] = nuevoArray [j+1];
                nuevoArray[j + 1] = temporal;
            }
        }
    }
    return nuevoArray;
}
console.log(ordenar( [14, 23, 99, 874, 93, 12]) ); // [12, 14, 23, 93, 99, 874]
console.log(ordenar( [5, 3, 8, 1, 2, 7]) ); // [1, 2, 3, 5, 7, 8]
//------------------------------------------------------


function esPar (numero) {
    return numero % 2 === 0;
}
console.log(esPar(7)); // false (impar)
console.log(esPar(8)); // true (par)
//------------------------------------------------------



function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let altura = 0;
    let dias = 0;
    while (altura < alturaDeseada) {
        altura += velocidadCrecimiento;
        dias++;
        if (altura >= alturaDeseada) { return dias }
        altura -= velocidadDecrecimiento;
    }
    return dias;
}
console.log(calcularDiasCrecimiento(3, 2, 10)); // 8 metros de altura deseada
console.log(calcularDiasCrecimiento(5, 3, 22)); // 10 metros de altura deseada
console.log(calcularDiasCrecimiento(4, 1, 20)); // 7 metros de altura deseada
//------------------------------------------------------