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
                }
                #jed {
                    width:200px;
                    margin-right: 20px;
                }
                #jed img{
                    background-repeat: no-repeat;
                    border-radius: 150%;
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
                </div>
                <div id="dwa">
                    <h2 id="title">About Me</h2>
                </div>
            </div>
        `;
  }
}
customElements.define("wb-comp", component);
