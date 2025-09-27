// Las operaciones aritmeticas van de izquierda a derecha en js.
// El operador de exponenciación es el único que va de derecha a izquierda
// Los operadores aritmeticos tienen el siguiente orden de prioridad:
//() >*>/>%> +>-
const expresion1 = (3 + 7) * 10; // 100
const expresion2 = 3 + 7 * 10; // 73
const expresion3 = 2 ** 3 ** 2; // 512

// Al igual que en las matemáticas u otros lenguajes de programación,
// el orden importa. Estos operadores son los que más prioridad tienen
let inicio = +5; // también podría ser negativo
const sumaYAsigna = ++inicio; // 6
const asignaYSuma = inicio++; // 6
const restaYAsigna = -- inicio; // 5
const asignaYResta = inicio --; // 5
console. log(inicio);

let x = 1; // El operador de asignación es el que menos prioridad
let y = 2;
let z = 3;
x = y;
x += z;
x * y;
x /= y;
x %= x;
//---------------------------------------------------------


if (true) {
    console. log("true, por eso me ejecuto");
} else {
    console. log("false, por eso me ejecuto");
}
// Podemos poner condiciones intermedias
const miNumero = prompt("¿Qué número estoy pensando?")
if (miNumero < 5) {
    alert("miNumero es bastante pequeño");
} else if (miNumero > 5) {
    alert("vaya, miNumero se ha pasado");
} else {
    alert("imiNumero es 5!");
}
//---------------------------------------------------------