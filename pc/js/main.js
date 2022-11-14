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

const introduceSlider = new Swiper(".banner", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  loop: true,
  // centeredSlides: true, //slide가 항상 가운데
  navigation: {
    nextEl: "#introduce .btn-next",
    prevEl: "#introduce .btn-prev",
  },
});

const activitySlider = new Swiper(".news", {
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: "#activity .btn-next",
    prevEl: "#activity .btn-prev",
  },
});

const noticeSlider = new Swiper("#notice .banner", {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: "#notice .btn-next",
    prevEl: "#notice .btn-prev",
  },
});
