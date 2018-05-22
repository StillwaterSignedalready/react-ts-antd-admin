import * as React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

class Hello extends React.Component<IProps, object>{
  public render(){
    const { name, enthusiasmLevel} = this.props;

    if (enthusiasmLevel && enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel || 0)}</div>
      </div>
    )
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}