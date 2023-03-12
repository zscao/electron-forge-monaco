import { createRoot } from 'react-dom/client';
import { App } from './app';

function beforeRender() {
  if(window.testAPI) {
    window.testAPI.sayHello();
  }
}

function afterRender() {
  console.log('after render');
}

export function render() {

  beforeRender();

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);

  afterRender();
}
