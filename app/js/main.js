// import inputmask
import inputmask from "inputmask";

// import attrClear function
import attrClear from "./functions/attrClear";

// import modalWindow functions
import { modalClose, bodyLock } from "./functions/modalWindow";

// import modalWindow init functions
import modalWindowInit from "./functions/modalWindowInit";

// import  btns functions
import btnsFunc from "./functions/btns";

// import lazyLoading functions
import observer from "./functions/lazyLoading";

// import customSelectFunc functions
import customSelectFunc from "./functions/customSelect";

// import truncate functions
import truncate from "./functions/truncate";

// import tabsChange functions
// import tabsChange from "./functions/tabsChange";

// import collapsibleFunc function
// import collapsibleFunc from "./functions/collapsible";

// import lazyBg function
import lazyBg from "./functions/lazyBg";

// import ytPlayer function
// import ytPlayer from "./functions/youtubePlayer";

// swiperJsSliders
import swiperJsSliders from "./functions/swiperJsSliders";

// import menuDropdown function
// import menuDropdown from "./functions/menuDropdown";
// import showVisible
import showVisible from "./functions/showVisible";

//setMarginTop function
import setMarginTop from "./functions/setMarginTop";
document.addEventListener("DOMContentLoaded", () => {
  // variable start
  const phoneInput = document.querySelectorAll("input[type=tel]");
  const images = document.querySelectorAll("img");
  const phoneLink = document.querySelectorAll("a[href^='tel']");
  const burgerMenus = document.querySelectorAll(".menu-burger");
  const menu = document.querySelector(".menu-nav--mobile");
  const modalCloseIcons = document.querySelectorAll(".close__modal");
  const body = document.querySelector("body");
  const main = document.querySelector(".main");
  const breadcrumb = document.querySelector(".breadcrumb");
  const lazyImages = document.querySelectorAll(
    "img[data-lazy-src],source[data-lazy-srcset] "
  );
  const pressroomText = document.querySelectorAll(".pressroom-card__text p");
  const animateItems = document.querySelectorAll(".animate");
  const copyrightYear = document.querySelectorAll(".current-year");
  const preloaderProgress = document.querySelector(".preloader__progress");
  const scrollBtn = document.querySelector(".scroll-btn");
  // variable end

  // ytPlayer();
  lazyBg();
  modalWindowInit();
  btnsFunc();
  showVisible();
  swiperJsSliders();

  // menuDropdown();
  customSelectFunc();
  // collapsibleFunc();
  // tabsChange();
  // function call end
  setTimeout(() => {
    let body = document.querySelector("body");
    body.classList.add("__loading");
    body.classList.add("--fixed");
    for (let i = 0; i < 100; i++) {
      preloaderProgress.value++;
    }
    window.setTimeout(function () {
      body.classList.add("__load");
      body.classList.remove("__loading");
      body.classList.remove("--fixed");
    }, 700);
  }, 100);
  const setMainMarginTop = () => {
    if (main) {
      !main.classList.contains("mt__nan")
        ? setMarginTop("#header", ".main")
        : "";
    }
  };
  setMainMarginTop();
  if (pressroomText.length > 0) {
    pressroomText.forEach((item) => {
      truncate(item, "190");
    });
  }
  if (copyrightYear.length > 0) {
    const year = new Date().getFullYear();
    copyrightYear.forEach((item) => {
      item.innerHTML = year;
    });
    copyrightYear.innerHTML = year;
  }
  //animate not scroll items
  if (animateItems.length > 0) {
    animateItems.forEach((item) => {
      if (!item.classList.contains("scroll")) {
        setInterval(() => {
          item.classList.add("__show");
        }, 1000);
      }
    });
  }
  //preventDefault last lastBreadcrumb item click
  if (breadcrumb) {
    let lastBreadcrumb = breadcrumb.lastElementChild;

    if (lastBreadcrumb) {
      lastBreadcrumb.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  }

  // init modal close btn
  if (modalCloseIcons.length > 0) {
    modalCloseIcons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        modalClose(icon.closest(".modal"));
        e.preventDefault();
      });
    });
  }

  // call close popup func on ESC keypress
  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      const modalOpen = document.querySelector(".modal.--open");
      modalOpen ? modalClose(modalOpen) : "";
    }
  });

  // set Belarus phone mask
  let phoneMaskBy = new inputmask({
    mask: "+375-99-999-99-99",
    clearIncomplete: true,
    greedy: false,
  });

  // inputmask for phone input
  if (phoneInput.length > 0) {
    phoneInput.forEach((phoneMask) => {
      phoneMaskBy.mask(phoneMask);
    });
  }

  // phone link clear white space
  if (phoneLink.length > 0) {
    phoneLink.forEach((link) => {
      attrClear(link, "href", 2);
    });
  }

  // images clear title and alt attribute
  if (images.length > 0) {
    images.forEach((img) => {
      attrClear(img, "title", 1);
      attrClear(img, "alt", 1);
    });
  }

  //init lazy loading images
  if (lazyImages.length > 0) {
    lazyImages.forEach((image) => {
      observer.observe(image);
    });
  }

  //  burgerMenu function
  if (burgerMenus) {
    burgerMenus.forEach((burgerMenu) => {
      burgerMenu.addEventListener("click", function (e) {
        e.preventDefault();

        const clickedBurgerMenus = document.querySelectorAll(".menu-burger");
        clickedBurgerMenus.forEach((element) => {
          element.classList.contains("--clicked")
            ? element.classList.remove("--clicked")
            : element.classList.add("--clicked");
        });
        // burgerMenu.classList.toggle("--clicked");
        body.classList.toggle("--fixed");
        menu.classList.toggle("--show");
      });
    });
  }
  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  window.onscroll = function () {
    showVisible();
    let header = document.querySelector("#header");
    let topScroll;
    header
      ? (window.innerWidth <= 800 ? (topScroll = 10) : (topScroll = 0),
        this.pageYOffset > topScroll
          ? (header.classList.add("--show"), scrollBtn.classList.add("--show"))
          : (header.classList.remove("--show"),
            scrollBtn.classList.remove("--show")))
      : "";
  };
  window.onresize = function () {
    setMainMarginTop();

    setTimeout(() => {
      setMainMarginTop();
    }, 1000);
  };
});
