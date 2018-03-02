(function(){
  document.onclick = function (e) {
     var block,
         text,
         form;
     if (e.target.classList[0] === "order-link-btn") {
         block = document.getElementById("form-wrap");
         text = document.getElementById("sbm");
         text.innerHTML = "ЗАКАЗАТЬ УСЛУГУ";
         block.classList.add("order-service-popup");
     }
     else if (e.target.classList[0] === "know-more-btn") {
         block = document.getElementsByClassName("form-wrap");
         text = document.getElementsByClassName("sbm");
         text[0].innerHTML = "ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ";
         block[0].classList.add("order-consultation-popup");
     }
     else if (e.target.classList[0] === "get-call-btn") {
         block = document.getElementsByClassName("form-wrap");
         text = document.getElementsByClassName("sbm");
         text[0].innerHTML = "ЗАКАЗАТЬ ЗВОНОК";
         block[0].classList.add("order-call-popup");
     }
     else if (e.target.classList[0] === "close") {
         block = document.getElementsByClassName("form-wrap");
         block[0].classList.remove(block[0].classList[1]);
     }
     else if (e.target.classList[0] === "sbm") {
         block = document.getElementsByClassName("form-wrap");
         block[0].classList.remove(block[0].classList[1]);
     }
     else if (e.target.classList[0] === "mycity") {
         block = document.getElementById("city-form");
         text = document.getElementById("white-shadow");
         block.classList.remove("city-hidden");
         text.classList.remove("city-hidden");
     }
     else if (e.target.tagName === "LI" || e.target.classList[0] === "close-city-list") {
         block = document.getElementById("city-form");
         form = document.getElementById("white-shadow");
         text = document.getElementsByClassName("span-mycity");
         block.classList.add("city-hidden");
         form.classList.add("city-hidden");
         if (e.target.tagName === "LI"){
            text[0].innerHTML = e.target.innerHTML;
        }
     }
  }
})();