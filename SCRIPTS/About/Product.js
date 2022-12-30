export class Product {
  constructor (nazwa, link, obraz, text, opis, cyf) {
    this.nazwa = nazwa
    this.link = link
    this.obraz = obraz
    this.text = text
    this.opis = opis
    this.cyf = cyf
  }
  
}

const header = document.querySelectorAll('header');



header.forEach(text => {
  text.addEventListener('scroll', () => {
    text.style.top= '100vh';
  })
})





// if(window.innerWidth > 700){

//   new fullpage('#fullPage', {
//     autoScrolling: true,
//     navigation: true,
//     navigationTooltips:['Fav songs', 'nothing'],
//     showActiveTooltip: true,
//     scrollingSpeed: 1000,
//   })


// }
