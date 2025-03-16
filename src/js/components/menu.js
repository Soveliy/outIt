import priorityPlus from "priority-plus";
priorityPlus(document.querySelector(".menu__list"), {
  innerToggleTemplate: `<div class="menu__more-link">Еще
              <svg class="menu__link-icon" id="arrowIcon">
                <use xlink:href="img/sprite.svg#arrow_down"></use>
              </svg>
            </div>`,
});
