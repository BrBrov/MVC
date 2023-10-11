import View from "./view";

/**
 * @class Model
 * @classdesc Processes its state using the update() method and causes changes in the View class
*/
class Model {
  private view: View;

  private state: string = 'light__on';
  manipulates: any;

  constructor(view: View) {
    this.view = view;
  }

  public update(): void {
    this.state = this.state === 'light__on' ? 'light__off' : 'light__on';

    this.view.sees(this.state);
  }
}

export default Model;