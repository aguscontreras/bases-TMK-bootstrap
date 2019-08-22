let columnaUnica = new Array();

function concatenarM() {

    let separadores = [
        [document.querySelector('#separador1').value],
        [document.querySelector('#separador2').value],
        [document.querySelector('#separador3').value],
        [document.querySelector('#separador4').value],
        [document.querySelector('#separador5').value],
        [document.querySelector('#separador6').value],
        [document.querySelector('#separador7').value]
    ];

    armarColumnasGlobal();

    // Coloca las columnas con los separadores en sus posiciones

    /*
        Dentro del array se colocan los separadores en orden: un separador, y una columna, y así.
        El array COLUMNAS es el que retorna la funcion armarColumnasGlobal();
    */

    for (let i = 0; i < separadores.length; i++) {
        columnaUnica.push(separadores[i]);
        columnaUnica.push(columnas[i]);
    }

    // Repite el separador por toda la columna

    /*
        El primer FOR recorre todas las columnas, y el segundo todas las filas.
        En la condicion del segundo FOR se resta 1 al .lenght de las columnas porque ya tiene una fila, que es el separador ingresado
        al principio.

        El incremento es 2 ya que los separadores siempre van a terminar en indices pares del array columnaUnica.
        Luego se repite el mismo separador por todas las filas.
    */

    for (let i = 0; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[0].length - 1); j++) {
            let repetir = columnaUnica[i][0];
            columnaUnica[i].push(repetir);
        }
    }

    // Quita las columnas sobrantes

    /*
        Se quitan del array columnaUnica todos los indices con valor Undefined
    */

    columnaUnica.forEach(columna => {
        if (columna == undefined) {
            //Obtener el indice de la columna Undefined y quitarlo
            let index = columnaUnica.indexOf(columna);
            columnaUnica.splice(index, 1);
        }
    });

    // Quita las comas de los datos "crudos"

    /*
        Si los datos tienen comas, se deben sacar ya que van a interferir con el armado de las columnas y filas.
        Más adelante se usan las comas para separar en filas el array final, por ende cualquier coma intermedia
        va a producir un salto de línea no deseado.

        En este caso se recorren los índices impares del array columnaUnica.
    */

    for (let i = 1; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[0].length); j++) {
            columnaUnica[i][j] = columnaUnica[i][j].replace(/,/g, '');
        }
    }

    imprimirDatos(columnaUnica[1]);

};


function imprimirDatos(referencia) {

    // Coloca el resultado en la salida

    /*
        El array datosSalida se puede imaginar como una columna, donde en cada fila se van ingresando todas las filas
        de las columnas, concatenadas, separadas por un espacio.

        La logica del FOR es: recorrer todas las filas del array columnaUnica y colocar en el array datosSalida la fila 1 de la columna 1, espacio,
        fila 1 de la columna 2, espacio, fila 1 de la columna 3......

        El SWITCH se usa porque no sabemos cuantas columnas estamos usando. Ya que el maximo de columnas y separadores es 7,
        el máximo posible de columnas resultantes es 14.
    */

    for (let i = 0; i < columnaUnica[0].length; i++) {
        switch (columnaUnica.length) {
            case 1:
                datosSalida.push(columnaUnica[0][i])
                break;
            case 2:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i])
                break;
            case 3:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i])
                break;
            case 4:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i])
                break;
            case 5:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i])
                break;
            case 6:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i])
                break;
            case 7:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i])
                break;
            case 8:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i])
                break;
            case 9:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i] + '' + columnaUnica[8][i])
                break;
            case 10:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i] + '' + columnaUnica[8][i] + '' + columnaUnica[9][i])
                break;
            case 11:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i] + '' + columnaUnica[8][i] + '' + columnaUnica[9][i] + '' + columnaUnica[10][i])
                break;
            case 12:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i] + '' + columnaUnica[8][i] + '' + columnaUnica[9][i] + '' + columnaUnica[10][i] + '' + columnaUnica[11][i])
                break;
            case 13:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i] + '' + columnaUnica[8][i] + '' + columnaUnica[9][i] + '' + columnaUnica[10][i] + '' + columnaUnica[11][i] + '' + columnaUnica[12][i])
                break;
            case 14:
                datosSalida.push(columnaUnica[0][i] + '' + columnaUnica[1][i] + '' + columnaUnica[2][i] + '' + columnaUnica[3][i] + '' + columnaUnica[4][i] + '' + columnaUnica[5][i] + '' + columnaUnica[6][i] + '' + columnaUnica[7][i] + '' + columnaUnica[8][i] + '' + columnaUnica[9][i] + '' + columnaUnica[10][i] + '' + columnaUnica[11][i] + '' + columnaUnica[12][i] + '' + columnaUnica[13][i])
                break;
            default:
                datosSalida = undefined;
                console.log('Excede el máximo de columnas permitidas');
                break;
        };
    };

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