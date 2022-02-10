let more = document.getElementById("more");
let moreMenu = document.getElementById("moreMenu");
let product = document.getElementById("product");
let productMenu = document.getElementById("productMenu");
let smallMenu = document.getElementById("smallMenu");
let openMenu = document.getElementById("openMenu");
let closeMenu = document.getElementById("closeMenu");

const moreMenuShow = () => {
  moreMenu.style.display = "block";
}
const moreMenuHide = () => {
  moreMenu.style.display = "none";
}
const moreProductShow = () => {
  productMenu.style.display = "flex";
}
const moreProductHide = () => {
  productMenu.style.display = "none";
}
const openMenuHandler = () => {
  smallMenu.style.top = "0";
};
const closeMenuHandler = () => {
  smallMenu.style.top = "-22rem";
};

more.addEventListener("mouseover", moreMenuShow);
more.addEventListener("mouseout", moreMenuHide);
product.addEventListener("mouseover", moreProductShow);
product.addEventListener("mouseout", moreProductHide);
openMenu.addEventListener("click", openMenuHandler)
closeMenu.addEventListener("click", closeMenuHandler)