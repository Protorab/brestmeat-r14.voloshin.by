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
import collapsibleFunc from "./functions/collapsible";

// import lazyBg function
import lazyBg from "./functions/lazyBg";

// import ytPlayer function
// import ytPlayer from "./functions/youtubePlayer";

// swiperJsSliders
import swiperJsSliders from "./functions/swiperJsSliders";

//numberList function
import numberList from "./functions/numberList";
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
  const breadcrumb = document.querySelector(".breadcrumbs ul");
  const lazyImages = document.querySelectorAll(
    "img[data-lazy-src],source[data-lazy-srcset] "
  );
  const pressroomText = document.querySelectorAll(".pressroom-card__text p");
  const animateItems = document.querySelectorAll(".animate");
  const copyrightYear = document.querySelectorAll(".current-year");
  const preloaderProgress = document.querySelector(".preloader__progress");
  const scrollBtn = document.querySelector(".scroll-btn");
  const catalogMenuFormOptions = document.querySelectorAll(
    "#group-production .catalog__filter-option"
  );
  const productCardImageThumbs = document.querySelectorAll(
    ".product-card__image-slide img"
  );

  // variable end

  // ytPlayer();
  lazyBg();
  modalWindowInit();
  btnsFunc();
  showVisible();
  swiperJsSliders();
  numberList();
  // menuDropdown();
  customSelectFunc();
  collapsibleFunc();
  // tabsChange();
  // function call end
  const recipeStepsCheck = () => {
    let recipeSteps = document.querySelectorAll(".recipe-card__step");
    let moreBtn = document.querySelector("#more__btn");
    var itemsCounter = window.innerWidth <= 800 ? 3 : 7;
    const hideRecipeStep = () => {
      for (let i = 0; i < recipeSteps.length; i++) {
        const element = recipeSteps[i];
        element.style.display = "none";
      }
      for (let j = 0; j < itemsCounter; j++) {
        const recipeStep = recipeSteps[j];
        recipeStep.style.display = "flex";
      }
    };
    const showRecipeStep = () => {
      for (let i = 0; i < recipeSteps.length; i++) {
        const element = recipeSteps[i];
        element.style.display = "flex";
        element.classList.contains("scroll")
          ? (element.classList.remove("scroll"),
            element.classList.add("__show"))
          : "";
      }
    };
    if (recipeSteps && recipeSteps.length > itemsCounter) {
      console.log("innerWidth :>> ", itemsCounter);

      hideRecipeStep();

      if (moreBtn) {
        moreBtn.style.display = "flex";
        !moreBtn.classList.contains("animate")
          ? moreBtn.classList.add("animate")
          : "";
        !moreBtn.classList.contains("scroll")
          ? moreBtn.classList.add("scroll")
          : "";
      }
    } else {
      if (moreBtn) {
        moreBtn.style.display = "none";
        moreBtn.classList.contains("animate")
          ? moreBtn.classList.remove("animate")
          : "";
        moreBtn.classList.contains("scroll")
          ? moreBtn.classList.remove("scroll")
          : "";
      }
    }
    if (moreBtn) {
      moreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        let _this = e.currentTarget;
        let defText = "Подробнее....";
        let altText = "Скрыть";

        _this.classList.contains("__clicked")
          ? (_this.classList.remove("__clicked"),
            (_this.textContent = defText),
            hideRecipeStep())
          : (_this.classList.add("__clicked"),
            (_this.textContent = altText),
            showRecipeStep());
      });
    }
  };
  setTimeout(() => {
    let body = document.querySelector("body");
    body.classList.add("__loading");
    body.classList.add("--fixed");
    for (let i = 0; i < 100; i++) {
      preloaderProgress.value++;
    }
    recipeStepsCheck();
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

  if (productCardImageThumbs.length > 0) {
    productCardImageThumbs.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        document
          .querySelector(".product-card__image-current img")
          .setAttribute("src", e.currentTarget.getAttribute("src"));
      });
    });
  }

  // function scrollTo
  function scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop,
    });
  }

  const hideCatalogCategory = () => {
    let categorySelects = document.querySelectorAll(".catalog__category");
    if (categorySelects.length > 0) {
      categorySelects.forEach((element) => {
        element.style.display = "none";
      });
    }
  };
  if (catalogMenuFormOptions.length > 0) {
    catalogMenuFormOptions.forEach((item) => {
      item.addEventListener("click", (e) => {
        let _this = e.currentTarget;
        let getCategory = _this.dataset.category;
        let categorySelect = document.getElementById(`${getCategory}`);
        hideCatalogCategory();

        if (categorySelect) {
          categorySelect.style.display = "flex";
        }
      });
    });
  }

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
        let clickedBurgerMenus = document.querySelectorAll(".menu-burger");
        clickedBurgerMenus.forEach((element) => {
          element.classList.contains("--clicked")
            ? element.classList.remove("--clicked")
            : "";
        });

        menu.classList.contains("--show")
          ? menu.classList.remove("--show")
          : "";
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
      let clickedBurgerMenus = document.querySelectorAll(".menu-burger");
      clickedBurgerMenus.forEach((element) => {
        element.classList.contains("--clicked")
          ? element.classList.remove("--clicked")
          : "";
      });

      menu.classList.contains("--show") ? menu.classList.remove("--show") : "";
      body.classList.contains("--fixed")
        ? body.classList.remove("--fixed")
        : "";
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
        let mobileMenuShow = document.querySelector(".menu-nav--mobile.--show");
        let clickedBurgerMenus = document.querySelectorAll(".menu-burger");
        // let header = document.querySelector("#header");
        clickedBurgerMenus.forEach((element) => {
          element.classList.contains("--clicked")
            ? element.classList.remove("--clicked")
            : element.classList.add("--clicked");
        });
        // burgerMenu.classList.toggle("--clicked");
        body.classList.toggle("--fixed");
        menu.classList.toggle("--show");
        if (mobileMenuShow) {
          // mobileMenuShow.onscroll = function () {
          let topScroll = 5;
          this.scrollTop > topScroll
            ? (this.style.zIndex = "5")
            : (this.style.zIndex = "1");
          // };
        }
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
  function CallPrint(strid) {
    var prtContent = document.getElementById(strid);
    // var prtCSS =
    //   '<link rel="stylesheet" href="/templates/css/template.css" type="text/css" />';
    var WinPrint = window.open(
      "",
      "",
      "left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0"
    );
    WinPrint.document.write('<div id="print" class="contentpane">');
    // WinPrint.document.write(prtCSS);
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.write("</div>");
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
    prtContent.innerHTML = strOldOne;
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
    recipeStepsCheck();

    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", (e) => {
        showMore(e, "#cards", "__show-cards", "Показать еще", "Скрыть");

        e.preventDefault();
      });
    }
    setTimeout(() => {
      setMainMarginTop();
      recipeStepsCheck();

      if (showMoreBtn) {
        showMoreBtn.addEventListener("click", (e) => {
          showMore(e, "#cards", "__show-cards", "Показать еще", "Скрыть");

          e.preventDefault();
        });
      }
    }, 1000);
  };
});
