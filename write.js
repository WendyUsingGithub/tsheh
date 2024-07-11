/* publish article accordin */

let prepare_publish_button = document.getElementById("prepare-publish-button");
let prepare_publish_accordin = document.getElementById("prepare-publish-accordin");

prepare_publish_button.addEventListener("click", function()
{
  if (prepare_publish_accordin.style.maxHeight) {
    prepare_publish_accordin.style.maxHeight = null;
  } else {
    prepare_publish_accordin.style.maxHeight = "calc(100vh - 20rem)";
  } 
});

/* dynamic calendar */

const daysContainer = document.querySelector(".days");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const todayBtn = document.querySelector(".today");
const year_month = document.querySelector(".show-month");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const currentDay = date.getDate();
let month = currentMonth;
let year = currentYear;

function renderCalendar()
{
  date.setDate(1);

  const lastDate = new Date(year, month + 1, 0);
  const lastDay = lastDate.getDate();
  const lastDayIndex = lastDate.getDay();

  const prevLastDate = new Date(year, month, 0);
  const prevLastDay = prevLastDate.getDate();
  const prevLastDateIndex = prevLastDate.getDay();

  const nextDays = 7 - lastDayIndex - 1;
  
  year_month.innerHTML = months[month];

  let chosen_date = document.getElementById("choose-date-text");
  chosen_date.innerHTML = currentYear + " . " + (currentMonth + 1) + " . " + currentDay;

  let calendar_content = document.getElementById("calendar-content");
  while (calendar_content.hasChildNodes()) {
    calendar_content.removeChild(calendar_content.lastChild);
  }

  /* prev month days */
  for (let i = prevLastDateIndex; i >= 0; i--) {
    let tmp = document.createElement("div");
    tmp.classList.add("day", "prev");
    tmp.textContent = prevLastDay - i;
    calendar_content.appendChild(tmp);

    tmp.addEventListener("click", function() 
    {
      let chosen_date = document.getElementById("choose-date-text");
      chosen_date.innerHTML = year + " . " + (month + 1) + " . " + this.textContent;
    })
  }

  /* this month days */
  for (let i = 1; i <= lastDay; i++) {
    let tmp = document.createElement("div");
    tmp.classList.add("day");
    tmp.textContent = i;
    if (i == currentDay && month == currentMonth && year == currentYear) {
      tmp.classList.add("today");
    }
    calendar_content.appendChild(tmp);

    tmp.addEventListener("click", function()
    {
      let chosen_date = document.getElementById("choose-date-text");
      chosen_date.innerHTML = year + " . " + (month + 1) + " . " + this.textContent;
    })
  }

  /* next month days */
  for (let i = 1; i <= nextDays; i++) {
    let tmp = document.createElement("div");
    tmp.classList.add("day", "next");
    tmp.textContent = i;
    calendar_content.appendChild(tmp);

    tmp.addEventListener("click", function()
    {
      let chosen_date = document.getElementById("choose-date-text");
      chosen_date.innerHTML = year + " . " + (month + 1) + " . " + this.textContent;
    })
  }
}

/* go to next month */
if(nextBtn)
{
  nextBtn.addEventListener("click", () =>
  {
    month++;
    if (month == 12) {
      month = 0;
      year++;
    }
    renderCalendar();
  });
}

/* go to prev month */
if(prevBtn)
{
  prevBtn.addEventListener("click", () =>
    {
      month--;
      if (month == -1) {
        month = 11;
        year--;
      }
      renderCalendar();
  });
}

/* go to today */
if(year_month)
{
  year_month.addEventListener("click", () =>
  {
    month = date.getMonth();
    year = date.getFullYear();
    renderCalendar();
  });
}

renderCalendar();

// let article_tags = document.getElementsByClassName("article-tag");
// let article_tags_suggestion = document.getElementsByClassName("article-tag-suggestion");

// for (let i = 0; i < article_tags.length; i++)
// {
//   article_tags[i].addEventListener("mouseenter", function()
//   {
//     var icon = article_tags[i].children[0];
//     icon.innerHTML = "-";
//   })

//   article_tags[i].addEventListener("mouseleave", function()
//   {
//     var icon = article_tags[i].children[0];
//     icon.innerHTML = "#";
//   })
// }

// for (let i = 0; i < article_tags_suggestion.length; i++)
//   {
//     article_tags_suggestion[i].addEventListener("mouseenter", function()
//     {
//       var icon = article_tags_suggestion[i].children[0];
//       icon.innerHTML = "#";
//     })
  
//     article_tags_suggestion[i].addEventListener("mouseleave", function()
//     {
//       var icon = article_tags_suggestion[i].children[0];
//       icon.innerHTML = "+";
//     })
//   }

function autoSize(textarea)
{
  let style = window.getComputedStyle(textarea, null);
  let scrollHeight = textarea.scrollHeight;
  let offsetHeight = 0;
  let textareaHeight = 0;

  textarea.style.overflowY = 'hidden';
  textareaHeight = scrollHeight + offsetHeight;

  if(textareaHeight < window.innerHeight)
  {
    textareaHeight = window.innerHeight;
  }

  textarea.style.height = textareaHeight + 'px';
}

function autoSizeEvt(e) {
  autoSize(e.target);
}

function windowResizeEvt(e) {
  resizeAllTextareas();
}

function resizeAllTextareas() {
  let taArray = getTextareasArray();
  taArray.forEach(function (ta) {
      autoSize(ta);
  });
}

function getTextareasArray() {
  let taArray = [];
  let taList = document.getElementsByTagName('textarea-md');
  for (let i = 0; i < taList.length; i++) {
      taArray.push(taList[i]);
  }
  return taArray;
}


let taArray = getTextareasArray();
taArray.forEach(function (ta) {
  autoSize(ta);
  ta.addEventListener('input', autoSizeEvt);
});

window.addEventListener('resize', windowResizeEvt);

let textarea_md = document.getElementById("textarea-md");

textarea_md.oninput = function() {
  autoSize(textarea_md);
};
