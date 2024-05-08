import { productData, productCategories } from "./data.js";
import { getRandomIndex } from "./utils.js";
import { placeOffers } from './placeOffers.js';

export const renderMultipleCards = (numCards, containerId, offer = null, category = null) => {
    let filteredProducts = productData;
    if (!productCategories.includes(category) && category !== null) {
      console.error("La categoría no existe");
      return;
    }
    console.log(filteredProducts);
    if (offer !== null) {
      filteredProducts = filteredProducts.filter((product) => product.offer === offer);
    }
  
    if (category !== null) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }
  
    const randomIndex = getRandomIndex(numCards, filteredProducts.length);
    const randomProducts = randomIndex.map((index) => filteredProducts[index]);
  
    let offersHTML = "";
  
    randomProducts.forEach((product) => {
      offersHTML += `
        <article class="product-card">
          <figure class="product-image-container">
            <img
              src="${product.image}"
              alt="Imagen del producto"
              loading="lazy"
            />
          </figure>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <p class="product-title">${product.name}</p>
            <p class="product-price">$${product.price}</p>
            <button class="primary-button">Comprar</button>
          </div>
        </article>
      `;
    });
  
    const productContainer = document.querySelector(`#${containerId}`);
    if (productContainer) {
      productContainer.innerHTML = offersHTML;
    } else {
      console.error(`Elemento con ID '${containerId}' no encontrado.`);
    }
  };
  