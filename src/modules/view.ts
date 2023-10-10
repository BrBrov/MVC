class View {
  private light: HTMLDivElement;
  private btnText: HTMLSpanElement;

  constructor() {
    this.light = document.querySelector('.light') as HTMLDivElement;
    this.btnText = document.querySelector('.switcher__text') as HTMLSpanElement;
  }

  public switch(state: string): void {
    this.light.className = 'light ' + state;    
    this.btnText.textContent = this.btnText.textContent === 'Light on' ? 'Light off' : 'Light on';
  }
}

export default View;