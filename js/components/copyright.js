'use strict'

import { ROOT_COPYRIGHT } from "../constants/root.js";

export class Copyright{
    render(){
        const html = `
          <div class="container">
             <p>@ 2026 | дизайн и код: Мельников Максим</p>
        </div>`;

        ROOT_COPYRIGHT.innerHTML = html
    }
}

