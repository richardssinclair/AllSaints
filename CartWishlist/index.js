const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const title = document.querySelector(".page-title");
const bagCount = document.querySelector("#bag").children.length;
const bagTab = document.querySelector(".bag-tab");
const wishlistCount = document.querySelector("#wishlist").children.length;
const wishlistTab = document.querySelector(".wishlist-tab");
bagTab.innerHTML = `(${bagCount})`;
wishlistTab.innerHTML = `(${wishlistCount})`;

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // Update active tab button
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Show the correct panel
    tabPanels.forEach((panel) => {
      panel.classList.remove("active");
      if (panel.id === target) {
        panel.classList.add("active");
      }
    });

    // Update title based on tab
    title.textContent = target === "bag" ? "Shopping Bag" : "Wishlist";

    // Toggle heart icon in Wishlist tab
    tabButtons.forEach((btn) => {
      const wishlistIcon = document.querySelector(
        '[data-tab="wishlist"] .fa-heart'
      );
      if (btn.getAttribute("data-tab") === "wishlist") {
        if (btn.classList.contains("active")) {
          wishlistIcon.classList.remove("fa-regular");
          wishlistIcon.classList.add("fa-solid");
        } else {
          wishlistIcon.classList.remove("fa-solid");
          wishlistIcon.classList.add("fa-regular");
        }
      }
    });
  });
});
