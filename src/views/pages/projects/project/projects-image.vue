<template>
  <div>
    <Carousel :itemsToShow="6" :itemsToScroll="1" wrapAround>
      <template v-for="(image, index) in images" :key="index">
        <Slide>
          <div class="gallery-item" @click="openLightbox(index)">
            <img :src="imageSrc(image.src)" class="rounded" :alt="image.alt" />
            <div class="d-flex align-items-center hover-links">
              <span class="avatar avatar-md avatar-rounded">
                <i class="ti ti-maximize"></i>
              </span>
              <span class="avatar avatar-md avatar-rounded">
                <i class="ti ti-link"></i>
              </span>
              <span class="avatar avatar-md avatar-rounded">
                <i class="ti ti-trash"></i>
              </span>
            </div>
          </div>
        </Slide>
      </template>
    </Carousel>

    <!-- Easy Lightbox component -->
    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="lightboxImages"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: { Carousel, Slide, VueEasyLightbox },
  data() {
    return {
      images: [
        { src: "media-08.jpg", bigSrc: "media-big-08.jpg", alt: "Image 1" },
        { src: "media-09.jpg", bigSrc: "media-big-09.jpg", alt: "Image 2" },
        { src: "media-10.jpg", bigSrc: "media-big-10.jpg", alt: "Image 3" },
        { src: "media-11.jpg", bigSrc: "media-big-11.jpg", alt: "Image 4" },
        { src: "media-12.jpg", bigSrc: "media-big-12.jpg", alt: "Image 5" },
        { src: "media-13.jpg", bigSrc: "media-big-13.jpg", alt: "Image 6" },
        { src: "media-14.jpg", bigSrc: "media-big-14.jpg", alt: "Image 7" },
      ],
      lightboxVisible: false,
      lightboxIndex: 0,
    };
  },
  computed: {
    lightboxImages() {
      return this.images.map((image) => require(`@/assets/img/media/${image.bigSrc}`));
    },
  },
  methods: {
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxVisible = true;
    },
    imageSrc(src) {
      return require(`@/assets/img/media/${src}`);
    },
  },
};
</script>
