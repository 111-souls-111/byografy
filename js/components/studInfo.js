import { ROOT_STUD } from "../constants/root.js"

export class StudInfo{
    render({title,text,img}){
        const html = `
        <div class="container">
                <div class="stud-card">
                    <div class="stud-photo-section">
                        <img class='stud-photo' src="${img}" alt="">
                    </div>
                <div class="stud-bio">
                    <h1 class="stud-title">${title}</h1>
                    <p class="stud-desc" data-text='${text}'></p>         
                </div>
            </div>
        `

        ROOT_STUD.innerHTML = html
    }
}