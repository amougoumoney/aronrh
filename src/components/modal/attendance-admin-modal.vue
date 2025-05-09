<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Modal } from 'bootstrap';



const router = useRouter();
const currentDate = ref(new Date());
const dateFormat = "dd-MM-yyyy";
const Status = ["Present", "Absent"];


// Données du formulaire
const formData = ref({
  date: currentDate.value,
  checkIn: "09:00 AM",
  checkOut: "06:45 PM",
  breakTime: "30 Min",
  lateTime: "32 Min",
  productionHours: "8.55 Hrs",
  status: "Present"
});


// Contrôle de l'affichage
const isEditMode = ref(false);
const modalTitle = computed(() => isEditMode.value ? "Edit Attendance" : "View Attendance");

// Méthodes
const show = (editMode = false, attendanceData = null) => {
  isEditMode.value = editMode;
  
  if (editMode && attendanceData) {
    formData.value = { ...attendanceData };
  } else {
    resetForm();
  }
  
  // Afficher la modale
  const modal = new Modal(document.getElementById('attendanceModal'));
  modal.show();
};

const resetForm = () => {
  formData.value = {
    date: currentDate.value,
    checkIn: "09:00 AM",
    checkOut: "06:45 PM",
    breakTime: "30 Min",
    lateTime: "32 Min",
    productionHours: "8.55 Hrs",
    status: "Present"
  };
};

const submitForm = () => {
  // Ici, ajoutez la logique pour sauvegarder les données
  router.push("/attendance/attendance-admin");
};

// Exposer la méthode show au parent
defineExpose({ show });


</script>

<template>
  <!-- Modal unique pour édition/visualisation -->
  <div class="modal fade" id="attendanceModal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">{{ modalTitle }}</h4>
          <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="modal" aria-label="Close">
            <i class="ti ti-x"></i>
          </button>
        </div>
        
        <form @submit.prevent="submitForm" v-if="isEditMode">
          <div class="modal-body pb-0">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Date</label>
                  <div class="input-icon position-relative w-100 me-2">
                    <date-picker
                      v-model="formData.date"
                      class="form-control datetimepicker ps-3"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Check In</label>
                  <div class="input-icon position-relative w-100">
                    <input
                      type="text"
                      class="form-control timepicker ps-3"
                      v-model="formData.checkIn"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock-hour-3"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Check Out</label>
                  <div class="input-icon position-relative w-100">
                    <input
                      type="text"
                      class="form-control timepicker ps-3"
                      v-model="formData.checkOut"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock-hour-3"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Break</label>
                  <input type="text" class="form-control" v-model="formData.breakTime" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Late</label>
                  <input type="text" class="form-control" v-model="formData.lateTime" />
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Production Hours</label>
                  <div class="input-icon position-relative w-100">
                    <input
                      type="text"
                      class="form-control timepicker ps-3"
                      v-model="formData.productionHours"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock-hour-3"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <select v-model="formData.status" class="form-control">
                    <option v-for="status in Status" :key="status" :value="status">
                      {{ status }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>

        <!-- Vue rapport seulement -->
        <div class="modal-body" v-else>
          <div class="card shadow-none bg-transparent-light">
            <div class="card-body pb-1">
              <div class="row align-items-center">
                <div class="col-lg-4">
                  <div class="d-flex align-items-center mb-3">
                    <span class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2">
                      <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                    </span>
                    <div>
                      <h6 class="fw-medium">Anthony Lewis</h6>
                      <span>UI/UX Team</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="mb-3 text-sm-end">
                        <span>Date</span>
                        <p class="text-gray-9 fw-medium">{{ formData.date.toLocaleDateString() }}</p>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="mb-3 text-sm-end">
                        <span>Punch in at</span>
                        <p class="text-gray-9 fw-medium">{{ formData.checkIn }}</p>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="mb-3 text-sm-end">
                        <span>Punch out at</span>
                        <p class="text-gray-9 fw-medium">{{ formData.checkOut }}</p>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="mb-3 text-sm-end">
                        <span>Status</span>
                        <p class="text-gray-9 fw-medium">{{ formData.status }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card shadow-none border mb-0">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3">
                  <div class="mb-4">
                    <p class="d-flex align-items-center mb-1">
                      <i class="ti ti-point-filled text-dark-transparent me-1"></i>Total Working hours
                    </p>
                    <h3>12h 36m</h3>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="mb-4">
                    <p class="d-flex align-items-center mb-1">
                      <i class="ti ti-point-filled text-success me-1"></i>Productive Hours
                    </p>
                    <h3>08h 36m</h3>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="mb-4">
                    <p class="d-flex align-items-center mb-1">
                      <i class="ti ti-point-filled text-warning me-1"></i>Break hours
                    </p>
                    <h3>22m 15s</h3>
                  </div>
                </div>
                <div class="col-xl-3">
                  <div class="mb-4">
                    <p class="d-flex align-items-center mb-1">
                      <i class="ti ti-point-filled text-info me-1"></i>Overtime
                    </p>
                    <h3>02h 15m</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8 mx-auto">
                  <div class="progress bg-transparent-dark mb-3" style="height: 24px">
                    <div class="progress-bar bg-success rounded me-2" style="width: 18%"></div>
                    <div class="progress-bar bg-warning rounded me-2" style="width: 5%"></div>
                    <div class="progress-bar bg-success rounded me-2" style="width: 28%"></div>
                    <div class="progress-bar bg-warning rounded me-2" style="width: 17%"></div>
                    <div class="progress-bar bg-success rounded me-2" style="width: 22%"></div>
                    <div class="progress-bar bg-warning rounded me-2" style="width: 5%"></div>
                    <div class="progress-bar bg-info rounded me-2" style="width: 3%"></div>
                    <div class="progress-bar bg-info rounded" style="width: 2%"></div>
                  </div>
                </div>
                <div class="co-md-12">
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="fs-10">06:00</span>
                    <span class="fs-10">07:00</span>
                    <span class="fs-10">08:00</span>
                    <span class="fs-10">09:00</span>
                    <span class="fs-10">10:00</span>
                    <span class="fs-10">11:00</span>
                    <span class="fs-10">12:00</span>
                    <span class="fs-10">01:00</span>
                    <span class="fs-10">02:00</span>
                    <span class="fs-10">03:00</span>
                    <span class="fs-10">04:00</span>
                    <span class="fs-10">05:00</span>
                    <span class="fs-10">06:00</span>
                    <span class="fs-10">07:00</span>
                    <span class="fs-10">08:00</span>
                    <span class="fs-10">09:00</span>
                    <span class="fs-10">10:00</span>
                    <span class="fs-10">11:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>