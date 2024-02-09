const HEADER_BUTTON = document.querySelector(".header-menu");
const HEADER_NAV = document.querySelector(".header-nav");
const HEADER_LOGO = HEADER_NAV.querySelector(".header-logo");

HEADER_BUTTON.addEventListener("click", toggleHeaderButton);

function toggleHeaderButton() {
  if (HEADER_BUTTON.classList.contains("menu-active")) {
    HEADER_BUTTON.classList.remove("menu-active");
    HEADER_NAV.classList.remove("header-nav-active");
    HEADER_LOGO.style.opacity = "1";
  } else {
    HEADER_BUTTON.classList.add("menu-active");
    HEADER_NAV.classList.add("header-nav-active");
    HEADER_LOGO.style.opacity = "0";
  }
}
