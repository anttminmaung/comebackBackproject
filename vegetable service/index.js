let search = document.querySelector('#search');
// console.log(search)

let search2 = document.querySelector('.search2');
// console.log(search2)

let marketi = document.querySelector('#marketicon');
// console.log(marketIcon)

let market = document.querySelector('.marketCardseciton');
// console.log(market)

let logini = document.querySelector('#loginicon');
// console.log(logini)

let login = document.querySelector('.loginForm');
// console.log(login)

let bar = document.querySelector('#bar');
// console.log(bar)

let navlink = document.querySelector('.navLink');
// console.log(navlink)

// header section 
function searchIcon(){
    search2.classList.toggle('active');
    market.classList.remove('active');
    login.classList.remove('active');
    navlink.classList.remove('active');
}

function marketIcon(){
    market.classList.toggle('active');
    login.classList.remove('active');
    search2.classList.remove('active');
    navlink.classList.remove('active');
   
}

function loginIcon(){
    login.classList.toggle('active');
    search2.classList.remove('active');
    navlink.classList.remove('active');
    market.classList.remove('active');
   
}

function barIcon(){
    navlink.classList.toggle('active');
    login.classList.remove('active');
    search2.classList.remove('active');
    market.classList.remove('active');
}





// header section 

// product section 

var swiper = new Swiper(".gridSlider", {
    loop:true,
    spaceBetween:20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
  centeredSlides:true,
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


// product section 

// review section 
var swiper = new Swiper(".Review", {
   loop:true,
    spaceBetween:20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
  centeredSlides:true,
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


// review section 



