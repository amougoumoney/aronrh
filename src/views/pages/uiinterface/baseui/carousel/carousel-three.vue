<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body card-buttons">
          <h4 class="header-title">{{ $t('Crossfade') }}</h4>
          <p class="sub-header">
            {{ $t('Add') }} <code>.carousel-fade</code> {{ $t('to...') }}
          </p>

          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-1.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-2.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end col -->

    <div class="col-lg-6">
      <div class="card">
        <div class="card-body card-buttons">
          <h4 class="header-title">{{ $t('Individualinterval') }}</h4>
          <p class="sub-header">
           {{ $t(' Add') }} <code>data-bs-interval=""</code> {{ $t('toa') }} <code>.carousel-item</code> 
          {{ $t('t...') }}
          </p>

          <div
            id="carouselExampleInterval"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-2.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-3.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block img-fluid"
                  src="@/assets/img/img-4.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleInterval"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleInterval"
              role="button"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end col -->
  </div>
</template>
