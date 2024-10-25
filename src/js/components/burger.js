const initMobileMenu = () => {
  const burger = document.querySelector("[data-burger]");
  const menu = document.querySelector(".mobile-menu");
  const body = document.querySelector("body");
  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("js-active");
      menu.classList.toggle("js-active");
      body.classList.toggle("js-hidden");
    });
  }
};
initMobileMenu();
