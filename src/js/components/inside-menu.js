window.addEventListener("DOMContentLoaded", () => {
  const initCategoryMenu = () => {
    const menu = document.querySelector(".category-menu");
    if (menu) {
      const insideLists = document.querySelectorAll(
        ".category-menu__item--has-children"
      );
      if (insideLists.length > 0) {
        insideLists.forEach((insideList) => {
          const link = insideList.querySelector("a");
          console.log(link);
          if (link) {
            link.addEventListener("click", (e) => {
              e.preventDefault();
              link.classList.toggle("js-active");
              link.nextElementSibling.classList.toggle("js-active");
            });
          }
        });
      }
    }
  };
  initCategoryMenu();
});
