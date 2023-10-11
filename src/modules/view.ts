/**
 * @class View
 * @classdesc Receives state from the Model class and displays it on the page
*/
class View {
  private light: HTMLDivElement;
  private btnText: HTMLSpanElement;

  constructor() {
    this.light = document.querySelector('.light') as HTMLDivElement;
    this.btnText = document.querySelector('.switcher__text') as HTMLSpanElement;
  }

  public sees(state: string): void {
    this.light.className = 'light ' + state;    
    this.btnText.textContent = this.btnText.textContent === 'Turn on' ? 'Turn off' : 'Turn on';
  }
}

export default View;