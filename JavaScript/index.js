// Start Codes

// Start Header
window.addEventListener('scroll', () => {
    if ( this.scrollY > 20 ){
      document.querySelector(".header").classList.add("header-effect");
    } else{
      document.querySelector(".header").classList.remove("header-effect");
    }
});

// End Header


// Start Dark Mood

// let moodColorBtn = document.querySelector(".fa-cloud-moon");
// let moodColorBtn1 = document.querySelector(".fa-moon");

// moodColorBtn.addEventListener('click', () => {
// moodColorBtn.style.cssText="display:none";
// moodColorBtn1.style.cssText="display:block";
// let moodColor = document.querySelector(":root");
// moodColor.style.setProperty('--color-light', '#0E0E0E');
// moodColor.style.setProperty('--color-black', '#f8f9fa');
// });

// moodColorBtn1.addEventListener('click', () => {
// moodColorBtn1.style.cssText="display:none";
// moodColorBtn.style.cssText="display:block";
// let moodColor = document.querySelector(":root");
// moodColor.style.setProperty('--color-light', '#f8f9fa');
// moodColor.style.setProperty('--color-black', '#0E0E0E');
// });

// End Dark Mood

// Start Home
// End Home

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    851: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// End Codes
