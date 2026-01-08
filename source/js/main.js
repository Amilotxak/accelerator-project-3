// https://swiperjs.com/get-started#installation

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';

let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true, // Зацикливание слайдов
        autoplay: {
            delay: 5000, // Автопрокрутка каждые 5 секунд
            disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        effect: "fade", // Плавное появление нового слайда
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: function () {
                // Показываем контент на первом активном слайде
                document
                    .querySelectorAll(".swiper-slide-active .slide-content")
                    .forEach((el) => {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                    });
            },
        },
    });
});

// меню навигации

navMain.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function () {
    navMain.classList.toggle('header-nav--closed');
    navMain.classList.toggle('header-nav--opened');
});

// вопросы и ответы 

let questinsItem = document.querySelector('.questins-item');
let questinsButton = document.querySelector('.questins-item-button');


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.questins').addEventListener('click', function(event) {
    const button = event.target.closest('.questins-item-button');
    
    if (button) {
      const item = button.closest('.questins-item');
      const willOpen = item.classList.contains('questins-item--closed');
      
      // Синхронное управление классами
      item.classList.toggle('questins-item--closed');
      item.classList.toggle('questins-item--opened');
      
      // Второй класс всегда копирует состояние первого
      if (willOpen) {
        item.classList.add('questins-item--open');
      } else {
        item.classList.remove('questins-item--open');
      }
      
      // Обновляем иконку
      const path = button.querySelector('svg path');
      if (path) {
        path.setAttribute('d', willOpen ? 'M0 9H18' : 'M9 0V9M9 9V18M9 9H0M9 9H18');
      }
    }
  });
});
