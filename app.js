
var bodyTag = document.querySelector(".body");
var top = document.querySelector(".top");
var changeMode = document.querySelector(".changemode");
var introduction = document.querySelector(".intro");
var text = document.querySelector(".text");
var upper = document.querySelector(".upper");
var toggleButton = document.querySelector(".togglebutton");
var inner = document.querySelector(".inner");

toggleButton.addEventListener("click", function(){
 
  toggleButton.classList.toggle("togglebuttondark");
  inner.classList.toggle("innerdark");
  bodyTag.classList.toggle("bodydark");
  introduction.classList.toggle("introdark");
  document.querySelector(".top").classList.toggle("topdark");
  document.querySelector(".action0").classList.toggle("actiondark");
  document.querySelector(".action2").classList.toggle("actiondark");
  document.querySelector(".action1").classList.toggle("actiondark");
  document.querySelector(".action3").classList.toggle("actiondark");
  
  document.getElementsByClassName("wrapper")[0].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[1].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[2].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[3].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[4].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[5].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[6].classList.toggle("wrapperdark");
  document.getElementsByClassName("wrapper")[7].classList.toggle("wrapperdark");
  
  document.getElementsByClassName("introp1")[0].classList.toggle("introp1dark");
  document.getElementsByClassName("introp1")[1].classList.toggle("introp1dark");
  
  document.getElementsByClassName("name")[0].classList.toggle("namedark");
  document.getElementsByClassName("name")[1].classList.toggle("namedark");
  document.getElementsByClassName("name")[2].classList.toggle("namedark");
  document.getElementsByClassName("name")[3].classList.toggle("namedark");
  
  document.getElementsByClassName("fill")[0].classList.toggle("filldark");
  document.getElementsByClassName("fill")[1].classList.toggle("filldark");
  document.getElementsByClassName("fill")[2].classList.toggle("filldark");
  document.getElementsByClassName("fill")[3].classList.toggle("filldark");
  
  document.getElementsByClassName("heading")[0].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[1].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[2].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[3].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[4].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[5].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[6].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[7].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[8].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[9].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[10].classList.toggle("headingdark");
  document.getElementsByClassName("heading")[11].classList.toggle("headingdark");
  
  document.getElementsByClassName("page")[0].classList.toggle("pagedark");
  document.getElementsByClassName("page")[1].classList.toggle("pagedark");
  document.getElementsByClassName("page")[2].classList.toggle("pagedark");
  document.getElementsByClassName("page")[3].classList.toggle("pagedark");
  document.getElementsByClassName("page")[4].classList.toggle("pagedark");
  document.getElementsByClassName("page")[5].classList.toggle("pagedark");
  document.getElementsByClassName("page")[6].classList.toggle("pagedark");
  document.getElementsByClassName("page")[7].classList.toggle("pagedark");
  
  text.classList.toggle("textdark");
  
  upper.classList.toggle("upperdark");
  
});