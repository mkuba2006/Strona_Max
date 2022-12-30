
import {ProductList, ProductList2 } from './ProductList.js'
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

class end2 {
	render2 () {
		const renderHook2 = document.getElementById('app2')
		const productList2 = new ProductList2()
		const prodListEl2 = productList2.render()
		renderHook2.append(prodListEl2)

	}
}


class App {
	static cart
	static cart2
	static init () {
		const shop = new end()
		shop.render()
		this.cart = shop.cart
	}
	static init2 () {
		const shop = new end2()
		shop.render2()
		this.cart2 = shop.cart2
	}
}

App.init()
App.init2()


const text = document.querySelectorAll('#text')




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
const np = document.querySelectorAll('.product-item2')
console.log(np)
for (let i = 0; i <= items.length; i++) {
	items[i].classList.add(`grid${i}`)
	np[i].classList.add(`grid${i}`)
}