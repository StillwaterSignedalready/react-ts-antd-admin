import * as React from 'react';
import MenuItem from './MenuItem';

const isFunction = (f: any) => (typeof f === 'function')

const initialState  = {
  show: false
}

type State = Readonly<typeof initialState>;

// Partial: 把接口所有类型化为可选
type Props = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

type RenderCallback = (args: ToggleableComponentProps) => JSX.Element;

type ToggleableComponentProps = {
  show: State['show'];
  toggle: Toggleable['toggle']
}

export default class Toggleable extends React.Component<Props, State>{
  public readonly state: State = initialState;

  public render(){
    const { render, children} = this.props;
    const renderProps = {
      show: this.state.show,
      toggle: this.toggle
    }

    if(render){
      return render(renderProps)
    }

    return isFunction(children) ? children!(renderProps) : null
  }

  private toggle = (event: MouseEvent) => this.setState(updateShowState)
}

const updateShowState = (prevState: State) => ({show: !prevState.show})