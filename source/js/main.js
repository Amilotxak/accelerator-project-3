// https://swiperjs.com/get-started#installation

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';

let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.header-nav__toggle');

let questinsItem = document.querySelector('.questins-item');
let questinsButton = document.querySelector('.questins-item-button');


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

questinsButton.addEventListener('click', function () {
    questinsItem.classList.toggle('questins-item--closed');
    questinsItem.classList.toggle('questins-item--opened');
});