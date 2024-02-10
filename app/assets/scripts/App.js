import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import Loader from './modules/Loader';
import AOS from 'aos';

new MobileMenu();
new Loader();

// init AOS animation
window.addEventListener("load", () => {
    AOS.init({
        duration: 1000,
        offset: 100,
    });
});

if(module.hot) {
    module.hot.accept()
}