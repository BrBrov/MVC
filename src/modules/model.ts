import View from "./view";

/**
 * @class Model
 * @classdesc Processes its state using the switchState() method and causes changes in the View class
*/
class Model {
  private view: View;

  private state: string = 'light__on';

  constructor(view: View) {
    this.view = view;
  }

  public switchState(): void {
    this.state = this.state === 'light__on' ? 'light__off' : 'light__on';

    this.view.switch(this.state);
  }
}

export default Model;