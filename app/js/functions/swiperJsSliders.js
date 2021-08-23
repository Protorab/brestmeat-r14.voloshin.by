import Swiper from "../vendor/swiper-bundle.min";
const swiperJsSliders = () => {
  let topSwiper = new Swiper(".top-slider", {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    parallax: true,
    loop: true,
    speed: 2000,
    pagination: {
      el: ".top-slider__pagination",
      type: "bullets",
      clickable: true,
      bulletClass: "slider-pagination__bullet",
      bulletActiveClass: "slider-pagination__bullet_active",
    },
    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
    },
  });
};
export default swiperJsSliders;
