// document.addEventListener("DOMContentLoaded", function () {
//   const searchToggle = document.getElementById('search-toggle');
//   const searchForm = document.getElementById('search-form');
//   const searchInput = document.getElementById('search-input');
//   const closeButton = document.getElementById('close-button');
//   const searchDropdown = document.getElementById('search-dropdown');
//   const menuList = document.querySelector('.menu__list');
//   const searchOverlay = document.querySelector('.search-overlay');
//   const body = document.body;
//   const searchButtons = document.querySelector('.header__search-btn');
//   searchToggle.addEventListener('click', function(event) {
//       event.preventDefault();
//       const isVisible = searchForm.style.display === 'flex';
//       searchForm.style.display = isVisible ? 'none' : 'flex';
//       menuList.style.display = isVisible ? 'flex' : 'none';
//       searchToggle.style.display = isVisible ? 'flex' : 'none';
//       if (!isVisible) {
//           searchInput.focus();
//           searchOverlay.style.display = 'flex';
//           body.classList.add('no-scroll');
//           if (window.innerWidth <= 1024) {
//             searchButtons.style.display = 'none';
//         } else {
//           body.classList.remove('no-scroll');
//           searchButtons.style.display = 'flex';
//       }
//       };
//     });
//   searchInput.addEventListener('input', function() {
//       const query = searchInput.value.trim();
//       closeButton.style.display = query ? 'flex' : 'none';
//       if (query) {
//         searchDropdown.classList.add('visible');
//         searchDropdown.innerHTML = '';
//         const results = [
//             { text: 'Результат 1', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 2', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 3', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 1', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 2', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 3', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 1', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 2', icon: 'img/sprite.svg#search' },
//             { text: 'Результат 3', icon: 'img/sprite.svg#search' },
//         ];
//           results.forEach(result => {
//               const resultItem = document.createElement('div');
//               resultItem.classList.add('search-result');
//               resultItem.innerHTML = `<svg class="result-icon"><use xlink:href="${result.icon}"></use></svg>${result.text}`;
//               searchDropdown.appendChild(resultItem);
//           });
//       }
//   });
// //   searchOverlay.addEventListener('click', function() {
// //     searchForm.classList.remove('active');
// //     searchOverlay.classList.remove('active');
// // });
//   searchOverlay.addEventListener('click', function() {
//       closeSearch();
//   });
//   function closeSearch() {
//     searchForm.style.display = 'none';
//     searchToggle.style.display = 'flex';
//     searchInput.value = '';
//     searchOverlay.style.display = 'none';
//     closeButton.style.display = 'none';
//     searchDropdown.classList.remove('visible');
//     body.classList.remove('no-scroll');
//     searchButtons.style.display = 'flex';
//   };
// });

const searchFunc = () => {
  const btn = document.querySelector("[data-search-btn]");
  const form = document.querySelector("[data-search-form]");
  const input = document.querySelector("[data-search-input]");
  const dropdown = document.querySelector("[data-search-dropdown]");
  const close = document.querySelector("[data-search-close]");
  const shadow = document.querySelector("[data-search-shadow]");
  const body = document.querySelector("body");

  const closeSearch = () => {
    shadow.classList.remove("js-active");
    form.classList.remove("js-active");
    dropdown.classList.remove("js-active");
    input.value = "";
    body.classList.remove("js-hidden");
    unlockPadding();
  };

  function lockPadding() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
    document.body.style.paddingRight = paddingOffset;
  }

  function unlockPadding() {
    document.body.style.paddingRight = "0px";
  }
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && form.classList.contains("js-active")) {
      closeSearch();
    }
  });
  if (btn) {
    btn.addEventListener("click", () => {
      form.classList.toggle("js-active");
      shadow.classList.toggle("js-active");
      lockPadding();
      body.classList.add("js-hidden");
    });
  }
  if (input) {
    input.addEventListener("input", () => {
      if (input.value.length > 2) {
        dropdown.classList.add("js-active");
      } else {
        dropdown.classList.remove("js-active");
      }
    });
  }
  if (shadow) {
    shadow.addEventListener("click", () => {
      closeSearch();
    });
    close.addEventListener("click", () => {
      closeSearch();
    });
  }
};

searchFunc();
