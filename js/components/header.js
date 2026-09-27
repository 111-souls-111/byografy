'use strict'

import { ROOT_HEADER } from "../constants/root.js";

export class Header {
    
    render({title, text, img, location}) {
        const html = ` <div class="container">
            <div class="header-card">
                <div class="header-bio">
                    <h1 class="header-title">${title}</h1>
                    ${text !== undefined ? `<p class="header-desc" data-text = '${text}'>`:''}
                    </p>         
                    ${location !== undefined ? `<div class="location">
                        <svg class="location-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>${location}</span>
                    </div>
                </div>`: ''}

                ${img !== undefined ? `<div class="header-photo-section">
                    <img class= 'header-photo' src="${img}" alt="">
                </div>
            </div>`:''}

        </div>`;

        ROOT_HEADER.innerHTML = html;
    }

}

