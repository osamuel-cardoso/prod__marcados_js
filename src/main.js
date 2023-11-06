import Lenis from "@studio-freight/lenis";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper, { Navigation } from "swiper";
import "swiper/css";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: "auto",
  grabCursor: true,

  spaceBetween: 20,

  navigation: {
    nextEl: ".courses__interact-component__next",
    prevEl: ".courses__interact-component__prev",
    disabledClass: "is__disabled",
  },
});

AOS.init();

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.005 - Math.pow(1.8, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

swiper.init();

// const horas = document.getElementById('clock_hour');
// const minutos = document.getElementById('clock_minute');

// const clock = setInterval(function time() {

//   let dateToday = new Date();
//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();

//     if (hr < 10) hr = '0' + hr;
//     if (min < 10) min = '0' + min;

//     horas.innerText = hr;
//     minutos.innerText = min;
// })

// clock;

(function () {
  var deadline = "2023/09/17 23:59";

  function pad(num, size) {
    var s = "0" + num;
    return s.substr(s.length - size);
  }

  // fixes "Date.parse(date)" on safari
  function parseDate(date) {
    const parsed = Date.parse(date);
    if (!isNaN(parsed)) return parsed;
    return Date.parse(date.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
  }

  function getTimeRemaining(endtime) {
    let total = parseDate(endtime) - Date.parse(new Date());

    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor((total / 1000 / 60) % 60);
    let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  function clock(endtime) {
    let days = document.querySelector(".count__days");
    let hours = document.querySelector(".count__hours");
    let minutes = document.querySelector(".count__minutes");
    let seconds = document.querySelector(".count__seconds");

    var timeinterval = setInterval(function () {
      var time = getTimeRemaining(endtime);

      if (time.total <= 0) {
        clearInterval(timeinterval);
      } else {
        days.innerHTML = pad(time.days, 2);
        hours.innerHTML = pad(time.hours, 2);
        minutes.innerHTML = pad(time.minutes, 2);
        seconds.innerHTML = pad(time.seconds, 2);
      }
    }, 1000);
  }

  clock(deadline);
})();
