class Model {
  private state: boolean = false;

  private on: string = 'light__on';

  private off: string = 'light__off';

  public switchState(): string {
    this.state = !this.state;
    if (this.state) return this.on;

    return this.off;
  }
}

export default Model;