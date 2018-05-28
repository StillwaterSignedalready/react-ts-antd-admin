import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
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
      </div>
    );
  }
}

export default App;
