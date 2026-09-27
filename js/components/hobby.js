import { ROOT_HOBBY, ROOT_SKILS } from "../constants/root.js"

export class Hobby{
    render(hobby){
        let html = ''
             
        hobby.forEach(({id, text, img}) => {
            html += `
                  <div class="hobby-card">
                        <div class="img-wrapper">
                            <img class= 'hobby-photo' src="${img}" alt="">
                        </div>
                        <div class="hobby-desc">
                            <h1 class="hobby-card-title">${id}</h1>
                            <p class="hobby-card-descriptin">
                                ${text}
                            </p>
                        </div>
                    </div>`
            });

        ROOT_HOBBY.innerHTML = `
            <div class="container">
                <h2 class="hobby-title">Некоторые мои Хобби:</h2>
                <div class="hobby-wrapper">
                  ${html}
                </div>
            </div>
                `
        }
}