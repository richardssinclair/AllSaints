class ProductCard extends HTMLElement {
  connectedCallback() {
    const image = this.getAttribute("image");
    const title = this.getAttribute("title");
    const colour = this.getAttribute("colour");
    const size = this.getAttribute("size");
    const quantity = this.getAttribute("quantity");
    const price = this.getAttribute("price");
    const button = this.getAttribute("button");
    const wishlist = this.getAttribute("wishlist");
    const imageUrl =
      "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/W146JC-5.json?_i=AGf";
    this.innerHTML = `
      <div class="item-card">
        <div class="col-left">
          <img src="${imageUrl}" alt="${title}" class="product-image" />
        </div>
        <div class="col-right">
          <h2 class="prod-title">${title}</h2>
          ${colour ? `<p class="colour-text">${colour}</p>` : ""}
          ${size ? `<p class="size-text">${size}</p>` : ""}
          ${wishlist ? `<p class="price">${price}</p>` : ""}
          <div class="bottom-row">
          ${
            !wishlist
              ? `<div class="quantity-container">
              <button class="button">-</button>
              <p>${quantity}</p>
              <button class="button">+</button>
            </div>`
              : ""
          }
            ${!wishlist ? `<p class="price">${price}</p>` : ""}
            ${
              wishlist
                ? `<button class="add-to-bag-btn">${button}</button>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("product-card", ProductCard);
