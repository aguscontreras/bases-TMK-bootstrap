<!-- Globales -->

<script src="../js/globales.js"></script>

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
    var popup = $('#popup');

    window.onload = function() {
        var popupIcono = document.createElement('I');

        popupIcono.classList.add('fas');
        popupIcono.classList.add('fa-info-circle');

        var popupSpan = document.createElement('SPAN');
        var popupTexto = document.createTextNode(' Resultado copiado al portapapeles');
        
        var popup = document.getElementById('popup');
        popupSpan.appendChild(popupTexto);
        popup.appendChild(popupIcono);
        popup.appendChild(popupSpan);
    }

    var ref = $('#contadorSalida');
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