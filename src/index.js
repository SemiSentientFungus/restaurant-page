import {makeMain} from './module1';
import {makeMenu} from './module2';
import {makeAbout} from './module3';
import './style.css';


const makeElement = (id, element, content = "") => {
    const generatedElement = document.createElement(element);
    generatedElement.setAttribute('id', id);
    generatedElement.innerHTML = content;

    return generatedElement;
}

const content = document.getElementById('content');

const header = makeElement('header', 'ul');
content.appendChild(header);

const mainPage = makeElement('main page', 'li', 'Main');
header.appendChild(mainPage);


const menu = makeElement('menu page', 'li', 'Menu');
header.appendChild(menu);

const about = makeElement('about page', 'li', "About");
header.appendChild(about);


const body = makeElement('body', 'div');

const footer = makeElement('footer', 'footer');
footer.innerHTML = 'Designed by SemiSentientFungus©'

content.appendChild(body);
content.appendChild(footer);


mainPage.addEventListener('click', () => makeMain(body));
menu.addEventListener('click', () => makeMenu(body));
about.addEventListener('click', () => makeAbout(body));
