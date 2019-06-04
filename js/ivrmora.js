/* VARIABLES */

//Campos de entrada y salida

let textareaEntrada = document.querySelector('#entrada'),
    textareaSalida = document.querySelector('#salida');

//Datos de entrada y salida (se inician vacios, se van creciendo al ingresarse datos)

let datosEntrada, datosSalida = [];

//Contadores de datos (debajo de los textareas) y tiempo total

let inicioTiempo, finTiempo, contadorFilasEntrada, contadorFilasSalida, contadorColumnasEntrada, contadorColumnasSalida;

//Contenedores para insertar los contaores en su lugar

let spancontadorFilasEntrada,
    spancontadorFilasSalida = `<span>Filas: ${contadorFilasSalida}</span>`;

let divContador = document.querySelectorAll('.contador');


/* VARIABLES PROPIAS DE LA SECCION */

let col_id = [],
    col_cuit = [],
    col_denominacion = [],
    col_estado = [],
    col_fijoContactado = [],
    col_celContactado = [],
    col_base = [];

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

// Llamada desde el boton Procesar
function armarIVR() {
    armarColumnasIVR();
};

// Arma las columnas
function armarColumnasIVR() {

    inicioTiempo = new Date();

    for (let i = 0; i < datosEntrada.length; i++) {
        datosEntrada[i] = datosEntrada[i].split(/\t/g);
    };

    //coloca los datos en cada columna
    for (let i = 0; i < datosEntrada.length; i++) {
        col_fijoContactado.push(datosEntrada[i][4]);
        col_celContactado.push(datosEntrada[i][5]);
        col_cuit.push(datosEntrada[i][1]);
        col_denominacion.push(datosEntrada[i][2]);
        col_base.push(datosEntrada[i][6]);
    }

    // Comprueba que estén todas las columnas
    if (datosEntrada[0].length < 7) {
        bootbox.alert("Faltan datos, se deben copiar las 7 columnas de la base original", function () {
            location.reload();
        })
    } else {
        // Si está todo lo necesario, llama a las demas funciones
        procesarDatos(col_fijoContactado);
        procesarDatos(col_celContactado);
        imprimirDatos();
    }
}


// Normalizar los numeros de telefono
function procesarDatos(a) {

    col_cuit.forEach(item => {
        item = item.replace(/\W\D/g, '');
    });

    col_denominacion.forEach(item => {
        item = item.replace(/\W\D/g, '');
    });

    col_base.forEach(item => {
        item = item.replace(/\W\D/g, '');
    });

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
    for (let j = 0; j < datosEntrada.length; j++) {
        datosSalida.push(col_fijoContactado[j] + '\t' + col_celContactado[j] + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + '\t' + col_cuit[j] + '\t' + col_denominacion[j] + '\t' + col_base[j]);
    }

    textareaSalida.value = datosSalida.toString().replace(/,/g, "\n");

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