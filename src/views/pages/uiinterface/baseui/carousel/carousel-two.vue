<template>
  <div class="row">
    <div class="col-lg-6">
      <div class="card">
        <div class="card-body card-buttons">
          <h4 class="header-title">{{ $t('Withindicators') }}</h4>
          <p class="sub-header">
            {{ $t('y...') }}
          </p>

          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
              ></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
              <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
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
                  src="@/assets/img/img-4.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
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
          <h4 class="header-title">{{ $t('Withcaptions') }}</h4>
          <p class="sub-header">
            {{ $t('a.') }}
            <code>.carousel-caption</code> {{ $t('elementwithinany') }} <code>.carousel-item</code>.
          </p>

          <div id="carouselExampleCaption" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img src="@/assets/img/img-1.jpg" alt="..." class="d-block img-fluid" />
                <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-white">{{ $t('Firstslidelabel') }}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/img-2.jpg" alt="..." class="d-block img-fluid" />
                <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-white">{{ $t('Secondslidelabel') }}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/img/img-3.jpg" alt="..." class="d-block img-fluid" />
                <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-white">{{ $t('Thirdslidelabel') }}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaption"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaption"
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
