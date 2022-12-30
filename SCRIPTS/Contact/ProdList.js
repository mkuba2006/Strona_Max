import { Prod } from "./Prod.js";
import { ProdLook } from "./ProdLook.js";

export class ProdList{
    products =[
      new Prod(
      'https://discord.com/channels/@me',
      'fa-brands fa-discord',
      'Discord',
      ),
      new Prod(
      'https://www.instagram.com/jakub_myrta/',
      'fa-brands fa-instagram',
      'instagram',
      ),
      new Prod(
      'https://www.facebook.com/profile.php?id=100042699441638',
      'fa-brands fa-facebook',
      'Facebook',
      ),
      new Prod(
      'https://twitter.com/JamesM60086044',
      'fa-brands fa-twitter',
      'twitter',
      ),  
      new Prod(
      'https://github.com/mkuba2006',
      'fa-brands fa-github',
      'GitHub',
      ),
      new Prod(
      'https://www.youtube.com/channel/UCyOQ92MN93d2f4ubJy9SMug',
      'fa-brands fa-youtube',
      'YouTube',
      ),
    
      new Prod(
      'https://open.spotify.com/user/dkjcdvsyjz6ciuzj2xfl5tp6c',
      'fa-brands fa-spotify',
      'Spotify',
      ),
      new Prod(
        'https://steamcommunity.com/profiles/76561198866310633/',
        'fa-brands fa-steam',
        'Steam',
        ),
    ];
    
    
    render(){
        const List_prod = document.createElement('div');
        List_prod.className = 'List_prod_table';
        const opis = document.createElement('h1');
        opis.setAttribute('id', 'opis');
        const opis_opis = document.createTextNode("Contact me");
        opis.setAttribute('id', 'opisa');
        opis.append(opis_opis);
        List_prod.prepend(opis);
    
        opis.style.cssText =`
          margin-top: 2vh;
          font-size: 30px ;
        `

        for(const prod of this.products){
          const productItem = new ProdLook(prod);
          const prodEl = productItem.render();
          List_prod.append(prodEl);
        }



        console.log(`${window.screen.width} x ${window.screen.height}`);
        return List_prod;
        
      }
    }