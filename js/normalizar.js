function normalizar () {
    armarColumnasGlobal();

    columnas.forEach(e => {
        e.forEach(i => {
            if (i!==undefined) {
                normalizarTelefonos(e);
            }
        });
    });

    //imprimirDatos();
}