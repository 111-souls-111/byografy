import { Nav } from './components/nav.js';
import { MobileNav } from './components/mobileNav.js';
import { Header } from './components/header.js';
import { StudInfo } from './components/studInfo.js';
import { Footer } from './components/footer.js';
import { Copyright } from './components/copyright.js';
import { openBurger } from './utils/openBurger.js';
import { write } from './utils/write.js';
import { StudSkils } from './components/studSkils.js';
import { Spinner } from './components/spinner.js';
import { Error as ErrorPage} from './components/error.js';


const navPage = new Nav();
const mobileNavPage = new MobileNav();
const headerPage = new Header();
const footerPage = new Footer();
const copyright = new Copyright();
const studInfo = new StudInfo();
const studSkils = new StudSkils();
const spinner = new Spinner();
const errorPage = new ErrorPage();


function render(headerInf, stud, skils, footerInf) {
    headerPage.render(headerInf);
    studInfo.render(stud);
    studSkils.render(skils)
    navPage.render();
    mobileNavPage.render();
    footerPage.render(footerInf);
    copyright.render();
   

    const studDesc = document.querySelector('.stud-desc')

    write(studDesc)

    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list-mobile');
    openBurger(burger, navList);
}


async function loadAndRender() {
    try{
        const headerRes = await fetch("../js/server/header-stud.json");
        const studRes = await fetch("../js/server/stud-inf.json");
        const skilsRes = await fetch("../js/server/stud-skils.json")
        const footerRes = await fetch('../js/server/footer.json')
        


        const headerInf = await headerRes.json();
        const stud = await studRes.json();
        const skils = await skilsRes.json();
        const footerInf = await footerRes.json();

        setTimeout(() => {
            spinner.handleClear()
            render(headerInf, stud, skils, footerInf)
        },1000)
    }
    catch (err){
        console.error('Ошибка загрузки:', err);
        spinner.handleClear();
        errorPage.render();
    }
}

spinner.render();
loadAndRender();