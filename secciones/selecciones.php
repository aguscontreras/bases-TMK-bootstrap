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
                    <h2 class="my-1">Proceso</h2>
                    <h5>Acción a realizar</h5>
                </div>
                <div class="col-4 text-center align-self-end">
                    <h2 class="my-1">Resultado</h2>
                    <h5>Datos procesados</h5>
                </div>
            </div>
            <div class="row cuerpo justify-content-center mb-4">
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
                            <button class="btn btn-secondary my-1 py-2" id="botonSeleccionesDir" onclick="seleccionesDir();">
                                Armar direcciones
                            </button>
                            <button class="btn btn-secondary my-1 py-2" id="botonSeleccionesFechas" onclick="seleccionesFechas();">
                                Armar fechas
                            </button>
                            <button class="btn btn-secondary my-1 py-2" id="botonSeleccionesFechas" onclick="seleccionesProvincias();">
                                Reemplazar provincias
                            </button>
                            <button class="btn btn-secondary my-1 py-2" id="botonSeleccionesFechas" onclick="seleccionesNombreApe();">
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
            <!-- Botones de procesar y reinicio -->
            <!-- <div class="row footer justify-content-center align-items-center">
                <div class="col-2">
                    <button class="btn btn-primary procesar position-relative" id="botonProcesar" onclick="procesar();">
                    </button>
                </div>
            </div> -->


            <div class="row footer justify-content-center p-3">
                <div class="col-12">
                    <h2 class="my-1">
                        Otros datos
                    </h2>
                    <h5>
                        Datos que son fijos en las bases
                    </h5>
                </div>
                <div class="col-6">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="primeraSeccion" value="20110099	201906MGTMK	M	MASTER CARD	DA	0	189.90	1">
                            <small class="form-text text-muted">Producto | MktCode | MedioPago | Marca | FormaPago | CodSegTarjeta | Precio | Cuotas </small>
                            <small class="form-text text-muted">Copiar en las columnas R hasta Y</small>
                        </div>
                    </form>
                </div>
                <div class="col-6">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="segundaSeccion" value="103	Telemercado	0">
                            <small class="form-text text-muted">Canal ID | CanalNombre | NotPurchase</small>
                            <small class="form-text text-muted">Copiar en las columnas AC hasta AE</small>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</div>

<!-- Actualizar el enlace del menu -->
<script>
    document.addEventListener("DOMContentLoaded", function(event) {
        colorEnlace(6);
    });
</script>

<!-- Scripts de cada seccion -->
<script src="../js/selecciones.js"></script>

<?php include '../includes/footer.php' ?>