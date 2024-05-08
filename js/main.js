import { renderMultipleCards } from './cardRenderer.js';
import { renderLinks } from './linkRenderer.js';
const links = [
    { href: "#", title: "Inicio" },
    { href: "#", title: "Productos" },
    { href: "#", title: "Contacto" },
];

/*Index renders*/
renderMultipleCards(3, 'discount-container', true, null);
renderMultipleCards(3, 'tools-container', null, 'herramientas');
renderMultipleCards(3, 'tecnology-container', null, 'tecnologia');
renderMultipleCards(3, 'electronics-container', null, 'electrodomésticos');

renderLinks({ linksArray: links, containerId: "nav-links" });