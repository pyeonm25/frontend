class App {
  constructor() {
    this.listDom = document.querySelector('#list');
  }

  init() {
    this.listDom.innerHTML = '';
  }
}

window.addEventListener("load", () => {
  const app = new App();
})
