/*  <div className="row bg-dark mx-auto">
        <div className="col-10 bg-warning mx-auto">
          
          <div className="row">
            <Swiper1 />
          </div><br />
          <div className="row">
            
          </div>
      
        </div>
    </div> */



import image from './Logo/audonix white.png';

import 'swiper/swiper-bundle.css';
import 'swiper/swiper-bundle.min.js';
import Swiper from 'swiper';

import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

const Swiper1 =() => {


 var swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

  return ( 
		<>
			
 <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      <div class="swiper-slide">Slide 4</div>
      <div class="swiper-slide">Slide 5</div>
      <div class="swiper-slide">Slide 6</div>
      <div class="swiper-slide">Slide 7</div>
      <div class="swiper-slide">Slide 8</div>
      <div class="swiper-slide">Slide 9</div>
      <div class="swiper-slide">Slide 10</div>
    </div>
   
    <div class="swiper-pagination"></div>
  
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>

		</>
		);
};

export default Swiper1;