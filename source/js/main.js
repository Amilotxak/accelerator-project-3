// https://swiperjs.com/get-started#installation

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';

let navMain = document.querySelector('.header__nav');
let navToggle = document.querySelector('.header__nav-toggle');

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

navMain.classList.remove('header__nav--nojs');

navToggle.addEventListener('click', function () {
    navMain.classList.toggle('header__nav--closed');
    navMain.classList.toggle('header__nav--opened');
});

// вопросы и ответы 

let questinsItem = document.querySelector('.faq__item');
let questinsButton = document.querySelector('.faq__item-toggle');


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.faq').addEventListener('click', function (event) {
        const button = event.target.closest('.faq__item-toggle');

        if (button) {
            const item = button.closest('.faq__item');
            const willOpen = item.classList.contains('faq__item--closed');

            // управление классами
            item.classList.toggle('faq__item--closed');
            item.classList.toggle('faq__item--opened');

            // второй класс копирует состояние первого
            if (willOpen) {
                item.classList.add('faq__item--open');
            } else {
                item.classList.remove('faq__item--open');
            }

            const path = button.querySelector('svg path');
            if (path) {
                path.setAttribute('d', willOpen ? 'M0 9H18' : 'M9 0V9M9 9V18M9 9H0M9 9H18');
            }
        }
    });
});
