/* VARIABLES */

//Campos de entrada y salida

let textareaEntrada = document.querySelector('#entrada'),
    textareaSalida = document.querySelector('#salida');

//Datos de entrada y salida (se inician vacios, se van creciendo al ingresarse datos)

let datosEntrada, 
    datosSalida = [];

// Columnas
let col_1 = [], 
    col_2 = [], 
    col_3 = [], 
    col_4 = [], 
    col_5 = [], 
    col_6 = [], 
    col_7 = [];
let columnas = new Array (col_1, col_2, col_3, col_4, col_5, col_6, col_7);

//Contadores de datos (debajo de los textareas) y tiempo total

let inicioTiempo,
    finTiempo,
    contadorFilasEntrada,
    contadorFilasSalida,
    contadorColumnasEntrada,
    contadorColumnasSalida;

//Contenedores para insertar los contaores en su lugar

let spancontadorFilasEntrada,
    spancontadorFilasSalida = `<span>Filas: ${contadorFilasSalida}</span>`;

let divContador = document.querySelectorAll('.contador');


/* FUNCIONES */

// Actualiza los datos al ingresar texto en los textareas y arma el contador de entrada
textareaEntrada.oninput = function () {
    datosEntrada = textareaEntrada.value.split('\n');
    setTimeout(() => {
        contadorFilasEntrada = 0;
        if (datosEntrada.slice(-1) == "") {
            datosEntrada.pop();
        }
        contadorFilasEntrada = datosEntrada.length;
        spancontadorFilasEntrada = `<span>Filas: ${contadorFilasEntrada}</span>`;
        divContador[0].innerHTML = spancontadorFilasEntrada;
    }, 100);
}

//Separa el input en columnas

function armarColumnasGlobal() {

    inicioTiempo = new Date();

    for (let i = 0; i < datosEntrada.length; i++) {
        datosEntrada[i] = datosEntrada[i].split(/\t/g);
    };

    // Comprueba que estén todas las columnas
    if (datosEntrada[0].length > 7) {
        bootbox.alert("El máximo permitido es de 7 columnas", function () {
            location.reload();
        })
    } else {
        //coloca los datos en cada columna
        for (let i = 0; i < datosEntrada.length; i++) {
                col_1.push(datosEntrada[i][0]);
                col_2.push(datosEntrada[i][1]);
                col_3.push(datosEntrada[i][2]);
                col_4.push(datosEntrada[i][3]);
                col_5.push(datosEntrada[i][4]);
                col_6.push(datosEntrada[i][5]);
                col_7.push(datosEntrada[i][6]);
        }
    }
}

function normalizarTelefonos(a) {

    // DEJA SOLAMENTE LOS NUMEROS
    for (let j = 0; j < a.length; j++) {
        a[j] = a[j].replace(/\W\D/g, '');
    }

    // AGREGA UN 0 A LOS NUMEROS VACIOS (para evitar que se cancele la funcion)
    for (let j = 0; j < a.length; j++) {
        if (a[j] == '') {
            a[j] = '0';
        };
    };

    /* LIMPIA NUMEROS Y QUITA EL PRIMER CERO EN CASO QUE EL TELEFONO COMIENCE CON DOS CEROS*/
    for (let j = 0; j < a.length; j++) {
        a[j] = a[j].replace(/\D/g, '');
        if (a[j] != undefined && a[j].startsWith("00")) {
            a[j] = a[j].substr(1);
        };
    };

    /* PARA QUITAR TODOS LOS CARACTERES QUE NO SEAN NUMEROS Y AGREGAR 0 INICIAL */
    for (let j = 0; j < a.length; j++) {
        if (a[j][0] != "0") {
            a[j] = "0" + a[j];
        }
    };

    /* QUITA LA CARACTERISTICA DE CORDOBA 0351 */
    for (let j = 0; j < a.length; j++) {
        if (a[j].startsWith("0351")) {
            a[j] = a[j].replace("0351", "");
        };
    };

    /* ACOMODA LOS 015 INICALES */
    for (let j = 0; j < a.length; j++) {
        if (a[j].substr(0, 3) == "015") {
            a[j] = a[j].substr(1);
        };
    };

    /* ACOMODA LOS QUE COMIENZAN CON 04 Y DEJA SOLO 4 */
    for (let j = 0; j < a.length; j++) {
        if (a[j].substr(0, 2) == "04") {
            a[j] = a[j].substr(1);
        };
    };

    /* AGREGA UN 15 PARA LOS NUMEROS QUE NO COMIENCEN CON 4 Y 15 */
    for (let j = 0; j < a.length; j++) {
        if (a[j][0] != "4" && a[j][0] != "1" && a[j][0] != "0") {
            a[j] = "15" + a[j];
        };
    };

    /* QUITA LOS DATOS QUE SEAN UN SOLO 0 */
    for (let j = 0; j < a.length; j++) {
        if (a[j].length < 2) {
            a[j] = "";
        };
    };

};

let copiarResultado = true;

function imprimirDatos() {

    // Junta las columnas y las ordena en el textarea de salida
    for (let j = 0; j < columnas.length; j++) {
        for (let k = 0; k < columnas[0].length; k++) {
            datosSalida.push(columnas[j][k] + '\t');
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