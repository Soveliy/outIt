import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
Swiper.use([Autoplay, Navigation, Pagination]);

var swiper1 = new Swiper(".swiper__banner", {
  centeredSlides: true,
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  speed: 300,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"><svg width="20" height="20" viewBox="0 0 20 20">
            <circle class="progress-circle" cx="10" cy="10" r="9" />
            <circle class="progress-svg" cx="10" cy="10" r="9" />
          </svg></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: function () {
      const circles = document.querySelectorAll(
        ".swiper-pagination-bullet .progress-circle"
      );
      circles.forEach((circle) => (circle.style.display = "none"));

      const activeCircle = document.querySelector(
        ".swiper-pagination-bullet-active .progress-circle"
      );
      if (activeCircle) {
        activeCircle.style.display = "block";
      }

      const bullets = document.querySelectorAll(
        ".swiper-pagination-bullet .progress-svg"
      );
      bullets.forEach((bullet) => (bullet.style.display = "none"));

      const activeBullet = document.querySelector(
        ".swiper-pagination-bullet-active .progress-svg"
      );
      if (activeBullet) {
        activeBullet.style.display = "block";
        const circumference = 2 * Math.PI * 9;
        activeBullet.style.strokeDasharray = circumference;
        activeBullet.style.strokeDashoffset = circumference;
      }
    },
    autoplayTimeLeft: function (s, time, progress) {
      const activeBullet = document.querySelector(
        ".swiper-pagination-bullet-active .progress-svg"
      );
      if (activeBullet) {
        const circumference = 2 * Math.PI * 9;
        const offset = circumference - circumference * (1 - progress);
        activeBullet.style.strokeDashoffset = offset;
      }
    },
  },
});

let swiper2 = new Swiper(".news__swiper", {
  slidesPerView: "auto",
  loop: true,
  // centeredSlides: true,
  effect: "slide",
  speed: 1000,
  loopAdditionalSlides: 10,
  breakpoints: {
    // 375: {
    //   slidesPerView: 1.5,
    // },
    // 768: {
    //   slidesPerView: 4,
    // },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".news__btn-next",
    prevEl: ".news__btn-prev",
  },
});
