import "./_components.js";

window.addEventListener("load", () => {
  const header = document.querySelector(".header");
  if (header) {
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty(
      "--headerHeight",
      `${headerHeight}px`
    );
  }
});
