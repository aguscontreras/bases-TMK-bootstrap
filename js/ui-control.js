// Elaces del menu

let enlacesMenu = document.querySelectorAll('.menu ul li a');

const colorEnlace = function (enlace) {
    enlacesMenu[enlace].classList.add('activo');
}

// Botones de procesos

let botonProcesar = document.querySelector('#botonProcesar');
let estadoProcesar = false;

if (botonProcesar) {
    botonProcesar.innerHTML = 'Procesar';
    botonProcesar.addEventListener('click', function () {
        if (!estadoProcesar) {
            botonProcesar.style.background = 'rgb(255, 112, 51)';
            botonProcesar.innerHTML = 'Recargar';
            estadoProcesar = true;
        } else {
            estadoProcesar = false;
            location.reload();
        }
    });
}

// Botones secundarios

let botonSecundario = document.querySelectorAll('.btn-secondary');

for (let i = 0; i < botonSecundario.length; i++) {
    botonSecundario[i].addEventListener('click', estadoBotonSecundario)
}

function estadoBotonSecundario() {
    if (!estadoProcesar) {
        botonSecundario.forEach(boton => {
            boton.style.opacity = '.2';
            boton.style.pointerEvents = 'none';
        });
        this.style.opacity = '1';
        estadoProcesar = true;
    } else {
        estadoProcesar = false;
        location.reload();
    }
};