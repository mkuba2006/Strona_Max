export class ProdLook {
  constructor(prod) {
    this.prod = prod;
  }

  render() {
    const Ram = document.createElement("tr");
    Ram.className = "Ram-li";
    const button = document.createElement("div");
    button.className = "Ram-button";
    button.innerHTML = `
        <a href="${this.prod.link}">
          <i class="${this.prod.img}"></i>
            ${this.prod.text}
        </a>
    `;

    button.style.cssText = `
      border-radius: 5px;
      color: white;
      height: 35px;
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top: 1vh;
      padding: 5px;
    `;

    Ram.append(button);
    return Ram;
  }
}
