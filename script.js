// swiper
(() => {
   if (window.Swiper) {
      const swiper = new Swiper('.swiper', {
         autoplay: true,
         breakpointsBase: 'container',
         
      });
   }
})();

// accordion
var acc = document.getElementsByClassName("faq-question");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Переключение между добавлением и удалением "active" class,
    выделить кнопку, управляющую панелью */
    this.classList.toggle("active");
    /* Переключение между скрытием и отображением активной панели */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

