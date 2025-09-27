const actividades = {
    lunes: 'Atender un cliente especifico',
    martes: 'Visitar una agencia fuera de la ciudad',
    miercoles: 'Llevar a mi hija al ballet (balé)',
    jueves: 'Priorizar entregas de desarrollo',
    viernes: 'Atender problemas de manera remota',
    sabado: 'Hacer lo que mi esposa quiera',
};

function recordar(dia, mensaje) {
    const diaNorm = dia.toLowerCase();
    const actividad = actividades[diaNorm];

    const resultado = document.getElementById('resultado');
    const titulo = document.getElementById('titulo');
    const detalle = document.getElementById('detalle');
    const icon = document.getElementById('icon');

    resultado.style.display = 'flex';

    if (!dia) {
        icon.textContent = '⚠️';
        titulo.textContent = 'Día no especificado';
        detalle.textContent = 'Por favor ingresa un día de la semana (ej: Lunes).';
        return;
    }

    if (actividad) {
        icon.textContent = '📅';
        titulo.textContent = `Actividad para ${capitalize(diaNorm)}:`;
        detalle.textContent = mensaje ? `${actividad} — Nota: ${mensaje}` : actividad;
    } else {
        icon.textContent = '✅';
        titulo.textContent = `Sin actividad programada para ${capitalize(diaNorm)}.`;
        detalle.textContent = mensaje ? `Mensaje: ${mensaje}` : 'Disfruta tu día libre.';
    }
};

function capitalize(s) {
    if (!s) return s;
    return s[0].toUpperCase() + s.slice(1);
}

const form = document.getElementById('form');
const diaInput = document.getElementById('diaInput');
const mensajeInput = document.getElementById('mensajeInput');
const hoyBtn = document.getElementById('hoyBtn');
const limpiarBtn = document.getElementById('limpiarBtn');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    recordar(diaInput.value, mensajeInput.value);
});

hoyBtn.addEventListener('click', () => {
    const dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    const hoy = new Date();
    const nombre = dias[hoy.getDay()];
    diaInput.value = capitalize(nombre);
    diaInput.focus();
});

limpiarBtn.addEventListener('click', () => {
    diaInput.value = '';
    mensajeInput.value = '';
    document.getElementById('resultado').style.display = 'none';
});

document.querySelectorAll('.examples button').forEach(btn => {
    btn.addEventListener('click', () => {
        diaInput.value = btn.dataset.day;
        mensajeInput.value = btn.dataset.msg;
        recordar(diaInput.value, mensajeInput.value);
    });
});

window.recordar = recordar;
