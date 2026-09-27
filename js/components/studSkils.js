import { ROOT_SKILS } from "../constants/root.js"

export class StudSkils{
    render(skils){
        let html = ''
             
        skils.forEach(({id, img}) => {
            html += `
                <div class="skils-icon">
                    <img src = '${img}'>
                    <p>${id}</p>
                </div>`
            });

        ROOT_SKILS.innerHTML = `
            <div class="container">
                <h3 class="skils-title">Некоторые из моих навыков:</h3>
                <div class="skils-wrapper">${html}</div>
            </div>
                `
        }
}