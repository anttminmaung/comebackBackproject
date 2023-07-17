let MenuBar = document.querySelector('#meunuBar');
// console.log(MenuBar)
let NavSelction = document.querySelector('.navselection');
// console.log(NavSelction)
let search = document.querySelector('#Search');
console.log(search)
let searchform = document.querySelector('.searchform');
console.log(searchform)
let close = document.querySelector('.close');
console.log(close)

function menuBar(){
      MenuBar.classList.toggle('fa-times');
      NavSelction.classList.toggle('Active');
}

window.onscroll = () => {
      MenuBar.classList.remove('fa-times');
      NavSelction.classList.remove('Active');
}

document.querySelector('#Search').onclick = () =>{
      searchform.classList.toggle('ctive');
      
}

document.querySelector('.close').onclick = () =>{
      searchform.classList.remove('ctive');

}

var swiper = new Swiper(".home", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop:true,
    });


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },

  },
});


