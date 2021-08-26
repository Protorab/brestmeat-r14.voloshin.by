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
    loop: true,
    autoplay: {
      delay: 3500,
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
    resizeObserver: true,
    lazy: true,
    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
  let brandsSlider = new Swiper(".brands-slider", {
    slidesPerView: 4,
    spaceBetween: 35,
    speed: 1200,
    navigation: {
      nextEl: ".brands-slider__next",
      prevEl: ".brands-slider__prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        grid: {
          rows: 2,
        },
      },
      640: {
        spaceBetween: 20,
        slidesPerView: 4,

        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 45,
      },
      1280: {
        spaceBetween: 65,
      },
    },
    resizeObserver: true,

    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
  let recipeSlider = new Swiper(".recipe-slider", {
    slidesPerView: 4,
    spaceBetween: 65,
    speed: 1200,
    loop: true,
    autoplay: {
      delay: 3500,
    },
    navigation: {
      nextEl: ".recipe-slider__next",
      prevEl: ".recipe-slider__prev",
    },

    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: 1,
      },
      640: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
      1024: {
        spaceBetween: 45,
        slidesPerView: 3,
      },
      1280: {
        spaceBetween: 65,
        slidesPerView: 4,
      },
    },
    resizeObserver: true,
    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
  let reviewsSlider = new Swiper(".reviews-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    speed: 1200,
    navigation: {
      nextEl: ".reviews-slider__next",
      prevEl: ".reviews-slider__prev",
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
        spaceBetween: 25,
      },
      1280: {
        spaceBetween: 30,
      },
    },
    resizeObserver: true,

    a11y: {
      paginationBulletMessage: "Перейти к слайду {{index}}",
      prevSlideMessage: "Предыдущий слайд",
      nextSlideMessage: "Следующий слайд",
    },
  });
};
export default swiperJsSliders;
