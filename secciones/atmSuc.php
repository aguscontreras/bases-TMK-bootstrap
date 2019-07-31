<?php include '../includes/header.php' ?>

<div class="container-fluid">
    <div class="row">

        <!-- Menu -->
        <?php include '../includes/menu.php' ?>

        <!-- Instrucciones de cada seccion -->
        <aside class="col-2 px-5 instrucciones position-fixed">
            <h3>
                Instrucciones
            </h3>
            <ol>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque, magnam quas at dolorem
                    explicabo debitis reiciendis ullam repudiandae</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est, nihil earum aperiam vero
                    cupiditate eaque perferendis.</li>
            </ol>
        </aside>

        <!-- Seccion principal -->
        <main class="col-10 main">
            <div class="row titulo">
                <div class="container-fluid text-center titulo">
                    <h1 class="text-uppercase">concatenar columnas</h1>
                </div>
            </div>
            <div class="row descripcion justify-content-center">
                <div class="col-4 text-center align-self-end">
                    <h2 class="my-1">Ingreso de datos</h2>
                    <h5>Datos a procesar</h5>
                </div>
                <div class="col-2 text-center align-self-end">
                    <h2 class="my-1">Operaciones</h2>
                    <h5>Texto entre columnas</h5>
                </div>
                <div class="col-4 text-center align-self-end">
                    <h2 class="my-1">Resultado</h2>
                    <h5>Datos procesados</h5>
                </div>
            </div>
            <div class="row cuerpo justify-content-center">
                <div class="col-4">
                    <div class="textarea">
                        <textarea name="entrada" class="p-3" id="entrada"></textarea>
                        <div class="contador text-center">
                            <span>Filas: 0</span>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row align-items-center justify-content-center h-100">
                        <div class="col-12">
                            <button class="btn btn-secondary my-1 py-2" id="botonSeleccionesDir" onclick="atmPrecas();">
                                Armar precas
                            </button>
                            <button class="btn btn-secondary my-1 py-2" id="botonSeleccionesFechas" onclick="atmNombreApe();">
                                Concatenar nom/ape
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="textarea">
                        <div id="popup">
                            <!-- popup -->
                        </div>
                        <textarea name="salida" class="p-3" id="salida"></textarea>
                        <div class="contador text-center" id="contadorSalida">
                            <span>Filas: 0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer justify-content-center align-items-center">
                <div class="col-2">
                    <button class="btn btn-primary procesar position-relative" id="botonProcesar" onclick="seleccionesTodo();">
                        <!-- <div>Procesar</div> -->
                    </button>
                </div>
            </div>
        </main>
    </div>
</div>

<!-- Actualizar el enlace del menu -->
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        colorEnlace(5);
    });
</script>

<!-- Scripts de cada seccion -->
<script src="../js/atmSuc.js"></script>

<?php include '../includes/footer.php' ?>