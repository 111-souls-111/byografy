import { Nav } from './components/nav.js';
import { MobileNav } from './components/mobileNav.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Copyright } from './components/copyright.js';
import { openBurger } from './utils/openBurger.js';
import { Hobby } from './components/hobby.js';
import { Spinner } from './components/spinner.js';
import { Error as ErrorPage} from './components/error.js';




const navPage = new Nav();
const mobileNavPage = new MobileNav();
const headerPage = new Header();
const footerPage = new Footer();
const copyright = new Copyright();
const hobbyPage = new Hobby();
const spinner = new Spinner();
const errorPage = new ErrorPage();

function render(headerInf, hobby, footerInf) {
    headerPage.render(headerInf);
    navPage.render();
    mobileNavPage.render();
    footerPage.render(footerInf);
    copyright.render();
    hobbyPage.render(hobby);
   
    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list-mobile');
    openBurger(burger, navList);
}


async function loadAndRender() {
    try{
        const headerRes = await fetch("../js/server/header-stud.json");
        const hobbyRes = await fetch("../js/server/hobby-card.json");
        const footerRes = await fetch('../js/server/footer.json')

        if (!headerRes.ok) throw new Error(`HTTP ${headerRes.status} - ../js/server/header-index.json`)
        if (!footerRes.ok) throw new Error(`HTTP ${footerRes.status} - ../js/server/header-index.json`)

        const headerInf = await headerRes.json();
        const hobby = await hobbyRes.json();
        const footerInf = await footerRes.json();

        setTimeout(() => {
            spinner.handleClear()
            render(headerInf, hobby, footerInf)
        },1000)
    }
    catch (err){
        console.error('Ошибка загрузки:', err);
        spinner.handleClear();
        errorPage.render();
    }
}

spinner.render()
loadAndRender();