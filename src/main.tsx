import { createRoot } from 'react-dom/client';
import { App } from './app';

import * as monaco from "monaco-editor";
import { loader } from "@monaco-editor/react";



function beforeRender() {
  if(window.testAPI) {
    window.testAPI.sayHello();
  }
}

function afterRender() {
  loader.config({ monaco });
  console.log('after render');
}

export function render() {

  beforeRender();

  const root = createRoot(document.getElementById('root'));
  root.render(<App />);

  afterRender();
}
