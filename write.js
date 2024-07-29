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
  nextBtn.addEventListener("click", function()
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
  prevBtn.addEventListener("click", function()
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
  year_month.addEventListener("click", function()
  {
    month = date.getMonth();
    year = date.getFullYear();
    renderCalendar();
  });
}

renderCalendar();

/* tag picker */

let article_tags = document.getElementsByClassName("article-tags");
let article_tag_arr = document.getElementsByClassName("article-tag");
let article_tag_suggestions = document.getElementsByClassName("article-tag-suggestions");
let article_tag_suggestions_arr = document.getElementsByClassName("article-tag-suggestion");
let tag_picker = document.getElementsByClassName("tag-picker");

function article_tag2suggestion()
{
  $(this).animate({opacity: 0}, 0);
  $(this).hide(800);
  setTimeout(function() 
  {
    article_tags[0].removeChild(this);
    create_tag("s", (this.children)[2].innerText);
  }.bind(this), 850);
}

function article_suggestion2tag()
{
  $(this).animate({opacity: 0}, 0);
  $(this).hide(800);
  setTimeout(function() 
  {
    article_tag_suggestions[0].removeChild(this);
    create_tag("t", (this.children)[2].innerText);
  }.bind(this), 850);
}

for (let i = 0; i < article_tag_arr.length; i++)
{
  article_tag_arr[i].addEventListener("click", article_tag2suggestion.bind(article_tag_arr[i]));
}
for (let i = 0; i < article_tag_suggestions_arr.length; i++)
{
  article_tag_suggestions_arr[i].addEventListener("click", article_suggestion2tag.bind(article_tag_suggestions_arr[i]));
}

// function autoSizeTags(tagsarea)
// {
//   tagsarea.style.overflowY = 'hidden';
//   scrollHeight = tagsarea.scrollHeight;
// }

prepare_publish_button.addEventListener('click', function()
{
  // autoSizeTags(article_tags[0]);
  // autoSizeTags(article_tag_suggestions[0]);
});

function autoSize(textarea)
{
  let scrollHeight = textarea.scrollHeight;
  let offsetHeight = 0;
  let textareaHeight = 0;

  textarea.style.overflowY = 'hidden';
  textareaHeight = scrollHeight + offsetHeight;
  if(textareaHeight < window.innerHeight) {
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

/* add a new tag by input */

let input_tag = document.getElementById("input-tag");

input_tag.addEventListener("keyup", function(e)
{
  if (e.key == 'Enter') {
    create_tag("t", input_tag.value);
  }
});

/* create a tag : "t" for article_tag, "s" for article_suggestion_tag */

function create_tag(type, text)
{
  if(type == "t")
  {
    let tag = document.createElement("div");
    let icon_tag = document.createElement("div");
    let icon_tag_remove = document.createElement("div");
    let text_tag = document.createElement("div");

    tag.classList.add('article-tag');
    icon_tag.classList.add('icon');
    icon_tag_remove.classList.add('icon-hover');
    text_tag.classList.add('text');

    icon_tag.innerText = "#";
    icon_tag_remove.innerText = "-";
    text_tag.innerText = text;

    tag.appendChild(icon_tag);
    tag.appendChild(icon_tag_remove);
    tag.appendChild(text_tag);

    $(tag).animate({opacity: 0}, 0);
    $(tag).hide();

    article_tags[0].appendChild(tag);
    tag.addEventListener("click", article_tag2suggestion.bind(tag));

    $(tag).show(800);
    $(tag).animate({opacity: 1}, 800);
  }
  else if(type == "s")
  {
    let suggestion_tag = document.createElement("div");
    let icon_tag = document.createElement("div");
    let icon_tag_remove = document.createElement("div");
    let text_tag = document.createElement("div");
    
    suggestion_tag.classList.add('article-tag-suggestion');
    icon_tag.classList.add('icon');
    icon_tag_remove.classList.add('icon-hover');
    text_tag.classList.add('text');

    icon_tag.innerText = "-";
    icon_tag_remove.innerText = "+";
    text_tag.innerText = text;

    suggestion_tag.appendChild(icon_tag);
    suggestion_tag.appendChild(icon_tag_remove);
    suggestion_tag.appendChild(text_tag);

    $(suggestion_tag).animate({opacity: 0}, 0);
    $(suggestion_tag).hide();

    suggestion_tag.addEventListener("click", article_suggestion2tag.bind(suggestion_tag));
    article_tag_suggestions[0].appendChild(suggestion_tag);
    
    $(suggestion_tag).show(800);
    $(suggestion_tag).animate({opacity: 1}, 800);
  }
}

function getInputValue() {
  // Selecting the input element and get its value 
  let inputVal = document.getElementsByClassName("inputClass")[0].value;
  // Displaying the value
  alert(inputVal);
}