import Swiper from 'swiper';

export default class Swiper {
  constructor() {
    this.fakeSwiper();
  }

  fakeSwiper() {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

}

