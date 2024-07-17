//toggle  class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika ham menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik diluar sidebar untuk remove nav

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
// Pilih semua tombol detail item
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

// Tambahkan event listener ke setiap tombol
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    // Ambil ID modal dari atribut data-modal
    const modalId = btn.getAttribute("data-modal");
    const modal = document.querySelector(`#${modalId}`);

    // Tampilkan modal yang sesuai
    modal.style.display = "flex";
    e.preventDefault();

    // Tambahkan event listener ke tombol close modal
    modal.querySelector(".close-icon").onclick = (e) => {
      modal.style.display = "none";
      e.preventDefault();
    };

    // Tambahkan event listener untuk menutup modal jika klik di luar modal
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  };
});
