
let article_tag_arr = document.getElementsByClassName("article-tag");
let article_tag_suggestions_arr = document.getElementsByClassName("article-tag-suggestion");
let article_tags = document.getElementsByClassName("article-tags");
let article_tag_suggestions = document.getElementsByClassName("article-tag-suggestions");
let tag_picker = document.getElementsByClassName("tag-picker");


for (let i = 0; i < article_tag_suggestions_arr.length; i++)
{
  article_tag_suggestions_arr[i].addEventListener("click", function()
  {
    $(this).animate({opacity: 0}, 0);
    $(this).hide(1000);
    setTimeout(function() 
    {
      this.classList.add('article-tag-suggestion');
      this.classList.remove('article-tag');
      (this.children)[0].innerText = "-";
      (this.children)[1].innerText = "+";
      article_tags[0].removeChild(this);
      article_tag_suggestions[0].appendChild(this);
      $(this).show();
      autoSizeTags(tag_picker[0]);
      $(this).animate({opacity: 1}, 500);
    }.bind(this), 1050);
  });
}