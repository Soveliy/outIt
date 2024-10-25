const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const calendarDays = document.getElementById("calendarDays");
const prevYearButton = document.getElementById("prevYear");
const nextYearButton = document.getElementById("nextYear");
const prevYearDisplay = document.getElementById("prevYearDisplay");
const currentYearDisplay = document.getElementById("currentYearDisplay");
const nextYearDisplay = document.getElementById("nextYearDisplay");
const calendarHeaderNext = document.getElementById("calendarHeaderNext");
const customSelectTrigger = document.querySelector(".custom-select-trigger");
const customOptions = document.querySelector(".custom-options");
const options = document.querySelectorAll(".custom-option");
const customArrow = document.querySelector(".custom-arrow");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYear1 = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();

function renderCalendar(year, month) {
  calendarDays.innerHTML = "";

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const prevMonthDaysToShow =
    firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  dayNames.forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.className = "day-name";
    dayElement.textContent = day;
    calendarDays.appendChild(dayElement);
  });

  for (
    let i = prevMonthLastDay - prevMonthDaysToShow + 1;
    i <= prevMonthLastDay;
    i++
  ) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "day faded";
    emptyCell.textContent = i;
    calendarDays.appendChild(emptyCell);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.className = "day";
    dayElement.textContent = i;

    const dayDate = new Date(year, month, i);
    if (dayDate.getDay() === 0 || dayDate.getDay() === 6) {
      dayElement.style.color = "red";
    }

    dayElement.addEventListener("click", () => {
      currentDay = i;
      highlightSelectedDay(dayElement);
      console.log(
        `Selected date: ${currentYear}-${currentMonth + 1}-${currentDay}`
      );
    });

    if (i === currentDay && year === currentYear && month === currentMonth) {
      dayElement.classList.add("selected");
    }

    calendarDays.appendChild(dayElement);
  }

  const totalCells = 42;
  const currentCells = prevMonthDaysToShow + daysInMonth;
  const nextDaysToShow = totalCells - currentCells;

  for (let i = 1; i <= nextDaysToShow; i++) {
    const nextDayElement = document.createElement("div");
    nextDayElement.className = "day faded";
    nextDayElement.textContent = i;
    calendarDays.appendChild(nextDayElement);
  }
  updateYearDisplays(year);
  updateCalendarHeaderVisibility(year);
}

function updateYearDisplays(year) {
  prevYearDisplay.textContent = year - 1;
  currentYearDisplay.textContent = year;
  nextYearDisplay.textContent = year + 1;
}

function updateCalendarHeaderVisibility(year) {
  calendarHeaderNext.style.display =
    currentYear1 < currentYear ? "flex" : "none";
}

function highlightSelectedDay(selectedElement) {
  const allDays = document.querySelectorAll(".day");
  allDays.forEach((day) => day.classList.remove("selected"));
  selectedElement.classList.add("selected");
}

customSelectTrigger.addEventListener("click", () => {
  customOptions.classList.toggle("show");
  customArrow.classList.toggle("rotate");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-value");
    customSelectTrigger.textContent = option.textContent;
    currentMonth = parseInt(value);
    renderCalendar(currentYear, currentMonth);

    options.forEach((opt) => {
      opt.classList.remove("selected");
    });
    option.classList.add("selected");

    customOptions.classList.remove("show");
    customArrow.classList.remove("rotate");
  });
});

document.addEventListener("click", (e) => {
  if (
    !customSelectTrigger.contains(e.target) &&
    !customOptions.contains(e.target)
  ) {
    customOptions.classList.remove("show");
    customArrow.classList.remove("rotate");
  }
});

prevYearButton.addEventListener("click", () => {
  currentYear1--;
  renderCalendar(currentYear1, currentMonth);
});

nextYearButton.addEventListener("click", () => {
  currentYear1++;
  renderCalendar(currentYear1, currentMonth);
});

customSelectTrigger.textContent = monthNames[currentMonth];
renderCalendar(currentYear, currentMonth);
