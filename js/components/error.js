import { ROOT_ERROR } from "../constants/root.js"

export class Error {
    render(){
        const html = `
        <div class = 'error-container'>
            <div class = "error-message">
                <h3>Нет доступа!</h3>
                <p>попробуйте заййти позже</p>
            </div>
        </div> `

        ROOT_ERROR.innerHTML = html
    }

    
}