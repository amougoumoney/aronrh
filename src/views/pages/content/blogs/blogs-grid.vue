<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { ref } from "vue";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";

export default {
  data() {
    return {
      title: "Blogs",
      text: "Content",
      text1: "Blogs",
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>

<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="mb-2">
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add_blog"
              class="btn btn-primary d-flex align-items-center"><i class="ti ti-circle-plus me-2"></i>Add Blog</a>
          </div>
          <div class="ms-2 head-icons">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- /Breadcrumb -->

      <div class="card">
        <div class="card-body p-3">
          <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <h5>Blogs</h5>
            <div class="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div class="me-3">
                <div class="input-icon-end position-relative">
                  <input type="text" class="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy"
                    ref="dateRangeInput" />
                  <span class="input-icon-addon">
                    <i class="ti ti-chevron-down"></i>
                  </span>
                </div>
              </div>
              <div class="dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown">
                  Sort By : Last 7 Days
                </a>
                <ul class="dropdown-menu dropdown-menu-end p-3">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-01.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Evlovution</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-02.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Gertrude Bowie</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">The Evolution of ARONHR:
                    Manual to Digital</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">3000</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">454</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">102</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">350</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-02.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Guide</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-03.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Edward Marcus</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">ARONHR Implementation:
                    Step-by-Step Guide</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">2458</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">524</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">248</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">450</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-03.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Security</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-05.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Mark Phillips</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">
                    Data Security in ARONHR: What Matters</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">3000</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">454</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">102</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">350</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-04.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Recruitment</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-04.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Nidia Hale</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">
                    Improving Recruitment with ARONHR</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">3200</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">424</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">402</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">250</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-05.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Implementation</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-06.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Rebecca Dale</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">
                    Impact of ARONHR on Company Culture</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">2200</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">224</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">122</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">450</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-06.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Benefits</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-08.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Jimmy Johnson</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">Key Benefits of
                    Implementing ARONHR</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">2800</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">284</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">182</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">680</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-07.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Management</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-07.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Stanley Pierre</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">Why Your Company Needs a
                    ARONHR</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">4800</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">484</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">490</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">850</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-08.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Management</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-10.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />Alice Garcia</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">Scaling Your HR
                    Operations with ARONHR</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">3000</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">454</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">102</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">350</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="img-sec w-100 position-relative mb-3">
                <router-link to="/blog/blog-categories"><img src="@/assets/img/blogs/blog-09.jpg"
                    class="img-fluid rounded w-100" alt="img" /></router-link>
                <div class="">
                  <router-link to="/blog/blog-categories"
                    class="trend-tag badge bg-info-transparent fs-10 fw-medium">Management</router-link>
                  <span class="badge badge-success dot-icon"><i class="ti ti-point-filled"></i> Active</span>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div class="d-flex align-items-center">
                  <span class="me-2 d-flex align-items-center"><i class="ti ti-calendar me-1"></i> 05 Oct 2024</span>
                  <a href="javascript:void(0);"
                    class="border-start link-default fs-14 fw-normal ps-2 me-2 text-truncate"><img
                      src="@/assets/img/users/user-09.jpg" class="avatar avatar-xs rounded-circle me-2 flex-shrink-0"
                      alt="Img" />James Currier</a>
                </div>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-default me-2" data-bs-toggle="modal"
                    data-bs-target="#edit_blog"><i class="ti ti-edit"></i></a>
                  <a href="javascript:void(0);" class="link-default" data-bs-toggle="modal"
                    data-bs-target="#delete_modal"><i class="ti ti-trash"></i></a>
                </div>
              </div>
              <div class="border-bottom mb-3">
                <h5 class="mb-3">
                  <router-link to="/blog/blog-categories" class="fs-16 fw-medium text-truncate">How ARONHR Drives
                    Organizational Success</router-link>
                </h5>
              </div>
              <div class="d-flex align-items-center justify-content-between text-center">
                <div class="me-3">
                  <h6 class="fs-14 fw-medium">4000</h6>
                  <span class="fs-12 fw-normal">Likes</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">554</h6>
                  <span class="fs-12 fw-normal">Comments</span>
                </div>
                <div class="border-start text-gray ps-3 me-3">
                  <h6 class="fs-14 fw-medium">202</h6>
                  <span class="fs-12 fw-normal">Share</span>
                </div>
                <div class="border-start text-gray ps-3">
                  <h6 class="fs-14 fw-medium">450</h6>
                  <span class="fs-12 fw-normal">Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mb-4">
        <a href="javascript:void(0);" class="btn btn-white border"><i class="ti ti-loader-3 text-primary me-2"></i>Load
          More</a>
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014 - 2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <blogs-modal></blogs-modal>
</template>
