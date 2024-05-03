const subscribe = document.getElementById("subscribe-icon");
const subscribe_text = document.getElementById("subscribe-text");
const subscribe_button = document.getElementById("subscribe-button");
let subscribe_deg = 0;
let subscribe_state = 0;
let click = 0;

subscribe_button.addEventListener("mouseenter", () =>
{
  subscribe_deg = subscribe_deg + 90;
  subscribe.style.transform = "rotate(" + subscribe_deg + "deg)";
});

subscribe_button.addEventListener("click", () =>
{
  subscribe_deg = subscribe_deg + 135;
  subscribe.style.transform = "rotate(" + subscribe_deg + "deg)";

  if(subscribe_state == 0)
  {
    subscribe_text.innerText = "已訂閱";
    subscribe_state = 1;
  }
  else
  {
    subscribe_text.innerText = "訂閱";
    subscribe_state = 0; 
  }

  click = 1;
});


subscribe_button.addEventListener("mouseleave", () =>
{
  if(click == 0)
  {
    subscribe_deg = subscribe_deg - 90;
    subscribe.style.transform = "rotate(" + subscribe_deg + "deg)";
  }

  click = 0;
});