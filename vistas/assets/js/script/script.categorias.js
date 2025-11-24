document.addEventListener('DOMContentLoaded', function() {
    const categoriaItems = document.querySelectorAll('.categoria-item');
    const modelosGrupos = document.querySelectorAll('.modelos-grupo');
    const dropdownMenu = document.querySelector('.dropdown-menu-modelos'); // Selecciona el menú

    // Evitar que el dropdown se cierre al hacer click dentro de él
    if (dropdownMenu) {
        dropdownMenu.addEventListener('click', function (e) {
            e.stopPropagation();
        });
        
        // También puedes prevenir el comportamiento de hover/touch en categorías
        categoriaItems.forEach(item => {
            item.addEventListener('click', function(e) {
                // Prevenir que el click en la categoría cierre el menú si ya está activo
                e.preventDefault(); 
                
                // --- Lógica existente para cambiar el modelo ---
                // Remover clase active de todos
                categoriaItems.forEach(cat => cat.classList.remove('active'));
                
                // Agregar clase active al actual
                this.classList.add('active');
                
                // Ocultar todos los grupos de modelos
                modelosGrupos.forEach(grupo => grupo.style.display = 'none');
                
                // Mostrar el grupo correspondiente
                const categoria = this.getAttribute('data-categoria');
                document.getElementById(categoria).style.display = 'block';
                // --- Fin de la lógica existente ---
            });

            // En móviles, la lógica de cambio debe activarse en 'click' y no en 'mouseenter'
            // Si quieres mantener el 'mouseenter' en desktop, debes usar una lógica condicional,
            // pero para asegurar la permanencia en móviles, el 'click' es clave.
            // Para simplificar, la lógica de cambio debe ir en un manejador que funcione bien en ambos.
            
            // Manteniendo solo el mouseenter para desktop y adaptando la lógica de categorías:
            if (window.innerWidth >= 768) { // Asumimos 768px como punto de quiebre para desktop
                item.addEventListener('mouseenter', function() {
                    // Lógica existente de mouseenter (mantenerla solo para desktop)
                    categoriaItems.forEach(cat => cat.classList.remove('active'));
                    this.classList.add('active');
                    modelosGrupos.forEach(grupo => grupo.style.display = 'none');
                    const categoria = this.getAttribute('data-categoria');
                    document.getElementById(categoria).style.display = 'block';
                });
            }
        });
    }

    // Mostrar TRABAJO por defecto (mantener esto)
    if (categoriaItems.length > 0) {
        categoriaItems[0].classList.add('active');
    }
    
    // El script original solo tiene mouseenter, vamos a reemplazarlo por el 'click' para móviles
    // y mantener la lógica de 'mouseenter' solo para desktop (si el ancho es > 768px)
    
    categoriaItems.forEach(item => {
        // En móviles, cambiamos al hacer click para evitar el cierre
        if (window.innerWidth < 768) { 
            item.removeEventListener('mouseenter', changeCategory); // Remover listener de desktop si existía
            item.addEventListener('click', changeCategory);
        } else {
            // En desktop, usamos mouseenter (como estaba originalmente)
            item.addEventListener('mouseenter', changeCategory);
        }
    });

    // Función unificada para cambiar de categoría
    function changeCategory(e) {
        // Esto previene que el click en móvil cierre el menú
        if (e.type === 'click') {
            e.preventDefault();
            e.stopPropagation();
        }

        // Lógica de cambio de categoría
        categoriaItems.forEach(cat => cat.classList.remove('active'));
        this.classList.add('active');
        modelosGrupos.forEach(grupo => grupo.style.display = 'none');
        const categoria = this.getAttribute('data-categoria');
        document.getElementById(categoria).style.display = 'block';
    }
});