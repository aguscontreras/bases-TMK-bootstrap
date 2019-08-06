let columnaUnica = new Array();

function atmPrecas() {

    let separadores = [
        ['PRECA104: '],
        [' /PRECA105: '],
        [' /PRECA111: '],
        [' /PRECA134: '],
        [' /PRECA135: '],
        [' /PRECA136: '],
    ];

    armarColumnasGlobal();

    for(let i=0; i<columnas.length; i++) {
        for(let j=0; j<columnas[i].length; j++) {
            columnas[i][j] = columnas[i][j].replace('1', 'Si').replace('0', 'No');
        }
    }

    for (let i = 0; i < columnas.length; i++) {
        columnaUnica.push(separadores[i]);
        columnaUnica.push(columnas[i]);
    }

    for (let i = 0; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[0].length - 1); j++) {
            let repetir = columnaUnica[i][0];
            columnaUnica[i].push(repetir);
        }
    }

    for (let i = 1; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[0].length); j++) {
            columnaUnica[i][j] = columnaUnica[i][j].replace(/,/g, ' ');
        }
    }

    for (let i = 0; i < columnaUnica[0].length; i++) {
        datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i] + ' ' + columnaUnica[9][i] + ' ' + columnaUnica[10][i] + ' ' + columnaUnica[11][i]);
    };

    imprimirDatos(columnaUnica[0]);

};


function atmNombreApe() {

    armarColumnasGlobal();

    for(let i=0; i<columnas.length; i++) {
        for(let j=0; j<columnas[i].length; j++) {
            columnas[i][j] = columnas[i][j].replace('S/D', '').replace(',', '');
        }
    }

    for(let i=0; i<columnas[0].length; i++) {
        datosSalida.push(columnas[0][i] + ' ' + columnas[1][i] + '\t' + columnas[2][i] + ' ' + columnas[3][i]);
    }

    imprimirDatos(datosSalida);

}

function imprimirDatos(referencia) {

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