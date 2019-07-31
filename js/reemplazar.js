function procesar() {
    inicioTiempo = new Date();
    reemplazarDatos();
    imprimirDatos();
}

// Inputs de ingreso (Texto 1)
let ing1,
    ing2,
    ing3,
    ing4,
    ing5,
    ing6;

// Inputs de reemplazo (Texto 2)
let reem1,
    reem2,
    reem3,
    reem4,
    reem5,
    reem6;

// Expresiones regulares
let regEx1,
    regEx2,
    regEx3,
    regEx4,
    regEx5,
    regEx6;


function reemplazarDatos() {

    ing1 = iParametro1.value;
    ing2 = iParametro2.value;
    ing3 = iParametro3.value;
    ing4 = iParametro4.value;
    ing5 = iParametro5.value;
    ing6 = iParametro6.value;

    reem1 = eParametro1.value;
    reem2 = eParametro2.value;
    reem3 = eParametro3.value;
    reem4 = eParametro4.value;
    reem5 = eParametro5.value;
    reem6 = eParametro6.value;

    if (ing1 == "." ||
        ing1 == "\\" ||
        ing1 == "^" ||
        ing1 == "$" ||
        ing1 == "*" ||
        ing1 == "+" ||
        ing1 == "?") {
        regEx1 = new RegExp(`\\${ing1}`, "g");
    } else {
        regEx1 = new RegExp(ing1, "g");
    };

    if (ing2 == "." ||
        ing2 == "\\" ||
        ing2 == "^" ||
        ing2 == "$" ||
        ing2 == "*" ||
        ing2 == "+" ||
        ing2 == "?") {
        regEx2 = new RegExp(`\\${ing2}`, "g");
    } else {
        regEx2 = new RegExp(ing2, "g");
    };

    if (ing3 == "." ||
        ing3 == "\\" ||
        ing3 == "^" ||
        ing3 == "$" ||
        ing3 == "*" ||
        ing3 == "+" ||
        ing3 == "?") {
        regEx3 = new RegExp(`\\${ing3}`, "g");
    } else {
        regEx3 = new RegExp(ing3, "g");
    };

    if (ing4 == "." ||
        ing4 == "\\" ||
        ing4 == "^" ||
        ing4 == "$" ||
        ing4 == "*" ||
        ing4 == "+" ||
        ing4 == "?") {
        regEx4 = new RegExp(`\\${ing4}`, "g");
    } else {
        regEx4 = new RegExp(ing4, "g");
    };

    if (ing5 == "." ||
        ing5 == "\\" ||
        ing5 == "^" ||
        ing5 == "$" ||
        ing5 == "*" ||
        ing5 == "+" ||
        ing5 == "?") {
        regEx5 = new RegExp(`\\${ing5}`, "g");
    } else {
        regEx5 = new RegExp(ing5, "g");
    };

    if (ing6 == "." ||
        ing6 == "\\" ||
        ing6 == "^" ||
        ing6 == "$" ||
        ing6 == "*" ||
        ing6 == "+" ||
        ing6 == "?") {
        regEx6 = new RegExp(`\\${ing6}`, "g");
    } else {
        regEx6 = new RegExp(ing6, "g");
    };


    for (let i = 0; i < datosEntrada.length; i++) {
        datosEntrada[i] = datosEntrada[i].replace(regEx1, reem1).replace(regEx2, reem2).replace(regEx3, reem3).replace(regEx4, reem4).replace(regEx5, reem5).replace(regEx6, reem6).replace(',', '');;
    }

};

function imprimirDatos() {

    salida.value = datosEntrada.toString().replace(/,/g, '\n');

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
    }, 800);

}