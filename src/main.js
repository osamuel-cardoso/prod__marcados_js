import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

const swiper = new Swiper ('.swiper', {
  autoHeight: true,
  loop: true,
  modules: [Navigation],

  autoplay: {
    delay: 3000,
  },
  
  navigation: {
    nextEl: '.controler_right',
    prevEl: '.controler_left',
  },
})

AOS.init();


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.005 - Math.pow(1.8, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

swiper.init();

const horas = document.getElementById('clock_hour');
const minutos = document.getElementById('clock_minute');

const clock = setInterval(function time() {
    
  let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;

    horas.innerText = hr;
    minutos.innerText = min;
})

clock;