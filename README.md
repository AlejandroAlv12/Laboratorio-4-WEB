# Laboratorio-4-WEB

## Ejercicio 2

>Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

JS respeta la precedencia matemática de operadores, pero con sus propias reglas (por eso `**` es derecha a izquierda).
Los operadores unarios (`++`, `--`) existen en versión pre y post, y devuelven un valor además de modificar la variable.
Los operadores de asignación son los de menor prioridad, por eso puedes mezclarlos en expresiones largas.
JS permite hacer todo esto porque cada operador está diseñado con una asociatividad y precedencia bien definida en el estándar ECMAScript.

>Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Sí, el flujo de control (`if` / `else if` / `else`) es igual al de otros lenguajes en cuanto a estructura y ejecución.
La diferencia en JavaScript es que la coerción implícita de tipos (ejemplo: `prompt()` devuelve string, pero lo comparas con números y JS lo convierte).
