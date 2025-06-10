const mainCTA = document.getElementById("main-checkout-btn");
const stickyCTA = document.getElementById("sticky-checkout-btn");
const image =
  "https://media.i.allsaints.com/image/list/fn_select:jq:first%28.%5B%5D%7Cif%20has%28%22metadata%22%29%20then%20select%28any%28.metadata%5B%5D%3B%20.external_id%20%3D%3D%20%22sfcc-gallery-position%22%20and%20.value%20%3D%3D%201%29%29%20else%20empty%20end%29/f_auto,q_auto,dpr_auto,w_837,h_1046,c_fit/W146JC-5.json?_i=AGf";

const productImage = document.querySelector('.sticky-product-image'); 
productImage.src = image;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        stickyCTA.classList.remove("hidden");
        stickyCTA.classList.add("visible");
      } else {
        stickyCTA.classList.remove("visible");
        stickyCTA.classList.add("hidden");
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(mainCTA);
