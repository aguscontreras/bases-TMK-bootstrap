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
                <div class="col-2 text-center align-self-end">
                    <h2 class="my-1">Separadores</h2>
                    <h5>Texto entre columnas</h5>
                </div>
                <div class="col-4 text-center align-self-end">
                    <h2 class="my-1">Ingreso de datos</h2>
                    <h5>Columnas a unir</h5>
                </div>
                <div class="col-4 text-center align-self-end">
                    <h2 class="my-1">Resultado</h2>
                    <h5>Columnas concatenadas</h5>
                </div>
            </div>
            <div class="row cuerpo justify-content-center">
                <div class="col-2">
                    <div class="row h-100">
                        <div class="col-12 d-flex flex-column justify-content-around align-items-center h-100">
                            <input type="text" id="separador1" class="form-control input-text my-2" placeholder="Separador 1">
                            <input type="text" id="separador2" class="form-control input-text my-2" placeholder="Separador 2">
                            <input type="text" id="separador3" class="form-control input-text my-2" placeholder="Separador 3">
                            <input type="text" id="separador4" class="form-control input-text my-2" placeholder="Separador 4">
                            <input type="text" id="separador5" class="form-control input-text my-2" placeholder="Separador 5">
                            <input type="text" id="separador6" class="form-control input-text my-2" placeholder="Separador 6">
                            <input type="text" id="separador7" class="form-control input-text my-2" placeholder="Separador 7">
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="textarea">
                        <textarea name="entrada" class="p-3" id="entrada"></textarea>
                        <div class="contador text-center">
                            <span>Filas: 0</span>
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
                    <button class="btn btn-primary procesar position-relative" id="botonProcesar" onclick="concatenarM();">
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
        colorEnlace(3);
    });
</script>

<!-- Scripts de cada seccion -->
<script src="../js/concatenarmult.js"></script>

<?php include '../includes/footer.php' ?>