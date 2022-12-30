/* eslint-disable camelcase */
/* eslint-disable no-useless-constructor */
import { ProductItem, ProductItem2 } from "./ProductItem.js";
import { Product, Product_fantasy } from "./Product.js";

export class ProductList {
  products = [
    new Product(
      "Light my fire",
      "https://www.youtube.com/watch?v=cq8k-ZbsXDI",
      "https://images.squarespace-cdn.com/content/v1/583863c1e6f2e1216884123c/1494090226795-ULW11342F9EEBL5GVWYD/image-asset.jpeg",
      "by The Doors",
      "https://pl.wikipedia.org/wiki/The_Doors",
      "1"
    ),
    new Product(
      "Karma Police",
      "https://www.youtube.com/watch?v=1uYWYWPc9HU",
      "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
      "by Radiohead",
      "https://pl.wikipedia.org/wiki/Radiohead",
      "2"
    ),
    new Product(
      "Wet hands",
      "https://www.youtube.com/watch?v=MSepOYJxB64",
      "https://f4.bcbits.com/img/a3390257927_10.jpg",
      "by C418",
      "https://www.wikidata.org/wiki/Q1847436",
      "3"
    ),
    new Product(
      "Jailbreak",
      "https://www.google.com/search?q=yt+jailbreak+lizzy&oq=yt+jailbreak+lizzy&aqs=chrome..69i57j0i22i30.3538j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:9320bd58,vid:zAvhmmpwLbg",
      "https://i.scdn.co/image/ab67616d0000b273e8f69ab903901064b1f19249",
      "by Thin Lizzy",
      "https://pl.wikipedia.org/wiki/Thin_Lizzy",
      "4"
    ),
    new Product(
      "When I come around",
      "https://www.youtube.com/watch?v=i8dh9gDzmz8",
      "https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d",
      "by Green Day",
      "https://pl.wikipedia.org/wiki/Green_Day",
      5
    ),
    new Product(
      "Killing in the name",
      "https://www.youtube.com/watch?v=bWXazVhlyxQ",
      "https://www.musicroom.com/product/image/medium/dam440416_0.jpg",
      "by Rage Against The Machine",
      "https://en.wikipedia.org/wiki/Rage_Against_the_Machine",
      "6"
    ),
  ];

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    const opis = document.createElement("div");
    const opis_opis = document.createTextNode("My favourite songs");
    opis.setAttribute("id", "opisa");
    opis.append(opis_opis);
    prodList.prepend(opis);

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }

    const childrens = prodList.children;

    if (window.innerWidth < 500) {
      childrens[1].style.marginLeft = "7%";
      for (const e of childrens) {
        e.style.width = "80vw";
        e.style.display = "block";
        e.style.minHeight = "20vh";
        e.style.maxHeight = "40vh";
        e.style.height = "auto";
      }
      opis.style.minHeight = "auto";
    }

    return prodList;
  }
}

export class ProductList2 {
  product = [
    new Product_fantasy(
      "Adventure Time",
      "https://www.filmweb.pl/serial/Pora+na+przygod%C4%99-2010-565378",
      "https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80",
      "Cartoon",
      "Adventure",
      "Animation",
      "6"
    ),
    new Product_fantasy(
      "Game Of Thrones",
      "https://www.filmweb.pl/serial/Pora+na+przygod%C4%99-2010-565378",
      "https://downloadwap.com/thumbs4/ringtones/covers/s/got.jpg",
      "opis",
      "opis",
      "opis",
      "6"
    ),
    new Product_fantasy(
      "Regular Show",
      "https://www.filmweb.pl/serial/Pora+na+przygod%C4%99-2010-565378",
      "https://64.media.tumblr.com/avatar_09763c196180_128.pnj",
      "opis",
      "opis",
      "opis",
      "6"
    ),
    new Product_fantasy(
      "Adventure Time",
      "https://www.filmweb.pl/serial/Pora+na+przygod%C4%99-2010-565378",
      "https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80",
      "opis",
      "opis",
      "opis",
      "6"
    ),
  ];

  render() {
    const prodList2 = document.createElement("ul");
    prodList2.className = "product-list2";

    const opis = document.createElement("div");
    const opis_opis = document.createTextNode("My favourite movies/series");
    opis.setAttribute("id", "opisa2");
    opis.append(opis_opis);
    prodList2.prepend(opis);

    for (const prod of this.product) {
      const productItem = new ProductItem2(prod);
      const prodEl = productItem.render();
      prodList2.append(prodEl);
    }

    const childrens = prodList2.children;

    if (window.innerWidth < 500) {
      childrens[1].style.marginLeft = "7%";
      for (const e of childrens) {
        e.style.width = "80vw";
        e.style.display = "block";
        e.style.minHeight = "20vh";
        e.style.maxHeight = "40vh";
        e.style.height = "auto";
      }
      opis.style.minHeight = "auto";
    }

    return prodList2;
  }
}
