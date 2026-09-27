'use strict'

export function openBurger(burger, navList){
    burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navList.classList.toggle('nav-list-mobile-active')
    })
}
