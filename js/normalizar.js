// La funcion de normalizar se incluye en el JS de globales.js 
// porque se usa en más de una herramienta.

function normalizar() {
    armarColumnasGlobal();

    columnas.forEach(e => {
        e.forEach(i => {
            if (i !== undefined) {
                normalizarTelefonos(e);
            }
        });
    });

    imprimirDatos();
}


function imprimirDatos() {

    // Quita las columnas sobrantes
    // Se recorren las columnas buscando los valores UNDEFINED, y se crea una columna de prueba con estos valores
    // Si la columna de prueba tiene la misma cantidad de UNDEFINED que la columna en cuestion,
    // se borra del array COLUMNAS tantas veces como columnas UNDEFINED haya

    // Cuenta cuantas columnas eliminar del array COLUMNAS
    let popCols = 0;

    columnas.forEach(columna => {
        let colTest = columna.filter(contenido => contenido == undefined);
        if (colTest.length == columna.length) {
            popCols++
        };
    });

    for (let i = 0; i < popCols; i++) {
        columnas.pop();
    }

    // Junta las columnas y las ordena en el textarea de salida
/*
    for (let j = 0; j < columnas[0].length; j++) {
        for (let k = 0; k < columnas.length; k++) {
            datosSalida.push(columnas[k][j] + '\t');
        };
    };
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
    }, 200);
}