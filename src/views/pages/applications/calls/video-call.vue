<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>
  <div class="page-wrapper">
    <div class="content pb-4">
      <div class="d-md-flex d-block align-items-center justify-content-between mb-3">
        <breadcrumb :title="title" :text="text" :text1="text1" />
        <div class="d-flex my-xl-auto right-content align-items-center flex-wrap">
          <div class="me-2 mb-2">
            <div class="input-icon-start position-relative">
              <span class="input-icon-addon">
                <i class="ti ti-search"></i>
              </span>
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div class="mb-2">
            <a href="javascript:void(0);" class="btn btn-primary d-flex align-items-center"><i
                class="ti ti-circle-plus me-2"></i>Add
              People</a>
          </div>
          <div class="ms-2 head-icons">
            <a href="javascript:void(0);" class="" data-bs-toggle="tooltip" data-bs-placement="top"
              data-bs-original-title="Collapse" id="collapse-header" @click="toggleHeader">
              <i class="ti ti-chevrons-up"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Video -->
        <div class="col-xxl-12">
          <div class="single-video d-flex">
            <div class="join-video flex-fill">
              <img src="@/assets/img/video/video.jpg" class="img-fluid" alt="Logo" />
              <div :class="{ 'chat-active-users': true, 'show-active-users': isActive }">
                <div class="video-avatar">
                  <img src="@/assets/img/video/user-01.jpg" class="img-fluid" alt="Logo" />
                  <div class="user-name">
                    <span>Joanne Conner</span>
                  </div>
                </div>
              </div>

              <div class="record-item d-flex align-items-center">
                <div class="record-time me-2">
                  <span>40:12</span>
                </div>
                <a href="javascript:void(0);" class="video-expand btnFullscreen" @click="initFullScreen">
                  <i class="ti ti-maximize"></i>
                </a>
              </div>
              <div class="more-icon">
                <a href="javascript:void(0);" class="mic-off">
                  <i class="bx bx-microphone-off"></i>
                </a>
              </div>
              <div class="call-overlay-bottom d-flex justify-content-sm-between align-items-center flex-wrap w-100">
                <a href="javascript:void(0);" :class="{
                  'options-icon d-flex align-items-center justify-content-center guest-off rounded': true,
                  activate: isActive,
                }" @click="toggleActive">
                  <i class="ti ti-user-off"></i>
                </a>
                <div class="call-option rounded-pill d-flex justify-content-center align-items-center">
                  <a href="javascript:void(0);"
                    class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i
                      class="ti ti-microphone"></i></a>
                  <a href="javascript:void(0);"
                    class="options-icon bg-light d-flex justify-content-center align-items-center rounded me-2"><i
                      class="ti ti-video"></i></a>
                  <a href="javascript:void(0);"
                    class="call-icon bg-danger d-flex justify-content-center align-items-center rounded"><i
                      class="ti ti-phone"></i></a>
                  <a href="javascript:void(0);"
                    class="options-icon bg-light d-flex justify-content-center align-items-center rounded mx-2"><i
                      class="ti ti-volume"></i></a>
                  <a href="javascript:void(0);"
                    class="options-icon bg-light d-flex justify-content-center align-items-center rounded"><i
                      class="ti ti-device-imac-share"></i></a>
                </div>
                <a href="javascript:void(0);"
                  class="options-icon bg-light d-flex align-items-center justify-content-center rounded"
                  id="show-message" @click="toggleChat"><i class="ti ti-dots"></i></a>
              </div>
            </div>
            <div :class="['right-user-side chat-rooms', { 'open-chats': isChatOpen }]" id="chat-room">
              <div class="card slime-grp border-0 mb-0">
                <div class="card-header p-3 pb-0 border-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <h5>Chat</h5>
                    <a href="javascript:void(0);"
                      class="close_profile close_profile4 avatar avatar-sm mb-0 rounded-circle bg-danger"
                      @click="closeChat">
                      <i class="ti ti-x"></i>
                    </a>
                  </div>
                </div>
                <div class="card-body slimscroll p-3">
                  <div>
                    <perfect-scrollbar class="scroll-area-two" :settings="settings" @ps-scroll-y="scrollHanle">
                      <div class="chat-msg-blk p-0">
                        <div class="chats">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>Hi Everyone.!</h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div class="chats chats-right">
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>
                                Good Morning..! Today we have meeting about the new
                                policy.
                              </h4>
                            </div>
                            <div class="chat-profile-name text-end">
                              <h6><i class="bx bx-check-double"></i> 10:00</h6>
                            </div>
                          </div>
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                            <img src="@/assets/img/users/user-02.jpg" alt="image" />
                          </div>
                        </div>
                        <div class="chats">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>
                                Great.! This is the second new product that comes in this
                                week.
                              </h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div class="chats">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>Nice..which category it belongs to?</h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div class="chats">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>
                                Great.! This is the second new product that comes in this
                                week.
                              </h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div class="chats">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>Hi.! Good Morning all.</h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div class="chats">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>Nice..which category it belongs to?</h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                        <div class="chats chats-right">
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>
                                Good Morning..! Today we have meeting about the new
                                product.
                              </h4>
                            </div>
                            <div class="chat-profile-name text-end">
                              <h6><i class="bx bx-check-double"></i> 10:00</h6>
                            </div>
                          </div>
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 ms-2">
                            <img src="@/assets/img/users/user-02.jpg" alt="image" />
                          </div>
                        </div>
                        <div class="chats mb-0">
                          <div class="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                            <img src="@/assets/img/users/user-01.jpg" alt="image" />
                          </div>
                          <div class="chat-content flex-fill">
                            <div class="message-content">
                              <h4>
                                Great.! This is the second new product that comes in this
                                week.
                              </h4>
                            </div>
                            <div class="chat-profile-name d-flex justify-content-end">
                              <h6>10:00 AM</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </perfect-scrollbar>
                    <div class="chat-footer">
                      <form>
                        <div class="smile-col comman-icon">
                          <a href="javascript:void(0);"><i class="far fa-smile"></i></a>
                        </div>
                        <div class="attach-col comman-icon">
                          <a href="javascript:void(0);"><i class="fas fa-paperclip"></i></a>
                        </div>
                        <div class="micro-col comman-icon">
                          <a href="javascript:void(0);"><i class="bx bx-microphone"></i></a>
                        </div>
                        <input type="text" class="form-control chat_form" placeholder="Enter Message....." />
                        <div class="send-chat comman-icon">
                          <a href="javascript:void(0);" class="rounded"><i data-feather="send"></i></a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Video -->
      </div>
    </div>

    <div class="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
      <p class="mb-0">2014-2025 &copy; AronHR.</p>
      <p>
        Designed &amp; Developed By
        <a href="javascript:void(0);" class="text-primary">Dreams</a>
      </p>
    </div>
  </div>
</template>
<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import 'vue3-perfect-scrollbar/style.css';
export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      title: "Calls",
      text: "Application",
      text1: "Calls",
      isChatOpen: false,
      isActive: false,
      message: "",
      settings: {
        suppressScrollX: true,
      },
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    closeChat() {
      this.isChatOpen = false;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    scrollHanle() { },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>
