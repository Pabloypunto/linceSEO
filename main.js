<script>
    // Script para el menú toggle en dispositivos móviles
    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');

        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    });
</script>
