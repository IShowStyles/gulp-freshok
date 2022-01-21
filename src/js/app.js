import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();


import $ from 'jquery'
import 'slick-carousel'

$('.top-slider__inner').slick({
  infinite: true,
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow:'<button type="button" class="slick-prev"><img class="slider-prev__img" src="../images/arrow-left.svg" alt="arrow-left"></button>',
  nextArrow:'<button type="button" class="slick-next"><img class="slider-next__img" src="../images/arrow-right.svg"  alt="arrow-right"></button>',
});

 import _mixitup from 'mixitup';



_mixitup('.catalog-items__wrapper', {
  animation: {
    effects: 'fade rotateZ(-180deg)', /* fade scale */
    duration: 800 /* 600 */
  },
  selectors: {
    target: '.mix-target', /* .mix */
    
  },


  controls: {
    scope: 'local'
   },
  containerEl1 : document.querySelector('[data-ref="container-1"]'),


  mixer1 : _mixitup(containerEl1, controls),
});
   
  // mixer1 : _mixitup(containerEl1, config),

_mixitup('.stock-wrapper', {
  animation: {
    effects: 'fade rotateY(-180deg)', /* fade scale */
    duration: 800 /* 600 */
  },
  selectors: {
    target: '.mix', /* .mix */
   
  },

  controls: {
    scope: 'local'
   },

  containerEl2 : document.querySelector('[data-ref="container-2"]'),

  mixer2 : _mixitup(containerEl2, controls),

});


// _mixitup('.stock-wrapper','.catalog-items__wrapper', {
//   animation: {
//     effects: 'fade rotateY(-180deg)', /* fade scale */
//     duration: 800 /* 600 */
//   },
//   selectors: {
//     target: '.mix', /* .mix */
//     target: '.mix-target', /* .mix */
//     filter: '.filter',
//     filter: '.filter2'
//   },

  

//   containerEl1 : document.querySelector('[data-ref="container-1"]'),
//   containerEl2 : document.querySelector('[data-ref="container-2"]'),
 

//   // config : {
//   //   controls: {
//   //     scope: 'local'
//   //   },
//   // },
 
   
//   mixer2 : _mixitup(containerEl2, config),
//   mixer1 : _mixitup(containerEl1, config),

// });

