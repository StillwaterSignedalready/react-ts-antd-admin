import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import Toggleable from './components/toggleable';
import logo from './logo.svg';

export interface Istate {
  enthusiasmLevel: number
}

class App extends React.Component <{}, Istate>{
  private constructor(props: {}){
    super(props);
    this.state = {
      enthusiasmLevel: 10
    }
  }

  public activate = () => {
    // 如果在shouldComponentUpdate或者componentWillUpdate方法中调用setState，此时this._pending-StateQueue != null，就会造成循环调用
    console.log('!');
    this.setState((prevState, props) => {
      return {enthusiasmLevel: prevState.enthusiasmLevel + 1};
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Hello name="TypeScript" enthusiasmLevel={this.state.enthusiasmLevel} method={this.activate} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Toggleable>
          {
            /* 这样调用这个函数：render(props), show和toggleable由Toggleable组件提供，是它的内部状态 */
            ({ show, toggle}) => (
              <>
                <div onClick={(toggle)}>
                  <h1>some title</h1>
                </div>
                {show? <p>some content</p>: null}
              </>
            )
          }
        </Toggleable>
      </div>
    );
  }
}

export default App;
