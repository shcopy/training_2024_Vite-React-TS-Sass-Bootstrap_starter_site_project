// Import
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle'; // 覆蓋 bootstrap

// Import our custom CSS
import "./src/assets/scss/styles.scss";

import AOS from "aos";
import "./node_modules/aos/dist/aos.css";


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

// Food swiper
const foodSwiper = new Swiper(".foodSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centeredSlides: false,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next-news",
    prevEl: ".swiper-button-prev-news",
    clickable: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
})
  
  // aos
AOS.init();
  
console.log("Hello world!");