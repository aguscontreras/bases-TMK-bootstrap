<!-- Dependencias -->
<script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/bootstrap.js"></script>
    <script src="../js/popper.js"></script>
    <script src="../js/bootbox.all.min.js"></script>
    <script src="../js/bootbox.locales.min.js"></script>

    <!-- Comportamiento general -->
    <script src="../js/ui-control.js"></script>

    <!-- Popper -->
    <script>

    var ref = $('#contadorSalida');
    var popup = $('#popup');
    popup.hide();

    function mostrarPopper() {
        popup.show();
        var popper = new Popper(ref, popup, {
            placement: 'bottom'
        })
    }

    </script>
</body>
</html>