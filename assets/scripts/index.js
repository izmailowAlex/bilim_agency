const HEADER = document.querySelector(".header");
const HEADER_BUTTON = document.querySelector(".header-menu");
const LOGO = document.querySelector(".logo");
const SERVICES_LIST = document.querySelectorAll(".services-item");
const PORTFOLIO_SLIDER = document.querySelector(".portfolio-slider");
const PORTFOLIO_SLIDER_LIST = PORTFOLIO_SLIDER?.querySelector(".slider-list");

// ------ CLICK BURGER MENU ------ //

HEADER_BUTTON.addEventListener("click", handleToggleHeaderButton);

function handleToggleHeaderButton() {
  if (HEADER.classList.contains("header-active")) {
    HEADER.classList.remove("header-active");
    if (LOGO !== null && LOGO.classList.contains("unactive")) {
      LOGO.classList.remove("unactive");
    }
  } else {
    HEADER.classList.add("header-active");
    if (LOGO !== null) {
      LOGO.classList.add("unactive");
    }
  }
}

// ------ CLICK SERVICES LISTS ------ //

SERVICES_LIST.forEach((item) => {
  item.addEventListener("click", () => {
    cleanActiveItem();
    addActiveItem(item);
  });
});

function cleanActiveItem() {
  SERVICES_LIST.forEach((item) => {
    if (item.classList.contains("services-item-active")) {
      item.classList.remove("services-item-active");
    }
  });
}

function addActiveItem(item) {
  item.classList.add("services-item-active");
}

// ------ ROLLING PORTFOLIO ------ //

const HEIGHT_SLIDER_LIST =
  PORTFOLIO_SLIDER_LIST !== undefined
    ? Math.abs(
        window.getComputedStyle(PORTFOLIO_SLIDER_LIST).height.replace("px", "")
      )
    : null;
let intervalStep = 40;
let isPaused = false;
let percents = 0;
const scroll = 1;

function autoSlide() {
  if (HEIGHT_SLIDER_LIST === null) return;
  setInterval(() => {
    if (
      !isPaused &&
      window.innerHeight + percents - 60 !== HEIGHT_SLIDER_LIST
    ) {
      percents++;
      PORTFOLIO_SLIDER_LIST.style.transform = `translateY(-${percents}px)`;
    }
  }, intervalStep);
}
autoSlide();

if (PORTFOLIO_SLIDER !== null)
  PORTFOLIO_SLIDER.addEventListener("scroll", () => setSliderPause());

function setSliderPause() {
  // console.log(PORTFOLIO_SLIDER.scrollTop);
  isPaused = true;
  setTimeout(setPausedFalse, 2000);
}

function setPausedFalse() {
  isPaused = false;
}
