/* VARIABLES */

//Campos de entrada y salida

let textareaEntrada = document.querySelector('#entrada'),
    textareaSalida = document.querySelector('#salida');

//Datos de entrada y salida (se inician vacios, se van creciendo al ingresarse datos)

let datosEntrada, datosSalida = [];

//Contadores de datos (debajo de los textareas) y tiempo total

let contadorTiempo, contadorEntrada, contadorSalida;

//Contenedores para insertar los contaores en su lugar

let spanContadorEntrada,
    spanContadorSalida = `<span>Filas: ${contadorSalida}</span>`;

let divContador = document.querySelectorAll('.contador');


/* FUNCIONES */

// Actualiza los datos al ingresar texto en los textareas y arma el contador de entrada

textareaEntrada.oninput = function () {
    datosEntrada = textareaEntrada.value.split('\n');
    setTimeout(() => {
        contadorEntrada = 0;
        if (datosEntrada.slice(-1) == "") {
            datosEntrada.pop();
        }
        contadorEntrada = datosEntrada.length;
        spanContadorEntrada = `<span>Filas: ${contadorEntrada}</span>`;
        divContador[0].innerHTML = spanContadorEntrada;
    }, 100);
}

// Arma las columnas

let col_id = [],
    col_cuit = [],
    col_denominacion = [],
    col_estado = [],
    col_fijoContactado = [],
    col_celContactado = [],
    col_base = [];

function armarColumnas() {
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
}

// Normalizar los numeros de telefono
function procesarDatos(a) {

    /* LIMPIA NUMEROS Y QUITA EL PRIMER CERO EN CASO QUE EL TELEFONO COMIENCE CON DOS CEROS*/

    //let limpiarCaracteres = /\D/g;

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

    // Actualiza el contador de salida

    contadorSalida = datosSalida.length;
    spanContadorSalida = `<span>Filas: ${contadorSalida}</span>`;
    divContador[1].innerHTML = spanContadorSalida;

    // Copiado automatico del resultado

    setTimeout(() => {
        if (copiarResultado) {
            textareaSalida.select();
            document.execCommand('copy');
            alert('Resultado copiado');
        }
    }, 300);
    
}

function armarIVR() {
    armarColumnas();
    procesarDatos(col_fijoContactado);
    procesarDatos(col_celContactado);
    imprimirDatos();
};

function imprimePrueba(e) {
    console.table(e);
};