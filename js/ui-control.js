
let botonProcesar = document.querySelector('#botonProcesar');

let estadoProcesar = false;

botonProcesar.innerHTML = 'Procesar';

botonProcesar.addEventListener('click', function() {

    if (!estadoProcesar) {
        botonProcesar.style.background = 'rgb(255, 112, 51)';
        botonProcesar.innerHTML = 'Recargar';
        estadoProcesar = true;
    } else {
        estadoProcesar = false;
        location.reload();
    }
})