class component extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
            <style>
                #component-back{
                    padding: 10px;
                    width: 800px;
                    height: 200px;
                    background-color: #022c43;
                    margin-top: 15vh;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    border-radius: 20px;
                    justify-content: flex-start;
                    overflow: hidden;
                }
                #jed {
                    width:200px;
                    margin-right: 20px;
                    position: relative;
                    overflow: hidden;
                }
                #jed img{
                    background-repeat: no-repeat;
                    border-radius: 150%;
                    opacity: 1;
                    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
                    overflow: hidden;
                }
                #dwa{
                    width:500px;
                    padding-top:0;
                }
                #title{
                    border-bottom:1px solid #deb992;
                    margin: 0;
                    color: #deb992;
                }

            </style>
            <div id="component-back">
                <div id="jed">
                    <img src="\SCRIPTS/About/linkin.jpg">
                    <span id="sp"></span>
                </div>
                <div id="dwa">
                    <h2 id="title">About Me</h2>
                    <h3> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
                </div>
            </div>
        `;
    const jed = this.shadowRoot.querySelector("#jed");
    const image = this.shadowRoot.querySelector("#jed img");
    // const x = jed.getBoundingClientRect();
    // console.log(x);
    const Mname = this.shadowRoot.getElementById("sp");
    console.log(Mname);
    Mname.textContent = "It's me";
    Mname.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0%;
        transform: translate(0, 0);
        justify-content: center;
        transition: 0.5s;
        opacity: 0;
        font-size: 25px;
        color: #deb992;
        background-color: #022c43;
        width:100%;
  `;
    image.addEventListener("mouseover", () => {
      Mname.style.opacity = "0.8";
      Mname.style.transform = "translate(0, -200%)";
    });
    image.addEventListener("mouseleave", () => {
      Mname.style.opacity = "0";
      Mname.style.transform = "translate(0, 0)";
    });
  }
}
customElements.define("wb-comp", component);
////
