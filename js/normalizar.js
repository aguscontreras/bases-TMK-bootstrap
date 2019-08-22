// La funcion de normalizar se incluye en el JS de globales.js 
// porque se usa en más de una herramienta.

function procesar() {
    armarColumnasGlobal();

    for(let i=0; i<columnas.length; i++) {
        normalizarTelefonos(columnas[i]);
    };

    imprimirDatos();
}


function imprimirDatos() {


    // Junta las columnas y las ordena en el textarea de salida

    for (let i = 0; i < columnas[0].length; i++) {
        switch (columnas.length) {
            case 1:
                datosSalida.push(columnas[0][i])
                break;
            case 2:
                datosSalida.push(columnas[0][i] + '\t' + columnas[1][i])
                break;
            case 3:
                datosSalida.push(columnas[0][i] + '\t' + columnas[1][i] + '\t' + columnas[2][i])
                break;
            case 4:
                datosSalida.push(columnas[0][i] + '\t' + columnas[1][i] + '\t' + columnas[2][i] + '\t' + columnas[3][i])
                break;
            case 5:
                datosSalida.push(columnas[0][i] + '\t' + columnas[1][i] + '\t' + columnas[2][i] + '\t' + columnas[3][i] + '\t' + columnas[4][i])
                break;
            case 6:
                datosSalida.push(columnas[0][i] + '\t' + columnas[1][i] + '\t' + columnas[2][i] + '\t' + columnas[3][i] + '\t' + columnas[4][i] + '\t' + columnas[5][i])
                break;
            case 7:
                datosSalida.push(columnas[0][i] + '\t' + columnas[1][i] + '\t' + columnas[2][i] + '\t' + columnas[3][i] + '\t' + columnas[4][i] + '\t' + columnas[5][i] + '\t' + columnas[6][i])
                break;
            default:
                datosSalida = undefined;
                break;
        };
    };

    textareaSalida.value = datosSalida.toString().replace(/,/g, '\n');

    // Muestra el tiempo total

    finTiempo = new Date();

    tiempoTotal = finTiempo - inicioTiempo;

    // Actualiza el contador de salida
    contadorFilasSalida = datosSalida.length;
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