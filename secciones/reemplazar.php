<?php include 'header.php' ?>

<div class="container-fluid">
    <div class="row">

        <!-- Menu -->
        <?php include 'menu.php' ?>

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
                    <h1 class="text-uppercase">Reemplazar datos</h1>
                </div>
            </div>
            <div class="row descripcion justify-content-center">
                <div class="col-4 text-center align-self-end">
                    <h2>Ingreso de datos</h2>
                    <h5>Máximo 7 columnas</h5>
                </div>
                <div class="col-2 text-center align-self-end">
                    <h2>Parámetros</h2>
                    <h5>Datos a reemplazar</h5>
                </div>
                <div class="col-4 text-center align-self-end">
                    <h2>Resultado</h2>
                    <h5>Columnas con datos reemplazados</h5>
                </div>
            </div>
            <div class="row cuerpo justify-content-center">
                <div class="col-4">
                    <div class="textarea">
                        <textarea name="entrada" class="p-3" id="entrada"></textarea>
                        <div class="contador text-center">
                            <span>Contador</span>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row h-100 justify-content-around align-items-center contenedor-inputs">
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 1">
                        <div class="contenedor-flecha"><i class="fas fa-arrow-right"></i></div>
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 2">
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 1">
                        <div class="contenedor-flecha"><i class="fas fa-arrow-right"></i></div>
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 2">
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 1">
                        <div class="contenedor-flecha"><i class="fas fa-arrow-right"></i></div>
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 2">
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 1">
                        <div class="contenedor-flecha"><i class="fas fa-arrow-right"></i></div>
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 2">
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 1">
                        <div class="contenedor-flecha"><i class="fas fa-arrow-right"></i></div>
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 2">
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 1">
                        <div class="contenedor-flecha"><i class="fas fa-arrow-right"></i></div>
                        <input type="text" name="" id="" class="form-control input-text col-5" placeholder="Texto 2">
                    </div>
                </div>
                <div class="col-4">
                    <div class="textarea">
                        <textarea name="entrada" class="p-3" id="salida"></textarea>
                        <div class="contador text-center">
                            <span>Contador</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row footer justify-content-center align-items-center">
                <div class="col-2">
                    <button class="btn btn-primary procesar position-relative" id="botonProcesar" onclick="armarIVR();">
                        <!-- <div>Procesar</div> -->
                    </button>
                </div>
            </div>
        </main>
    </div>
</div>

<!-- Scripts de cada seccion -->
<script src="../js/reemplazar.js"></script>

<?php include 'footer.php' ?>