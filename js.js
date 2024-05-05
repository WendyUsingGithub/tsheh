const subscribe_icon = document.getElementById("subscribe-icon");
const subscribe_icon_vertical = document.getElementById("subscribe-icon-vertical");
const subscribe_icon_horizontal = document.getElementById("subscribe-icon-horizontal");
const subscribe_text = document.getElementById("subscribe-text");
const subscribe_button = document.getElementById("subscribe-button");
let subscribe_deg = 0;
let subscribe_state = 0;
let click = 0;

subscribe_button.addEventListener("mouseenter", () =>
{
  subscribe_deg = subscribe_deg + 90;
  subscribe_icon.style.transform = "rotate(" + subscribe_deg + "deg)";
  subscribe_icon.style.transition = "all 0.3s ease-in-out";
  subscribe_text.style.color = "var(--tsheh-gray)";
  subscribe_icon_vertical.style.background = "var(--tsheh-gray)";
  subscribe_icon_horizontal.style.background = "var(--tsheh-gray)";
});

subscribe_button.addEventListener("click", () =>
{
  subscribe_deg = subscribe_deg + 135;
  subscribe_icon.style.transform = "rotate(" + subscribe_deg + "deg)";
  subscribe_icon.style.transition = "all 0.45s ease-in-out";

  if(subscribe_state == 0)
  {
    subscribe_state = 1;
  }
  else
  {
    subscribe_state = 0; 
  }

  click = 1;
});


subscribe_button.addEventListener("mouseleave", () =>
{
  if(click == 0)
  {
    subscribe_deg = subscribe_deg - 90;
    subscribe_icon.style.transform = "rotate(" + subscribe_deg + "deg)";
    subscribe_icon.style.transition = "all 0.3s ease-in-out";
    subscribe_text.style.color = "var(--tsheh-black)";
    subscribe_icon_vertical.style.background = "var(--tsheh-black)";
    subscribe_icon_horizontal.style.background = "var(--tsheh-black)";
  }

  click = 0;
});