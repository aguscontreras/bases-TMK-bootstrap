let columnaUnica = new Array();

function concatenarS() {

    armarColumnasGlobal();

    // Convierte todos los datos del textarea de entrada en String (texto), y reemplaza las comas con el separador ingresado
    // Funciona asi porque al convertir de array a string se separan los indices con comas

    for (let i = 0; i < datosEntrada.length; i++) {
        columnaUnica[i] = datosEntrada[i].toString();
        columnaUnica[i] = columnaUnica[i].replace(/,/g, document.querySelector('#separador').value);
    };

    columnaUnica = columnaUnica.toString()
    columnaUnica = columnaUnica.replace(/,/g, "\n");

    salida.value = columnaUnica;

    if (document.querySelector('#separador').value == "") {
        console.log("No hay parametro");
        document.querySelector('#separador').style.color = "#ff8606";
        document.querySelector('#separador').value = "(Vacío)";
    } else if (document.querySelector('#separador').value == " ") {
        document.querySelector('#separador').style.color = "#8389E0";
        document.querySelector('#separador').value = "(espacio)"
    };

    imprimirDatos();
};


function imprimirDatos() {

    // Muestra el tiempo total
    finTiempo = new Date();

    tiempoTotal = finTiempo - inicioTiempo;

    // Actualiza el contador de salida
    contadorFilasSalida = datosEntrada.length;
    spancontadorFilasSalida = `<span>Filas: ${contadorFilasSalida}</span> | <span>Tiempo: ${tiempoTotal}ms</span>`;
    divContador[1].innerHTML = spancontadorFilasSalida;

    // Copiado automatico del resultado
    setTimeout(() => {
        let copiarResultado = true;
        if (copiarResultado) {
            textareaSalida.select();
            document.execCommand('copy');
            mostrarPopper();
        }
    }, 800);

}