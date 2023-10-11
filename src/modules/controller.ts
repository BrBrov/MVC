import Model from "./model";

class Controller {
  
  private model: Model;

  constructor(model: Model){
    this.model = model;
  }

  public startApp(): void {
    const btn = document.querySelector('.switcher') as HTMLButtonElement;
    
    this.model.switchState(); // init start view 

    btn.addEventListener('click', this.listenEvent.bind(this));
  }

  private listenEvent(): void {
    this.model.switchState();
  }

}

export default Controller;