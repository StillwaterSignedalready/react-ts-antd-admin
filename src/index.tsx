import 'antd/dist/antd.css'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

let enthusiasmLevel: number = 10;

const activate = function(): void{
  enthusiasmLevel++
}

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={enthusiasmLevel} method={activate} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
