<template>

  <body class="bg-linear-gradiant">
    <div id="global-loader" style="display: none">
      <div class="page-loader"></div>
    </div>

    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="container">
        <div>
          <!-- Page Wrapper -->
          <div class="Page-wrapper">
            <div class="row justify-content-center align-items-center">
              <div class="col-md-8 d-flex justify-content-center align-items-center mx-auto">
                <div>
                  <div class="p-4 text-center">
                    <img src="@/assets/img/logo.svg" alt="logo" class="img-fluid" />
                  </div>
                  <div class="error-images">
                    <img src="@/assets/img/bg/under-maintenance.svg" alt="image" class="img-fluid" />
                  </div>
                  <div class="text-center">
                    <div>
                      <h1 class="mb-3">Under Maintenance</h1>
                      <p class="fs-16 text-center">
                        The server is in a maintenance mode, please come back later or
                        <br />
                        <a href="javascript:void(0);" class="text-primary">click here</a> to create ticket
                        if it’s urgent
                      </p>
                      <div class="d-flex justify-content-center pb-4">
                        <router-link to="/dashboard/" class="btn btn-primary d-flex align-items-center"><i
                            class="ti ti-arrow-left me-2"></i>Back to
                          Dashboard</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /Page Wrapper -->
        </div>
      </div>
    </div>
    <!-- /Main Wrapper -->
  </body>
</template>
