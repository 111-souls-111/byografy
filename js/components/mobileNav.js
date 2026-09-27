'use strict'

import { ROOT_MOBILE_NAV } from "../constants/root.js";

export class MobileNav{
    render(){
        const html = `
          <ul class="nav-list-mobile">

                <li class="nav-list-item-mobile">
                    <a class="nav-link-mobile" href="./index.html">Главная</a>
                </li>
                <li class="nav-list-item-mobile">
                    <a class="nav-link-mobile" href="./stud.html">Учеба</a>
                </li>
                <li class="nav-list-item-mobile">
                    <a class="nav-link-mobile" href="./hobby.html">Хобби</a>
                </li>
        </ul> `;

    ROOT_MOBILE_NAV.innerHTML = html

    }
}



