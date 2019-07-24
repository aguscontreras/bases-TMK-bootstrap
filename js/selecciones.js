let columnaUnica = new Array();

function seleccionesDir() {

    // Funciona igual que el concatenar multiple pero con separadores fijos

    let separadores = [
        [''],
        [' '],
        [' / Piso: '],
        [' / Depto: '],
    ];

    armarColumnasGlobal();

    for (let i = 0; i < columnas.length; i++) {
        columnaUnica.push(separadores[i]);
        columnaUnica.push(columnas[i]);
    }

    // Repite el separador por toda la columna

    for (let i = 0; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[0].length - 1); j++) {
            let repetir = columnaUnica[i][0];
            columnaUnica[i].push(repetir);
        }
    }

    // Quita las comas de los datos "crudos"

    for (let i = 1; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[0].length); j++) {
            columnaUnica[i][j] = columnaUnica[i][j].replace(/,/g, ' ');
        }
    }

    for (let i = 0; i < columnaUnica[0].length; i++) {
        datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i])
    };

    imprimirDatos(columnaUnica[0]);

};

function seleccionesProvincias() {

    armarColumnasGlobal();

    for (let i = 0; i < columnas.length; i++) {
        for (let j = 0; j < columnas[i].length; j++) {
            columnas[i][j] = columnas[i][j].replace("01 Buenos Aires", "B");
            columnas[i][j] = columnas[i][j].replace("00 Capital Federal", "C");
            columnas[i][j] = columnas[i][j].replace("02 Catamarca", "K");
            columnas[i][j] = columnas[i][j].replace("03 Córdoba", "X");
            columnas[i][j] = columnas[i][j].replace("04 Corrientes", "W");
            columnas[i][j] = columnas[i][j].replace("06 Jujuy", "Y");
            columnas[i][j] = columnas[i][j].replace("08 La Rioja", "F");
            columnas[i][j] = columnas[i][j].replace("09 Salta", "A");
            columnas[i][j] = columnas[i][j].replace("10 San Juan", "J");
            columnas[i][j] = columnas[i][j].replace("11 San Luis", "D");
            columnas[i][j] = columnas[i][j].replace("12 Santa Fé", "S");
            columnas[i][j] = columnas[i][j].replace("13 Santiago del Estero", "G");
            columnas[i][j] = columnas[i][j].replace("14 Tucumán", "T");
            columnas[i][j] = columnas[i][j].replace("19 Misiones", "N");
            columnas[i][j] = columnas[i][j].replace("21 La Pampa", "L");
            columnas[i][j] = columnas[i][j].replace("23 Santa Cruz", "Z");
            columnas[i][j] = columnas[i][j].replace("24 Tierra de Fuego", "V");
            columnas[i][j] = columnas[i][j].replace("05 Entre Rios", "ENTRERIOOOOOSSSS");
        }
    }

    datosSalida = columnas;

    imprimirDatos(columnas[0]);

}


function imprimirDatos(referencia) {

    // Coloca el resultado en la salida
    // Se inserta un parametro para poder hacerla compatible con distintas funciones

    textareaSalida.value = datosSalida.toString().replace(/,/g, '\n');

    // Muestra el tiempo total
    finTiempo = new Date();

    tiempoTotal = finTiempo - inicioTiempo;

    // Actualiza el contador de salida
    contadorFilasSalida = referencia.length;
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