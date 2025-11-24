<div class="row">
    <p class="fs-2 fw-bold gradient-text">EXPERIENCIA 360º</p>
</div>
<div id="viewer360" style="width: 100%; height: 600px; position: relative; cursor: grab; user-select: none; background: #fff;">
    <!-- Indicador de carga -->
    <div id="loading" style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: white;">
        <div style="width: 64px; height: 64px; border: 4px solid #e5e7eb; border-top-color: #9ca3af; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    </div>
    
    <!-- Imagen -->
    <img id="viewer360-img" 
        src="" 
        alt="Vista 360" 
        draggable="false"
        style="width: 100%; height: 100%; object-fit: contain; opacity: 0; transition: opacity 0.3s;">
</div>