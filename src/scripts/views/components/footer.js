class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer__container">
      <img src="./images/logo.png" alt="logo" class="footer__logo" />
      <div class="footer__copyright">
        <p>
          <span>copyright &copy; 2022 - Eatery</span>
        </p>
      </div>
    </div>
  `;
  }
}

customElements.define('footer-section', Footer);
