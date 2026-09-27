import { Nav } from './components/nav.js';
import { MobileNav } from './components/mobileNav.js';
import { Header } from './components/header.js';
import { Footer } from './components/footer.js';
import { Copyright } from './components/copyright.js';
import { Spinner } from './components/spinner.js';
import { openBurger } from './utils/openBurger.js';
import { write } from './utils/write.js';
import { Error as ErrorPage} from './components/error.js';

const navPage = new Nav();
const mobileNavPage = new MobileNav();
const headerPage = new Header();
const footerPage = new Footer();
const copyright = new Copyright();
const spinner = new Spinner();
const errorPage = new ErrorPage();

function render(headerInf, footerInf) {
    headerPage.render(headerInf);
    navPage.render();
    mobileNavPage.render();
    footerPage.render(footerInf);
    copyright.render();

    const headerDesc = document.querySelector('.header-desc');
    if (headerDesc) write(headerDesc);

    const burger = document.querySelector('.burger');
    const navList = document.querySelector('.nav-list-mobile');
    openBurger(burger, navList);
}

async function loadAndRender() {
    const minDelay = new Promise(resolve => setTimeout(resolve, 1000));

    try {
        const [headerRes, footerRes] = await Promise.all([
            fetch('../js/server/header-index.json'),
            fetch('../js/server/footer.json'),
        ]);

        if (!headerRes.ok) throw new Error(`HTTP ${headerRes.status} — header-index.json`);
        if (!footerRes.ok)  throw new Error(`HTTP ${footerRes.status} — footer.json`);

        const [headerInf, footerInf] = await Promise.all([
            headerRes.json(),
            footerRes.json(),
        ]);

        await minDelay;
        spinner.handleClear();
        render(headerInf, footerInf);
    } catch (err) {
        console.error('Ошибка загрузки:', err);
        spinner.handleClear();
        errorPage.render();
    }
}

spinner.render();
loadAndRender();