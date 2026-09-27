import { ROOT_SPINNER } from "../constants/root.js";

export class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = ""
    }


    render() {
        const html = `
        <div class = "spinner-container">
            <img class="spinner__img" src="../imgs/spinner/spinner.svg" />
        </div>
        `;
        ROOT_SPINNER.innerHTML = html;
    }
}
