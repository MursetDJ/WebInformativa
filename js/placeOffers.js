// placeOffers.js
import { productData, productOffers } from "./data.js";

export const placeOffers = () => {
    const offersById = productOffers.reduce((acc, offer) => {
      acc[offer.id] = offer.newPrice;
      return acc;
    }, {});
  
    productData.forEach((product) => {
      if (offersById[product.id] !== undefined) {
        product.price = offersById[product.id];
        product.offer = true;
      } else {
        product.offer = false;
      }
    });
  
    console.log("Updated product data with offers:", productData);
  };
  placeOffers();