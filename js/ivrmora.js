function moraReemplazar() {

    armarColumnasGlobal();

    for (let i = 0; i < columnas.length; i++) {
        normalizarTelefonos(columnas[i]);
    };

    for (let i = 0; i < columnas.length; i++) {

        for (let j = 0; j < columnas[i].length; j++) {

            let numeroTest = columnas[i][j];
            let indiceTest = i + 1;

            for (let k = indiceTest; k < columnas.length; k++) {

                if (columnas[i][j] === columnas[k][j]) {

                    if (columnas[i][j] != '') {
                        console.warn(columnas[i][j] + " y " + columnas[k][j] + " Son iguales en C-" + (k + 1) + ', F-' + (j + 1));
                    }

                    columnas[k][j] = '';
                }
            }
        }
    }

    imprimirDatos(columnas[0]);

}


let copiarResultado = true;

function imprimirDatos(referencia) {

    // Coloca el resultado en la salida

    /*
        La logica del FOR es: recorrer todas las filas del array columnas y colocar en el array datosSalida la fila 1 de la columna 1, tab,
        fila 1 de la columna 2, tab, fila 1 de la columna 3......

        El SWITCH se usa porque no sabemos cuantas columnas estamos usando.
    */

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
                console.error('Excede el máximo de columnas permitidas');
                break;
        };
    };

    textareaSalida.value = datosSalida.toString().replace(/,/g, "\n");

    // Muestra el tiempo total
    finTiempo = new Date();

    tiempoTotal = finTiempo - inicioTiempo;

    // Actualiza el contador de salida
    contadorFilasSalida = referencia.length;
    spancontadorFilasSalida = `<span>Filas: ${contadorFilasSalida}</span> | <span>Tiempo: ${tiempoTotal}ms</span>`;
    divContador[1].innerHTML = spancontadorFilasSalida;

    // Copiado automatico del resultado
    setTimeout(() => {
        if (copiarResultado) {
            textareaSalida.select();
            document.execCommand('copy');
            mostrarPopper();
        }
    }, 200);

}

// Para probar cosas
function imprimePrueba(e) {
    console.table(e);
};