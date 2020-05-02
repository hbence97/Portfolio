const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li")

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) =>{
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    nav.addEventListener("click", (e) => {
      if (e.target !== nav) {
        navLinks.forEach(link => {
          nav.classList.toggle("nav-active");
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            nav.classList.toggle("nav-active");
            link.style.animation = "";
          };
        });
      };
    });
    burger.classList.toggle("toggle");
  });
}

navSlide();

// type effect source from: https://codepen.io/bradtraversy/pen/jeNjwP
class TypeWriter {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
  
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      let typeSpeed = 150;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 350;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    const txtElement = document.querySelector('.tw-text');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
  }

$('nav a[href*="#"]').on("click", function () {
  $("#js-menu").toggleClass('active');
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 100
  }, 800);
});

$("#up").on("click", function () {
  $("html, body").animate({
    scrollTop: 0
  }, 1000); 
});

AOS.init({
  easing: 'ease',
  duration: 1800,
  once: true
});