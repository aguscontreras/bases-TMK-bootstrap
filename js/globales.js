// Este archivo tiene las funciones comunes a todas las secciones,
// para cargar siempre el mismo archivo desde el footer.

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

function normalizarTelefonos(columna) {

    // DEJA SOLAMENTE LOS NUMEROS
    for (let j = 0; j < columna.length; j++) {
        columna[j] = columna[j].replace(/\W\D/g, '');
    }

    // AGREGA UN 0 A LOS NUMEROS VACIOS (para evitar que se cancele la funcion)
    for (let j = 0; j < columna.length; j++) {
        if (columna[j] == '') {
            columna[j] = '0';
        };
    };

    /* LIMPIA NUMEROS Y QUITA EL PRIMER CERO EN CASO QUE EL TELEFONO COMIENCE CON DOS CEROS*/
    for (let j = 0; j < columna.length; j++) {
        columna[j] = columna[j].replace(/\D/g, '');
        if (columna[j] != undefined && columna[j].startsWith("00")) {
            columna[j] = columna[j].substr(1);
        };
    };

    /* PARA QUITAR TODOS LOS CARACTERES QUE NO SEAN NUMEROS Y AGREGAR 0 INICIAL */
    for (let j = 0; j < columna.length; j++) {
        if (columna[j][0] != "0") {
            columna[j] = "0" + columna[j];
        }
    };

    /* QUITA LA CARACTERISTICA DE CORDOBA 0351 */
    for (let j = 0; j < columna.length; j++) {
        if (columna[j].startsWith("0351")) {
            columna[j] = columna[j].replace("0351", "");
        };
    };

    /* ACOMODA LOS 015 INICALES */
    for (let j = 0; j < columna.length; j++) {
        if (columna[j].substr(0, 3) == "015") {
            columna[j] = columna[j].substr(1);
        };
    };

    /* ACOMODA LOS QUE COMIENZAN CON 04 Y DEJA SOLO 4 */
    for (let j = 0; j < columna.length; j++) {
        if (columna[j].substr(0, 2) == "04") {
            columna[j] = columna[j].substr(1);
        };
    };

    /* AGREGA UN 15 PARA LOS NUMEROS QUE NO COMIENCEN CON 4 Y 15 */
    for (let j = 0; j < columna.length; j++) {
        if (columna[j][0] != "4" && columna[j][0] != "1" && columna[j][0] != "0") {
            columna[j] = "15" + columna[j];
        };
    };

    /* QUITA LOS DATOS QUE SEAN UN SOLO 0 */
    for (let j = 0; j < columna.length; j++) {
        if (columna[j].length < 2) {
            columna[j] = "";
        };
    };
};


// Para probar cosas
function imprimePrueba(e) {
    console.table(e);
};