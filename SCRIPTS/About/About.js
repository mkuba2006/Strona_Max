import { ProductList, ProductList2 } from "./ProductList.js";
globalThis.DEFAULT_VALUE = "MAX";

const time = 500;
$("nav a").on("click", function (e) {
  e.preventDefault();
  const url = this.href;
  $("nav a.active").toggleClass("activel");
  $(this).toggleClass("activel");
  setTimeout(`location.href = '${url}';`, time);
});

const nav = document.querySelector("nav");
const nav_links = document.querySelectorAll("nav a");
const burger = document.querySelector("#burger");
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  nav.classList.toggle("nav_active");
  nav_links.forEach((link, index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
  });
});

class end {
  render() {
    const opis = document.createElement("div");
    const opis_opis = document.createTextNode("My favourite songs");
    opis.setAttribute("id", "opisa");
    opis.append(opis_opis);
    const renderHook = document.getElementById("app");
    const productList = new ProductList();
    const prodListEl = productList.render();
    renderHook.prepend(opis);
    renderHook.append(prodListEl);
    opis.style.marginTop = "10vh";
  }
}

class end2 {
  render2() {
    const opis = document.createElement("div");
    const opis_opis = document.createTextNode("My favourite movies/series");
    opis.setAttribute("id", "opisa");
    opis.append(opis_opis);
    const renderHook2 = document.getElementById("app2");
    const productList2 = new ProductList2();
    const prodListEl2 = productList2.render();
    renderHook2.append(prodListEl2);
    renderHook2.prepend(opis);
    opis.style.marginTop = "10vh";
  }
}

class App {
  static cart;
  static cart2;
  static init() {
    const shop = new end();
    shop.render();
    this.cart = shop.cart;
  }
  static init2() {
    const shop = new end2();
    shop.render2();
    this.cart2 = shop.cart2;
  }
}

App.init();
App.init2();

const text = document.querySelectorAll("#text");

text.forEach((text) => {
  text.addEventListener("mouseover", () => {
    text.classList.add("color_new");
  });
  text.addEventListener("mouseout", () => {
    text.classList.remove("color_new");
  });
});

var nodes = document.getElementById("prod-list").getElementsByTagName("li");
const animProd = document.querySelectorAll(".product-item");

animProd.forEach((prod) => {
  prod.addEventListener("mouseover", () => {
    prod.style.cssText = `
		transition: 0.12s;
    padding: 4% 7% 4% 7%;
		margin: 0px;
		width: 100%;
		height: 100%;
		max-height: 145px;
		box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
		`;
  });
  prod.addEventListener("mouseout", () => {
    prod.style.cssText = `transition: 0.02s;`;
  });
});
const list2 = document.querySelector(".product-list2");
const list2_elements = list2.querySelectorAll(".product-item2");
if (window.innerWidth > 1370)
  list2_elements.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
      ele.style.cssText = `
    transition: 0.12s;
    padding: 4% 7% 4% 7%;
		margin: 0px;
		width: 100%;
		height: 100%;
		max-height: 215px;
		box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
      `;
    });
    ele.addEventListener("mouseout", () => {
      ele.style.cssText = `transition: 0.02s;`;
    });
  });

// const items = document.querySelectorAll(".product-item");
// const np = document.querySelectorAll(".product-item2");

// for (let i = 0; i <= items.length; i++) {
//   items[i].classList.add(`grid${i}`);
//   np[i].classList.add(`grid${i}`);
// }
