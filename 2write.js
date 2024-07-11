/* publish article accordin */

let prepare_publish_button = document.getElementById("prepare-publish-button");
let prepare_publish_accordin = document.getElementById("prepare-publish-accordin");

prepare_publish_button.addEventListener("click", function()
{
  if (prepare_publish_accordin.style.maxHeight) {
    prepare_publish_accordin.style.maxHeight = null;
  } else {
    prepare_publish_accordin.style.maxHeight = "1000px";
  } 
});

/* dynamic calendar */

const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const todayBtn = document.querySelector(".today");
const year_month = document.querySelector(".year-month");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const date = new Date();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentDay = date.getDate();
let month = currentMonth + 1;
let year = currentYear;

const renderCalendar = () => 
{
  date.setDate(1);

  const firstDate = new Date(currentYear, currentMonth, 1);
  const firstDateIndex = firstDate.getDay();

  const lastDate = new Date(currentYear, currentMonth + 1, 0);
  const lastDay = lastDate.getDate();
  const lastDayIndex = lastDate.getDay();

  const prevLastDate = new Date(currentYear, currentMonth, 0);
  const prevLastDay = prevLastDate.getDate();
  const prevLastDateIndex = prevLastDate.getDay();

  const nextDays = 7 - lastDayIndex - 1;

  year_month.innerHTML = currentMonth + ' . ' + currentYear;

  
  // const para = document.createElement("p");
  // para.innerHTML = "This is a paragraph.";
  // document.getElementById("myDIV").appendChild(para);

  let calendar_content = document.getElementById("calendar-content");


  /* prev month days */
  for (let i = prevLastDateIndex; i >= 0; i--)
  {
    let tmp = document.createElement("div");
    tmp.classList.add("day", "prev");
    tmp.setAttribute("data-month", "prev");
    tmp.textContent = prevLastDay - i;
    calendar_content.appendChild(tmp);
  }

  /* this month days */
  for (let i = 1; i <= lastDay; i++)
  {
    let tmp = document.createElement("div");
    tmp.classList.add("day");
    tmp.setAttribute("data-month", "this");
    tmp.textContent = i;
    if (i == currentDay && month == currentMonth && year == currentYear)
    {
      tmp.classList.add("today");
    }
    calendar_content.appendChild(tmp);
  }

  for (let i = 1; i <= nextDays; i++) {
    let tmp = document.createElement("div");
    tmp.classList.add("day", "next");
    tmp.setAttribute("data-month", "next");
    tmp.textContent = i;
    calendar_content.appendChild(tmp);
  }

    
  // daysContainer.innerHTML = days;
  // hideTodayBtn();

}
//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="day next">${j}</div>`;
//   }

//   daysContainer.innerHTML = days;
//   hideTodayBtn();
// };

// nextBtn.addEventListener("click", () => {
//   currentMonth++;
//   if (currentMonth > 11) {
//     currentMonth = 0;
//     currentYear++;
//   }
//   renderCalendar();
// });

// prevBtn.addEventListener("click", () => {
//   currentMonth--;
//   if (currentMonth < 0) {
//     currentMonth = 11;
//     currentYear--;
//   }
//   renderCalendar();
// });

// todayBtn.addEventListener("click", () => {
//   currentMonth = date.getMonth();
//   currentYear = date.getFullYear();
//   renderCalendar();
// });

// function hideTodayBtn() {
//   if (
//     currentMonth === new Date().getMonth() &&
//     currentYear === new Date().getFullYear()
//   ) {
//     todayBtn.style.display = "none";
//   } else {
//     todayBtn.style.display = "flex";
//   }
// }

renderCalendar();
