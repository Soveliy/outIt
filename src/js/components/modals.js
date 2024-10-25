import GraphModal from "graph-modal";
const modal = new GraphModal();

// document.addEventListener("DOMContentLoaded", () => {
//   const loginModal = document.getElementById("loginModal");
//   const registerModal = document.getElementById("registerModal");
//   const cityModal = document.getElementsByClassName(".graph-modal__city");

//   const citySearchInput = document.querySelector(".city__search-input");
//   const citySuggestions = document.querySelector(".city__list ul");

//   //

//   const switchModals = (openModal, closeModal) => {
//     closeModal.close();
//     openModal.show();
//   };

//   citySearchInput.addEventListener("input", () => {
//     const filter = citySearchInput.value.toLowerCase();
//     const items = citySuggestions.getElementsByTagName("li");

//     Array.from(items).forEach((item) => {
//       const text = item.textContent.toLowerCase();
//       item.style.display = text.includes(filter) ? "" : "none";
//     });
//   });
//   //
//   document.querySelector(".btn").addEventListener("click", () => {
//     modal.open(cityModal);
//   });

//   //
//   const cityItems = document.querySelectorAll(".city__list-item");
//   if (cityItems.length > 0) {
//     const removeClassActie = () => {
//       cityItems.forEach((item) => {
//         item.classList.remove("js-active");
//       });
//     };
//     cityItems.forEach((item) => {
//       item.addEventListener("click", () => {
//         removeClassActie();
//         item.classList.add("js-active");
//         citySearchInput.value = item.querySelector("span").textContent;
//       });
//     });
//   }

//   //

//   document.addEventListener("click", (e) => {
//     if (
//       e.target.closest(".js-modal-close") ||
//       e.target.classList.contains("modal-overlay")
//     ) {
//       if (loginModal.classList.contains("is-open")) {
//         loginModal.close();
//       } else if (registerModal.classList.contains("is-open")) {
//         registerModal.close();
//       }
//     }

//     if (e.target.closest("#registerLink")) {
//       e.preventDefault();
//       switchModals(registerModal, loginModal);
//     }

//     if (e.target.closest("#registerLink2")) {
//       e.preventDefault();
//       switchModals(loginModal, registerModal);
//     }

//     if (e.target.closest(".form__toggle")) {
//       const inputField = e.target
//         .closest(".form__group")
//         .querySelector(".form__group-input");
//       const isPasswordVisible = inputField.type === "text";

//       inputField.type = isPasswordVisible ? "password" : "text";

//       const eyeIconUrl = isPasswordVisible
//         ? 'url("../../img/eye-close.svg")'
//         : 'url("../../img/eye-open.svg")';
//       e.target.style.backgroundImage = eyeIconUrl;
//     }
//   });
// });

const cityItems = document.querySelectorAll(".city__list-item");
if (cityItems.length > 0) {
  const removeClassActie = () => {
    cityItems.forEach((item) => {
      item.classList.remove("js-active");
    });
  };
  cityItems.forEach((item) => {
    item.addEventListener("click", () => {
      removeClassActie();
      item.classList.add("js-active");
      citySearchInput.value = item.querySelector("span").textContent;
    });
  });
}

const showPass = () => {
  const btns = document.querySelectorAll(".form__toggle");
  if (btns) {
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const input = btn.previousElementSibling.previousElementSibling;
        if (input.getAttribute("type") == "password") {
          btn.classList.add("js-active");
          input.setAttribute("type", "text");
        } else {
          btn.classList.remove("js-active");
          input.setAttribute("type", "password");
        }
      });
    });
  }
};
showPass();
