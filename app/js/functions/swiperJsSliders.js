import Swiper from "../vendor/swiper-bundle.min";
const swiperJsSliders = () => {
  let topSwiper = new Swiper(".top-slider", {
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
    parallax: true,
    loop: true,
    speed: 2500,
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
  let noveltySlider = new Swiper(".novelty-slider", {
    slidesPerView: "auto",
    spaceBetween: 45,
    speed: 1200,
    navigation: {
      nextEl: ".novelty-slider__next",
      prevEl: ".novelty-slider__prev",
    },

    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: 1,
      },
      640: {
        spaceBetween: 20,
        slidesPerView: "auto",
      },
      1024: {
        spaceBetween: 30,
      },
      1280: {
        spaceBetween: 45,
      },
    },
    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
  let brandsSlider = new Swiper(".brands-slider", {
    slidesPerView: 4,
    spaceBetween: 65,
    speed: 1200,
    navigation: {
      nextEl: ".brands-slider__next",
      prevEl: ".brands-slider__prev",
    },

    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerColumn: 2,
      },
      640: {
        spaceBetween: 20,
      },
      1024: {
        spaceBetween: 45,
      },
      1280: {
        spaceBetween: 65,
      },
    },
    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
};
export default swiperJsSliders;
