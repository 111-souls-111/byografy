'use strict'

import { ROOT_NAV } from "../constants/root.js";

export class Nav{
    render(){
        const html = `
         <div class="container">
        <div class="nav-wrapper">
            <h2 class="logo">Melnikov</h2>

            <div class="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul class="nav-list">
                <li class="nav-list-item">
                    <a class="nav-link" href="./index.html">Главная</a>
                </li>
                <li class="nav-list-item">
                    <a class="nav-link" href="./stud.html">Учеба</a>
                </li>
                <li class="nav-list-item">
                    <a class="nav-link" href="./hobby.html">Хобби</a>
                </li>
            </ul>
        </div>
    </div> `;

    ROOT_NAV.innerHTML = html
    }
}
