
import { ProductList } from './ProductList.js'
globalThis.DEFAULT_VALUE = 'MAX'

const time = 500
$('nav a').on('click', function (e) {
  e.preventDefault()
  const url = this.href
  $('nav a.active').toggleClass('activel')
  $(this).toggleClass('activel')
  setTimeout(`location.href = '${url}';`, time)
})




const nav = document.querySelector('nav')
const nav_links = document.querySelectorAll('nav a')
const burger = document.querySelector('#burger')
burger.addEventListener('click', () => {
  burger.classList.toggle('toggle')
  nav.classList.toggle('nav_active')
  nav_links.forEach((link, index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`
  })
})

class end {
  render () {
    const renderHook = document.getElementById('app')
    const productList = new ProductList()
    const prodListEl = productList.render()
    renderHook.append(prodListEl)
  }
}

class App {
  static cart
  static init () {
    // eslint-disable-next-line new-cap
    const shop = new end()
    shop.render()
    this.cart = shop.cart
  }
}

App.init()

const text = document.querySelectorAll('#text')
const list = document.querySelector('.product-list');




text.forEach(text => {
  text.addEventListener('mouseover', () => {
    text.classList.add('color_new')
  })
})

text.forEach(text => {
  text.addEventListener('mouseout', () => {
    text.classList.remove('color_new')
  })
})


const items = document.querySelectorAll('.product-item')
for (let i = 0; i <= items.length; i++) {
  items[i].classList.add(`grid${i}`)
  // if (window.screen.width > 930) {
  //   if (i % 2 == 0) {
  //     console.log(i + ' tak')
  //     items[i].style.float = 'left'
  //     items[i].style.marginRight = '15px'
  //   } else {
  //     console.log(i + ' nie')
  //     items[i+2].style.marginTop = '20px'
  //   }
  // } 
  // else {
  //   items[i].style.clear = 'both';
  //   items[i].style.width = '220%';
  //   items[i].classList.add('testa')
  // }
}

