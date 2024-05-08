export const renderLinks = ({ linksArray, containerId }) => {
    if (!Array.isArray(linksArray)) {
        console.error("El argumento 'linksArray' no es un array.");
        return;
    }
    if (typeof containerId !== 'string') {
        console.error("El argumento 'containerId' no es un string.");
        return;
    }

    const offersHTML = linksArray.map(link => {
        const href = encodeURIComponent(link.href);
        const title = encodeURIComponent(link.title);
        return `<li><a href="${href}">${title}</a></li>`;
    }).join('');

    const container = document.querySelector(`#${containerId}`);
    if (container) {
        container.innerHTML = offersHTML;
    } else {
        console.error(`Elemento con ID '${containerId}' no encontrado.`);
    }
};