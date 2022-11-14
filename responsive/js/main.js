const mainSlider = new Swiper("#main-visual", {
  effect: "slide",
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: "#main-visual .btn-next",
    prevEl: "#main-visual .btn-prev",
  },
  pagination: {
    el: ".pagination",
    type: "bullets",
    clickable: true,
  },
  // mousewheel: {
  //   invert: true,
  // },
});

const introduceSlider = new Swiper("#introduce .banner", {
  slidesPerView: 1,
  //slidesPerGroup: 2,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true, //slide가 항상 가운데
  navigation: {
    nextEl: "#introduce .btn-next",
    prevEl: "#introduce .btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      centeredSlides: false,
    },
  },
});

const activitySlider = new Swiper("#activity .news", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: "#activity .btn-next",
    prevEl: "#activity .btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
    1400: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      centeredSlides: false,
    },
  },
});

const noticeSlider = new Swiper("#notice .banner", {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: "#notice .btn-next",
    prevEl: "#notice .btn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      centeredSlides: false,
    },
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      centeredSlides: false,
    },
  },
});
