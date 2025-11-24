// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // 🔧 CONFIGURACIÓN - Cambia aquí tus imágenes
    // ============================================
    const CONFIG = {
        totalImages: 24,
        basePath: 'vistas/assets/img/hunk125R/360/',
        imagePrefix: 'hunk125Red',
        imageExtension: '.png',
        sensitivity: 15 // Sensibilidad del arrastre
    };
    // ============================================
    
    let currentImage = 1;
    let isDragging = false;
    let startX = 0;
    let loadedImages = 0;
    
    const container = document.getElementById('viewer360');
    const img = document.getElementById('viewer360-img');
    const loading = document.getElementById('loading');
    
    // Verificar que los elementos existen
    if (!container || !img || !loading) {
        console.error('❌ No se encontraron los elementos necesarios');
        console.log('container:', container);
        console.log('img:', img);
        console.log('loading:', loading);
        return;
    }
    
    console.log('✅ Elementos encontrados correctamente');
    
    // Función para construir la URL de la imagen
    function getImageUrl(index) {
        return `${CONFIG.basePath}${CONFIG.imagePrefix}(${index})${CONFIG.imageExtension}`;
    }
    
    // Actualizar imagen mostrada
    function updateImage() {
        img.src = getImageUrl(currentImage);
    }
    
    // Precargar todas las imágenes
    function preloadImages() {
        console.log('🔍 Iniciando carga de imágenes...');
        console.log('📁 Ruta base:', CONFIG.basePath);
        console.log('📸 Primera imagen:', getImageUrl(1));
        
        for (let i = 1; i <= CONFIG.totalImages; i++) {
            const preloadImg = new Image();
            preloadImg.src = getImageUrl(i);
            
            preloadImg.onload = function() {
                loadedImages++;
                console.log(`✅ Imagen ${i} cargada (${loadedImages}/${CONFIG.totalImages})`);
                
                if (loadedImages === CONFIG.totalImages) {
                    console.log('🎉 Todas las imágenes cargadas!');
                    loading.style.display = 'none';
                    img.style.opacity = '1';
                    updateImage();
                }
            };
            
            preloadImg.onerror = function() {
                console.error(`❌ Error cargando imagen ${i}:`, getImageUrl(i));
            };
        }
    }
    
    // Cambiar imagen según el movimiento
    function changeImage(deltaX) {
        if (Math.abs(deltaX) > CONFIG.sensitivity) {
            const direction = deltaX > 0 ? 1 : -1;
            currentImage += direction;
            
            // Ciclo continuo
            if (currentImage > CONFIG.totalImages) currentImage = 1;
            if (currentImage < 1) currentImage = CONFIG.totalImages;
            
            updateImage();
            return true;
        }
        return false;
    }
    
    // Eventos de mouse
    container.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
    });
    
    container.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        if (changeImage(deltaX)) {
            startX = e.clientX;
        }
    });
    
    container.addEventListener('mouseup', function() {
        isDragging = false;
    });
    
    container.addEventListener('mouseleave', function() {
        isDragging = false;
    });
    
    // Eventos táctiles (móviles)
    container.addEventListener('touchstart', function(e) {
        isDragging = true;
        startX = e.touches[0].clientX;
    });
    
    container.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.touches[0].clientX - startX;
        if (changeImage(deltaX)) {
            startX = e.touches[0].clientX;
        }
    });
    
    container.addEventListener('touchend', function() {
        isDragging = false;
    });
    
    // Inicializar
    preloadImages();
});