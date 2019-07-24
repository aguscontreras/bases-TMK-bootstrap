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

    // Convierte todos los datos del textarea de entrada en String (texto), y reemplaza las comas con el separador ingresado
    // Funciona asi porque al convertir de array a string se separan los indices con comas

    for (let i = 0; i < columnas.length; i++) {
        columnaUnica.push(separadores[i]);
        columnaUnica.push(columnas[i]);
    }

    for (let i = 0; i < columnaUnica.length; i += 2) {
        for (let j = 0; j < (columnas[1].length - 1); j++) {
            let repetir = columnaUnica[i][0];
            columnaUnica[i].push(repetir);
        }
    }

    imprimirDatos();
};


function imprimirDatos() {

    // Coloca el resultado en la salida

    for (let i = 0; i < columnaUnica[0].length; i++) {
        switch (columnaUnica.length) {
            case 1:
                datosSalida.push(columnaUnica[0][i])
                break;
            case 2:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i])
                break;
            case 3:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i])
                break;
            case 4:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i])
                break;
            case 5:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i])
                break;
            case 6:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i])
                break;
            case 7:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i])
                break;
            case 8:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i])
                break;
            case 9:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i])
                break;
            case 10:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i] + ' ' + columnaUnica[9][i])
                break;
            case 11:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i] + ' ' + columnaUnica[9][i] + ' ' + columnaUnica[10][i])
                break;
            case 12:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i] + ' ' + columnaUnica[9][i] + ' ' + columnaUnica[10][i] + ' ' + columnaUnica[11][i])
                break;
            case 13:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i] + ' ' + columnaUnica[9][i] + ' ' + columnaUnica[10][i] + ' ' + columnaUnica[11][i] + ' ' + columnaUnica[12][i])
                break;
            case 14:
                datosSalida.push(columnaUnica[0][i] + ' ' + columnaUnica[1][i] + ' ' + columnaUnica[2][i] + ' ' + columnaUnica[3][i] + ' ' + columnaUnica[4][i] + ' ' + columnaUnica[5][i] + ' ' + columnaUnica[6][i] + ' ' + columnaUnica[7][i] + ' ' + columnaUnica[8][i] + ' ' + columnaUnica[9][i] + ' ' + columnaUnica[10][i] + ' ' + columnaUnica[11][i] + ' ' + columnaUnica[12][i] + ' ' + columnaUnica[13][i])
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
    contadorFilasSalida = columnaUnica[1].length;
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