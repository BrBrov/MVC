import Model from "./model";
import View from "./view";

class Controller {
  
  private model: Model;

  private view: View;

  constructor(model: Model, view: View){
    this.model = model;
    this.view = view;
  }

  public startApp(): void {
    const btn = document.querySelector('.switcher') as HTMLButtonElement;
    btn.addEventListener('click', this.listenEvent.bind(this));
  }

  private listenEvent(e: Event): void {
    console.log(e);
    this.setView(this.getState());
  }

  private getState(): string {
    return this.model.switchState();
  }

  private setView(state: string): void {
    this.view.switch(state);
  }

}

export default Controller;