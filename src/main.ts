import Controller from './modules/controller';
import Model from './modules/model';
import View from './modules/view';
import './style.scss';

function start(): void {
  const view = new View();
  const model = new Model(view);
  const controller = new Controller(model);
  controller.startApp();
}

start();
