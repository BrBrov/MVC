import Controller from './modules/controller';
import Model from './modules/model';
import View from './modules/view';
import './style.scss';

function start(): void {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
  controller.startApp();
}

// window.addEventListener('load', start);
start();
