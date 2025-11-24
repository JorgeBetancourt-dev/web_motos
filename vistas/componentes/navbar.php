<nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php">
        <img src="vistas/assets/img/logoHero.png" alt="Hero">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.php">INICIO</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            MODELOS
          </a>
          <div class="dropdown-menu dropdown-menu-modelos p-0">
            <div class="row g-0">
              <!-- Columna izquierda: Categorías -->
              <div class="col-6 bg-light border-end">
                <div class="categoria-item" data-categoria="trabajo">
                  <h6 class="mb-0">TRABAJO</h6>
                </div>
                <div class="categoria-item" data-categoria="urbanas">
                  <h6 class="mb-0">URBANAS</h6>
                </div>
                <div class="categoria-item" data-categoria="doble-proposito">
                  <h6 class="mb-0">DOBLE PROPÓSITO</h6>
                </div>
              </div>
              
              <!-- Columna derecha: Modelos -->
              <div class="col-6">
                <!-- Modelos de TRABAJO -->
                <div class="modelos-grupo" id="trabajo">
                  <a class="dropdown-item" href="#">ECO DELUXE</a>
                  <a class="dropdown-item" href="#">ECO </a>
                </div>
                
                <!-- Modelos de URBANAS -->
                <div class="modelos-grupo" id="urbanas" style="display: none;">
                  <a class="dropdown-item" href="hunk125R.php">HUNK 125R</a>
                  <a class="dropdown-item" href="hunk150.php">HUNK 150</a>
                  <a class="dropdown-item" href="hunk160R.php">HUNK 160R</a>
                </div>
                
                <!-- Modelos de DOBLE PROPÓSITO -->
                <div class="modelos-grupo" id="doble-proposito" style="display: none;">
                  <a class="dropdown-item" href="xpulse.php">XPULSE</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
